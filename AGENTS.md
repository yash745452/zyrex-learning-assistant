# AI Agent Operating Instructions — MindPilot (AGENTS.md)

**Product:** MindPilot  
**Team:** Zyrex  
**Repository:** zyrex-learning-assistant  
**Canonical Remote:** `https://github.com/yash745452/zyrex-learning-assistant`  
**Status:** Mandatory Contributor Contract  
**Last Updated:** 2026-10-09  

---

## 1. Multi-Agent Operating Contract

This repository is maintained across multiple AI coding agents (e.g., Antigravity, Claude Code, Cursor, Copilot) as usage limits and development stages evolve. 

All agents and human contributors entering this repository **MUST** adhere to the rules below without exception.

---

## 2. Mandatory Rules for Any Agent Entering This Repo

### 2.1 Read Context Before Action
1. Always read [AI_Coding_Agent_Master_Context.md](file:///c:/Users/vyasw/zyrex-learning-assistant/AI_Coding_Agent_Master_Context.md) and [Universal_Coding_Agent_Prompt.md](file:///c:/Users/vyasw/zyrex-learning-assistant/Universal_Coding_Agent_Prompt.md) before making edits.
2. Read project documents: [PRD.md](file:///c:/Users/vyasw/zyrex-learning-assistant/PRD.md), [DESIGN_SYSTEM.md](file:///c:/Users/vyasw/zyrex-learning-assistant/DESIGN_SYSTEM.md), [ARCHITECTURE.md](file:///c:/Users/vyasw/zyrex-learning-assistant/ARCHITECTURE.md), [MEMORY.md](file:///c:/Users/vyasw/zyrex-learning-assistant/MEMORY.md), [TASKS.md](file:///c:/Users/vyasw/zyrex-learning-assistant/TASKS.md), and [SECURITY.md](file:///c:/Users/vyasw/zyrex-learning-assistant/SECURITY.md).
3. Do not assume or invent project state from external conversation memories. The repository is the single source of truth.

### 2.2 Preserve the Repository & One Canonical Codebase
- **Never create a parallel application** or alternate prototype directory (e.g., `client-v2`, `backend-new`).
- Preserve existing commit history and remote configuration.
- Do not modify, delete, or rewrite context files ([AI_Coding_Agent_Master_Context.md](file:///c:/Users/vyasw/zyrex-learning-assistant/AI_Coding_Agent_Master_Context.md), [Universal_Coding_Agent_Prompt.md](file:///c:/Users/vyasw/zyrex-learning-assistant/Universal_Coding_Agent_Prompt.md)).
- Do not perform force-pushes, rebase resets, or destructive Git operations.

### 2.3 Scope Discipline & Small Testable Steps
- Work loop: `Understand → Plan one small change → Implement → Verify → Record → Next`.
- Implement one small, testable phase at a time.
- No massive unverified code dumps or drive-by refactorings of unrelated code.
- Reuse existing components, utilities, and tokens before introducing new ones.

### 2.4 Verify Before Declaring Done (Zero Hallucinated Progress)
- **Fact-Status Labels:**
  - `DONE`: Verified complete through actual command execution, tests, or inspection.
  - `IN PROGRESS`: Actively being coded or refined.
  - `NEXT`: Specifically planned immediate next task.
  - `UNKNOWN / NEEDS VERIFICATION`: Unresolved details.
  - `BLOCKED`: Cannot proceed safely without an external decision.
- Never mark a task `DONE` simply because code was generated.
- Never fabricate test runs, passing test outputs, screenshots, or completed features.

### 2.5 Strict Design System Adherence
- Strictly implement the design tokens defined in [DESIGN_SYSTEM.md](file:///c:/Users/vyasw/zyrex-learning-assistant/DESIGN_SYSTEM.md):
  - White canvas (`#FFFFFF`) with large, bold black typography (`#111111`).
  - Selective cream (`#F7F3EB`) and beige (`#E9DFD0`, `#D8CEBE`) accents (~20–30% surface ratio).
- Avoid default "vibe-coded AI slop": no purple/blue gradients, no neon glowing orbs, no emojis as UI section markers, no untouched library defaults.
- Every interactive element must support initial, hover, focus, active, loading, empty, and error states.

### 2.6 Protect Secrets and Student Data
- Never commit API keys, tokens, database passwords, or personal credentials.
- Do not log sensitive student study data, private documents, or credentials.
- Adhere to the security principles documented in [SECURITY.md](file:///c:/Users/vyasw/zyrex-learning-assistant/SECURITY.md).

### 2.7 Maintain Repository Memory & Tasks
- Whenever meaningful work is planned or finished, update [TASKS.md](file:///c:/Users/vyasw/zyrex-learning-assistant/TASKS.md) and [MEMORY.md](file:///c:/Users/vyasw/zyrex-learning-assistant/MEMORY.md).
- Ensure any subsequent agent picking up the repository can immediately know:
  1. What was completed and verified.
  2. What is currently in progress.
  3. The single next action to take.

---

## 3. Communication & Handoff Standard

When finishing an iteration or handoff, always output:
1. **DONE:** Verified results with evidence.
2. **IN PROGRESS:** Active task.
3. **UNKNOWN / NEEDS VERIFICATION:** Unresolved decisions.
4. **BLOCKED:** Blockers (if any).
5. **NEXT:** The single highest-priority next action.
