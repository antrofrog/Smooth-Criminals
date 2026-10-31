import test from "node:test";
import assert from "node:assert/strict";
import { reply } from "../src/bot.js";

test("greeting response", () => {
  assert.equal(reply("hello", () => 0), "You found me.");
});

test("crypto response", () => {
  assert.equal(reply("bitcoin", () => 0), "The chart remembers.");
});

test("empty input", () => {
  assert.equal(reply(""), "Say something.");
});
