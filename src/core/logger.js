import fs from "node:fs";
import path from "node:path";

export class Logger {
  constructor(file = ".data/events.jsonl") {
    this.file = file;
  }

  record(type, details = {}) {
    fs.mkdirSync(path.dirname(this.file), {
      recursive: true
    });

    const event = {
      timestamp: new Date().toISOString(),
      type,
      ...details
    };

    fs.appendFileSync(
      this.file,
      JSON.stringify(event) + "\n",
      { mode: 0o600 }
    );

    return event;
  }
}
