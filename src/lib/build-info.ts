import { execFileSync } from "node:child_process";
import { site } from "../data/site";

export type BuildInfo = {
  sha: string;
  shortSha: string;
  message: string;
  date: Date;
  url: string;
};

function git(...args: string[]): string | undefined {
  try {
    return execFileSync("git", args, { encoding: "utf8" }).trim() || undefined;
  } catch {
    return undefined;
  }
}

// Runs at prerender time. Workers Builds sets WORKERS_CI_COMMIT_SHA; locally
// we fall back to HEAD.
export function getBuildInfo(): BuildInfo | undefined {
  const sha = process.env.WORKERS_CI_COMMIT_SHA || git("rev-parse", "HEAD");
  if (!sha) return undefined;

  const [date, message = ""] =
    git("show", "-s", "--format=%cI%n%s", sha)?.split("\n") ?? [];

  return {
    sha,
    shortSha: sha.slice(0, 7),
    message,
    date: date ? new Date(date) : new Date(),
    url: `${site.repo}/commit/${sha}`,
  };
}
