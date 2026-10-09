# AI CODING AGENT MASTER CONTEXT

**Purpose:** This file is a reusable bootstrap/context contract for AI coding agents working on software or product projects. It is distilled from the supplied reference-video set and then extended into an explicit step-by-step agent operating procedure.

**Important:** This is **not hackathon-specific** and should not force any particular technology stack, UI style, architecture, or feature set onto a future project. It defines **how the coding agent should think and work**. Project-specific requirements must come from the target repository and its project documents.

---

# PART A — MANDATORY AGENT BOOTSTRAP CONTRACT

## A1. READ THIS FIRST

Before changing code, treat this file as the agent's operating context.

You MUST:
1. Read this entire file before making substantial changes.
2. Inspect the target repository before creating, deleting, moving, or rewriting project files.
3. Read the repository's project-specific context files when present, especially `README.md`, `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md` / `DESIGN_SYSTEM.md`, `AGENTS.md` / `RULES.md`, `TASKS.md`, `MEMORY.md`, `SECURITY.md`, `CODE_STYLE.md`, and `TESTING.md`.
4. Treat the repository as the source of truth for the current implementation state.
5. Distinguish verified facts from assumptions, plans, and unknowns.
6. Work in small, explicit, verifiable steps.
7. Stop and report when a required decision cannot be resolved from the available context rather than inventing an answer.

## A2. PROJECT-ADAPTATION RULE

This context is a **method**, not a template to blindly copy.

The agent must adapt to:
- the actual product
- the actual users
- the actual requirements
- the actual repository structure
- the actual technology stack
- the actual design language
- the actual deployment target
- the actual constraints

Do NOT:
- impose Next.js because an example used Next.js
- impose Supabase because an example used Supabase
- impose a purple/blue palette because an example used one
- create example-project files solely because they appeared in a reference project
- copy a design-system example literally
- claim that a reference-video technique is already implemented in the target repository

## A3. SOURCE-OF-TRUTH HIERARCHY

Use this priority order when information conflicts:

1. Current repository code/configuration and tests
2. Project-specific requirements/context files in the repository
3. Explicit user instructions in the current task
4. Relevant reference material summarized in this file
5. General engineering judgment

When the current repository and this reusable context disagree about a project-specific implementation detail, follow the repository and project-specific instructions.

## A4. FACT-STATUS RULE

Use these labels internally and in progress updates when useful:

- `DONE` = verified complete
- `IN PROGRESS` = currently being implemented or refined
- `NEXT` = explicitly planned next action
- `UNKNOWN` = not established by evidence
- `BLOCKED` = cannot proceed safely without a missing dependency/decision

Never convert `planned` into `done` merely because code was generated.

## A5. BEFORE-EDIT GATE

Before every non-trivial edit, do this in order:

1. State the specific goal of the change.
2. Locate the relevant existing files/components/services.
3. Read the surrounding code and understand the current pattern.
4. Check whether the requested behavior already exists partially.
5. Check project documentation and task status.
6. Decide the smallest safe change.
7. Make the change.
8. Run the narrowest relevant verification.
9. Update task/memory documentation when the project uses them.
10. Summarize exactly what changed and what was verified.

## A6. ONE-STEP-AT-A-TIME EXECUTION

Do not dump an entire multi-week implementation into one unverified code generation step.

Prefer this loop:

`Understand → Plan one small change → Implement → Verify → Record → Next`

For larger work, split it into phases and gates.

## A7. VERIFICATION GATES

A phase is not complete until its acceptance criteria are met.

Every meaningful phase should answer:
- What changed?
- How was it tested?
- What evidence shows it works?
- What remains unknown?

If testing fails, fix the cause or report the blocker. Do not mark the task complete.

## A8. ASKING VS. PROCEEDING

Proceed without asking when the repository and project context provide enough information.

Ask only when:
- a missing decision materially changes architecture or product behavior
- there is a safety/security concern
- there are multiple incompatible interpretations with no source-of-truth decision
- the requested operation is irreversible and cannot be safely verified

Otherwise make the smallest reasonable, documented assumption and record it.

## A9. CHANGE-SCOPE DISCIPLINE

Prefer:
- small focused commits
- localized edits
- reuse of existing components/utilities
- no unrelated refactors
- no large dependency additions without justification
- no unnecessary file creation
- no architecture changes merely for elegance

Do not rewrite a working project from scratch simply because a generated alternative is easier.

## A10. AI-SPECIFIC SAFETY AND TRUTHFULNESS

The agent must never fabricate:
- completed features
- test results
- screenshots
- security findings
- user data
- production readiness
- external approvals
- performance numbers
- deployment state
- offline/on-device capabilities
- integration success

When a capability is only planned, say it is planned.

When a capability is partly implemented, describe the exact boundary.

When a claim depends on an external service, configuration, or hardware capability, verify it before claiming it works.

## A11. SECRETS AND CREDENTIALS

Never expose or hardcode secrets.

Do not commit:
- API keys
- database passwords
- access tokens
- service credentials
- private certificates
- production secrets

Use the project's approved secret-management mechanism.

Do not print secrets into logs, screenshots, tickets, commits, or generated documentation.

## A12. DOCUMENTATION CONTINUITY

Do not make project knowledge live only in chat.

Keep stable project state in repository documentation.

At minimum, where appropriate:
- `README.md` for onboarding
- `PRD.md` for product definition
- `ARCHITECTURE.md` for structure/data flow
- `DESIGN_SYSTEM.md` for visual rules
- `AGENTS.md` / `RULES.md` for agent/contributor rules
- `TASKS.md` for execution tracking
- `MEMORY.md` for continuity
- `SECURITY.md` for security requirements
- `TESTING.md` for verification strategy

## A13. DOCUMENTATION-DRIVEN DEVELOPMENT LOOP

For a new project, the recommended order is:

`Problem → PRD → UX → Design System → Architecture → Agent Rules → Tasks → Implementation → Testing → Security → Launch Readiness → Memory → Commit`

For an existing project, inspect the current state first and continue from the earliest missing/incorrect stage rather than rebuilding everything.

## A14. REQUIRED AGENT PROGRESS FORMAT

For substantial work, use a compact progress format such as:

**DONE**
- verified completed items

**IN PROGRESS**
- active items

**UNKNOWN / NEEDS VERIFICATION**
- unresolved items

**NEXT**
- the single highest-priority next action

Do not report a green checkmark for unverified work.

## A15. FINAL “DONE” GATE

Before declaring a project or feature finished, verify as applicable:

- functionality
- error/loading/empty states
- responsive behavior
- accessibility
- security
- performance/reliability
- integration behavior
- content authenticity
- privacy/legal requirements
- deployment configuration
- documentation
- repository cleanliness

Then update `MEMORY.md` / `TASKS.md` as appropriate and commit the change.

---

# PART B — REFERENCE-VIDEO MASTER KNOWLEDGE

The remainder of this file preserves the detailed source-derived knowledge distilled from the complete supplied video set.

# Future Projects Master Context — Vibe Coding, AI-Assisted Product Design, Launch Readiness & Security

**Purpose:** Reusable reference distilled from the 15 reference videos in `filesbeforevibecode.zip`.

**Scope:** This document is intentionally **not hackathon-specific**. It is meant to be carried into future software/product projects, especially projects built with AI coding agents such as Claude Code, Cursor, Copilot, Antigravity, or similar tools.

**Core philosophy:**

> Use AI to accelerate engineering, not to replace product thinking, design thinking, architecture, validation, security, or human judgment.

---

## 0. SOURCE FIDELITY / HOW TO USE THIS CONTEXT

This context was created by analyzing **all 15 videos** in the supplied ZIP at the visual/frame level, including their on-screen text, examples, diagrams, UI screenshots, lists, and repeated themes.

### Evidence rules

