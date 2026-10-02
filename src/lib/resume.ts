const RELEASE_URL = "https://github.com/mdhruvil/mdhruvil.com/releases/latest/download/";

export async function fetchResume(filename: "resume.pdf" | "resume.png") {
  const response = await fetch(new URL(filename, RELEASE_URL), {
    redirect: "follow",
    cf: {
      cacheTtl: 0,
      cacheTtlByStatus: { 200: 0 },
    },
  });

  console.log(`Fetching ${filename} from ${RELEASE_URL}...`);
  console.log(`Response status: ${response.status} ${response.statusText}`);

  if (!response.ok) {
    // Astro 7.4 beta keeps endpoint 404s empty; ordinary missing pages use 404.astro.
    return new Response(null, {
      status: 404,
      headers: { "Cache-Control": "no-cache" },
    });
  }

  return new Response(response.body, {
    headers: {
      "Content-Type": filename === "resume.pdf" ? "application/pdf" : "image/png",
      "Cache-Control": "no-cache",
    },
  });
}
