# Design Haven — Prompt Engineering Architecture & Workflow

Welcome to the Prompt Engineering system for **Design Haven**. This directory contains the structured, multi-stage prompt engineering assets and workflows required to generate, evaluate, and refine all copy for the Design Haven platform.

The prompt engineering architecture ensures that all copy produced is **inspiration-first, audience-aligned, sophisticated, and strictly compliant with hallucination-control guardrails**.

---

## 1. Directory Assets & File Summary

The `prompts/` directory consists of 6 structured markdown assets:

| File Name | Primary Purpose & Asset Role |
| :--- | :--- |
| **[README.md](file:///e:/career/GYM/prompts/README.md)** | Overview document outlining the complete 6-stage prompt workflow, asset mapping, hallucination rules, and operational guidelines. |
| **[01_BUSINESS_CONTEXT.md](file:///e:/career/GYM/prompts/01_BUSINESS_CONTEXT.md)** | Foundational business context system prompt defining Design Haven's identity, target audience categories, user mindsets, core journey stages, and hard operational scope constraints. |
| **[02_BRAND_AND_AUDIENCE.md](file:///e:/career/GYM/prompts/02_BRAND_AND_AUDIENCE.md)** | Prompts for deep audience empathy mapping, pain point analysis, brand tone calibration (sophisticated, pressure-free), and emotional resonance strategy. |
| **[03_CONTENT_GENERATION.md](file:///e:/career/GYM/prompts/03_CONTENT_GENERATION.md)** | Reusable, variable-driven prompt templates for generating hero messaging, interior design inspiration/galleries, capability descriptions, progressive CTAs, enquiry forms, and FAQs. |
| **[04_CONTENT_EVALUATION.md](file:///e:/career/GYM/prompts/04_CONTENT_EVALUATION.md)** | Multi-dimensional audit prompts and structured scoring matrix (JSON + Markdown) to evaluate generated content for clarity, brand tone, generic AI clichés, and unverified business claims. |
| **[05_CONTENT_REFINEMENT.md](file:///e:/career/GYM/prompts/05_CONTENT_REFINEMENT.md)** | Systematic refinement templates to polish copy based on evaluation feedback, strip AI buzzwords, eliminate hallucinated claims, de-escalate sales pressure, and finalize production-ready text. |

---

## 2. Complete End-to-End Workflow

Content creation for Design Haven follows a strict 6-stage lifecycle pipeline with mandatory re-evaluation:

```
┌─────────────────────────┐
│   01. BUSINESS CONTEXT  │  Establishes core identity, scope limits & strict guardrails
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  02. BRAND & AUDIENCE   │  Maps target user mindsets, emotional state & brand tone
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  03. CONTENT GENERATION │  Executes structured templates for specific page components
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐◄─────────────────────────┐
│  04. CONTENT EVALUATION │  Audits draft copy across 8 scoring categories & 12 audit criteria
└────────────┬────────────┘                         │
             │                                      │ (Re-evaluation Loop)
             ▼                                      │
┌─────────────────────────┐                         │
│  05. CONTENT REFINEMENT │  Purges clichés, eliminates unverified claims & polishes tone
└────────────┬────────────┘─────────────────────────┘
             │ (Passes Re-evaluation Quality Gate)
             ▼
┌─────────────────────────┐
│   APPROVED CONTENT FOR  │  Finalized copy passed to engineering for frontend implementation
│      IMPLEMENTATION     │
└─────────────────────────┘
```

### Stage Explanations:

1. **Business Context (`01_BUSINESS_CONTEXT.md`):** System prompt injected into LLM workflows to ground all generations in Design Haven's inspiration-first, pressure-free business model.
2. **Brand & Audience Understanding (`02_BRAND_AND_AUDIENCE.md`):** Prompts that calibrate copy to speak to Creative Homeowners, Renovation Seekers, New Construction Owners, and Concept Collaborators without overwhelming them.
3. **Content Generation (`03_CONTENT_GENERATION.md`):** Component-specific generation prompts utilizing variables (`{ROOM_TYPE}`, `{HERO_THEME}`, `{JOURNEY_STAGE}`, `{TARGET_AUDIENCE}`) for controlled outputs.
4. **Content Evaluation (`04_CONTENT_EVALUATION.md`):** Rigorous scoring (1–5 scale) across 8 quality categories and a 12-point audit checklist, enforcing a zero-tolerance claim safety veto.
5. **Content Refinement (`05_CONTENT_REFINEMENT.md`):** Systematic rewrites that remove generic AI wording (*"seamless tapestry"*, *"delve"*), de-escalate sales pressure, strip unverified statements, and trigger mandatory re-evaluation.
6. **Approved Content for Implementation:** Only copy that passes the re-evaluation threshold (Overall Weighted Score ≥ 4.0/5.0 with 0 claim safety flags) is approved for inclusion in website UI components.

---

## 3. Strict Hallucination-Control & Compliance Guardrail

To maintain total trust and credibility, **no generated content may fabricate or infer** any of the following details unless explicitly provided in a verified project input:

- ❌ **Company History or Founding Narratives**
- ❌ **Years of Industry Experience**
- ❌ **Awards, Accolades, or Recognitions**
- ❌ **Completed Project Counts or Portfolio Statistics**
- ❌ **Client Testimonials, Endorsements, or Reviews**
- ❌ **Client, Partner, or Contractor Names**
- ❌ **Physical Street Addresses or Office Locations**
- ❌ **Certifications or Accreditation Badges**
- ❌ **Specific Pricing Figures or Package Costs**
- ❌ **Formal Guarantees, Warranties, or Promises**
- ❌ **Direct Contact Phone Numbers or Emails**

All content must focus strictly on **design philosophy, user empowerment, spatial potential, collaborative methodology, and guided exploration**.

---

## 4. Usage Guidelines for Engineering & Content Teams

- **Do NOT generate website copy directly in React components.** Always process content through this 5-file pipeline first.
- **Maintain Reusable Templates:** Keep files in `prompts/` clean and template-driven. Store specific campaign runs or generated outputs in separate temporary draft folders or content databases.
- **Verification Rule:** Never skip `04_CONTENT_EVALUATION.md`. All copy pushed to UI components must have a verified evaluation score.
