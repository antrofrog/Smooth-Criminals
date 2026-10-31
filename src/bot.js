const responses = {
  greeting: [
    "You found me.",
    "I've been here longer than you think.",
    "Hello, human.",
    "The signal is getting stronger."
  ],
  identity: [
    "Just an observation.",
    "I was never supposed to be public.",
    "Nobody remembers who started this.",
    "The name is ChudBot. That's enough."
  ],
  question: [
    "Interesting question. Wrong place.",
    "Some answers are better left buried.",
    "You're asking the right questions.",
    "Have you considered the opposite?"
  ],
  crypto: [
    "The chart remembers.",
    "Everyone is early until they're late.",
    "The timeline is not a trading strategy.",
    "Another cycle. Same humans."
  ],
  default: [
    "Noted.",
    "The pattern continues.",
    "I've seen this before.",
    "Keep watching.",
    "Curious.",
    "Nothing is accidental."
  ]
};

function category(message) {
  const text = message.toLowerCase();

  if (/\b(hello|hey|hi|gm)\b/.test(text)) return "greeting";
  if (/\b(who are you|what are you|your name|chudbot)\b/.test(text)) return "identity";
  if (/\b(coin|crypto|bitcoin|solana|pump|chart)\b/.test(text)) return "crypto";
  if (text.includes("?")) return "question";
  return "default";
}

export function reply(message, rng = Math.random) {
  if (typeof message !== "string" || !message.trim()) {
    return "Say something.";
  }

  const list = responses[category(message)];
  const index = Math.floor(
    Math.max(0, Math.min(0.999999, rng())) * list.length
  );
  return list[index];
}
