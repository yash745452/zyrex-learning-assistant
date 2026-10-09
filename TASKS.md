# Project Tasks & Development Backlog — MindPilot (TASKS.md)

**Product:** MindPilot  
**Team:** Zyrex  
**Repository:** zyrex-learning-assistant  
**Status Standard:** `DONE` | `IN PROGRESS` | `NEXT` | `UNKNOWN` | `BLOCKED`  
**Last Updated:** 2026-10-09 17:20 IST  

---

## Task Overview & Progress Summary
- **Total Tasks Tracked:** 25
- **Completed (`DONE`):** 8
- **In Progress (`IN PROGRESS`):** 0
- **Next (`NEXT`):** 1
- **Planned / Pending Evaluation:** 16

---

## Phase 0: Discovery & Documentation Foundations

| ID | Task | Priority | Acceptance Criteria | Verification Method | Status |
|---|---|---|---|---|---|
| **TASK-001** | Repository Inspection (Read-Only) | P0 | Identify Git remote, branch status, untracked context files, and absence of prior framework code. | `git status`, directory inspection. | `DONE` |
| **TASK-002** | Master Context Files Verification | P0 | Confirm `Universal_Coding_Agent_Prompt.md` and `AI_Coding_Agent_Master_Context.md` are accessible and read in full. | File inspection, direct reading. | `DONE` |
| **TASK-003** | Core Documentation Scaffolding | P0 | Create `PRD.md`, `DESIGN_SYSTEM.md`, `ARCHITECTURE.md`, `AGENTS.md`, `TASKS.md`, `MEMORY.md`, and `SECURITY.md` without modifying context files or scaffolding code. | Verified file check across all 7 docs. | `DONE` |

---

## Phase 1: Technical Stack Finalization & Frontend Initialization

| ID | Task | Priority | Acceptance Criteria | Verification Method | Status |
|---|---|---|---|---|---|
| **TASK-101** | Finalize Architecture & Modular AI Design | P0 | Document React 19 + Vite + TypeScript + Tailwind CSS v3 in `ARCHITECTURE.md`. Define modular `ILLMProvider` interface. Defer external services (Supabase/cloud models). | `ARCHITECTURE.md` review. | `DONE` |
| **TASK-102** | Initialize Frontend Application Shell | P0 | Scaffold canonical React 19 + Vite + TypeScript in repository root. Configure package scripts, tsconfig, and assets without creating nested subfolders. | `npm install` and clean dependency verification. | `DONE` |
| **TASK-103** | Configure Design System Tokens & Typography | P0 | Configure Tailwind CSS palette (`#FFFFFF`, `#111111`, `#171613`, `#F7F3EB`, `#F0E9DD`, `#E9DFD0`, `#D8CEBE`) and font families (Manrope/Inter, JetBrains Mono). | `tailwind.config.js` and `index.css` verified against `DESIGN_SYSTEM.md`. | `DONE` |
| **TASK-104** | MindPilot Landing Page & Layout Shell | P0 | Build modern, premium landing page for BTech students and foundational navigation shell matching 20–30% cream/beige accent ratio. Include call-to-action for learning workflows. | `npm run build` (`tsc -b && vite build`) passed with 0 errors. Dev server running on port 3000. | `DONE` |
| **TASK-105** | Motion Design & Interaction Upgrade | P0 | Implement Awwwards-inspired motion design. GSAP Hero stagger, scroll-triggered reveals, magnetic button hover states, global noise overlay, responsive tests, and `prefers-reduced-motion` compliance. | `npm run build` zero errors. Visual interaction verification. | `DONE` |

---

## Phase 2: Core UI Kit & Layout Navigation

| ID | Task | Priority | Acceptance Criteria | Verification Method | Status |
|---|---|---|---|---|---|
| **TASK-201** | Shell Layout & Multi-View Navigation | P1 | Desktop sidebar + mobile header supporting active view switches (Landing, Tutor, Roadmaps, Quizzes, Study Materials). | Navigation state transitions and responsive check. | `NEXT` |
| **TASK-202** | Reusable UI Kit Components | P1 | Implement Buttons, Input fields, Badges, Tabs, Cards with all states (idle, hover, active, focus, disabled, loading). | Interaction testing across all component variants. | `UNKNOWN` |
| **TASK-203** | Design Assets Ingestion / Frame Review | P1 | Review official 15 design frames once supplied into repository. | Design artifact inspection. | `UNKNOWN` |

