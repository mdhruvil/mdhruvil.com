import { describe, expect, it } from "vite-plus/test";
import { newTabProps, opensInNewTab } from "./links";

describe("opensInNewTab", () => {
  it("opens external sites and files in a new tab", () => {
    expect(opensInNewTab("https://github.com/mdhruvil")).toBe(true);
    expect(opensInNewTab("http://example.com")).toBe(true);
    expect(opensInNewTab("/resume.pdf")).toBe(true);
  });

  it("keeps pages on this site and mailto links in place", () => {
    expect(opensInNewTab("/")).toBe(false);
    expect(opensInNewTab("/blog/deplit")).toBe(false);
    expect(opensInNewTab("#features")).toBe(false);
    expect(opensInNewTab("mailto:hey@mdhruvil.com")).toBe(false);
  });
});

describe("newTabProps", () => {
  it("adds target and rel only for new-tab links", () => {
    expect(newTabProps("https://x.com")).toEqual({
      target: "_blank",
      rel: "noopener",
    });
    expect(newTabProps("/blog")).toEqual({});
  });
});
