import { describe, expect, it } from "vite-plus/test";
import { formatRelativeTime } from "./relative-time";

const now = Date.parse("2026-10-23T12:00:00Z");
const secondsAgo = (seconds: number) => new Date(now - seconds * 1000);

describe("formatRelativeTime", () => {
  it.each([
    [30, "just now"],
    [5 * 60, "5m ago"],
    [3 * 60 * 60, "3h ago"],
    [2 * 24 * 60 * 60, "2d ago"],
    [45 * 24 * 60 * 60, "1mo ago"],
    [400 * 24 * 60 * 60, "1y ago"],
  ])("formats %is ago as %s", (seconds, expected) => {
    expect(formatRelativeTime(secondsAgo(seconds), now)).toBe(expected);
  });
});
