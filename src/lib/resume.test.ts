import { afterEach, describe, expect, it, vi } from "vite-plus/test";
import { fetchResume } from "./resume";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("resume downloads", () => {
  it.each([
    ["resume.pdf", "application/pdf"],
    ["resume.png", "image/png"],
  ] as const)("streams %s without caching", async (filename, contentType) => {
    const upstream = new Response("resume contents");
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(upstream);

    const response = await fetchResume(filename);

    expect(fetchSpy).toHaveBeenCalledWith(
      new URL(
        filename,
        "https://github.com/mdhruvil/mdhruvil.com/releases/latest/download/",
      ),
      {
        redirect: "follow",
        cf: { cacheTtl: 0, cacheTtlByStatus: { 200: 0 } },
      },
    );
    expect(response.status).toBe(200);
    expect(response.body).toBe(upstream.body);
    expect(response.headers.get("Content-Type")).toBe(contentType);
    expect(response.headers.get("Cache-Control")).toBe("no-cache");
    expect(await response.text()).toBe("resume contents");
  });

  it.each([403, 404, 500])(
    "returns an empty 404 for upstream %s",
    async (status) => {
      vi.spyOn(globalThis, "fetch").mockResolvedValue(
        new Response("upstream error", { status }),
      );

      const response = await fetchResume("resume.pdf");

      expect(response.status).toBe(404);
      expect(response.body).toBeNull();
      expect(response.headers.get("Cache-Control")).toBe("no-cache");
    },
  );
});
