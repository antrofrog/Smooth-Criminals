<div align="center">

# CHUDBOT

### AN EXPERIMENTAL INTERNET-NATIVE AGENT

**THE SIGNAL WAS ALWAYS THERE.**

![Node](https://img.shields.io/badge/Node.js-18+-green)
![Version](https://img.shields.io/badge/version-0.2.0-purple)
![Status](https://img.shields.io/badge/status-OBSERVING-black)
![Memory](https://img.shields.io/badge/memory-ENABLED-blue)
![Engine](https://img.shields.io/badge/engine-RULE--BASED-orange)

</div>

---

## 01 / OVERVIEW

ChudBot is an experimental, personality-driven
software agent designed to interpret and respond
to internet-native conversations.

The current implementation runs locally and uses
deterministic intent classification, a structured
personality engine, and persistent conversation memory.

No external API key is required.

## 02 / SYSTEM STATUS

| Component | Status |
|---|---|
| Personality Engine | Operational |
| Intent Classification | Operational |
| Local Conversation Memory | Operational |
| Activity Logging | Operational |
| Terminal Interface | Operational |
| Automated Tests | Implemented |
| AI Model Inference | Not integrated |
| X Integration | Planned |
| Autonomous Tasks | Planned |

## 03 / ARCHITECTURE

```text
MESSAGE INPUT
      |
      v
INPUT VALIDATION
      |
      v
INTENT CLASSIFIER
      |
      v
CONTEXT INSPECTION
      |
      v
PERSONALITY ENGINE
      |
      v
MEMORY + LOGGING
      |
      v
RESPONSE OUTPUT
```

See [Architecture](docs/architecture.md).

## 04 / INSTALLATION

Requirements: Node.js 18+

```bash
git clone https://github.com/Jinszrrau/Chudbot.git
cd Chudbot
npm install
npm start
```

## 05 / COMMANDS

| Command | Function |
|---|---|
| /help | Show available commands |
| /status | Inspect engine status |
| /memory | Display recent memory |
| /clear | Delete conversation memory |
| /exit | Terminate session |

## 06 / REPOSITORY STRUCTURE

```text
src/
  core/
    classifier.js
    personality.js
    logger.js
  storage/
    memory.js
  bot.js
  index.js

tests/
  bot.test.js

docs/
  architecture.md

package.json
README.md
```

## 07 / TESTING

```bash
npm test
```

The test suite covers classification,
response selection, memory persistence,
and engine state.

## 08 / ROADMAP

- [x] Personality engine
- [x] Rule-based intent classification
- [x] Local persistent memory
- [x] Activity logging
- [x] Interactive terminal
- [x] Automated testing
- [ ] Semantic inference
- [ ] Optional LLM integration
- [ ] X mention integration
- [ ] Scheduled tasks
- [ ] Retrieval tools
- [ ] Agent evaluation system

## 09 / SECURITY

Local conversation memory is stored in
`.data/memory.json`.

Activity metadata is written to
`.data/events.jsonl`.

These files are excluded from Git.

Do not store secrets in source files or commit
sensitive conversation histories.

## 10 / PROJECT STATUS

Experimental release.

ChudBot does not currently post to X or
operate as an autonomous network agent.

---

<div align="center">

**CHUDBOT // OBSERVING**

*Nothing happens without a trace.*

</div>
