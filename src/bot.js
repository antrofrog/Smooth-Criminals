import { classify } from "./core/classifier.js";
import {
  personality,
  responseBank
} from "./core/personality.js";
import { Memory } from "./storage/memory.js";
import { Logger } from "./core/logger.js";

export class Smooth Criminals {
  constructor(options = {}) {
    this.identity = personality;

    this.memory = options.memory ??
      new Memory();

    this.logger = options.logger ??
      new Logger();

    this.rng = options.rng ?? Math.random;
    this.startedAt = Date.now();
  }

  select(intent) {
    const responses =
      responseBank[intent] ?? responseBank.default;

    const value = Math.max(
      0,
      Math.min(0.999999, this.rng())
    );

    return responses[
      Math.floor(value * responses.length)
    ];
  }

  respond(message) {
    if (typeof message !== "string") {
      throw new TypeError("Message must be a string");
    }

    const input = message.trim();

    if (!input) {
      return {
        reply: "Say something.",
        intent: "empty"
      };
    }

    const intent = classify(input);

    // Simple context signal using recent conversation
    const previousUserMessage = this.memory
      .recent(6)
      .filter(item => item.role === "user")
      .at(-1);

    let reply = this.select(intent);

    if (
      intent === "default" &&
      previousUserMessage &&
      /\b(why|how|what)\b/i.test(input)
    ) {
      reply = "That depends on what came before.";
    }

    this.memory.add("user", input);
    this.memory.add("assistant", reply);

    this.logger.record("response", {
      intent,
      messageLength: input.length,
      responseLength: reply.length
    });

    return {
      reply,
      intent,
      model: "rule-based-v0.2"
    };
  }

  status() {
    return {
      name: this.identity.name,
      version: this.identity.version,
      engine: "Rule-based",
      memoryEntries: this.memory.count,
      uptimeSeconds: Math.floor(
        (Date.now() - this.startedAt) / 1000
      ),
      network: "Disconnected",
      mode: this.identity.mode
    };
  }
}

// Compatibility with earlier Smooth Criminals version
export function reply(message, rng = Math.random) {
  const intent = classify(message);
  const responses =
    responseBank[intent] ?? responseBank.default;

  if (intent === "empty") {
    return "Say something.";
  }

  const value = Math.max(
    0,
    Math.min(0.999999, rng())
  );

  return responses[Math.floor(value * responses.length)];
}
