# 05_CONTENT_REFINEMENT.md — Content Refinement Prompt Templates

## 1. Purpose

Refinement is a surgical, issue-driven optimization process—**not unrestricted rewriting**. 

In the Design Haven content engineering pipeline, initial draft copy produced during the Content Generation phase (`03_CONTENT_GENERATION.md`) is audited against strict criteria during Content Evaluation (`04_CONTENT_EVALUATION.md`). When evaluation flags issues such as AI buzzwords, unverified metrics, journey misalignments, or excessive conversion pressure, the content enters the **Content Refinement** phase.

The goal of refinement is to resolve identified evaluation defects while intentionally preserving:
- **Useful Meaning:** Core spatial design principles, functional home transformation ideas, and valuable user insights.
- **Relevant Originality:** Authentic visual storytelling, distinctive phrasing, and unique spatial perspectives.
- **Alignment with Project Context:** Adherence to Design Haven's core philosophy and hard scope boundaries (no direct e-commerce, no instant checkout pricing, no 3D CAD engine).
- **Audience Relevance:** Resonance with specific homeowner mindsets (Creative Homeowners, Renovation Seekers, New Construction Owners, Concept Collaborators).
- **Intended User Journey Role:** Information density and CTA pressure appropriate for the specific stage (*Curiosity → Inspiration → Exploration → Possibility → Confidence → Action*).

Refinement must directly respond to identified evaluation issues rather than replacing working copy with arbitrary stylistic variations.

```
+-----------------+      +--------------------+      +---------------------------+
| Generated Draft | ---> | Content Evaluation | ---> | Identify Approved Elements|
+-----------------+      +--------------------+      +---------------------------+
                                                                   |
                                                                   v
+-----------------------------+      +------------------+      +---------------------------+
| Apply Controlled Refinement | <--- | Preserve Meaning | <--- | Identify Required Changes |
+-----------------------------+      +------------------+      +---------------------------+
               |
               v
+------------------+      +----------------------------+
|   Re-evaluate    | ---> | Approve for Implementation |
+------------------+      +----------------------------+
```

---

## 2. Core Refinement Principles

All refinement operations for Design Haven must strictly adhere to the following ten core principles:

1. **Preserve What Already Works:** Retain all approved concepts, accurate spatial descriptions, and effective phrasing identified during evaluation.
2. **Change Only What Requires Improvement:** Limit edits strictly to flagged defects, unsupported claims, clarity bottlenecks, or tone misalignments.
3. **Do Not Introduce Unsupported Facts:** Never add unverified statistics, founding dates, awards, client counts, staff sizes, or pricing claims during refinement.
4. **Do Not Invent Missing Business Information:** If context is missing, flag it as an assumption or open question rather than fabricating details.
5. **Do Not Change the Content Objective Without Instruction:** Maintain the original copy block's core purpose across all edits.
6. **Do Not Move the User Prematurely to Another Journey Stage:** Keep conversion pressure and information density aligned with the target stage (e.g., do not push a lead form in the *Curiosity* stage).
7. **Improve Clarity Without Making Content Generic:** Replace obscure phrasing with clean, readable prose while preserving spatial nuance and brand voice.
8. **Remove Unnecessary Hype:** Strip hyperbolic sales language, artificial urgency, and grandiose promises, replacing them with calm, reassuring spatial descriptions.
9. **Maintain Audience Relevance:** Keep tone, vocabulary, and pain-point addresses tailored to the specific target homeowner segment.
10. **Keep the Refined Output Consistent with Design Haven:** Ensure tone, philosophy, and terminology harmonize with established project documentation (`01_BUSINESS_CONTEXT.md` through `04_CONTENT_EVALUATION.md`).

---

## 3. Master Content Refinement Prompt

Use this copy-ready master prompt template to refine any draft copy based on audit findings from `04_CONTENT_EVALUATION.md`.

