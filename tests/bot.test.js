import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { ChudBot, reply } from "../src/bot.js";
import { classify } from "../src/core/classifier.js";
import { Memory } from "../src/storage/memory.js";
import { Logger } from "../src/core/logger.js";

test("classifies greetings", () => {
  assert.equal(classify("hello"), "greeting");
});

test("classifies crypto topics", () => {
  assert.equal(classify("bitcoin"), "crypto");
});

test("classifies identity questions", () => {
  assert.equal(classify("who are you?"), "identity");
});

test("handles empty messages", () => {
  assert.equal(reply(""), "Say something.");
});

test("selects deterministic responses", () => {
  assert.equal(
    reply("hello", () => 0),
    "You found me."
  );
});

test("persists conversation memory", () => {
  const dir = fs.mkdtempSync(
    path.join(os.tmpdir(), "chudbot-test-")
  );

  try {
    const file = path.join(dir, "memory.json");
    const memory = new Memory(file);

    memory.add("user", "hello");

    const restored = new Memory(file);

    assert.equal(restored.count, 1);
    assert.equal(
      restored.recent(1)[0].content,
      "hello"
    );

    restored.clear();

    assert.equal(
      new Memory(file).count,
      0
    );
  } finally {
    fs.rmSync(dir, {
      recursive: true,
      force: true
    });
  }
});

test("engine responds and records memory", () => {
  const dir = fs.mkdtempSync(
    path.join(os.tmpdir(), "chudbot-engine-")
  );

  try {
    const bot = new ChudBot({
      memory: new Memory(
        path.join(dir, "memory.json")
      ),
      logger: new Logger(
        path.join(dir, "events.jsonl")
      ),
      rng: () => 0
    });

    const result = bot.respond("hello");

    assert.equal(result.reply, "You found me.");
    assert.equal(result.intent, "greeting");
    assert.equal(bot.memory.count, 2);

    assert.equal(bot.status().version, "0.2.0");
  } finally {
    fs.rmSync(dir, {
      recursive: true,
      force: true
    });
  }
});