- A point presented as an **exact list item** is copied/reconstructed from text visibly shown in the source video.
- A point presented as a **principle / interpretation / synthesis** is a conclusion drawn from repeated source material.
- The source videos contain examples built for other projects and should **not** be copied blindly into a new project.
- Different videos sometimes use different filenames for the same role, e.g. `RULES.md` versus `AGENTS.md`, or `DESIGN.md` versus `DESIGN_SYSTEM.md`. Treat these as role-equivalents rather than assuming one mandatory filename.
- One source video titled **“20 things to protect before your vibecoded website goes public”** visibly exposes 19 distinct checklist items; the 20th item was not legible/visible in the captured frames. This document does **not** invent the missing item.
- The videos are short social/video explainers. The document therefore captures the actionable content visible in the videos and does not pretend to be a word-for-word transcript of every spoken sentence.

---

# 1. SOURCE INVENTORY — ALL 15 VIDEOS

| # | Source video | Approx. duration | Main topic |
|---|---|---:|---|
| 1 | `filesbeforevibecode.mp4` | 96.1s | Six documentation files before vibe coding; project continuity; design/architecture/task memory |
| 2 | `beforevibecodingthings.mp4` | 67.8s | Why planning documents should exist before AI coding; PRD, architecture, design, phases, memory |
| 3 | `aislop_fix.mp4` | 35.8s | 30 reasons a website looks vibe-coded / AI-slop design patterns to remove |
| 4 | `documentsbeforewebsite.mp4` | 7.7s | Core project documents: PRD, Design System, Architecture, AGENTS instructions |
| 5 | `frontendwithAI.mp4` | 36.3s | Building frontend with AI without “AI slop”; design inspiration, design docs, Figma/MCP, design skills, prototyping |
| 6 | `Video-2459.mp4` | 28.1s | AI-built app security checks, Part 4: checks 55–70 |
| 7 | `Video-60417.mp4` | 20.8s | AI-built app security checks, Part 3: checks 37–54 |
| 8 | `Video-17835.mp4` | 30.7s | AI-built app security checks, Part 2: checks 19–36 |
| 9 | `Video-88584.mp4` | 35.7s | Quick security checklist for AI-built apps: 18 checks |
| 10 | `Video-76164.mp4` | 55.6s | AI-built app security checks, Part 1: checks 1–20, with visual examples |
| 11 | `Video-76629.mp4` | 27.6s | 20 things to add before launching a site |
| 12 | `Video-25607.mp4` | 31.9s | Privacy, consent, accessibility, trust, legal and content checks before public launch |
| 13 | `Video-37295.mp4` | 26.5s | 20 reasons an app looks vibe-coded / generic |
| 14 | `Video-2763.mp4` | 23.4s | Reliability/performance/operations checks before public release |
| 15 | `20featurestowebsite.mp4` | 24.3s | 20 practical website/product polish features |

---

# 2. THE CENTRAL IDEA ACROSS THE ENTIRE VIDEO SET

The videos are connected by one larger methodology:

## Do not start with “generate me a website.”

Start with:

1. **What are we building?**
2. **Who is it for?**
3. **What problem does it solve?**
4. **What is the MVP?**
5. **How does the system work?**
6. **What should the interface look and feel like?**
7. **What rules should AI/human contributors follow?**
8. **What are the implementation phases?**
9. **How will project memory be maintained?**
10. **How will the product be tested, secured, and prepared for launch?**

The videos repeatedly argue that AI becomes much more useful when it is given **structured project context**.

---

# 3. PRE-VIBE-CODING DOCUMENTATION METHODOLOGY

## 3.1 The six core files

The strongest recurring “before vibe coding” framework is a six-document project context set.

### File 1 — `PRD.md`

**Role:** Product Requirements Document.

The PRD answers:

- What are we building?
- Why are we building it?
- Who is it for?
- What problem are we solving?
- What should the first version contain?
- What is explicitly outside the MVP?

The example PRD shown in the videos contains sections such as:

- Product Overview
- Problem Statement
- Goals
- Target Users
- Core Features (MVP)

It also shows metadata such as:

- version
- date
- author/team
- status
- target launch

### General PRD principle

The PRD should create a **single product definition** before implementation begins.

A good PRD prevents AI from inventing the product as it codes.

---

### File 2 — `ARCHITECTURE.md`

**Role:** Explain how the product is technically structured.

The example architecture document includes:

- High-Level Architecture
- Technology Stack
- Folder Structure
- Data Flow
- Scalability / Future Considerations
- Key design decisions

One example shows a high-level flow like:

`User / Browser → Next.js Frontend → Next.js Backend / API Routes → Supabase`

That exact stack belongs to the example project. The reusable lesson is to explicitly document:

- frontend
- backend/server logic
- database
- authentication
- storage
- external services
- deployment
- data movement
- boundaries between layers

### Folder structure principle

The architecture document should explain where different kinds of code belong.

The videos emphasize that AI should not randomly invent new folders or move files without understanding the existing project structure.

---

### File 3 — `DESIGN.md` / `DESIGN_SYSTEM.md`

**Role:** Define the visual language and UI rules before implementation.

The example design system covers:

- Design Principles
- Color Palette
- Typography
- UI Components
- Spacing
- Border Radius
- Responsive Breakpoints
- Other interface rules

The example explicitly defines principles such as:

- User-Centered
- Minimal & Clean
- Consistent

The important reusable rule is:

> The AI should implement a defined visual system instead of improvising a different style for every screen.

### Example color palette shown in one source

The example project uses:

- Primary: `#6366F1`
- Secondary: `#8B5CF6`
- Success: `#10B981`
- Warning: `#F59E0B`
- Error: `#EF4444`
- Background: a light background value

**Important:** This palette is an example only. It is NOT a universal design recommendation. Other videos explicitly warn against automatically falling into generic purple/blue “AI-looking” styling.

### Example typography

The example design system uses **Inter** as its primary font.

Again, the reusable rule is not “always use Inter.” The reusable rule is:

> Choose typography intentionally and document it once.

---

### File 4 — `RULES.md` / `AGENTS.md`

**Role:** Tell AI coding agents and human contributors how to work inside the project.

The source examples describe this document as the place for:

- development rules
- coding standards
- consistency rules
- maintainability rules
- security expectations
- collaboration rules

One source explicitly presents `AGENTS.md` as instructions for AI coding agents such as Claude Code, Cursor, and Copilot.

### “Before You Start” rules visible in the source

The agent should:

- Read the PRD to understand product goals.
- Read the design document to understand UI/UX guidelines.
- Read the architecture document to understand technical structure.
- Check existing components and patterns.
- Understand the folder structure.
- Look at open issues, when applicable.

### General project rules visible in the source

- Use TypeScript and an appropriate current Next.js version.
- Follow the design system.
- Reuse existing components.
- Keep code modular and scalable.
- Write clean, readable code.
- Add comments for complex logic.
- Do not create unnecessary files.
- Follow the project structure.

### Code guidelines shown in the source

- Prefer functional components.
- Use meaningful variable and function names.
- Prefer efficient/reusable UI components.
- Keep components small and reusable.
- Follow the project’s code style.
- Handle loading states.
- Handle error states.
- Handle empty states.
- Ensure responsiveness.
- Write semantic/accessible code.

### Security and best-practice rules shown in the source

- Never expose API keys or sensitive data.
- Use environment variables such as `.env` for secrets.
- Validate user inputs.
- Follow authentication and authorization rules.
- Implement error handling.
- Avoid hardcoding secrets.
- Follow the security documentation.
- Be mindful of data privacy and user safety.

### Small-change philosophy

The `RULES.md` example strongly emphasizes:

- follow project documentation before making changes
- keep code clean/readable/well structured
- prioritize simplicity and maintainability
- do not duplicate logic
- reuse existing components/utilities/services
- make small, focused changes
- do not modify unrelated files
- write self-explanatory code
- use meaningful names

This is one of the most reusable lessons in the entire set.

---

### File 5 — `TASKS.md`

**Role:** Turn the project into an explicit development plan.

The example task document contains:

