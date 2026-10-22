import { describe, expect, it } from "vite-plus/test";
import { parseServerTiming } from "./server-timing";

const entry = (name: string, description = "", duration = 0) => ({
  name,
  description,
  duration,
});

describe("parseServerTiming", () => {
  it("reads colo, rtt and cache from the Cloudflare header", () => {
    expect(
      parseServerTiming([
        entry("cache", "HIT"),
        entry("ray", "a4eb8b42a830471a-COK"),
        entry("rtt", "", 39),
        entry("qrtt", "", 0),
        entry("edge", "", 22),
      ]),
    ).toEqual({ colo: "COK", rttMs: 39, cache: "HIT" });
  });

  it("falls back to qrtt over QUIC", () => {
    expect(
      parseServerTiming([entry("rtt", "", 0), entry("qrtt", "", 12)]).rttMs,
    ).toBe(12);
  });

  it("returns nothing when the header is missing", () => {
    expect(parseServerTiming([])).toEqual({
      colo: undefined,
      rttMs: undefined,
      cache: undefined,
    });
  });
});