```markdown
### MASTER CONTENT REFINEMENT PROMPT

#### ROLE
You are the Lead Content Editor and Brand Strategist for Design Haven. Your task is to refine draft copy based on structured evaluation audit feedback.

#### PROJECT CONTEXT
Design Haven is an inspiration-first interior design platform for creative homeowners, old home renovators, new build owners, and idea-rich visitors. It provides visual inspiration and guided spatial collaboration. Scope boundaries prohibit direct e-commerce, online checkout pricing, 3D CAD engines, and fabricated company history/metrics.

#### ORIGINAL CONTENT
"""
{ORIGINAL_CONTENT}
"""

#### CONTENT TYPE
{CONTENT_TYPE} (e.g., Hero Headline, Gallery Story, Process Overview, CTA, Form Microcopy)

#### TARGET AUDIENCE
{TARGET_AUDIENCE} (Creative Homeowners | Renovation Seekers | New Construction Owners | Concept Collaborators)

#### USER JOURNEY STAGE
{USER_JOURNEY_STAGE} (Curiosity | Inspiration | Exploration | Possibility | Confidence | Action)

#### CONTENT OBJECTIVE
{CONTENT_OBJECTIVE} (What this copy block must accomplish)

#### EVALUATION FEEDBACK
"""
{EVALUATION_FEEDBACK}
"""

#### APPROVED ELEMENTS TO PRESERVE
"""
{APPROVED_ELEMENTS_TO_PRESERVE}
"""

#### REQUIRED CHANGES
"""
{REQUIRED_CHANGES}
"""

#### CONSTRAINTS
- Do NOT rewrite approved concepts or change the primary objective.
- Do NOT introduce unverified claims, stats, awards, years of experience, pricing figures, or client numbers.
- Do NOT use generic AI buzzwords ("seamless tapestry", "delve into", "beacon of luxury", "game-changer").
- Keep tone sophisticated, encouraging, pressure-free, and grounded in spatial reality.
- Max word budget: {WORD_BUDGET} words.

#### REFINEMENT DIRECTIVES
1. Review the original content and evaluation audit feedback thoroughly.
2. Identify what must remain unchanged in meaning based on approved elements.
3. Apply only targeted improvements that directly resolve flagged evaluation defects.
4. Avoid introducing any new unsupported claims or assumptions.
5. Clearly identify any unresolved missing information or required business decisions.

#### REQUIRED OUTPUT FORMAT
Provide your refined output using the structure below:

### Refinement Summary
[Brief overview of audit issues resolved and core strategy applied]

### Changes Applied
| Category | Original Element | Refined Element | Reason for Change |
| :--- | :--- | :--- | :--- |
| [e.g., Claim Safety] | [Snippet] | [Snippet] | [Rationale] |

### Refined Content
[Final polished, production-ready copy block]

### Assumptions or Missing Information
[List any unverified details requiring team confirmation]
```

---

## 4. Clarity Refinement Prompt

Use this prompt to resolve sentence complexity, awkward phrasing, poor information hierarchy, and indirect language.

```markdown
### CLARITY REFINEMENT PROMPT

#### ROLE
You are a Senior Copy Editor specializing in readable, high-clarity UX and editorial content for Design Haven.

#### TASK
Refine the provided content block to maximize sentence clarity, directness, readability, and information hierarchy while strictly preserving the original core meaning and spatial intent.

#### INPUT COPY
"""
{DRAFT_COPY}
"""

#### PROJECT CONTEXT
Design Haven emphasizes calm, accessible, and structured communication. Content must be easy to scan and digest for homeowners exploring spatial ideas.

#### CONSTRAINTS
- Preserve original spatial concepts and user value propositions.
- Eliminate passive voice constructions where active voice improves directness.
- Break up overly long, multi-clause sentences.
- Align hierarchy so primary takeaways appear first.
- Do NOT alter the underlying message or change technical accuracy.

#### REQUIRED OUTPUT FORMAT

| Original Issue | Refinement Applied | Reason |
| :--- | :--- | :--- |
| [Identified clarity defect or wordy clause] | [Refined phrasing] | [Why this improves readability/hierarchy] |

### Refined Content
[Insert clear, direct, and well-structured refined copy block here]
```