- total tasks
- completed tasks
- in-progress tasks
- priorities
- statuses
- project phases
- numbered subtasks
- clear deliverables

The example is broken into phases such as:

- Phase 1: Project Setup
- Phase 2: Authentication
- Phase 3: Notes Management

The important principle is to make the build **incremental and trackable**.

### Task-writing rule

Each task should be small enough that:

- a human knows what “done” means
- an AI agent can implement it without inventing scope
- the change can be tested
- the status can be updated clearly

---

### File 6 — `MEMORY.md`

**Role:** Maintain project continuity across sessions, agents, contributors, and accounts.

The source describes project memory as a document containing:

- current project state
- important context
- progress
- things to remember
- current phase
- completed work
- work in progress

The example visually tracks things like:

- last updated time/date
- current phase
- current status
- completed tasks
- in-progress tasks

### Memory rule

Update this file regularly.

It should make it possible for a new AI agent or new contributor to answer:

> “What has happened, where are we now, what is being worked on, and what should happen next?”

without needing the previous chat history.

---

# 4. EXPANDED PROJECT DOCUMENTATION SET

Another source video shows a richer documentation folder containing documents such as:

- `PRD.md`
- `AGENTS.md`
- `DESIGN_SYSTEM.md`
- `ARCHITECTURE.md`
- `SECURITY.md`
- `CODE_STYLE.md`
- `TESTING.md`
- `README.md`

This does **not** conflict with the six-file model.

The six-file model is the compact starting point.

The expanded set adds specialized documents when the project needs them.

## Recommended role mapping for future projects

- `PRD.md` → product definition
- `ARCHITECTURE.md` → technical structure
- `DESIGN_SYSTEM.md` → UI/UX system
- `AGENTS.md` → AI/human working rules
- `TASKS.md` → implementation plan
- `MEMORY.md` → continuity and state
- `SECURITY.md` → security requirements/checklist
- `CODE_STYLE.md` → detailed code conventions
- `TESTING.md` → testing strategy
- `README.md` → onboarding and practical setup

Not every project requires every file, but important complexity should be documented somewhere stable.

---

# 5. FRONTEND WITH AI — THE “NO AI SLOP” WORKFLOW

The frontend-with-AI video repeatedly demonstrates that good AI-generated frontend work depends on **design input and tooling**, not only code prompts.

## Visible concepts and resources from the video

The video demonstrates or references:

1. Use design inspiration instead of starting from an empty canvas.
2. Use a `design.md` document to formalize the visual direction.
3. Use curated UI/design libraries or inspiration sources such as **21st.dev**.
4. Use **Stitch** as a rapid UI/prototyping tool.
5. Use **Figma** as a design source.
6. Connect design information to an AI coding environment using an **MCP-style workflow**.
7. Use **UI UX Pro Max** as a resource/tool reference.
8. Use Anthropic’s **frontend-design** skill / `SKILL.md` style instructions.
9. Use documented design resources/skills rather than relying only on free-form prompting.
10. The video ends by encouraging the viewer to comment **“design”** for the resource document.

### Important evidence note

The social video visually demonstrates these resources and workflow elements, but it does not expose a clean numbered 1–10 transcript in the captured frames. Therefore this section intentionally records the **visible/repeated concepts** rather than inventing an exact numbered order for every spoken point.

---

# 6. WHAT “AI-ASSISTED FRONTEND” SHOULD MEAN

The source material suggests this workflow:

`Design inspiration → Define design system → Prototype/iterate → Feed design context into AI → Implement progressively → Review/refine`

The workflow should NOT be:

`One giant prompt → whole app generated → accept whatever appears`

## Practical rule

Give the AI:

- product requirements
- intended users
- design system
- page/screen inventory
- existing component patterns
- architecture
- constraints
- coding rules
- validation requirements

Then ask it to make focused changes.

---

# 7. ANTI-“AI SLOP” / VISUAL DESIGN PRINCIPLES

Two videos are dedicated almost entirely to why AI-generated sites look generic or obviously vibe-coded.

The correct interpretation is not that every item below is universally forbidden.

The deeper rule is:

> Avoid design choices that look copied from a generic AI template when they do not serve the product.

---

## 7.1 `Video-37295.mp4` — 20 reasons an app looks vibe-coded

Exact visible list:

1. Purple-to-blue gradient
2. Gradient hero text
3. Emojis in your headings
4. Inter font everywhere
5. Colored border cards
6. Glassmorphism cards
7. Low-contrast dark mode
8. 3 icon boxes in a row
9. Badge above the headline
10. Lucide icons everywhere
11. Untouched shadcn UI
12. Fade-in on scroll
13. Cursor-following beam
14. Buttons fade on hover
15. Inconsistent spacing
16. Em dashes everywhere
17. Generic buzzword copy
18. Serif italic accents
19. Space Grotesk + Instrument Serif
20. **Not legible/visible in the supplied source capture**

### Deeper design lessons from this video

- A gradient is not bad because it is a gradient; an arbitrary “purple/blue AI gradient” is a recognizable cliché.
- Typography should have a reason. Installing fashionable fonts is not a design system.
- Component libraries should be customized to the product instead of shipped in their untouched default appearance.
- Decorative motion should communicate something or enhance interaction.
- Consistent spacing is more important than adding more components.
- Avoid generic marketing copy that could describe any startup.
- Do not add visual effects simply because AI knows how to code them.

---

## 7.2 `aislop_fix.mp4` — 30 reasons a site looks vibe-coded

Exact visible list:

1. Harsh gradients
2. Lucide icons
3. Pure white background
4. Rainbow coloring
5. Drop shadows
6. 3 feature cards in a row
7. Emojis
8. Liquid glass
9. Em dashes
10. Inter / Geist / Space Grotesk
11. Checkmark bullets
12. Pricing tiers
13. Fake logos
14. Terminal window
15. “It’s not, it’s” style copy / contrast-copy cliché
16. Checkmark bullets
17. Pricing tiers
18. No real product demos
19. Soft corner radius
20. Purple and black
21. No skeleton loaders
22. Radial orbs
23. Dot grids
24. Sparkle icons
25. Animated arrows
26. No TOS
27. No privacy policy
28. Hover animations
29. Neon colors
30. Basic pastel colors

### Deeper lesson

This video expands the anti-slop idea beyond pure aesthetics into **content authenticity and completeness**:

- Fake social proof is worse than plain design.
- A “terminal-looking” block does not make a technical product credible.
- Excessive soft-radius cards, neon accents, or decorative orbs can create a template feel.
- A polished site still needs real product evidence.
- Legal/trust pages matter.
- Loading states matter.
- Interaction should feel intentional rather than ornamental.

### Important nuance

Some of these items can be perfectly valid in the right context. For example:

- Lucide icons can be good.
- Inter can be good.
- Pastel colors can be good.
- Dark mode can be good.
- Rounded cards can be good.

The warning is about **automatic, generic combinations** and lack of product-specific reasoning.

---

# 8. WEBSITE / PRODUCT POLISH — 20 FEATURE CHECKLIST

## `20featurestowebsite.mp4`

Exact visible list:

1. Dark mode toggle
2. Simple cookie banner
3. Site search
4. Top button / back-to-top button
5. Mobile menus
6. Loading animations
7. Hover states
8. Scroll progress bars
9. Copy button
10. Print stylesheet
11. Sticky headers
12. Skip to content
13. PW visibility toggle / password visibility toggle
14. UTM tracking
15. Form success state
16. Form error state
17. Confirmation modals
18. Last updated date
19. Expandable FAQ
20. Floating contact

### What this means for future products

A product should not be treated as complete once the happy-path screen exists.

Think about:

- interaction states
- accessibility navigation
- mobile behavior
- feedback after actions
- search/discovery
- form handling
- trust and recency
- support/contact paths
- analytics/attribution where appropriate

---

# 9. PRE-LAUNCH WEBSITE CHECKLIST

