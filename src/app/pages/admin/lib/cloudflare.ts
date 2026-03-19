const ZONE_ID = import.meta.env.VITE_CF_ZONE_ID as string | undefined;
const CF_TOKEN = import.meta.env.VITE_CF_TOKEN as string | undefined;
const GQL = 'https://api.cloudflare.com/client/v4/graphql';

export function isCfConfigured(): boolean {
  return !!(ZONE_ID && CF_TOKEN);
}

export interface DailyStat {
  date: string;
  requests: number;
  uniques: number;
  pageViews: number;
}

export interface CountryStat {
  country: string;   // ISO alpha-2
  requests: number;
}

export interface AnalyticsSummary {
  totalRequests: number;
  totalUniques: number;
  totalPageViews: number;
  daily: DailyStat[];
  countries: CountryStat[];
}

function dateStr(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export async function fetchAnalytics(days = 30): Promise<AnalyticsSummary> {
  if (!ZONE_ID || !CF_TOKEN) throw new Error('Cloudflare 未配置');

  const end = new Date();
  const start = new Date(end);
  start.setDate(start.getDate() - days);

  const query = `
    query Analytics($zoneTag: string, $start: Date, $end: Date) {
      viewer {
        zones(filter: { zoneTag: $zoneTag }) {
          daily: httpRequests1dGroups(
            limit: 60
            filter: { date_geq: $start, date_leq: $end }
            orderBy: [date_ASC]
          ) {
            dimensions { date }
            sum { requests pageViews }
            uniq { uniques }
          }
          countries: httpRequests1dGroups(
            limit: 60
            filter: { date_geq: $start, date_leq: $end }
          ) {
            sum {
              countryMap {
                clientCountryName
                requests
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(GQL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${CF_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        zoneTag: ZONE_ID,
        start: dateStr(start),
        end: dateStr(end),
      },
    }),
  });

  if (!res.ok) throw new Error(`Cloudflare API 错误: ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);

  const zone = json.data.viewer.zones[0];
  const daily: DailyStat[] = (zone.daily ?? []).map((d: any) => ({
    date: d.dimensions.date,
    requests: d.sum.requests,
    uniques: d.uniq.uniques,
    pageViews: d.sum.pageViews,
  }));

  // Merge country data across all days
  const countryMap: Record<string, number> = {};
  for (const row of zone.countries ?? []) {
    for (const c of row.sum.countryMap ?? []) {
      countryMap[c.clientCountryName] = (countryMap[c.clientCountryName] ?? 0) + c.requests;
    }
  }
  const countries: CountryStat[] = Object.entries(countryMap)
    .map(([country, requests]) => ({ country, requests }))
    .sort((a, b) => b.requests - a.requests);

  const totalRequests = daily.reduce((s, d) => s + d.requests, 0);
  const totalUniques = daily.reduce((s, d) => s + d.uniques, 0);
  const totalPageViews = daily.reduce((s, d) => s + d.pageViews, 0);

  return { totalRequests, totalUniques, totalPageViews, daily, countries };
}
