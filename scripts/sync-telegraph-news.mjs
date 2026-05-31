#!/usr/bin/env node
/**
 * Fetches Telegraph pages listed in docs/index.html (NEWS_TELEGRAPH)
 * and writes docs/assets/data/news-cache.json for GitHub Pages (API has no CORS).
 *
 * Usage: node scripts/sync-telegraph-news.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = join(root, "docs/index.html");
const outPath = join(root, "docs/assets/data/news-cache.json");

function pathFromString(s) {
  s = s.trim();
  if (!s) return "";
  if (/telegra\.ph/i.test(s)) {
    try {
      return decodeURIComponent(new URL(s).pathname.replace(/^\/+/, ""));
    } catch {
      return s.replace(/^\/+/, "");
    }
  }
  return s.replace(/^\/+/, "");
}

function pathsFromIndex(html) {
  const m = html.match(/const NEWS_TELEGRAPH = \[([\s\S]*?)\];/);
  if (!m) throw new Error("NEWS_TELEGRAPH block not found in docs/index.html");
  const block = m[1].replace(/^\s*\/\/[^\n]*/gm, "");
  const paths = [];

  for (const obj of block.matchAll(/\{[^{}]+\}/g)) {
    const chunk = obj[0];
    const urlMatch = chunk.match(/(?:url|path):\s*"([^"]+)"/);
    if (urlMatch) paths.push(pathFromString(urlMatch[1]));
  }

  for (const q of block.matchAll(/^\s*"([^"]+)"/gm)) {
    paths.push(pathFromString(q[1]));
  }

  return [...new Set(paths.filter(Boolean))];
}

async function fetchPage(path) {
  const url = `https://api.telegra.ph/getPage/${encodeURIComponent(path)}?return_content=true`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${path}`);
  const data = await res.json();
  if (!data.ok) throw new Error(data.error || `API error for ${path}`);
  return data.result;
}

const html = readFileSync(indexPath, "utf8");
const paths = pathsFromIndex(html);

if (!paths.length) {
  console.log("NEWS_TELEGRAPH is empty — writing empty cache.");
  writeFileSync(outPath, "{}\n");
  process.exit(0);
}

const cache = {};
for (const path of paths) {
  process.stdout.write(`Fetching ${path}… `);
  try {
    cache[path] = await fetchPage(path);
    console.log("ok");
  } catch (e) {
    console.log("failed:", e.message);
  }
}

writeFileSync(outPath, JSON.stringify(cache, null, 2) + "\n");
console.log(`Wrote ${Object.keys(cache).length} page(s) → docs/assets/data/news-cache.json`);