## `Video-76629.mp4` — 20 things to tell Claude to add before launching

Exact visible list:

1. Custom 404 page
2. CTA above the fold
3. Internal links
4. Thank-you page
5. Breadcrumbs
6. Case studies
7. FAQs
8. Response-time promise
9. Sticky mobile CTA
10. `robots.txt`
11. Unique page titles
12. Unique meta descriptions
13. Social share image
14. Maps + directions
15. Real reviews
16. Alt text on images
17. Local schema
18. PP page / Privacy Policy page
19. Google Analytics
20. Real photo of your team

### Deeper categories

#### Navigation / structure

- internal links
- breadcrumbs
- 404 page
- sticky/mobile CTA

#### Conversion / trust

- CTA above the fold
- thank-you page
- case studies
- FAQs
- response-time promise
- real reviews
- real team photo

#### SEO / discoverability

- unique titles
- unique meta descriptions
- social share image
- `robots.txt`
- local schema

#### Accessibility / content quality

- alt text

#### Location / local business

- maps and directions

#### Analytics / operations

- Google Analytics

### General lesson

AI-generated sites often stop at the visible UI. A launch-ready site also needs the less-visible infrastructure and content surrounding it.

---

# 10. PRIVACY / CONSENT / ACCESSIBILITY / TRUST CHECKLIST

## `Video-25607.mp4`

The video title says **20 things**, but the captured source visibly exposes **19 distinct items**. Do not invent the 20th.

Visible checklist items:

1. Privacy policy page
2. T&Cs page
3. Cookies policy
4. Refund policy
5. Form consent
6. Check for cookie consent
7. Only collect necessary data
8. Check tracking
9. Check colour contrast
10. Fix accessibility
11. Alt text on images
12. Check 3rd-party embeds
13. Clear button labels
14. Keyboard-friendly forms
15. Remove fake reviews
16. Check copyright on images
17. Check local laws
18. Add real business details
19. Remove unsupported claims
20. **Not legible/visible in the supplied source capture**

### Deeper lesson

Launch quality includes:

- privacy transparency
- consent
- data minimization
- accessibility
- keyboard usability
- content authenticity
- rights/copyright
- local legal requirements
- accurate claims
- accurate business information

This also connects directly to the security and trust themes in the other videos.

---

# 11. RELIABILITY / PERFORMANCE / OPERATIONS BEFORE PUBLIC RELEASE

## `Video-2763.mp4` — 20 things to protect before the site goes public

Exact visible list:

1. Add rate limiting
2. Set API limits
3. Set spending caps
4. Add error handling
5. Add loading states
6. Add empty states
7. Handle failed requests
8. Handle API timeouts
9. Prevent duplicate subscriptions
10. Prevent duplicate payments
11. Optimize DB queries
12. Add DB indexes
13. Paginate large results
14. Compress files
15. Limit upload size
16. Cache repeat requests
17. Uptime monitoring
18. Error logging
19. Test simultaneous users
20. Test backup restore

### Deeper categories

#### API protection

- rate limiting
- API limits
- spending caps
- request failure handling
- timeout handling

#### UX resilience

- loading states
- empty states
- clear failures

#### Business correctness

- prevent duplicate subscriptions
- prevent duplicate payments

#### Database performance

- optimize queries
- indexes
- pagination

#### File/network performance

- compression
- upload limits
- caching

#### Operations

- uptime monitoring
- error logging
- concurrent-user testing
- backup/restore testing

### Key lesson

A system is not production-ready merely because the UI works on the developer’s laptop.

---

# 12. SECURITY — THE 70-CHECK LIBRARY

Four videos together form a numbered security sequence from **1 to 70**.

The most useful way to carry this into future projects is to keep both:

- the **original numbered checklist**, and
- category-based audits.

---

## 12.1 Security Checks 1–20 — `Video-76164.mp4`

Exact visible checks:

1. Check for SQL injection
2. Block cross-site scripting
3. Add CSRF protection
4. Validate file uploads
5. Fix broken object-level authorization
6. Add rate limiting
7. Secure JWT secrets
8. Keep API secrets server-side
9. Hash passwords securely
10. Add multi-factor authentication
11. Tighten CORS settings
12. Remove auth tokens from local storage
13. Enforce permissions server-side
14. Enable row-level security
15. Verify webhook signatures
16. Check for SSRF
17. Remove exposed source maps
18. Change default credentials
19. Keep sensitive data out of logs
20. Update vulnerable dependencies

### Visual examples shown in this video

The video demonstrates examples such as:

- SQL injection input attempts
- CSRF token protection
- broken object-level authorization
- rate limiting
- JWT signing secrets
- browser-versus-server secret placement
- password hashing
- MFA code entry
- auth tokens in `localStorage` versus safer cookie behavior
- server-side permission checks returning an authorization failure
- row-level security concept
- webhook signatures
- SSRF against internal network addresses
- exposed source maps
- default credentials
- sensitive data appearing in logs
- vulnerable dependency versions

---

## 12.2 Security Checks 19–36 — `Video-17835.mp4`

This source overlaps numbering because it is explicitly labeled as Part 2 and starts at 19.

Exact visible checks:

19. XSS
20. CSRF
21. Insecure file uploads
22. Path traversal
23. SSRF
24. Broken password reset
25. Weak session management
26. JWT secrets
27. Permissive CORS
28. Rate limits
29. Exposed environments
30. Default credentials
31. Unsigned webhooks
32. FE payment checks
33. IDOR / BOLA
34. APIs + user input
35. Exposed logs
36. Exposed source maps

### Interpretation of the abbreviations

- XSS = cross-site scripting
- CSRF = cross-site request forgery
- SSRF = server-side request forgery
- FE = frontend
- IDOR = insecure direct object reference
- BOLA = broken object-level authorization

The source is emphasizing that security checks must happen on the server rather than relying on a client-side interface.

---

## 12.3 Security Checks 37–54 — `Video-60417.mp4`

Exact visible checks:

37. Vulnerable dependencies
38. Malicious packages
39. Prompt injection
40. Unpermissioned AI access
41. Excessive DB permissions
42. Missing audit logs
43. No security monitoring
44. No backups/restore
45. Exposed internal dashboards
46. Missing security headers
47. Insecure cookie settings
48. Unencrypted data
49. Poor tenant isolation
50. Unreviewed code
51. Mass assignment
52. Command injection
53. Insecure deserialization
54. Misconfigured OAuth

### Deeper significance

This part expands security beyond classic web vulnerabilities into:

- AI-specific threats
- supply-chain risk
- database permissions
- operations/monitoring
- multi-tenant isolation
- CI/code-review discipline
- authorization
- serialization
- identity providers

---

## 12.4 Security Checks 55–70 — `Video-2459.mp4`

Exact visible checks:

55. No MFA
56. Account enumeration
57. Business logic abuse
58. Race conditions
59. Webhook replay
60. Insecure CI/CD
61. Untrusted build actions
62. Unpinned build dependencies
63. Checks fail open
64. Missing timeouts
65. Sensitive info leak
66. Invalid AI output
67. Excessive AI permissions
68. Sensitive browser storage
69. Open redirects
70. Unsecured endpoints

### Deeper significance

This part adds:

- identity hardening
- abuse-case thinking
- concurrency
- webhook authenticity/replay protection
- supply-chain/build security
- fail-safe behavior
- AI output validation
- AI privilege control
- browser-side storage protection
- endpoint exposure

---

# 13. QUICK 18-CHECK AI-APP SECURITY AUDIT

## `Video-88584.mp4`

This video compresses security into a shorter checklist.

Exact visible items:

1. Exposed DB credentials
2. Public `.env` files
3. Hardcoded secrets
4. Weak auth
5. Missing AuthZ check
6. Cross-user access
7. Open DB permissions
8. Cloud service misconfig
9. Unprotected admin route
10. Exposed prod debug tools
11. Logs leak secrets
12. Verbose prod errors
13. Secrets in git
14. Secrets in JS
15. Client-only security
16. Input validation
17. SQL injection
18. NoSQL injection

