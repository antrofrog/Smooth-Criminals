import fs from "node:fs";
import path from "node:path";

export class Memory {
  constructor(file = ".data/memory.json", limit = 100) {
    this.file = file;
    this.limit = limit;
    this.history = [];
    this.load();
  }

  load() {
    if (!fs.existsSync(this.file)) return;

    try {
      const data = JSON.parse(
        fs.readFileSync(this.file, "utf8")
      );

      this.history = Array.isArray(data.history)
        ? data.history.slice(-this.limit)
        : [];
    } catch {
      this.history = [];
    }
  }

  save() {
    fs.mkdirSync(path.dirname(this.file), {
      recursive: true
    });

    const temporary = `${this.file}.tmp`;

    fs.writeFileSync(
      temporary,
      JSON.stringify({
        version: 1,
        history: this.history
      }, null, 2),
      { mode: 0o600 }
    );

    fs.renameSync(temporary, this.file);
  }

  add(role, content) {
    const item = {
      role,
      content,
      timestamp: new Date().toISOString()
    };

    this.history.push(item);
    this.history = this.history.slice(-this.limit);
    this.save();

    return item;
  }

  recent(count = 10) {
    return this.history.slice(-count);
  }

  clear() {
    this.history = [];
    this.save();
  }

  get count() {
    return this.history.length;
  }
}
