import type { APIRoute } from "astro";
import { fetchResume } from "../lib/resume";

export const prerender = false;

export const GET: APIRoute = () => fetchResume("resume.pdf");