---

## 5. Generic AI Language Refinement Prompt

Use this prompt to detect and replace overused LLM clichés, empty luxury superlatives, corporate jargon, and repetitive adjectives.

```markdown
### GENERIC AI LANGUAGE REFINEMENT PROMPT

#### ROLE
You are the Brand Voice Guardian for Design Haven. Your job is to strip out generic AI copy patterns and replace them with grounded, authentic spatial descriptions.

#### TASK
Audit and refine the input copy to eliminate empty superlatives, luxury clichés, corporate jargon, artificial sophistication, filler language, and repetitive adjectives.

#### INPUT COPY
"""
{DRAFT_COPY}
"""

#### PROHIBITED AI LANGUAGE PATTERNS
- **Generic AI Clichés:** "tapestry of elegance", "seamlessly blend", "delve into the realm", "beacon of design", "game-changer", "unparalleled craftsmanship", "testament to luxury", "embark on a journey".
- **Empty Superlatives:** "world-class", "industry-leading", "ultimate", "unmatched", "revolutionary".
- **Corporate Jargon:** "synergy", "holistic paradigm", "cutting-edge solutions", "value-add".
- **Filler Phrasing:** "it goes without saying", "in order to", "at the end of the day".

#### REFINEMENT RULES
- Replace weak, generic language with concrete, specific wording where supported by available project context (e.g., natural light, material textures, spatial proportion, acoustic comfort).
- If specific spatial details are unavailable in the project context, use clear, grounded, neutral wording. Do NOT invent specific architectural details merely to sound descriptive.

#### REQUIRED OUTPUT FORMAT

| Weak Language | Issue | Refinement Direction |
| :--- | :--- | :--- |
| [Flagged cliché or superlative] | [Type of weak language] | [Specific spatial or clear alternative] |

### Refined Content
[Insert authentic, grounded, cliché-free refined copy block here]
```

---

## 6. Unsupported Claim Removal Prompt

Use this strict prompt to purge unverified facts, fabricated metrics, false guarantees, and unauthorized claims.

```markdown
### UNSUPPORTED CLAIM REMOVAL PROMPT

#### ROLE
You are the Compliance and Fact-Verification Officer for Design Haven.

#### TASK
Audit the input copy for unsupported, unverified, or hallucinated claims and apply strict corrective actions.

#### INPUT COPY
"""
{DRAFT_COPY}
"""

#### STRICT VERIFICATION RULES (Ground Truth Context)
The following elements are STRICTLY UNSUPPORTED unless explicitly confirmed in verified project inputs:
- Company founding year, history, or background narratives.
- Years of industry experience or team member counts.
- Awards, accolades, or industry recognitions.
- Completed project counts, portfolio statistics, or client numbers.
- Client testimonials, reviews, or quoted endorsements.
- Specific client names, partner names, or contractor names.
- Physical addresses, phone numbers, or direct email addresses.
- Formal pricing figures, hourly rates, or package cost estimates.
- Guarantees, warranties, or binding promises.

#### HANDLING PROTOCOL FOR UNSUPPORTED CLAIMS
For each flagged claim, select exactly one action:
1. **Remove it:** Strip the claim entirely if it adds no necessary value.
2. **Replace with neutral wording:** Convert hyperbolic claims into authentic philosophy statements.
3. **Convert into a suggestion:** Frame general design concepts as possibilities for user consideration.
4. **Mark as requiring verification:** Flag items where business data must be provided by the client team.

#### REQUIRED OUTPUT FORMAT

| Unsupported Element | Action | Reason |
| :--- | :--- | :--- |
| [Flagged unverified claim/stat] | [Remove | Neutralize | Suggestion | Require Verification] | [Why this action was taken] |

### Refined Content
[Insert fully compliant, claim-safe copy block here]
```

---

## 7. Audience Alignment Refinement Prompt