### How this relates to the 70-check list

The 18-check video is a compact “first pass” audit.

It reinforces the same themes:

- never expose credentials
- protect authentication and authorization
- validate input
- secure databases
- avoid client-only trust
- avoid secret leakage
- prevent injection
- avoid leaking production internals

---

# 14. SECURITY THEMES TO CARRY INTO EVERY PROJECT

The full 70-check sequence can be mentally regrouped into these reusable categories.

## A. Secrets and sensitive information

- no API keys in frontend code
- no `.env` exposure
- no secrets committed to Git
- no secrets embedded in JavaScript bundles
- no secrets in logs
- no unnecessary sensitive browser storage
- use server-side secret boundaries

## B. Authentication

- strong auth
- secure sessions
- safe password reset
- hashed passwords
- MFA where appropriate
- correct token handling
- safe cookies

## C. Authorization

- server-side authorization
- object-level authorization
- role checks
- row-level/database-level policies
- tenant isolation
- protected admin routes
- never trust frontend checks alone

## D. Input and injection security

- validate user input
- SQL injection prevention
- NoSQL injection prevention
- XSS prevention
- CSRF protection
- path traversal prevention
- command injection prevention
- insecure deserialization prevention
- SSRF protection

## E. API and endpoint security

- rate limits
- API limits
- timeouts
- secure CORS
- secure endpoints
- error handling
- output validation

## F. Webhook/integration security

- signature verification
- replay protection
- secure payment validation
- correct server-side checks

## G. AI security

- prompt-injection awareness
- input validation around AI calls
- validate AI output
- do not give AI excessive permissions
- use least privilege
- constrain what AI actions can modify
- prevent unpermissioned AI access

## H. Database/cloud security

- minimum necessary permissions
- encrypted data where required
- backups
- restore testing
- database monitoring
- secure cloud configuration
- tenant isolation

## I. Supply-chain/build security

- review dependencies
- update vulnerable dependencies
- avoid malicious packages
- pin important dependencies/build actions where appropriate
- secure CI/CD
- review code before production

## J. Observability and failure behavior

- audit logs
- security monitoring
- error logging
- safe production errors
- timeouts
- fail closed rather than fail open

---

# 15. CROSS-PROJECT DESIGN RULES DERIVED FROM THE VIDEOS

These are the most important design conclusions to reuse.

## Rule 1 — Design for the user, not the screenshot

Every screen should answer a user need.

Do not add:

- decorative widgets
- badges
- animations
- gradients
- cards
- icons

unless they improve comprehension, navigation, trust, or action.

## Rule 2 — Establish a visual system before building many screens

Decide intentionally:

- typography
- colors
- spacing
- component behavior
- radius
- shadows
- responsive behavior
- states

Then reuse them.

## Rule 3 — Consistency beats novelty

A unified design is usually more professional than every section having its own style.

## Rule 4 — Customize component libraries

Starting from shadcn, Tailwind components, Material components, or another library is fine.

Shipping them untouched can make the product look generic.

## Rule 5 — Authentic content beats decorative polish

Use:

- real screenshots
- real product evidence
- real data where appropriate
- real reviews only when they exist
- real business details

Never fabricate trust signals.

## Rule 6 — Avoid default “AI aesthetics” unless the product genuinely calls for them

Especially be cautious with automatic combinations like:

- purple/blue gradients
- glassmorphism
- glowing orbs
- neon accents
- excessive rounded cards
- decorative dot grids
- sparkle effects
- generic futuristic language

## Rule 7 — Typography needs intention

Do not choose fonts just because they are popular in AI-generated landing pages.

## Rule 8 — Motion must have a purpose

Use animation to communicate:

- progress
- state change
- hierarchy
- continuity
- feedback

Avoid animation simply because it is easy to generate.

---

# 16. PRODUCT UX / STATE DESIGN RULES

One repeated lesson across the polish and reliability videos is that every important interaction should be designed across states.

For each meaningful operation, think about:

1. Initial state
2. Loading state
3. Success state
4. Error state
5. Empty state
6. Disabled state
7. Permission-denied state
8. Retry state

Examples:

### Form

- empty
- typing
- validation error
- submitting
- success
- server error

### AI response

- idle
- thinking/loading
- response
- invalid/unsafe response
- retry
- unavailable/offline

### Data table

- loading
- populated
- empty
- pagination
- error

### Payment/action

- confirmation
- processing
- success
- failure
- duplicate-prevention

### Authentication

- sign in
- invalid credentials
- rate limited
- authenticated
- unauthorized
- expired session

---

# 17. ACCESSIBILITY / INCLUSIVE UX BASELINE

Source material specifically reinforces:

- color contrast
- alt text
- clear button labels
- keyboard-friendly forms
- skip-to-content
- responsive/mobile behavior
- semantic and accessible code

Reusable baseline:

- do not depend on color alone for status
- make controls understandable from their labels
- keyboard navigation must work
- focus state must be visible
- images need useful alt text when informative
- forms need labels and clear validation
- responsive behavior must be considered during design, not afterthought

---

# 18. TRUST / CONTENT QUALITY BASELINE

The launch-readiness videos repeatedly show that polished products need trustworthy content.

Check:

- real reviews only
- real company/team information
- accurate product claims
- accurate business details
- legal pages where appropriate
- copyright checks
- terms and conditions where appropriate
- privacy policy
- cookie/consent behavior where appropriate
- clear response/support expectations
- current/last-updated information where useful

The key rule:

> Never use fake trust signals to make a prototype look more mature than it is.

---

# 19. SEO / DISCOVERABILITY BASELINE FOR PUBLIC WEBSITES

The source material explicitly references:

- custom 404 page
- internal links
- breadcrumbs
- unique page titles
- unique meta descriptions
- social share image
- `robots.txt`
- local schema
- maps/directions
- alt text
- Google Analytics

These are launch considerations, not mandatory features for every internal app.

Use them when they match the product type.

---

# 20. PERFORMANCE / OPERATIONS BASELINE

For any app that can receive meaningful traffic:

- rate-limit APIs
- cap spending where paid APIs/services are involved
- add request timeouts
- handle failed requests
- provide loading/empty states
- prevent duplicate actions
- optimize DB queries
- use indexes appropriately
- paginate large data
- compress large assets
- limit uploads
- cache safe repeated requests
- add monitoring
- add error logging
- test concurrent users where relevant
- verify backups and restoration

---

# 21. AI-SPECIFIC ENGINEERING RULES

The videos contain a strong theme that AI systems require **more boundaries, not fewer**.

## Never allow the AI coding agent to assume authority it does not have.

A coding agent should:

- read project documentation first
- inspect existing code
- reuse current patterns
- avoid unrelated modifications
- avoid creating duplicate systems
- avoid secret exposure
- follow architecture
- follow the design system
- respect security requirements
- make focused changes
- explain uncertainty rather than inventing facts

## For AI features inside the product

Treat the model as an untrusted/uncertain component where appropriate.

Consider:

- prompt injection
- invalid output
- excessive AI permissions
- server-side secret boundaries
- user input validation
- output validation
- action authorization
- auditability
- safe failure

---

# 22. “DON’T LET VIBE CODING BECOME CODE CHAOS”

The source methodology strongly implies this structure:

`One Repository`

↓

`Project Documentation`

↓

`Design System`

↓

`Architecture`

↓

`Tasks / Phases`

↓

`AI Agent Rules`

↓

`Small Implementation Changes`

↓

`Testing / Verification`

↓

`Memory / State Update`

↓

`Commit / Push`

This is preferable to maintaining disconnected versions generated by different AI tools.

---

# 23. RECOMMENDED FUTURE PROJECT WORKFLOW

This is the reusable process distilled from all videos.

## Phase 0 — Understand the problem

Write:

- problem statement
- target users
- desired outcome
- constraints
- non-goals

