const { chromium } = require("playwright");
const path = require("path");
const http = require("http");
const fs = require("fs");

function startServer(root, basePath) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let url = req.url.split("?")[0];
      if (url === basePath || url === basePath + "/") url = basePath + "/index.html";
      const filePath = path.join(root, url.replace(basePath, "").replace(/^\//, "") || "index.html");
      if (!filePath.startsWith(root)) { res.writeHead(403); res.end(); return; }
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end(); return; }
        const ext = path.extname(filePath);
        const types = { ".html": "text/html", ".js": "application/javascript", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json" };
        res.writeHead(200, { "Content-Type": types[ext] || "application/octet-stream" });
        res.end(data);
      });
    });
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

(async () => {
  const root = __dirname;
  const server = await startServer(root, "/Floke");
  const port = server.address().port;
  const base = `http://127.0.0.1:${port}/Floke/`;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push("PAGE: " + e.message + "\n" + (e.stack || "").split("\n").slice(0, 3).join("\n")));
  await page.goto(base, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(800);
  const checks = [];
  checks.push("main visible: " + await page.evaluate(() => {
    const m = document.getElementById("mainView");
    return m && getComputedStyle(m).display !== "none";
  }));
  await page.click("#btnRu");
  await page.waitForTimeout(300);
  checks.push("locale ru: " + await page.evaluate(() => document.documentElement.lang));
  await page.evaluate(() => { location.hash = "#graph"; });
  await page.waitForTimeout(500);
  checks.push("graph page: " + await page.evaluate(() => getComputedStyle(document.getElementById("graphPage")).display));
  await page.evaluate(() => { location.hash = "#feedback"; });
  await page.waitForTimeout(1500);
  checks.push("giscus host: " + await page.evaluate(() => document.getElementById("giscusContainer")?.innerHTML?.slice(0, 80)));
  console.log("Base:", base);
  console.log("Checks:\n" + checks.join("\n"));
  console.log("Errors:", errors.length ? errors.join("\n---\n") : "(none)");
  await browser.close();
  server.close();
})().catch((e) => { console.error(e); process.exit(1); });