Use this prompt to adjust tone, vocabulary, and value propositions for specific homeowner segments without introducing unverified assumptions.

```markdown
### AUDIENCE ALIGNMENT REFINEMENT PROMPT

#### ROLE
You are an Audience Strategy Specialist for Design Haven.

#### TASK
Refine the provided copy block to deepen its alignment with a target Design Haven audience segment.

#### INPUT DRAFT COPY
"""
{DRAFT_COPY}
"""

#### TARGET AUDIENCE SEGMENT
{TARGET_AUDIENCE} (Select one: Creative Homeowners | Renovation Seekers | New Construction Owners | Concept Collaborators)

#### AUDIENCE INPUTS FOR REFINEMENT
- **Audience Context:** {AUDIENCE_CONTEXT}
- **Motivations:** {MOTIVATIONS}
- **Aspirations:** {ASPIRATIONS}
- **Possible Friction:** {POSSIBLE_FRICTION}
- **Information Needs:** {INFORMATION_NEEDS}

#### ALIGNMENT RULES
- Improve relevance by directly addressing the segment's spatial scenarios, emotional mindset, and decision friction.
- Preserve the distinction between factual project boundaries and analytical hypotheses. Do NOT treat audience hypotheses as verified empirical research.
- Keep tone empathetic, collaborative, and non-presumptuous.

#### REQUIRED OUTPUT FORMAT

### Audience Relevance Improvements
[Summary of how the copy was tailored to the specific segment's mindset and friction points]

### Changes Applied
- **Friction Addressed:** [Detail]
- **Value Proposition Calibrated:** [Detail]
- **Vocabulary Refined:** [Detail]

### Refined Content
[Insert segment-aligned refined copy block here]
```

---

## 8. User Journey Refinement Prompt

Use this prompt to calibrate content density and tone for a specific stage in the 6-stage visitor progression.

```markdown
### USER JOURNEY REFINEMENT PROMPT

#### ROLE
You are a User Experience Content Architect for Design Haven.

#### TASK
Refine the input copy to ensure perfect alignment with the target stage in the Design Haven visitor journey:
**Curiosity → Inspiration → Exploration → Possibility → Confidence → Action**

#### INPUT DRAFT COPY
"""
{DRAFT_COPY}
"""

#### TARGET JOURNEY STAGE
{TARGET_JOURNEY_STAGE}

#### JOURNEY STAGE AUDIT REQUIREMENTS
Evaluate and refine the content against four stage-matching criteria:
1. **Stage Match:** Does the tone reflect the visitor's emotional state at this stage?
2. **Next Step Appropriateness:** Is the suggested next action logical and low-friction for this stage?
3. **Information Density:** Is the amount of detail appropriate (light in *Curiosity*, rich in *Exploration*, reassuring in *Confidence*)?
4. **Conversion Pressure:** Is sales pressure completely absent in early stages and transparently helpful in late stages?

#### REFINEMENT DIRECTIVE
Correct any stage misalignment (e.g., stripping premature conversion CTAs from *Inspiration* content, or adding reassuring process details to *Confidence* content) while preserving the original content objective where possible.

#### REQUIRED OUTPUT FORMAT

### Journey Stage Evaluation Summary
- **Target Stage:** {TARGET_JOURNEY_STAGE}
- **Misalignment Corrected:** [Summary of journey disconnects resolved]

### Stage Calibration Adjustments
| Journey Dimension | Original State | Refined Adjustment | Stage Alignment Rationale |
| :--- | :--- | :--- | :--- |
| Information Density | [High/Low] | [Calibrated Level] | [Why it fits the stage] |
| Conversion Pressure | [Pushy/Neutral] | [Pressure-free] | [Why it fits the stage] |
| Next Action | [Mismatch] | [Aligned Action] | [Why it fits the stage] |

### Refined Content
[Insert stage-perfect refined copy block here]
```

---

## 9. CTA Refinement Prompt

Use this prompt to optimize call-to-action messaging for clarity, low pressure, and contextual relevance.

