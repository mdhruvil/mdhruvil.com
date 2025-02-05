export async function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://mdhruvil.github.io/sitemap-index.xml
        `.trim(),
  );
}