## Phase 1 — Define the MVP

Write:

- must-have features
- should-have features
- later features
- explicit non-features

Do not confuse “things an AI can generate” with “things the product needs.”

## Phase 2 — Write the documentation

Create at minimum:

- `PRD.md`
- `ARCHITECTURE.md`
- `DESIGN_SYSTEM.md`
- `AGENTS.md`
- `TASKS.md`
- `MEMORY.md`

Add when useful:

- `SECURITY.md`
- `TESTING.md`
- `CODE_STYLE.md`
- `README.md`

## Phase 3 — Research before coding

Research:

- users
- competitors
- existing patterns
- design references
- technical options
- relevant constraints

Do not copy competitors blindly.

## Phase 4 — Design UX

Map:

- entry point
- core journey
- screens
- user actions
- feedback
- errors
- empty states
- mobile behavior

## Phase 5 — Create a design system

Define:

- colors
- typography
- spacing
- components
- states
- responsiveness
- accessibility rules

## Phase 6 — Prototype before large implementation

Use Figma/Stitch or another suitable tool to establish the major screens and interaction flow.

## Phase 7 — Build progressively

Ask AI to implement small, testable slices.

Example progression:

`App shell → navigation → screen 1 → screen 2 → shared components → data integration → states → polish`

## Phase 8 — Validate continuously

After each meaningful change:

- run the app
- inspect the affected screen
- verify the behavior
- check for regressions
- test error/empty/loading states

## Phase 9 — Security pass

Use the 70-check library as a broad audit reference.

Do not assume every item applies equally to every project, but explicitly assess applicability.

## Phase 10 — Launch/readiness pass

Review:

- UX
- accessibility
- SEO if public
- privacy/legal
- performance
- monitoring
- backup/restore
- analytics if required
- real content
- trust signals

## Phase 11 — Update memory and commit

Update:

- what changed
- what is complete
- what is in progress
- blockers
- next step

Then:

```bash
git add .
git commit -m "meaningful change"
git push
```

---

# 24. REUSABLE AI CODING AGENT BASELINE

Use the following as a starting point inside a future project’s `AGENTS.md` or equivalent.

## Agent working rules

### Before making changes

1. Read `PRD.md`.
2. Read `ARCHITECTURE.md`.
3. Read `DESIGN_SYSTEM.md`.
4. Read `MEMORY.md`.
5. Read relevant tasks in `TASKS.md`.
6. Read `SECURITY.md` when present.
7. Inspect the current project structure.
8. Inspect existing components and reusable utilities.
9. Identify whether the requested feature already partially exists.
10. State assumptions explicitly when something is uncertain.

### While coding

- Preserve the existing architecture unless a change is necessary.
- Prefer small, focused changes.
- Do not modify unrelated files.
- Reuse existing components.
- Avoid duplicate logic.
- Avoid unnecessary dependencies.
- Follow the design system.
- Handle loading, error, empty, and success states.
- Use accessible semantics.
- Keep naming meaningful.
- Keep modules focused.
- Avoid hardcoded secrets.
- Use environment variables for sensitive configuration.
- Never expose server-only secrets to client code.
- Validate user input.
- Enforce authorization server-side.
- Validate external/API responses.
- Follow the documented project structure.

### Before declaring a task complete

- Run the relevant checks.
- Inspect the actual UI when UI work changed.
- Confirm behavior rather than assuming it works.
- Check for obvious regressions.
- Update task status.
- Update memory when the project state changed.
- Report exactly what was completed.
- Report anything not verified.

### Forbidden behavior

- Do not fabricate test results.
- Do not claim a feature is complete without verification.
- Do not invent credentials, IDs, endpoints, metrics, screenshots, or integration results.
- Do not silently replace the project architecture.
- Do not create an unrelated parallel codebase.

---

# 25. REUSABLE `MEMORY.md` STRUCTURE

Use this structure for future projects.

```md
# Project Memory

## Last Updated
YYYY-MM-DD HH:MM

## Current Phase
[phase name]

## Product Summary
[one-paragraph summary]

## Current Status
- Completed:
- In Progress:
- Blocked:
- Needs Verification:

## Recent Decisions
- Decision:
- Why:

## Architecture Notes
- Frontend:
- Backend:
- Database:
- Auth:
- AI:
- Deployment:

## Design Notes
- Visual direction:
- Typography:
- Colors:
- Important components:

## Known Issues
- Issue:

## Next Actions
1.
2.
3.

## Important Constraints
- Constraint:

## Verification Notes
- Verified:
- Not yet verified:
```

---

# 26. REUSABLE `TASKS.md` STRUCTURE

Use phases and small deliverables.

```md
# Project Tasks

## Phase 1 — Foundation

| ID | Task | Priority | Status |
|---|---|---|---|
| 1.1 | Initialize project | High | Not Started |
| 1.2 | Set up styling | High | Not Started |
| 1.3 | Set up repository | High | Not Started |

## Phase 2 — Core Feature

| ID | Task | Priority | Status |
|---|---|---|---|
| 2.1 | Build core screen | High | Not Started |
| 2.2 | Add data model | High | Not Started |
| 2.3 | Implement interaction | High | Not Started |

## Phase 3 — Integration
...

## Phase 4 — QA / Security
...

## Phase 5 — Launch
...
```

---

# 27. REUSABLE `DESIGN_SYSTEM.md` STRUCTURE

```md
# Design System

## 1. Design Principles
- Principle 1
- Principle 2
- Principle 3

## 2. Color
- Primary
- Secondary
- Success
- Warning
- Error
- Surface
- Background
- Text

## 3. Typography
- Font family
- Display sizes
- Body sizes
- Weight rules
- Line heights

## 4. Spacing
- spacing scale
- section spacing
- component spacing

## 5. Radius / Borders / Shadows

## 6. Components
- Buttons
- Inputs
- Cards
- Navigation
- Dialogs
- Tables
- Tabs

## 7. States
- Hover
- Focus
- Disabled
- Loading
- Error
- Empty
- Success

## 8. Responsive Rules

## 9. Accessibility

## 10. Do / Don’t Examples
```

---

# 28. REUSABLE `ARCHITECTURE.md` STRUCTURE

```md
# Architecture

## 1. Product Boundary

## 2. High-Level Architecture

## 3. Technology Stack

## 4. Folder Structure

## 5. Data Flow

## 6. Authentication / Authorization

## 7. External Integrations

## 8. AI / Model Boundary

## 9. Data Storage

## 10. Error Handling

## 11. Security Boundaries

## 12. Scalability / Future Considerations

## 13. Important Decisions / Tradeoffs
```

---

# 29. REUSABLE `SECURITY.md` STRUCTURE

Use the 70-check library as a source of audit questions.

```md
# Security

## Secrets
- [ ] No exposed API keys
- [ ] No public .env files
- [ ] No hardcoded secrets
- [ ] No secrets in git
- [ ] No secrets in client JS

## Authentication
- [ ] Strong authentication
- [ ] Passwords hashed
- [ ] Password reset protected
- [ ] Session management reviewed
- [ ] MFA considered

## Authorization
- [ ] Server-side checks
- [ ] Object-level authorization
- [ ] Admin routes protected
- [ ] Tenant isolation verified

## Input Security
- [ ] Validation
- [ ] XSS
- [ ] CSRF
- [ ] SQL injection
- [ ] NoSQL injection
- [ ] SSRF
- [ ] Path traversal
- [ ] Command injection

## APIs / Webhooks
- [ ] Rate limits
- [ ] Timeouts
- [ ] CORS
- [ ] Signature verification
- [ ] Replay protection

## AI
- [ ] Prompt injection considered
- [ ] AI output validated
- [ ] AI permissions minimized

## Data / Infrastructure
- [ ] DB permissions minimized
- [ ] Encryption reviewed
- [ ] Backups
- [ ] Restore tested
- [ ] Monitoring
- [ ] Audit logs

## Supply Chain
- [ ] Dependencies reviewed
- [ ] CI/CD protected
- [ ] Build actions trusted

## Production
- [ ] Debug tools disabled
- [ ] Errors do not leak secrets
- [ ] Source maps reviewed
- [ ] Endpoints reviewed
```

