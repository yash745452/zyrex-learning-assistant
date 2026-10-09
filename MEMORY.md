# Project Memory — MindPilot (MEMORY.md)

**Product:** MindPilot  
**Team:** Zyrex  
**Repository:** `zyrex-learning-assistant`  
**GitHub Remote:** `https://github.com/yash745452/zyrex-learning-assistant`  
**Current Git Branch:** `main`  
**Last Updated:** 2026-10-09 17:20 IST  

---

## 1. Product Summary
MindPilot is an AI-powered personalized learning assistant specifically built for undergraduate engineering (BTech) students by Team Zyrex for Code Carnival 3.0 (Problem Statement: **PS-06 On-device Personalized Learning Assistant**).

Core planned capabilities:
1. **AI Learning Tutor:** Conceptual breakdown, step-by-step math/code explanations, Socratic dialogue.
2. **Study-Material Assistant:** Document reader & grounded Q&A over student notes/PDFs.
3. **Personalized Learning Roadmaps:** Dynamic semester/exam curriculum milestones and progress tracking.
4. **AI-Generated Quizzes & Practice:** Adaptive problem sets with detailed rationale.
5. **Student Accounts & Learning Progress:** Persistent local storage of student mastery, roadmap completion, and scores.

---

## 2. Current Phase & Status
- **Current Phase:** Phase 1 — Frontend Initialization & Landing Page (COMPLETED & VERIFIED)
- **Status:** All Phase 1 tasks verified with passing production build and running local dev server.

### Status Breakdown
- **Completed (`DONE`):**
  - Read-only repository inspection (branch `main`, clean working tree).
  - Verified and fully ingested [Universal_Coding_Agent_Prompt.md](file:///c:/Users/vyasw/zyrex-learning-assistant/Universal_Coding_Agent_Prompt.md) and [AI_Coding_Agent_Master_Context.md](file:///c:/Users/vyasw/zyrex-learning-assistant/AI_Coding_Agent_Master_Context.md).
  - Comprehensive documentation suite created and maintained: [PRD.md](file:///c:/Users/vyasw/zyrex-learning-assistant/PRD.md), [DESIGN_SYSTEM.md](file:///c:/Users/vyasw/zyrex-learning-assistant/DESIGN_SYSTEM.md), [ARCHITECTURE.md](file:///c:/Users/vyasw/zyrex-learning-assistant/ARCHITECTURE.md), [AGENTS.md](file:///c:/Users/vyasw/zyrex-learning-assistant/AGENTS.md), [TASKS.md](file:///c:/Users/vyasw/zyrex-learning-assistant/TASKS.md), [MEMORY.md](file:///c:/Users/vyasw/zyrex-learning-assistant/MEMORY.md), and [SECURITY.md](file:///c:/Users/vyasw/zyrex-learning-assistant/SECURITY.md).
  - Finalized technical direction: React 19 + Vite + TypeScript + Tailwind CSS v3 directly in the repository root.
  - Implemented modular `ILLMProvider` interface and pedagogical stub provider (`src/services/aiProvider.ts`).
  - Implemented foundational MindPilot design system tokens in Tailwind and CSS.
  - Built the MindPilot landing page: Hero section with massive bold black typography, 5-pillar capabilities cards, live interactive tutor concept derivation demo, and interactive semester roadmap preview.
  - Implemented Awwwards-inspired motion design: GSAP hero staggered entrances, ScrollTrigger reveals for pillars and roadmap, magnetic button hover effects, global noise overlay, and `prefers-reduced-motion` compliance.
  - Built multi-view navigation shell and initial views for AI Tutor, Roadmaps, Study Notes, and Quizzes.
  - Verified with `npm run build` (`tsc -b && vite build` passed with zero errors).
- **In Progress (`IN PROGRESS`):**
  - None (Phase 1 completed).
- **Next (`NEXT`):**
  - Review with user, then expand core learning modules in Phase 2/3 (UI kit components, document parsing, on-device model spike).

---

## 3. Verified Repository State
- **Workspace Path:** `C:\Users\vyasw\zyrex-learning-assistant`
- **Git Remote:** `origin` -> `https://github.com/yash745452/zyrex-learning-assistant.git`
- **Tracked Files:** `README.md` (clean, 0 git diffs).
- **Build Status:** `npm run build` outputs:
  - `dist/index.html` (1.11 kB)
  - `dist/assets/index-*.css` (21.50 kB)
  - `dist/assets/index-*.js` (286.98 kB)
- **Dev Server:** Running on `http://127.0.0.1:3000/`.

---

## 4. Current Design Direction & Tokens
- **Core Aesthetic:** High-contrast editorial academic instrument. White-first canvas (`#FFFFFF`, 70–80%), large bold black typography (`#111111`), selective cream/beige accents (`#F7F3EB`, `#F0E9DD`, `#E9DFD0`, `#D8CEBE` ~20–30% surface ratio), no generic AI slop.
- **Primary Typefaces:** Manrope / Inter (Google Fonts) with JetBrains Mono for code.

---

## 5. Architectural & Scope Decisions
- **One Canonical Codebase:** All application files live in the repository root (no nested sub-apps).
- **AI Integration Decoupled:** No cloud models or private API keys embedded in client code. AI model provider is modular (`ILLMProvider`); Phase 3 will benchmark on-device runtimes.
- **External Services Deferred:** Supabase is noted as a future candidate for authentication and cloud persistence, but is not configured at this stage.

---

## 6. How to Run Locally
```bash
# In c:\Users\vyasw\zyrex-learning-assistant
npm run dev
# Open http://127.0.0.1:3000/ in browser
```
