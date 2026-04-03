import { readdir } from "fs/promises";
import path from "path";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|svg)$/i;

function publicDir(...segments: string[]) {
  return path.join(process.cwd(), "public", ...segments);
}

export async function listGalleryImagePaths(): Promise<string[]> {
  try {
    const files = await readdir(publicDir("images"));
    return files
      .filter((f) => IMAGE_EXT.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => `/images/${f}`);
  } catch {
    return [];
  }
}

/** Files in public/images/social-cards — e.g. IG / XHS post screenshots */
export async function listSocialCardPaths(): Promise<string[]> {
  try {
    const files = await readdir(publicDir("images", "social-cards"));
    return files
      .filter((f) => IMAGE_EXT.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => `/images/social-cards/${f}`);
  } catch {
    return [];
  }
}

export function altTextFromPath(src: string): string {
  const file = src.replace(/^.*\//, "").replace(/\.[^.]+$/, "");
  if (!file) return "相片";
  return file.replace(/[-_]+/g, " ").trim() || "相片";
}
