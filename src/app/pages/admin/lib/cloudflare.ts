const PROXY = 'https://analysis.zhuzilan520.workers.dev/';

export function isCfConfigured(): boolean {
  return true; // Worker holds all credentials
}

export interface DailyStat {
  date: string;
  requests: number;
  uniques: number;
  pageViews: number;
}

export interface CountryStat {
  country: string;
  requests: number;
}

export interface AnalyticsSummary {
  totalRequests: number;
  totalUniques: number;
  totalPageViews: number;
  daily: DailyStat[];
  countries: CountryStat[];
}

export async function fetchAnalytics(days = 30): Promise<AnalyticsSummary> {
  const res = await fetch(PROXY, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ days }),
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

  const countryMap: Record<string, number> = {};
  for (const row of zone.countries ?? []) {
    const country = row.dimensions?.clientCountryName;
    if (country) countryMap[country] = (countryMap[country] ?? 0) + row.sum.requests;
  }
  const countries: CountryStat[] = Object.entries(countryMap)
    .map(([country, requests]) => ({ country, requests }))
    .sort((a, b) => b.requests - a.requests);

  const totalRequests = daily.reduce((s, d) => s + d.requests, 0);
  const totalUniques = daily.reduce((s, d) => s + d.uniques, 0);
  const totalPageViews = daily.reduce((s, d) => s + d.pageViews, 0);

  return { totalRequests, totalUniques, totalPageViews, daily, countries };
}
