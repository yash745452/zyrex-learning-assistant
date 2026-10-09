# Product Requirements Document (PRD) — MindPilot

**Product Name:** MindPilot  
**Team:** Zyrex  
**Repository:** zyrex-learning-assistant  
**Hackathon Problem Statement:** PS-06 On-device Personalized Learning Assistant | Code Carnival 3.0  
**Status:** In Review / Specification Baseline  
**Last Updated:** 2026-10-09  

---

## 1. Product Overview

MindPilot is an AI-powered personalized learning assistant specifically designed for undergraduate engineering (BTech) students. Developed by Team Zyrex, MindPilot addresses the steep cognitive curve, dense curriculum, and unstructured study materials that engineering undergraduates face across core subjects (Computer Science, Electronics, Mechanical, Mathematics, etc.).

By functioning as an on-device/privacy-preserving tutor, MindPilot empowers students to deconstruct complex technical concepts, digest class notes and textbooks, generate structured learning roadmaps, practice through adaptive quizzes, and monitor their mastery over time.

---

## 2. Problem Statement & Target Users

### 2.1 The Problem
- **Dense & Abstract Technical Concepts:** Engineering coursework moves rapidly from theoretical foundations to complex implementations, leaving students with conceptual gaps.
- **Unstructured & Overwhelming Materials:** Students accumulate hundreds of pages of unindexed lecture slides, professor notes, and reference PDFs without guided synthesis.
- **Generic AI Flaws:** Standard conversational chatbots provide shallow explanations, hallucinate technical facts, lack pedagogical scaffolding, and often send proprietary student study materials to external cloud servers.
- **Connectivity & Accessibility Constraints:** Students frequently study in campus hostels or offline environments with unreliable internet connectivity.

### 2.2 Target Users
- **Primary Persona:** BTech engineering students across 1st to 4th year studying computer science, electrical engineering, mathematics, and related disciplines.
- **User Characteristics:**
  - Need clear, rigorous, step-by-step conceptual breakdowns (equations, code, diagrams, analogies).
  - Study from specific professor handouts, course syllabi, and reference textbooks.
  - Require actionable practice (gate/semester exam style questions, coding exercises, formula applications).

---

## 3. Confirmed Product Goals (Core Capabilities)

1. **AI Learning Tutor:** An interactive technical tutor providing conceptual explanations, Socratic questioning, code breakdowns, and analogies tailored to engineering depth.
2. **Study-Material Assistant:** Document digestion and query engine allowing students to ingest course PDFs, syllabus files, and lecture notes for grounded context.
3. **Personalized Learning Roadmaps:** Dynamic syllabus/curriculum roadmaps tailored to the student's target exam or topic deadline, tracking unit-by-unit progression.
4. **AI-Generated Quizzes & Practice Exercises:** Adaptive technical problem sets, multiple-choice questions, and conceptual exercises with explanatory answer keys.
5. **Student Accounts & Learning Progress:** Local student profiles capturing mastered concepts, retention metrics, ongoing roadmaps, and session history.

---

## 4. Proposed MVP Features

### 4.1 Feature 1: Technical Tutor Workspace
- Conversational chat interface optimized for engineering discourse (code blocks, formulas, step-by-step derivation).
- Conversation session management (create topic, resume session, clear context).
- Multi-state responsiveness (idle, thinking/inference, streaming response, error/retry).

### 4.2 Feature 2: Course Material Ingestion & Retrieval
- Local document upload support (PDF, TXT, Markdown).
- Document parsing and localized chunking.
- In-context grounded query answers referencing specific document sections.

### 4.3 Feature 3: Adaptive Roadmap Engine
- Input course subject, available study timeline, and target proficiency.
- Generates milestone-driven roadmap with structured nodes/modules.
- Checkpoint verification allowing students to mark modules as Complete or In-Review.

### 4.4 Feature 4: Practice & Self-Assessment Hub
- Quiz generation directly from uploaded materials or selected roadmap topics.
- Instant evaluation with pedagogical explanations for incorrect answers.
- Score recording and weak-spot tagging.