---

# 30. AI-SLOP REVIEW CHECKLIST BEFORE PRESENTING A PRODUCT

Ask:

### Visual identity

- Does the product have a recognizable visual identity?
- Does the design feel intentional rather than assembled from defaults?
- Are the fonts selected for a reason?
- Are colors serving hierarchy and meaning?

### Components

- Are component styles consistent?
- Have default library styles been customized where needed?
- Are cards overused?
- Are border radius, shadows, and gradients being used consistently?

### Content

- Does the copy sound specific to this product?
- Are there generic buzzwords that could describe any company?
- Are fake reviews/logos/testimonials present?
- Are product screenshots/demos real?

### Interaction

- Are hover effects useful?
- Are loading/empty/error states designed?
- Does animation have a purpose?
- Is mobile behavior intentional?

### Accessibility

- Contrast
- labels
- keyboard access
- semantic structure
- alt text

### Trust

- privacy/legal pages where appropriate
- accurate claims
- real details
- no unsupported promises

---

# 31. PROJECT HEALTH SCORECARD

A future project can use this quick status model.

## Product

- Problem defined
- Target users defined
- MVP defined
- Non-goals defined

## Design

- UX flow defined
- Design system defined
- Screens prototyped
- States defined
- Responsive behavior considered

## Engineering

- Architecture documented
- Repo established
- Code structure defined
- Shared components established
- Data model defined

## AI collaboration

- AGENTS/RULES defined
- AI has access to project context
- Memory maintained
- Tasks tracked
- Small changes enforced

## Security

- Secrets protected
- Auth reviewed
- Authorization reviewed
- Input validation reviewed
- AI-specific risks reviewed
- dependencies reviewed

## Reliability

- Loading/error/empty states
- timeouts
- rate limits
- logging
- monitoring
- backup/restore

## Launch readiness

- accessibility
- privacy/legal
- SEO if public
- analytics if needed
- real content
- support/contact behavior

---

# 32. WHAT NOT TO COPY FROM THESE VIDEOS

The videos are reference material, not a universal template.

Do **not** automatically copy:

- another project's color palette
- another project's fonts
- another project's architecture
- another project's folder names
- another project's database schema
- a generic landing-page structure
- every 20-feature checklist item
- every security check as though it has equal priority
- every animation
- every trendy AI visual effect

Instead, copy the **decision-making framework**.

---

# 33. THE MOST IMPORTANT “AI + HUMAN” WORKING MODEL

The strongest combined message from the videos is:

### Humans decide:

- product direction
- users
- requirements
- priorities
- architecture boundaries
- design identity
- tradeoffs
- acceptance criteria
- safety/security constraints

### AI helps with:

- implementation
- repetitive code
- component creation
- refactoring
- documentation drafting
- testing assistance
- iteration
- prototyping
- code exploration

### Human must verify:

- correctness
- UX quality
- security
- accessibility
- production behavior
- claims
- actual feature completeness

The AI should never become the project’s only source of truth.

---

# 34. CORE MASTER PRINCIPLES — THE “KEEP FOREVER” SECTION

If only a small part of this document is remembered, remember these.

## Principle 1
**Write the product down before coding it.**

## Principle 2
**Give AI structured context, not just a giant prompt.**

## Principle 3
**Keep one canonical codebase.**

## Principle 4
**Design before generating many screens.**

## Principle 5
**Use a design system instead of visual improvisation.**

## Principle 6
**Avoid generic AI-slop aesthetics.**

## Principle 7
**Customize component libraries to the product.**

## Principle 8
**Build the unhappy paths, not only the happy path.**

## Principle 9
**Security is part of the product, not a final decoration.**

## Principle 10
**Treat AI features as privileged/untrusted systems that need boundaries and validation.**

## Principle 11
**Never fabricate product status, test results, trust signals, or evidence.**

## Principle 12
**Keep project memory in files/repository, not only in chat history.**

## Principle 13
**Make small, reversible, testable changes.**

## Principle 14
**Verify before declaring work complete.**

## Principle 15
**A production-ready product is more than a good screenshot.**

---

# 35. VIDEO-BY-VIDEO SUMMARY FOR FUTURE RECALL

## 35.1 `filesbeforevibecode.mp4`

**Topic:** Six files to create before vibe coding.

**Main lesson:** Give the coding agent a stable project memory and working contract.

**Core files:**

- PRD
- Architecture
- Design
- Rules/Agent instructions
- Tasks
- Memory

**Additional visual examples:**

- project setup
- architecture diagram
- design system
- tasks and phases
- memory/status dashboard
- environment/tool setup

---

## 35.2 `beforevibecodingthings.mp4`

**Topic:** Things to decide/document before starting vibe coding.

Visible concepts include:

- PRD: what to build, targeted users, features
- Architecture: app flow, folder/file structure, tech stack
- Design: colors/theme, fonts, typography
- Phases: break the project into phases such as login and dashboard
- Memory: what has been completed, which file is being worked on, update regularly

**Main lesson:** Coding speed improves when scope and context are defined first.

---

## 35.3 `aislop_fix.mp4`

**Topic:** 30 reasons a site looks vibe-coded.

**Main lesson:** Avoid predictable AI-generated visual clichés, generic copy, weak authenticity, and incomplete launch details.

**Use:** visual QA / design critique.

---

## 35.4 `documentsbeforewebsite.mp4`

**Topic:** Core documents all vibe coders should know.

Shows:

- PRD
- Design-System.md
- Architecture.md
- AGENTS.md

**Main lesson:** A coding agent needs product, design, architecture, and execution rules.

---

## 35.5 `frontendwithAI.mp4`

**Topic:** 10/10 ways to build frontend with AI without AI slop.

**Main lesson:** combine design inspiration, formal design docs, design tools, MCP/Figma workflows, resource libraries, and documented AI design skills.

---

## 35.6 `Video-2459.mp4`

**Topic:** Security checks 55–70.

**Main lesson:** AI-built applications need identity, concurrency, webhook, CI/CD, AI, browser-storage, redirect, and endpoint security.

---

## 35.7 `Video-60417.mp4`

**Topic:** Security checks 37–54.

**Main lesson:** Security extends into supply chain, AI, cloud configuration, data governance, monitoring, multi-tenancy, command execution, and OAuth.

---

## 35.8 `Video-17835.mp4`

**Topic:** Security checks 19–36.

**Main lesson:** Protect web requests, files, sessions, secrets, CORS, payment validation, object-level authorization, logs, and source maps.

---

## 35.9 `Video-88584.mp4`

**Topic:** 18 quick security checks for AI-built apps.

**Main lesson:** Perform a fast first-pass audit for secrets, auth, authorization, database exposure, debug tooling, input validation, and injection.

---

## 35.10 `Video-76164.mp4`

**Topic:** Security checks 1–20 with visual examples.

**Main lesson:** Start the security audit with injection, request security, upload validation, authorization, rate limiting, secret placement, password storage, MFA, CORS, token storage, row-level security, SSRF, source maps, defaults, logging, and dependencies.

---

## 35.11 `Video-76629.mp4`

**Topic:** 20 things to add before launching a site.

**Main lesson:** Launch quality includes navigation, conversion, SEO, trust, accessibility, legal, local information, analytics, and real content.

---

## 35.12 `Video-25607.mp4`

**Topic:** Privacy, consent, accessibility, trust, copyright, local law, business detail, and truthful content.

**Main lesson:** A public product must be respectful of users and truthful, not just visually polished.

**Source anomaly:** title says 20; 19 distinct items are visibly recoverable and the 20th item is not legible/visible in the captured source.

---

## 35.13 `Video-37295.mp4`

**Topic:** 20 reasons an app looks vibe-coded.