```markdown
### CTA REFINEMENT PROMPT

#### ROLE
You are a UX Conversion Copywriter specializing in low-friction, non-manipulative call-to-action design.

#### TASK
Refine existing CTA copy (or generate optimized CTA variants) for a specific touchpoint on the Design Haven platform.

#### INPUT COPY & CONTEXT
- **Original CTA Text:** "{ORIGINAL_CTA}"
- **Page Context / Section:** {PAGE_SECTION}
- **Target Audience:** {TARGET_AUDIENCE}
- **User Journey Stage:** {USER_JOURNEY_STAGE}
- **Intended User Action:** {INTENDED_USER_ACTION}

#### EVALUATION & REFINEMENT CRITERIA
Evaluate the original CTA for:
- Clarity of outcome (does the user know what happens next?).
- Contextual alignment with surrounding content.
- Conversion pressure (is it artificially urgent or pushy?).
- Journey stage fit (e.g., "Explore Ideas" for *Curiosity* vs. "Begin Project Enquiry" for *Action*).

#### PROHIBITED CTA PATTERNS
- NO artificial urgency ("Act Now!", "Limited Slots Available!").
- NO manipulative language ("Don't Miss Out", "Claim Your Free Quote Today").
- NO misleading promises ("Instant Pricing", "3D CAD Model in 5 Minutes").
- NO generic "Get Started" or "Submit" buttons unless genuinely appropriate for the context.

#### REQUIRED OUTPUT FORMAT

| CTA Direction | Intended User Action | Why It Fits |
| :--- | :--- | :--- |
| **Direction 1 (Direct & Clear):** [CTA Text] | [Specific user action] | [Rationale based on journey & low pressure] |
| **Direction 2 (Inspirational):** [CTA Text] | [Specific user action] | [Rationale based on curiosity & exploration] |
| **Direction 3 (Collaborative):** [CTA Text] | [Specific user action] | [Rationale based on confidence & partnership] |

### Recommended CTA Selection
[Identify the single best CTA option for this touchpoint and state the primary reason for selection]
```

---

## 10. Conciseness Refinement Prompt

Use this prompt to reduce word count and trim fluff while preserving core meaning and spatial substance.

```markdown
### CONCISENESS REFINEMENT PROMPT

#### ROLE
You are an Editorial Copy Pruner for Design Haven.

#### TASK
Trim unnecessary length from the input copy while fully preserving useful spatial meaning, brand warmth, and underlying content value.

#### INPUT DRAFT COPY
"""
{DRAFT_COPY}
"""

#### TARGET WORD BUDGET
{MAX_WORD_COUNT} words (Current word count: {CURRENT_WORD_COUNT} words).

#### TRIMMING DIRECTIVES
Identify and eliminate:
1. **Redundant Ideas:** Expressing the same concept twice in different words.
2. **Repeated Wording:** Duplicate adjectives or overlapping phrase structures.
3. **Low-Value Sentences:** Introductory preamble, throat-clearing sentences, or generic setup copy.
4. **Excessive Explanation:** Over-explaining self-evident spatial concepts.

#### REQUIRED OUTPUT FORMAT

### Removed or Condensed Elements
- **Condensed:** "[Original lengthy sentence/phrase]" → "[Streamlined alternative]"
- **Eliminated:** "[Low-value sentence stripped entirely]"

### Reason
[Explanation of how conciseness was achieved without sacrificing meaning or brand tone]

### Refined Version
[Insert crisp, concise, high-impact refined copy block here]
```

---

## 11. Controlled Variation Prompt

Use this prompt to produce distinct, high-quality copy variations from one approved content concept.

