import readline from "node:readline";
import { reply } from "./bot.js";

console.log(`
CHUDBOT v0.1.0
--------------------
STATUS: ONLINE
MODE: OBSERVATION
--------------------
Type 'exit' to quit.
`);

const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "you > "
});

cli.prompt();

cli.on("line", (line) => {
  if (line.trim().toLowerCase() === "exit") {
    cli.close();
    return;
  }

  console.log("chudbot >", reply(line));
  cli.prompt();
});

cli.on("close", () => {
  console.log("Signal lost.");
});
