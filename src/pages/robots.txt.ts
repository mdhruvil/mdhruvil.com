export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /go

Sitemap: https://mdhruvil.com/sitemap-index.xml
      `.trim(),
  );
}
