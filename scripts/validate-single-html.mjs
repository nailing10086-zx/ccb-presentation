#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const target = process.argv[2];
const motionMode = process.argv.includes("--motion");

if (!target) {
  console.error("Usage: node scripts/validate-single-html.mjs <file.html> [--motion]");
  process.exit(2);
}

const filePath = path.resolve(target);
const html = fs.readFileSync(filePath, "utf8");
const errors = [];
const warnings = [];

if (!/<html\b/i.test(html) || !/<\/html>/i.test(html)) errors.push("missing html root");
if (!/<style\b/i.test(html)) warnings.push("no inline style block found");
if (/<script\b[^>]+\bsrc\s*=/i.test(html)) warnings.push("external script dependency found");

const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
for (const [index, match] of scripts.entries()) {
  try {
    new Function(match[1]);
  } catch (error) {
    errors.push(`inline script ${index + 1}: ${error.message}`);
  }
}

if (motionMode) {
  const required = [
    ["sticky stage", /position\s*:\s*sticky/i],
    ["full-height track", /height\s*:\s*100%/i],
    ["viewport-height fallback", /min-height\s*:\s*100vh/i],
    ["horizontal track", /width\s*:\s*max-content/i],
  ];
  for (const [label, pattern] of required) {
    if (!pattern.test(html)) errors.push(`motion check failed: ${label}`);
  }
}

console.log(`Validated ${path.basename(filePath)}`);
console.log(`Inline scripts: ${scripts.length}`);
for (const warning of warnings) console.warn(`Warning: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`Error: ${error}`);
  process.exit(1);
}
console.log("Result: PASS");
