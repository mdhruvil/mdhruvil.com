// The Cloudflare transform rule on mdhruvil.com adds:
// Server-Timing: cache;desc=HIT, ray;desc=<id>-BOM, rtt;dur=48, qrtt;dur=0, edge;dur=22
type ServerTimingEntry = Pick<
  PerformanceServerTiming,
  "name" | "description" | "duration"
>;

export type EdgeTiming = {
  colo?: string;
  rttMs?: number;
  cache?: string;
};

export function parseServerTiming(
  entries: readonly ServerTimingEntry[],
): EdgeTiming {
  const byName = new Map(entries.map((entry) => [entry.name, entry]));

  const colo = byName.get("ray")?.description.split("-").at(1);
  // rtt is reported over TCP, qrtt over QUIC; the other one is 0.
  const rttMs = byName.get("rtt")?.duration || byName.get("qrtt")?.duration;
  const cache = byName.get("cache")?.description;

  return {
    colo: colo || undefined,
    rttMs: rttMs || undefined,
    cache: cache || undefined,
  };
}

export function readEdgeTiming(): EdgeTiming {
  const [navigation] = performance.getEntriesByType("navigation") as
    | PerformanceNavigationTiming[]
    | [];
  if (!navigation) return {};

  const timing = parseServerTiming(navigation.serverTiming);
  if (!timing.rttMs && navigation.responseStart > 0) {
    timing.rttMs = navigation.responseStart - navigation.requestStart;
  }
  return timing;
}
