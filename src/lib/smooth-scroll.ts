import type { MouseEvent } from "react";

/**
 * Next.js sets `history.scrollRestoration = "manual"`, which suppresses the
 * browser's native scroll-to-fragment behavior for plain `<a href="#id">`
 * links (it only re-implements scrolling for its own <Link> navigations).
 * Use this onClick handler on same-page hash anchors to restore that
 * behavior explicitly.
 */
export function smoothScrollToHash(
  e: MouseEvent<HTMLAnchorElement>,
  id: string,
) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  // `behavior: "smooth"` can get interrupted (and silently no-op) when many
  // CSS transitions fire mid-scroll — e.g. scroll-reveal animations on this
  // site. `"instant"` is unaffected and always lands correctly.
  el.scrollIntoView({ behavior: "instant", block: "start" });
  history.pushState(null, "", `#${id}`);
}
