# Security Policy & Verification Checklist — MindPilot (SECURITY.md)

**Product:** MindPilot  
**Team:** Zyrex  
**Repository:** zyrex-learning-assistant  
**Status:** Security Baseline  
**Last Updated:** 2026-10-09  

---

## 1. Security Philosophy

MindPilot is engineered to assist engineering students with technical learning and personal study materials. Because educational materials may contain institutional coursework, personal notes, and syllabus materials, **student data privacy and client-side isolation are paramount**.

Security is treated as a continuous engineering practice, not a post-build cosmetic check.

---

## 2. Core Security Controls

### 2.1 Secrets & Credential Management
- **Zero Secrets in Code:** No API keys, model provider tokens, database credentials, or private certificates may be committed to Git, embedded in client JavaScript bundles, or printed in logs.
- **Client Bundle Isolation:** In client-side builds, verify that environment variables (`.env`) do not leak server-side secrets.
- **Git Hygiene:** Maintain a strict `.gitignore` covering `.env`, `.env.local`, node modules, temporary upload directories, and local model weight caches.

### 2.2 Student Data Privacy & Local Isolation
- **Local-First Default:** All uploaded lecture notes, student questions, quiz attempts, and generated roadmaps are stored locally on the student's machine (e.g., IndexedDB) and must never be exfiltrated to external analytics or third-party servers without explicit user consent.
- **Zero Involuntary Telemetry:** No tracking pixels, keystroke logging, or unsolicited cloud telemetry.

### 2.3 Document Upload & Ingestion Security
- **MIME & Content Validation:** Ingested files must be validated for allowed types (PDF, Markdown, plain text).
- **Size & Memory Quotas:** Impose strict client-side file size limits (e.g., max 25MB per document) to prevent browser memory exhaustion or Denial of Service (DoS) during client-side parsing.
- **No Path Traversal:** File references must be sanitized to prevent directory traversal or arbitrary local file access.
- **Sandboxed Parsing:** Document extraction (e.g., via `pdf.js`) must run within standard sandboxed browser constraints without shell or OS command execution.

### 2.4 AI Input & Output Sanitization
- **Prompt Injection Defense:** Ingested document chunks and student queries must be separated by strict system instruction boundaries to prevent adversarial prompt injection from overriding pedagogical tutor instructions.
- **Output Sanitization (XSS Prevention):**
  - All AI-generated markdown, LaTeX mathematical formulas, and code blocks must be sanitized (e.g., via DOMPurify) before rendering into the DOM.
  - Disable raw HTML rendering in markdown blocks to prevent Cross-Site Scripting (XSS).
- **Safe Model Boundaries:** Local model execution engines must be denied arbitrary file system, network, or OS execution capabilities.

### 2.5 Resource & Compute Limits
- **Inference Throttling:** On-device model inference must manage memory and thread utilization to avoid freezing student browser tabs or starving system RAM.
- **Graceful Timeouts:** All model inference calls and document chunking operations must implement explicit timeouts and cancellation tokens.

### 2.6 Supply Chain & Dependency Hygiene
- Audit all installed npm/python packages against known vulnerability databases (`npm audit`).
- Avoid unverified or typosquatted packages.
- Pin dependency versions in lockfiles (`package-lock.json`).

### 2.7 Error Handling & Information Disclosure
- **Fail Closed:** If a document cannot be parsed or model inference fails, the system must fail gracefully without exposing underlying internal system paths or memory traces.
- **Student-Friendly Messaging:** Display constructive, actionable error messages with retry actions rather than raw stack traces.

---

## 3. Pre-Release Security Checklist

Before marking any release or demo milestone complete, verify:

| # | Check | Requirement | Status |
|---|---|---|---|
| **SEC-01** | Secrets in Git | No API keys, secrets, or credentials in Git history or tracked files. | Verified Clean |
| **SEC-02** | XSS Prevention | Markdown parser strictly sanitizes HTML; no `dangerouslySetInnerHTML` with raw AI text. | Pending Implementation |
| **SEC-03** | Upload Boundaries | Client limits upload file size and validates document MIME types. | Pending Implementation |
| **SEC-04** | Prompt Injection | System prompt encapsulates untrusted document content in clear delimiters. | Pending Implementation |
| **SEC-05** | Local Privacy | Ingested lecture notes remain strictly on the local device. | Architectural Requirement |
| **SEC-06** | Dependency Audit | Zero high or critical vulnerabilities in package dependencies. | Pending Implementation |
