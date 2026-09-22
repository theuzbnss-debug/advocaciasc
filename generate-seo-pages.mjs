#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pages, renderPage } from "../worker/index.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist", "client");

for (const [route, page] of Object.entries(pages)) {
  const directory = path.join(output, route.replace(/^\//, ""));
  mkdirSync(directory, { recursive: true });
  writeFileSync(path.join(directory, "index.html"), renderPage(page, route));
}

console.log(`Generated ${Object.keys(pages).length} static SEO pages for Vercel.`);