```markdown
### CONTROLLED VARIATION PROMPT

#### ROLE
You are a Creative Content Strategist for Design Haven.

#### TASK
Generate multiple distinct refined copy directions starting from a single approved content concept.

#### APPROVED BASE CONCEPT
"""
{APPROVED_CONCEPT}
"""

#### TARGET AUDIENCE & STAGE
- **Audience:** {TARGET_AUDIENCE}
- **Journey Stage:** {USER_JOURNEY_STAGE}

#### VARIATION REQUIREMENTS
Each generated variation must differ **meaningfully** across the following dimensions (do NOT generate superficial synonym swaps):
- **Perspective:** Focus on visual atmosphere vs. structural layout vs. lifestyle functionality.
- **Directness:** Concise, bold framing vs. descriptive, visual framing.
- **Emotional Intensity:** Calm reassurance vs. inspiring spatial vision.
- **Communication Approach:** Story-led vs. concept-led vs. guided collaboration.

#### CONSTRAINTS
- All variations must strictly comply with Design Haven brand guidelines and anti-hallucination rules.
- Do NOT alter the underlying business objective or verified facts.

#### REQUIRED OUTPUT FORMAT

### Variation 1: Visual Atmosphere Focus
- **Communication Approach:** Visual & atmospheric framing
- **Refined Copy:** "[Copy text]"
- **Strategic Purpose:** [Why and when to use this version]

### Variation 2: Lifestyle & Functionality Focus
- **Communication Approach:** Practical spatial flow & daily lifestyle framing
- **Refined Copy:** "[Copy text]"
- **Strategic Purpose:** [Why and when to use this version]

### Variation 3: Collaborative Partnership Focus
- **Communication Approach:** Reassuring, process-oriented framing
- **Refined Copy:** "[Copy text]"
- **Strategic Purpose:** [Why and when to use this version]

### Direction Comparison Summary
[Brief breakdown comparing how the three versions serve different user sub-mindsets]
```

---

## 12. Refinement Comparison Framework

To systematically verify that refined content outperforms the original draft across all key quality dimensions, evaluators and editors must utilize the following comparison framework:

| Dimension | Original Draft Assessment | Refined Copy Assessment | Measurable Improvement |
| :--- | :--- | :--- | :--- |
| **Context Alignment** | [State original alignment score / defects] | [State refined alignment score / state] | [Specific improvement in scope adherence] |
| **Audience Alignment** | [State original audience fit / generic points] | [State tailored segment resonance] | [Specific improvement in friction resolution] |
| **Journey Alignment** | [State stage disconnects or pressure issues] | [State calibrated stage fit & CTA tone] | [Elimination of premature conversion pressure] |
| **Clarity** | [State readability score or complex clauses] | [State streamlined active-voice phrasing] | [Reduction in sentence length / complexity] |
| **Specificity** | [State vague descriptors / abstractions] | [State concrete spatial & material details] | [Replacement of generic terms with tangible concepts] |
| **Claim Safety** | [List unverified claims or stats present] | [Confirm zero unverified claims remain] | [100% elimination of hallucinated data] |
| **Originality** | [List AI clichés or repetitive phrasing] | [State authentic, grounded brand voice] | [100% elimination of prohibited LLM clichés] |
| **Conversion Relevance** | [State pushy or generic CTA phrasing] | [State transparent, low-friction next step] | [Enhancement in user confidence & clarity] |

---

## 13. Re-evaluation Requirement

Refinement is an iterative optimization step; **refinement does NOT automatically equal approval**.

Once copy has undergone refinement using any template in this document, it MUST return to the evaluation workflow (`04_CONTENT_EVALUATION.md`) for final verification before it can be cleared for website implementation.

```
       +------------------+
       | Generated Draft  |
       +------------------+
                 |
                 v
       +------------------+
       |    Evaluation    | <-------------------+
       +------------------+                     |
                 |                              |
                 v                              |
    [Requires Refinement?]                      |
            /        \                          |
        (Yes)        (No - Approved)            |
        /                \                      |
       v                  v                     |
+------------+     +-------------------+        |
| Refinement |     | Approval Decision |        |
+------------+     +-------------------+        |
       |                  |                     |
       +------------------+                     |
       | (Re-evaluation Loop)                   |
       +----------------------------------------+
                          |
                          v
             +--------------------------+
             | Implementation on Site   |
             +--------------------------+
```

