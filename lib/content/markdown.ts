import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function readMarkdownFile(filePath: string): string {
  const fullPath = path.join(CONTENT_DIR, filePath);
  return fs.readFileSync(fullPath, "utf-8");
}
