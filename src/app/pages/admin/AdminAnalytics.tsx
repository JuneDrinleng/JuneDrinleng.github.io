import { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { Loader2, Users, Globe, MousePointerClick, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/app/components/ui/tooltip';
import { fetchAnalytics, isCfConfigured, type AnalyticsSummary } from './lib/cloudflare';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Map ISO numeric country codes from topojson to 2-letter codes used by Cloudflare
// Cloudflare actually returns full country names, so we match by name
function countryColor(requests: number, max: number): string {
  if (requests === 0) return '#e5e7eb';
  const ratio = Math.pow(requests / max, 0.4); // power scale so small values still show
  const r = Math.round(219 - ratio * 170);
  const g = Math.round(234 - ratio * 160);
  const b = Math.round(254 - ratio * 120);
  return `rgb(${r},${g},${b})`;
}

// Cloudflare returns full country names; build a lookup by name
function buildCountryLookup(countries: { country: string; requests: number }[]) {
  const map: Record<string, number> = {};
  for (const c of countries) map[c.country.toLowerCase()] = c.requests;
  return map;
}

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

export default function AdminAnalytics() {
  const [data, setData] = useState<AnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [hovered, setHovered] = useState<{ name: string; requests: number } | null>(null);

  useEffect(() => {
    if (!isCfConfigured()) {
      setError('Cloudflare 环境变量未配置（VITE_CF_ZONE_ID / VITE_CF_TOKEN）');
      setLoading(false);
      return;
    }
    fetchAnalytics(30)
      .then(setData)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground py-8 justify-center">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="text-sm">加载访问数据…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 text-destructive py-4 text-sm">
        <AlertCircle className="h-4 w-4 shrink-0" />
        {error}
      </div>
    );
  }

  if (!data) return null;

  const maxRequests = Math.max(1, ...data.countries.map(c => c.requests));
  const countryLookup = buildCountryLookup(data.countries);

  const stats = [
    { label: '总请求数', value: fmt(data.totalRequests), icon: MousePointerClick },
    { label: '独立访客', value: fmt(data.totalUniques), icon: Users },
    { label: '页面浏览', value: fmt(data.totalPageViews), icon: Globe },
  ];

  return (
    <div className="space-y-4">
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map(s => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-1 space-y-0">
              <CardTitle className="text-xs font-medium text-muted-foreground">{s.label}</CardTitle>
              <s.icon className="h-3.5 w-3.5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">近 30 天</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* World map */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">访客地理分布</CardTitle>
          <CardDescription className="text-xs">近 30 天，按国家/地区统计请求量</CardDescription>
        </CardHeader>
        <CardContent className="p-0 pb-2">
          <div className="relative">
            {hovered && (
              <div className="absolute top-2 right-4 z-10 bg-popover border rounded-md px-3 py-1.5 text-xs shadow-sm pointer-events-none">
                <span className="font-medium">{hovered.name}</span>
                <span className="text-muted-foreground ml-2">{fmt(hovered.requests)} 次请求</span>
              </div>
            )}
            <ComposableMap
              projectionConfig={{ rotate: [-10, 0, 0], scale: 140 }}
              style={{ width: '100%', height: 'auto' }}
            >
              <ZoomableGroup>
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map(geo => {
                      const name = geo.properties.name?.toLowerCase() ?? '';
                      const requests = countryLookup[name] ?? 0;
                      const fill = countryColor(requests, maxRequests);
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={fill}
                          stroke="#fff"
                          strokeWidth={0.4}
                          style={{
                            default: { outline: 'none' },
                            hover: { outline: 'none', fill: '#6366f1', cursor: 'pointer' },
                            pressed: { outline: 'none' },
                          }}
                          onMouseEnter={() =>
                            setHovered({ name: geo.properties.name, requests })
                          }
                          onMouseLeave={() => setHovered(null)}
                        />
                      );
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          </div>

          {/* Color legend */}
          <div className="flex items-center gap-2 px-4 pb-2 text-xs text-muted-foreground">
            <span>少</span>
            <div className="flex h-2 flex-1 rounded overflow-hidden max-w-[120px]">
              {[0.05, 0.2, 0.4, 0.6, 0.8, 1].map(r => (
                <div key={r} style={{ flex: 1, background: countryColor(r * maxRequests, maxRequests) }} />
              ))}
            </div>
            <span>多</span>
          </div>
        </CardContent>
      </Card>

      {/* Top countries table */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">访客来源 Top 10</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {data.countries.slice(0, 10).map((c, i) => (
              <div key={c.country} className="flex items-center px-4 py-2 gap-3">
                <span className="text-xs text-muted-foreground w-4 tabular-nums">{i + 1}</span>
                <span className="text-sm flex-1">{c.country}</span>
                <div className="flex items-center gap-2">
                  <div
                    className="h-1.5 rounded-full bg-primary/60"
                    style={{ width: `${Math.max(4, (c.requests / maxRequests) * 80)}px` }}
                  />
                  <span className="text-xs tabular-nums text-muted-foreground w-12 text-right">
                    {fmt(c.requests)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
