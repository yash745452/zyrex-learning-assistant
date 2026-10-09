# Technical Architecture Specification — MindPilot

**Product Name:** MindPilot  
**Team:** Zyrex  
**Repository:** zyrex-learning-assistant  
**Hackathon Problem Statement:** PS-06 On-device Personalized Learning Assistant | Code Carnival 3.0  
**Status:** Approved Technical Direction (Phase 1 Baseline)  
**Last Updated:** 2026-10-09  

---

## 1. Current Repository State & Technical Baseline

- **Repository Root:** `C:\Users\vyasw\zyrex-learning-assistant` (Canonical repository; no parallel folders or sub-apps).
- **Canonical Remote:** `https://github.com/yash745452/zyrex-learning-assistant`.
- **Active Phase:** Phase 1 — Frontend initialization and architecture formalization.

---

## 2. Selected Technical Stack & Rationale

For Phase 1 and the foundational build of MindPilot, we have finalized a modern, high-performance web application stack rooted directly in the repository root:

- **UI Framework:** **React 19**
  - Modern component model, seamless concurrent rendering, robust ecosystem for interactive learning widgets.
- **Build Tool & Bundler:** **Vite (v6+)**
  - Instant Hot Module Replacement (HMR), rapid build execution, clean static output, first-class WebAssembly (WASM) and WebWorker support essential for subsequent on-device AI integration.
- **Language:** **TypeScript (Strict mode)**
  - End-to-end type safety across domain models (roadmaps, quizzes, study documents, chat sessions).
- **Styling & Design System:** **Tailwind CSS (v3.4+)**
  - Utility-first CSS configured with custom color tokens matching the approved MindPilot Design System (`#FFFFFF`, `#111111`, `#171613`, `#F7F3EB`, `#F0E9DD`, `#E9DFD0`, `#D8CEBE`).
- **Typography:** **Manrope & Inter** (loaded via Google Fonts) with JetBrains Mono for technical and code snippets.
- **Icons:** **Lucide React** (used purposefully and contextually; avoiding arbitrary icon spam).

### Why this stack was selected
1. **Direct on-device AI readiness:** A browser-based React + Vite architecture allows running client-side WASM/WebGPU models (e.g., WebLLM, Transformers.js) directly without forcing users to install complex native dependencies upfront.
2. **Modular provider decoupling:** The UI communicates with a decoupled AI service adapter interface. Whether inference runs via client-side WebGPU, a local Ollama daemon, or a backend function, the frontend application remains unchanged.
3. **Speed of iteration:** Allows rapid verification of student workflows (landing page, dashboard shell, tutor view, roadmaps, quizzes) while avoiding premature external dependencies.

---

## 3. High-Level Modular System Boundaries

```mermaid
flowchart TD
    subgraph Frontend_App [MindPilot Frontend - React 19 + TypeScript + Vite]
        UI[UI Layer: Landing, Shell, Tutor, Roadmaps, Quizzes]
        State[Application State & View Routing]
        DocParser[Client Document Ingestion & Chunking]
        AIAdapter[Modular AI Provider Interface (llmProvider.ts)]
        LocalStorage[Local Persistence Adapter (Storage / IndexedDB)]
    end

    subgraph Pluggable_Inference [Modular AI Inference Options (Future)]
        LocalEngine[Option A: On-Device WASM/WebGPU WebLLM]
        DaemonEngine[Option B: Localhost Ollama/llama.cpp Daemon]
        ServerlessEngine[Option C: Serverless Secure Endpoint / API Adapter]
    end

    subgraph Future_Cloud_Services [Future Scalability (Evaluated Later)]
        SupabaseService[Supabase: Auth, Postgres DB, Edge Functions (Unimplemented)]
    end

    UI --> State
    UI --> DocParser
    State --> LocalStorage
    UI --> AIAdapter
    AIAdapter -.->|Pluggable| LocalEngine
    AIAdapter -.->|Pluggable| DaemonEngine
    AIAdapter -.->|Pluggable| ServerlessEngine
    State -.->|Future Evaluation| SupabaseService
```

---

## 4. AI Provider Architecture & On-Device Constraint Handling

