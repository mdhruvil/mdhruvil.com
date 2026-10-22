// External sites and files open in a new tab; pages on this site don't.
export function opensInNewTab(href: string): boolean {
  return /^https?:\/\//.test(href) || href.endsWith(".pdf");
}

export function newTabProps(href: string) {
  return opensInNewTab(href)
    ? ({ target: "_blank", rel: "noopener" } as const)
    : {};
}
