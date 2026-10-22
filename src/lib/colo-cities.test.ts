import { describe, expect, it } from "vite-plus/test";
import { getColoCity } from "./colo-cities";

describe("getColoCity", () => {
  it("maps known colos", () => {
    expect(getColoCity("BOM")).toBe("Mumbai, India");
    expect(getColoCity("cok")).toBe("Kochi, India");
  });

  it("returns undefined for unknown colos", () => {
    expect(getColoCity("ZZZ")).toBeUndefined();
  });
});
