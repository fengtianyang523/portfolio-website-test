import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const standalonePath = path.join(projectRoot, "双击打开网站.html");
const html = fs.readFileSync(standalonePath, "utf8");
const inlineModule = html.match(/<script type="module">([\s\S]*?)<\/script>/);

if (!inlineModule) throw new Error("The inline JavaScript bundle is missing.");
if (!/<style>[\s\S]+<\/style>/.test(html)) throw new Error("The inline stylesheet is missing.");
if (/<script[^>]+src=|<link[^>]+stylesheet/i.test(html)) throw new Error("An external code dependency remains.");
if (/["']\/assets\//.test(html)) throw new Error("An absolute image path remains.");

new Function(inlineModule[1]);

const imageReferences = [...new Set(
  [...html.matchAll(/public\/assets\/[A-Za-z0-9._-]+/g)].map((match) => match[0]),
)];

if (imageReferences.length !== 3) {
  throw new Error(`Expected three image assets, found ${imageReferences.length}.`);
}

for (const imageReference of imageReferences) {
  if (!fs.existsSync(path.join(projectRoot, imageReference))) {
    throw new Error(`Missing offline image: ${imageReference}`);
  }
}

console.log(JSON.stringify({
  file: standalonePath,
  inlineCss: true,
  inlineJavaScript: true,
  imageReferences,
  bytes: fs.statSync(standalonePath).size,
}, null, 2));