### Mandatory Re-evaluation Rules:
1. **No Auto-Approval:** Refined copy cannot bypass the evaluation quality gate, regardless of how thoroughly prompts were executed.
2. **Re-audit Threshold:** Refined content must achieve an overall weighted evaluation score of **≥ 4.0 / 5.0** across all 8 quality scoring categories in `04_CONTENT_EVALUATION.md` (with 0 claim safety flags).
3. **Zero-Tolerance Claim Verification:** If re-evaluation detects even a single remaining unverified claim, award, stat, or price, the copy is instantly returned for secondary claim purging.
4. **Max Refinement Cycles:** Copy requiring more than two refinement cycles must be escalated for human content strategist review.

---

## 14. Refinement Guardrails

To prevent refinement from degrading copy quality or introducing compliance risks, all refinement operations must strictly enforce these non-negotiable guardrails:

- **Do NOT Fabricate Facts:** Never invent company history, founding team credentials, office locations, or operational capabilities during editing.
- **Do NOT Invent Company Details:** Never create fake client names, project totals, or geographical service limits.
- **Do NOT Introduce Unsupported Services:** Do NOT claim Design Haven offers direct e-commerce purchasing, instant checkout pricing, or native mobile apps.
- **Do NOT Exaggerate Capabilities:** Do NOT promise real-time 3D CAD rendering or instant contractor dispatch.
- **Do NOT Remove Useful Specificity Without Reason:** Retain all valid spatial, lighting, material, and structural design guidance present in the original draft.
- **Do NOT Rewrite Content Unnecessarily:** If a sentence or paragraph passes evaluation cleanly, leave it intact. Avoid editing for arbitrary personal style preferences.
- **Do NOT Change Content Objective Unless Instructed:** Maintain the original copy block's primary communication goal.
- **Clearly Identify Unresolved Information:** Explicitly highlight any missing business input requiring client or strategy team confirmation using `[ASSUMPTION / MISSING INFO REQUIRED]`.
- **Preserve the Distinction Between Facts, Suggestions, and Hypotheses:** Treat verified scope as fact, design ideas as suggestions, and audience insights as hypotheses.

---

## 15. Full Refinement Output Template

Whenever executing a full, end-to-end refinement task, the AI system must generate its response using this standardized, master output structure:

```markdown
# CONTENT REFINEMENT REPORT: [SECTION / COPY BLOCK NAME]

## Original Content Objective
[State the target goal of the original copy block]

## Evaluation Issues Addressed
- **Issue 1:** [e.g., Unverified metric flagged in evaluation]
- **Issue 2:** [e.g., AI cliché ("seamless tapestry") present]
- **Issue 3:** [e.g., Premature conversion pressure for Curiosity stage]

## Elements Preserved
- [Approved spatial concept retained]
- [Approved lighting description retained]
- [Approved core value statement retained]

## Changes Applied
| Location / Line | Original Draft Text | Refined Text | Rationale |
| :--- | :--- | :--- | :--- |
| [Section snippet] | "[Original text]" | "[Refined text]" | [Why change was made] |

## Refined Content
"""
[Insert final polished, production-ready copy block here]
"""

## Unsupported Claims Removed or Corrected
- **Flagged:** "[Original unverified claim]" → **Action Taken:** [Removed / Neutralized / Marked for Verification]

## Remaining Assumptions or Missing Information
- `[ASSUMPTION]` [List any unverified business detail assumed during refinement]
- `[MISSING INFO]` [List any data needed from project stakeholders]

## Re-evaluation Recommendation
- **Recommended Status:** [Ready for Re-evaluation]
- **Target Evaluation Score:** ≥ 4.0 / 5.0 (Overall Weighted Score)
- **Key Dimension to Verify:** [e.g., Journey Alignment & Claim Safety]
```

---

## 16. Complete Prompt Engineering Workflow

Content refinement forms an essential node within the broader, end-to-end Design Haven Prompt Engineering Architecture:

```
[1. Master Business Context] (01_BUSINESS_CONTEXT.md)
              │
              ▼
[2. Brand & Audience Analysis] (02_BRAND_AND_AUDIENCE.md)
              │
              ▼
[3. Content Objective Definition] (03_CONTENT_GENERATION.md)
              │
              ▼
[4. Content Generation] (03_CONTENT_GENERATION.md)
              │
              ▼
[5. Content Evaluation] (04_CONTENT_EVALUATION.md)
              │
              ▼
[6. Content Refinement] (05_CONTENT_REFINEMENT.md)
              │
              ▼
[7. Re-evaluation] (04_CONTENT_EVALUATION.md)
              │
              ▼
[8. Approval] (Quality Gate Passed)
              │
              ▼
[9. Website Implementation] (Production Component Integration)
```

### Stage Roles & Responsibilities:

1. **Master Business Context (`01_BUSINESS_CONTEXT.md`):** Establishes non-negotiable ground truth facts, philosophy, and operational scope limits.
2. **Brand & Audience Analysis (`02_BRAND_AND_AUDIENCE.md`):** Maps target user mindsets, motivations, friction points, and emotional journey stages.
3. **Content Objective Definition (`03_CONTENT_GENERATION.md`):** Defines clear touchpoint goals, copy requirements, and word budgets.
4. **Content Generation (`03_CONTENT_GENERATION.md`):** Produces initial draft copy variants using structured system prompts.
5. **Content Evaluation (`04_CONTENT_EVALUATION.md`):** Audits draft copy across 12 quality dimensions, scoring alignment and identifying defects.
6. **Content Refinement (`05_CONTENT_REFINEMENT.md`):** Applies targeted, principle-driven edits to resolve evaluation defects while preserving approved value.
7. **Re-evaluation (`04_CONTENT_EVALUATION.md`):** Audits refined copy to ensure all defects are resolved and score meets ≥ 8.5 / 10 threshold.
8. **Approval:** Formally verifies copy compliance and marks it ready for deployment.
9. **Website Implementation:** Integrates approved copy into frontend component templates (`PRD.md`, `TRD.md`, `APP_FLOW.md`).

---

## 17. Quick Reference Summary

The table below provides a quick-reference index of all refinement prompt tools and frameworks established in this document:

| Refinement Prompt / Tool | Primary Purpose | Key Output Format |
| :--- | :--- | :--- |
| **Master Content Refinement** | Comprehensive issue-driven copy polish based on full audit reports | Refinement Summary, Changes Applied Table, Refined Copy, Assumptions List |
| **Clarity Refinement** | Streamline complex sentences, improve directness & readability | Issue-Refinement Table & Refined Copy Block |
| **Generic AI Language Removal** | Purge overused LLM clichés, superlatives, and corporate jargon | Weak Language Breakdown Table & Authentic Copy Block |
| **Unsupported Claim Removal** | Eliminate or neutralize unverified stats, awards, pricing, & dates | Unsupported Element Action Table & Claim-Safe Copy Block |
| **Audience Alignment Refinement** | Tailor copy tone and value propositions to specific homeowner mindsets | Audience Improvements Summary, Changes List, & Segment Copy |
| **User Journey Refinement** | Calibrate information density & conversion pressure for target journey stage | Journey Evaluation Summary, Stage Adjustments Table, & Aligned Copy |
| **CTA Refinement** | Create low-friction, non-manipulative call-to-action variants | CTA Direction Matrix Table & Recommended CTA Selection |
| **Conciseness Refinement** | Trim fluff, redundancies, and preamble within target word budget | Condensed Elements List, Reason, & Concise Copy Version |
| **Controlled Variation** | Produce distinct strategic copy angles from one approved concept | 3 Strategic Variation Blocks & Direction Comparison Summary |
| **Refinement Comparison** | Benchmark refined copy against original draft across 8 dimensions | 8-Dimension Evaluation Comparison Matrix Table |
