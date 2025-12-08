import { env } from "cloudflare:workers";

const GH_RELEASES_URL =
  "https://github.com/mdhruvil/mdhruvil.com/releases/latest/download/";

async function notFound() {
  const response = await env.ASSETS.fetch("http://assets/404.html");
  return new Response(response.body, {
    status: 404,
    statusText: "Not Found",
    headers: response.headers,
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const resumePaths = ["/resume.pdf", "/resume.png"];
    if (resumePaths.includes(url.pathname)) {
      const response = await fetch(`${GH_RELEASES_URL}${url.pathname}`, {
        redirect: "follow",
        cf: {
          // DON'T CACHE THE RESUME
          cacheTtl: 0,
          cacheTtlByStatus: {
            200: 0,
          },
        },
      });
      if (!response.ok) {
        return notFound();
      }
      return new Response(response.body, {
        headers: {
          "Content-Type": url.pathname.endsWith(".pdf")
            ? "application/pdf"
            : "image/png",
          "Cache-Control": "no-cache",
        },
      });
    }
    return notFound();
  },
} satisfies ExportedHandler<Env>;
