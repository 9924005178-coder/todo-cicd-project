const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");

test("Website HTML file exists", () => {
  assert.ok(fs.existsSync("index.html"));
});

test("Website has a title", () => {
  const html = fs.readFileSync("index.html", "utf8");
  assert.ok(html.includes("<title>My To-Do List</title>"));
});

test("CSS file exists", () => {
  assert.ok(fs.existsSync("style.css"));
});

test("JavaScript file exists", () => {
  assert.ok(fs.existsSync("script.js"));
});
