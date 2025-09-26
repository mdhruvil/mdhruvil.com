export async function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://mdhruvil.com/sitemap-index.xml
        `.trim(),
  );
}