### 4.1 Modular Provider Abstraction
To ensure MindPilot is never locked into a single inference method, AI operations are encapsulated behind a clean TypeScript abstraction:

```typescript
export interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LLMResponseStream {
  stream: AsyncIterable<string>;
  abort: () => void;
}

export interface ILLMProvider {
  id: string;
  name: string;
  isOnDevice: boolean;
  isReady: () => Promise<boolean>;
  generateText: (messages: LLMMessage[]) => Promise<string>;
  streamText: (messages: LLMMessage[]) => Promise<LLMResponseStream>;
}
```

### 4.2 Current State: AI Models NOT YET Integrated
- **No model is hardcoded or integrated in Phase 1.**
- Development proceeds with a mock / pedagogical stub provider to verify UX flows, interaction states, and error handling safely.
- **Zero API Key Leakage Policy:** When a cloud or hybrid model is evaluated, private API keys **MUST NEVER** be placed in client-side Vite bundles (`VITE_*` keys). All authenticated calls must route through a dedicated server-side endpoint or serverless function.
- On-device runtimes (WebLLM / local daemon) will be benchmarked in Phase 3 without violating the zero-secret policy.

---

## 5. Persistence & Future Cloud Evaluation (Supabase)

- **Phase 1 Baseline:** State is managed client-side via React state and local storage adapters.
- **Future Persistence Evaluation:** **Supabase** (Postgres, Row Level Security, Auth, Edge Functions) is documented as an approved candidate for future multi-device synchronization and secure serverless API proxies.
- **Premature Configuration Forbidden:** Supabase or other cloud databases **are not configured at this stage**. The local experience is built first.

---

## 6. Directory Structure (Repository Root)

```text
zyrex-learning-assistant/
├── index.html                   # HTML entry point with Manrope/Inter font preconnects
├── package.json                 # Dependencies and scripts (React 19, Vite, Tailwind CSS)
├── tsconfig.json                # TypeScript compiler config
├── tsconfig.app.json            # Application TS config
├── tsconfig.node.json           # Vite node TS config
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind CSS design system token configuration
├── postcss.config.js            # PostCSS configuration
├── src/
│   ├── main.tsx                 # Application bootstrap
│   ├── App.tsx                  # Root component / routing shell
│   ├── index.css                # Base Tailwind directives and typography defaults
│   ├── components/              # Reusable UI & layout components
│   │   ├── layout/              # Navbar, Sidebar, Page Shell, Footer
│   │   ├── ui/                  # Buttons, Cards, Badges, Tabs, Inputs
│   │   └── landing/             # Landing page hero, pillars, preview sections
│   ├── types/                   # TypeScript interfaces (Learning, Roadmap, Quiz)
│   ├── services/                # Modular AI adapter & storage abstractions
│   └── constants/               # Design tokens, subject catalogues, navigation links
├── AGENTS.md                    # Multi-agent operating rules
├── ARCHITECTURE.md              # Technical architecture specification (this file)
├── DESIGN_SYSTEM.md             # Visual design tokens and UI guidelines
├── MEMORY.md                    # Project memory and continuity record
├── PRD.md                       # Product requirements document
├── README.md                    # Project overview
├── SECURITY.md                  # Security guidelines and pre-release checklist
├── TASKS.md                     # Phased development backlog
└── Universal_Coding_Agent_Prompt.md
```

---

## 7. Status of Architectural Decisions

| Decision Item | Chosen Direction | Status |
|---|---|---|
| **Frontend Stack** | React 19 + Vite + TypeScript + Tailwind CSS v3 | **APPROVED & INITIALIZED** |
| **Visual Design Tokens** | White canvas (`#FFFFFF`), bold black typography (`#111111`), cream/beige accents (`#F7F3EB`, `#E9DFD0`) | **APPROVED** |
| **AI Inference Engine** | Modular `ILLMProvider` interface; on-device evaluation scheduled for Phase 3 | **PLANNED (Not yet integrated)** |
| **Authentication & Cloud DB**| Client-side state first; Supabase candidate for later evaluation | **EVALUATION DEFERRED** |
| **Private Credential Policy** | Server-side proxy for any external API; never in browser bundle | **MANDATORY POLICY** |