---

## Phase 3: Modular AI Engine & Prompt Pipeline

| ID | Task | Priority | Acceptance Criteria | Verification Method | Status |
|---|---|---|---|---|---|
| **TASK-301** | Modular AI Adapter & Stub Engine | P0 | Implement `ILLMProvider` interface with a deterministic pedagogical stub provider for reliable local development and testing. | Verified mock stream in tutor view. | `DONE` |
| **TASK-302** | On-Device Model Spike (WebLLM / Local Daemon) | P1 | Evaluate on-device browser engine (WebLLM) and local daemon against memory/latency benchmarks on consumer hardware. | Token generation rate & memory profiling. | `UNKNOWN` |
| **TASK-303** | Engineering Tutor Prompt Engineering | P1 | Structured system prompts for Socratic engineering concept explanation, code snippets, and math formulas. | Sample technical question outputs verified for pedagogical accuracy. | `UNKNOWN` |

---

## Phase 4: Core Learning Modules Implementation

| ID | Task | Priority | Acceptance Criteria | Verification Method | Status |
|---|---|---|---|---|---|
| **TASK-401** | AI Technical Tutor Chat View | P0 | Conversational interface with markdown rendering, syntax-highlighted code blocks, and conversation session persistence. | Interactive chat test with multiple technical queries. | `IN PROGRESS` |
| **TASK-402** | Local Document Ingestion & Reader | P1 | Ingest PDF/TXT files locally, extract text chunks, and ground tutor answers with section references. | Upload sample lecture PDF and verify grounded Q&A. | `UNKNOWN` |
| **TASK-403** | Personalized Roadmap Generator | P1 | Generate structured semester/exam prep roadmaps with modules, milestones, and status toggles. | Generate roadmap for "Operating Systems", mark modules done. | `UNKNOWN` |
| **TASK-404** | Practice & Quiz Generator Module | P1 | Generate adaptive multiple-choice and conceptual questions with instant feedback and score recording. | Complete a 5-question quiz, verify score and explanation UI. | `UNKNOWN` |
| **TASK-405** | Student Progress & Mastery Dashboard | P2 | Aggregated view of active roadmaps, quiz history, mastered topics, and study activity. | Verify state updates when quizzes and roadmap items complete. | `UNKNOWN` |

---

## Phase 5: Student State & Local Storage Engine

| ID | Task | Priority | Acceptance Criteria | Verification Method | Status |
|---|---|---|---|---|---|
| **TASK-501** | Local Persistence Layer | P1 | Persistent local storage for student profile, chat history, roadmaps, and quiz logs without external database requirements. | Inspect local storage / IndexedDB across page reloads. | `UNKNOWN` |
| **TASK-502** | Student Profile & Settings View | P2 | Manage engineering branch, semester, study goals, and local storage clearing. | Update profile and verify data persistence. | `UNKNOWN` |

---

## Phase 6: Security, Accessibility & Launch Readiness

| ID | Task | Priority | Acceptance Criteria | Verification Method | Status |
|---|---|---|---|---|---|
| **TASK-601** | Security Audit & Input Sanitization | P0 | Run checks from `SECURITY.md` (no exposed secrets, XSS prevention on markdown rendering, safe upload boundaries). | Security scan & malicious input test payload execution. | `UNKNOWN` |
| **TASK-602** | WCAG AA Accessibility & Keyboard Nav | P1 | Keyboard-only navigation across all views, proper contrast ratios, aria-labels on controls. | Keyboard-only walkthrough & contrast audit. | `UNKNOWN` |
| **TASK-603** | Responsive & Cross-Device Review | P1 | Flawless rendering on mobile (<768px), tablet, and desktop (1024px+). | Viewport testing on mobile and desktop. | `UNKNOWN` |
| **TASK-604** | Final Verification & Project Handoff | P0 | Update `MEMORY.md`, `README.md`, ensure clean Git state, and verify end-to-end user journeys. | Full workflow walkthrough test. | `UNKNOWN` |
