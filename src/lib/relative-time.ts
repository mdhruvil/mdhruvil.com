const units = [
  ["y", 365 * 24 * 60 * 60],
  ["mo", 30 * 24 * 60 * 60],
  ["d", 24 * 60 * 60],
  ["h", 60 * 60],
  ["m", 60],
] as const;

export function formatRelativeTime(date: Date, now = Date.now()): string {
  const seconds = (now - date.getTime()) / 1000;
  for (const [unit, unitSeconds] of units) {
    if (seconds >= unitSeconds) {
      return `${Math.floor(seconds / unitSeconds)}${unit} ago`;
    }
  }
  return "just now";
}
