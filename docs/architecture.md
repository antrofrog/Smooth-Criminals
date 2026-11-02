# Smooth Criminals Architecture

## Overview

Smooth Criminals is a modular, personality-driven
conversational agent implemented in Node.js.

## Processing Pipeline

Input
  |
  v
Validation
  |
  v
Intent Classification
  |
  v
Context Inspection
  |
  v
Personality Response Selection
  |
  v
Persistent Memory
  |
  v
Activity Logging
  |
  v
Terminal Output

## Components

### Personality Engine

Defines the agent's identity and response bank.

### Classifier

Uses regular expressions to categorize messages.

### Response Engine

Selects responses based on detected intent
and limited conversation context.

### Memory

Stores a bounded history of user and assistant
messages in a local JSON file.

### Logger

Writes structured event metadata in JSONL format.

### Terminal Interface

Provides local interactive access to the agent.

## Current Limitations

- No language-model inference
- No semantic reasoning
- No external network integrations
- No automated X replies
- Context awareness is heuristic
- Memory is local and unencrypted
- No background task scheduler

## Future Extensions

- Optional LLM provider
- Semantic intent classification
- Retrieval and knowledge tools
- Memory summarization
- X API adapter
- Rate limits and approval controls
- Scheduled observation tasks
