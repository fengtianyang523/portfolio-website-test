import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const assetDirectory = path.join(projectRoot, "dist", "client", "assets");
const outputPath = path.join(projectRoot, "双击打开网站.html");

const files = await fs.readdir(assetDirectory);
const cssFile = files.find((file) => file.endsWith(".css"));
const jsFile = files.find((file) => file.endsWith(".js"));

if (!cssFile || !jsFile) {
  throw new Error("The production CSS or JavaScript bundle is missing.");
}

const [rawCss, rawJavaScript] = await Promise.all([
  fs.readFile(path.join(assetDirectory, cssFile), "utf8"),
  fs.readFile(path.join(assetDirectory, jsFile), "utf8"),
]);

const css = rawCss.replace(/<\/style/gi, "<\\/style");
const javaScript = rawJavaScript
  .replace(/([\"'`])\/assets\//g, "$1public/assets/")
  .replace(/<\/script/gi, "<\\/script");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#fbfaf7" />
    <meta name="description" content="Tianyang Feng — product, interaction and CMF design portfolio." />
    <title>Tianyang Feng — Portfolio</title>
    <style>${css}</style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">${javaScript}</script>
  </body>
</html>
`;

await fs.writeFile(outputPath, html, "utf8");
console.log(`Standalone portfolio created: ${outputPath}`);