### 4.5 Feature 5: Progress & Mastery Analytics
- Dashboard displaying active roadmaps, quiz performance trends, and study streak/hours.
- Clean profile interface storing student preferences and learning focus.

---

## 5. Explicit Non-Goals for MVP

- **Multi-tenant Institutional LMS:** Not building an institutional admin portal for college professors to grade assignments.
- **Video & Audio Synthesis:** No automated voice cloning, video lecture generation, or avatars.
- **Social Networking:** No student chat rooms, social feeds, or peer matching in the MVP.
- **Cloud-Only Dependency:** Not relying exclusively on paid, proprietary cloud APIs without on-device capability validation.

---

## 6. Primary User Journeys

### Journey 1: Concept Mastery via Interactive Tutor
1. Student selects a subject (e.g., "Operating Systems — Virtual Memory").
2. Student asks the AI tutor to explain paging vs. segmentation with diagrams and code examples.
3. Tutor guides the student with step-by-step reasoning, followed by a comprehension check.
4. Session is saved to the student's topic history.

### Journey 2: Studying from Lecture Slides
1. Student uploads a 20-page lecture PDF on "Database Normalization (1NF to BCNF)".
2. System digests the document locally.
3. Student asks: "Explain BCNF decomposition using the example on slide 14."
4. Assistant generates the exact breakdown grounded in the student's lecture slides.

### Journey 3: Exam Prep Roadmap & Quizzing
1. Student enters "Data Structures & Algorithms in 3 Weeks".
2. MindPilot generates a 6-module roadmap (Arrays/Lists, Trees, Graphs, DP, etc.).
3. Student finishes Trees and clicks "Generate Module Quiz".
4. Student completes 5 practice problems, receives feedback on balanced BST rotations, and advances the roadmap status.

---

## 7. UX & Screen Architecture Baseline

The design vision anticipates **15 primary screen types** across the learning lifecycle:
1. Landing / Welcoming Overview
2. Student Onboarding & Subject Selection
3. Main Learning Dashboard
4. AI Tutor Chat View
5. Study Material Library & Upload Center
6. Document Reader & Context View
7. Learning Roadmap Overview
8. Roadmap Module Detail / Step View
9. Practice & Quiz Hub
10. Active Quiz Assessment Interface
11. Quiz Results & Solution Analysis
12. Concept Mastery & Analytics Matrix
13. Student Profile & Settings
14. System Status & Local Model Settings
15. Empty / Error / Offline Fallback States

*(Note: Official design exports are pending integration into the repository; screen specifications will adapt as design assets are supplied.)*

---

## 8. Acceptance Criteria

- **Pedagogical Accuracy:** Technical explanations must be mathematically and computationally sound without unsupported hallucinated assertions.
- **Local Privacy & Security:** Student documents and conversations must be processed with clear boundaries and respect local storage constraints.
- **Design System Fidelity:** Interfaces must strictly adhere to the white-first palette, bold black typography, and selective cream/beige accents defined in `DESIGN_SYSTEM.md`.
- **Interaction Resilience:** Every view must handle Initial, Loading, Streaming, Empty, Error, and Disabled states.

---

## 9. Assumptions & Open Product Questions

### Verified Facts
- Project is named MindPilot, developed by Team Zyrex.
- Hackathon PS-06 explicitly specifies an **"On-device Personalized Learning Assistant"**.

### Labeled Assumptions
- *Assumption A1:* BTech students use standard modern laptops (Windows/macOS/Linux) with modern web browsers (Chrome/Edge/Firefox).
- *Assumption A2:* Initial documents to ingest will be predominantly text-based PDFs and syllabus text files.

### Open Questions (Requiring User / Hackathon Confirmation)
- **Q1 (Critical):** Does "On-device" mandate 100% offline inference on consumer hardware, or is a hybrid architecture (local primary + optional cloud fallback) permissible under PS-06 rules?
- **Q2:** When will the exported assets for the 15 UI/UX screens be provided in the repository?
- **Q3:** Which engineering branches and subjects should have pre-loaded starter roadmaps in the MVP?