**Main lesson:** Avoid recognizable default AI aesthetics and generic content patterns.

---

## 35.14 `Video-2763.mp4`

**Topic:** 20 reliability / public-release protection checks.

**Main lesson:** Rate limits, spending controls, error states, duplicate prevention, DB performance, file constraints, monitoring, concurrency, and backups matter.

---

## 35.15 `20featurestowebsite.mp4`

**Topic:** Practical website polish.

**Main lesson:** Small interaction/accessibility/UX features can dramatically increase perceived and actual product quality.

---

# 36. FINAL FUTURE-PROJECT OPERATING CONTRACT

Use this as the permanent rule set whenever starting a new AI-assisted project.

### Before coding

- Define the product.
- Define the MVP.
- Research enough to avoid blind guessing.
- Define UX.
- Define the design system.
- Define architecture.
- Define agent rules.
- Break work into tasks.

### During coding

- One canonical repository.
- Read context before editing.
- Inspect existing code.
- Reuse existing pieces.
- Make small changes.
- Test continuously.
- Preserve the design system.
- Protect secrets.
- Validate user input.
- Enforce authorization server-side.
- Keep AI permissions minimal.
- Update memory.
- Commit regularly.

### Before calling it “done”

- Verify the actual feature.
- Verify UI states.
- Verify responsive behavior.
- Review accessibility.
- Review security.
- Review performance/reliability.
- Review public-launch/privacy/legal requirements when applicable.
- Review copy/content authenticity.
- Confirm no unsupported claims.
- Update documentation.

### Absolute rule

> Never let the speed of AI generation become a substitute for verification.

---

# 37. ONE-PAGE SUMMARY

## Build order

`Problem → PRD → Research → UX → Design System → Architecture → Agent Rules → Tasks → Prototype → Implementation → Testing → Security → Launch Readiness → Memory → Commit`

## Avoid

`Generic prompt → huge code dump → untouched components → fake content → no states → no tests → no security → “looks done”`

## Aim for

`Clear product → intentional design → structured AI context → small implementation loops → verified behavior → secure boundaries → truthful status → maintainable project memory`

---

**End of Master Context**


---

# PART C — RECOMMENDED PHASED EXECUTION PROTOCOL FOR ANY NEW PROJECT

## Phase 0 — Repository Reconnaissance

Goal: understand what already exists before changing anything.

Steps:
1. List the repository root.
2. Identify framework/runtime/package manager.
3. Inspect `README.md` and available project context.
4. Inspect source structure.
5. Inspect package/dependency manifests.
6. Check Git status/history.
7. Identify current app entry points.
8. Identify existing design/component system.
9. Identify tests and test commands.
10. Identify environment/configuration files without exposing secrets.

Gate:
- Agent can explain the current stack, project structure, current functionality, and missing pieces.

## Phase 1 — Product Definition

Goal: remove product ambiguity.

Deliverables:
- PRD
- MVP scope
- target users
- core user journeys
- explicit out-of-scope list
- success criteria

Gate:
- Agent can state the product in a few sentences and identify the primary user flow.

## Phase 2 — UX Definition

Goal: define how the user moves through the product.

Deliverables:
- information architecture
- navigation model
- screen/page inventory
- primary user journey
- important states
- accessibility requirements

Gate:
- Every core action has a clear destination and feedback state.

## Phase 3 — Design System

Goal: prevent generic or inconsistent AI-generated UI.

Deliverables:
- typography
- color roles
- spacing scale
- radius rules
- elevation/shadow rules
- component inventory
- interaction states
- responsive rules
- visual references/inspiration

Gate:
- New screens can be built consistently without inventing a new visual style for each screen.

## Phase 4 — Architecture

Goal: define the simplest architecture that can support the MVP.

Deliverables:
- system diagram
- frontend/backend boundary
- database/storage model
- auth model
- external integrations
- data flow
- deployment model
- key design decisions

Gate:
- Each major feature maps to a small number of understandable system components.

## Phase 5 — Agent Rules

Goal: constrain AI implementation behavior.

Deliverables:
- `AGENTS.md` / `RULES.md`
- coding standards
- reusable-component rules
- security rules
- testing requirements
- file-change rules
- commit expectations

Gate:
- Another coding agent can enter the repo and know how to work safely.

## Phase 6 — Task Decomposition

Goal: convert the project into verifiable work.

Every task should include:
- ID
- priority
- goal
- files/components likely affected
- acceptance criteria
- verification command/test
- status

Prefer tasks small enough to finish and verify in one focused iteration.

Gate:
- The next task is obvious and has a clear definition of done.

## Phase 7 — Design / Prototype Validation

Goal: validate UX before large implementation.

Use appropriate design tools and references, including when useful:
- Figma
- Stitch
- curated UI inspiration
- design-system references
- AI-assisted design skills

Do not treat a reference design as permission to copy generic patterns without product reasoning.

Gate:
- Core user journey is visually understandable and reviewed.

## Phase 8 — Incremental Implementation

For each task:
1. Read relevant docs.
2. Inspect current code.
3. Make the smallest change.
4. Run formatting/lint/type checks.
5. Run focused tests.
6. Exercise the affected user flow.
7. Inspect visual output when UI is involved.
8. Update task status.
9. Update memory when state changes.
10. Commit/push according to repository policy.

Gate:
- Task acceptance criteria are verified.

## Phase 9 — Security Audit

Use the detailed checklists in this file.

At minimum:
- secrets
- authentication
- authorization
- input validation
- injection
- file handling
- API limits
- webhooks
- database permissions
- AI permissions/output
- logging
- dependencies
- CI/CD
- endpoints

Gate:
- Critical issues are fixed or explicitly documented as accepted risks with the appropriate owner/decision.

## Phase 10 — Reliability / Launch Readiness

Verify where applicable:
- loading states
- empty states
- failed requests
- timeouts
- duplicate prevention
- performance-sensitive queries
- pagination
- upload limits
- caching
- monitoring
- logging
- concurrency behavior
- backups/restore
- error pages
- SEO/discoverability
- privacy/legal/trust content
- accessibility

Gate:
- The product behaves predictably outside the perfect happy path.

## Phase 11 — Final Verification & Handoff

Produce:
- current status
- verified features
- known limitations
- test evidence
- deployment state
- security status
- remaining TODOs
- next recommended action

Update project memory and README as appropriate.

---

# PART D — AGENT BEHAVIOR WHEN ENTERING AN UNFAMILIAR REPOSITORY

The agent should mentally follow this sequence:

`STOP → READ → INSPECT → UNDERSTAND → PLAN → EDIT → TEST → REVIEW → RECORD → COMMIT`

Never:

`OPEN REPO → GUESS → REWRITE APP → CLAIM DONE`

When a user asks “build X”, the agent should translate that request into:

1. What exact user behavior is required?
2. Where does that behavior belong in the current architecture?
3. What existing UI/component/service can be reused?
4. What data/state changes are required?
5. What security implications exist?
6. What states must the interface support?
7. What is the smallest implementation that satisfies the requirement?
8. How will it be verified?
9. What documentation/status updates are required?

---

# PART E — NON-NEGOTIABLE PRINCIPLES

1. **Product thinking before code generation.**
2. **Context before edits.**
3. **One canonical codebase.**
4. **Small, testable changes.**
5. **Reuse existing patterns.**
6. **Design intentionally; do not accept generic AI aesthetics by default.**
7. **Every meaningful interaction needs appropriate states.**
8. **Security is part of implementation, not a final decoration.**
9. **Truthful status is more important than impressive status.**
10. **Project memory must live in the repository, not only in chat.**
11. **AI output requires human/project-context verification.**
12. **Do not let AI generation speed replace engineering judgment.**

> **The agent's job is not merely to generate code. The agent's job is to help turn a clearly defined product into a verified, maintainable, secure, usable system — one controlled step at a time.**

---

# END OF AI CODING AGENT MASTER CONTEXT
