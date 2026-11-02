const patterns = [
  {
    intent: "identity",
    regex: /\b(who are you|what are you|your name|what is smooth-criminals)\b/i
  },
  {
    intent: "greeting",
    regex: /\b(hello|hey|hi|gm|good morning)\b/i
  },
  {
    intent: "crypto",
    regex: /\b(bitcoin|btc|ethereum|eth|solana|crypto|memecoin|token|pumpfun|liquidity)\b/i
  },
  {
    intent: "technology",
    regex: /\b(ai|robot|machine|algorithm|computer|software|agent|code|programming)\b/i
  },
  {
    intent: "negative",
    regex: /\b(failed|broken|crashed|lost|dead|error)\b/i
  }
];

export function classify(message) {
  if (typeof message !== "string" || !message.trim()) {
    return "empty";
  }

  for (const entry of patterns) {
    if (entry.regex.test(message)) {
      return entry.intent;
    }
  }

  if (message.includes("?")) {
    return "question";
  }

  return "default";
}
