import readline from "node:readline";
import { Smooth Criminals } from "./bot.js";

const bot = new Smooth Criminals();

console.log(`
╔══════════════════════════════════════════╗
║                                          ║
║              C H U D B O T               ║
║                                          ║
║          OBSERVATION PROTOCOL            ║
║                                          ║
╠══════════════════════════════════════════╣
║  VERSION       0.2.0                     ║
║  ENGINE        RULE-BASED                ║
║  MEMORY        ENABLED                   ║
║  NETWORK       DISCONNECTED              ║
║  STATUS        ONLINE                    ║
╚══════════════════════════════════════════╝

The signal was always there.

/help for commands
`);

const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "\nyou > "
});

cli.prompt();

cli.on("line", line => {
  const input = line.trim();

  if (input === "/exit" || input === "exit") {
    cli.close();
    return;
  }

  if (input === "/help") {
    console.log(`
AVAILABLE COMMANDS

/help    Display commands
/status  Inspect system status
/memory  Display recent conversation memory
/clear   Delete conversation memory
/exit    Terminate session
`);
  } else if (input === "/status") {
    console.log(
      JSON.stringify(bot.status(), null, 2)
    );
  } else if (input === "/memory") {
    console.log(
      JSON.stringify(bot.memory.recent(10), null, 2)
    );
  } else if (input === "/clear") {
    bot.memory.clear();
    bot.logger.record("memory_cleared");
    console.log("smooth-criminals > Memory cleared.");
  } else {
    try {
      const result = bot.respond(input);
      console.log(`smooth-criminals > ${result.reply}`);
    } catch (error) {
      console.error("System error:", error.message);
    }
  }

  cli.prompt();
});

cli.on("close", () => {
  console.log("\nSMOOTH CRIMINALS // SIGNAL TERMINATED");
  process.exit(0);
});
