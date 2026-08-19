# 03_CONTENT_GENERATION.md — Content Generation Prompt Templates

## 1. Overview & Template Schema

This document contains structured, reusable prompt templates for generating marketing and product copy across the Design Haven platform. 

All generation templates inherit the master business context from `01_BUSINESS_CONTEXT.md` (Section 2 system context prompt) and ingest strategic content objectives directly from `02_BRAND_AND_AUDIENCE.md` (Prompt #10 Audience-to-Content Mapping).

Every template strictly adheres to the standard prompt structure:
1. **Context:** Background information and project alignment.
2. **Objective:** Clear target goal of the generated output.
3. **Target Audience:** Relevant user category and journey stage.
4. **Constraints:** Rigid operational, tone, and anti-hallucination boundaries.
5. **Required Output Format:** Exact structural format requested from the LLM.

---

## 2. Template 1: Hero Section Copy Generation

```markdown
### PROMPT TEMPLATE: HERO SECTION MESSAGING

[CONTEXT]
Design Haven is an inspiration-first interior design web platform. The Hero Section is the first touchpoint for arriving visitors in the "Curiosity" stage. It must instantly communicate that Design Haven helps creative homeowners transform their spaces without high-pressure sales tactics.

[OBJECTIVE]
Generate compelling Hero messaging variants (Headline, Subheadline, Primary CTA, Secondary Action) that inspire curiosity and set an authentic, sophisticated tone.

[TARGET AUDIENCE]
{TARGET_AUDIENCE} (Creative Homeowners | Renovation Seekers | New Construction Owners | Concept Collaborators)

[CONSTRAINTS]
- NO pushy, transactional language (e.g., "Buy Now", "Get 50% Off Today").
- NO generic AI buzzwords ("Seamlessly blend", "Tapestry of elegance", "Delve into design", "Game-changer").
- NO fabricated claims (NO "Award-winning", "5,000+ homes designed", "20 years of experience", "Guaranteed lowest prices").
- Headline length: Maximum 10 words.
- Subheadline length: Maximum 25 words.

[VARIABLES]
- {TARGET_AUDIENCE}: (e.g., "Creative Homeowners", "Renovation Seekers", "New Construction Owners", "Concept Collaborators")
- {HERO_THEME}: (e.g., "Authentic Spatial Identity", "Thoughtful Renovation", "From Vision to Reality")

[REQUIRED OUTPUT FORMAT]
Provide 3 distinct copy options in Markdown table format:
| Option | Primary Headline | Supporting Subheadline | Primary CTA Copy | Secondary Action Copy |
| :--- | :--- | :--- | :--- | :--- |
| Option 1 | ... | ... | ... | ... |
| Option 2 | ... | ... | ... | ... |
| Option 3 | ... | ... | ... | ... |
```

---

## 3. Template 2: Interior Design Inspiration Content Generation

```markdown
### PROMPT TEMPLATE: INSPIRATION & GALLERY CONCEPT COPY

[CONTEXT]
The Inspiration Module presents curated design showcases, room concept stories, and spatial transformation ideas. Content must help visitors articulate their visual preferences.

[OBJECTIVE]
Generate short, evocative concept descriptions for gallery items or case deep-dives.

[TARGET AUDIENCE]
"Inspiration" and "Exploration" stage visitors seeking aesthetic clarity for their home context.

[CONSTRAINTS]
- Focus purely on spatial design rationale, light play, material texture, function, and aesthetic mood.
- Do NOT fabricate client names, project locations, project budgets, or completed client testimonials.
- Body copy length: 40–70 words per concept card.

[VARIABLES]
- {ROOM_TYPE}: (e.g., "Living Room", "Open Plan Kitchen", "Primary Suite", "Home Sanctuary")
- {DESIGN_STYLE}: (e.g., "Warm Minimalist", "Architectural Modernism", "Organic Contemporary", "Restorative Classic")
- {PROPERTY_CONTEXT}: (e.g., "Existing Home Refresh", "Older Property Renovation", "New Construction Bare Structure")

[REQUIRED OUTPUT FORMAT]
Markdown layout per concept:
### Concept Title: [Title]
- **Spatial Focus:** {ROOM_TYPE}
- **Aesthetic Direction:** {DESIGN_STYLE}
- **Property Context:** {PROPERTY_CONTEXT}
- **Concept Narrative:** [40-70 word paragraph describing spatial flow, light, texture, and living experience]
- **Design Highlights:** [3 bullet points highlighting spatial features without product brand dropping]
- **Contextual CTA:** [e.g., "Explore This Spatial Concept"]
```

---

## 4. Template 3: Capability & Service Description Generation

```markdown
### PROMPT TEMPLATE: CAPABILITY & SERVICE DESCRIPTIONS

[CONTEXT]
Design Haven clarifies its collaborative interior design methodology on the Philosophy and Approach sections. Users in the "Possibility" stage need to understand how Design Haven guides them from raw concepts to refined plans.

[OBJECTIVE]
Generate transparent, pressure-free service descriptions explaining Design Haven's core offerings.

[TARGET AUDIENCE]
Homeowners who need professional guidance to organize and execute their ideas without losing personal taste.

[CONSTRAINTS]
- Do NOT describe direct e-commerce selling, instant price calculators, or 3D rendering engines.
- Focus on collaborative spatial planning, material curation, concept refinement, and project roadmap creation.
- Avoid aggressive sales language; emphasize clarity, partnership, and architectural care.

[VARIABLES]
- {CAPABILITY_NAME}: (e.g., "Spatial Layout & Flow Planning", "Material & Aesthetic Curation", "Renovation Feasibility Guidance", "Full Concept Blueprinting")

[REQUIRED OUTPUT FORMAT]
Markdown component specification:
#### Capability: {CAPABILITY_NAME}
- **Headline:** [1 line clear benefit headline]
- **Overview:** [2-3 sentence explanation of how Design Haven collaborates with the user]
- **What to Expect:** [3 bullet points outlining the collaborative steps]
- **User Outcome:** [1 sentence summarizing the clarity and confidence gained]
```

---

## 5. Template 4: Call-to-Action (CTA) Copy Generation

```markdown
### PROMPT TEMPLATE: PROGRESSIVE CTA COPY

[CONTEXT]
Design Haven relies on contextual, low-friction CTAs integrated naturally across the user journey. High-pressure CTAs ("Sign Up Now", "Claim Offer") cause immediate drop-off.

[OBJECTIVE]
Generate progressive CTA copy tailored to specific user journey stages.

[TARGET AUDIENCE]
Visitors moving through Curiosity → Inspiration → Exploration → Possibility → Confidence → Action.

[CONSTRAINTS]
- Max length: 4 words per button / link copy.
- Must feel reassuring, inviting, and non-presumptuous.
- Must NOT guarantee prices, instant quotes, or immediate contracts.

[VARIABLES]
- {JOURNEY_STAGE}: (e.g., "Inspiration", "Exploration", "Possibility", "Confidence", "Action")
- {SECTION_CONTEXT}: (e.g., "Gallery Footer", "Process Roadmap End", "Philosophy Card", "Navigation Header")

[REQUIRED OUTPUT FORMAT]
Markdown list of 5 CTA variants with rationale:
1. **[CTA Text]** — *Rationale:* [Why it fits this journey stage and context without causing pressure]
```

---

## 6. Template 5: Project Enquiry & Confirmation Messaging

```markdown
### PROMPT TEMPLATE: GUIDED ENQUIRY & CONFIRMATION COPY

[CONTEXT]
The Guided Project Enquiry form is a multi-step conversational tool for users ready to share their project details. Upon submission, clear confirmation copy must set expectations and reassure the user.

[OBJECTIVE]
Generate form step headers, field helper microcopy, and post-submission confirmation messaging.

[TARGET AUDIENCE]
"Confidence" and "Action" stage users initiating project consultation.

[CONSTRAINTS]
- Form helper text must reduce input friction and reassure privacy.
- Post-submission confirmation must explicitly state next steps without making legally binding time or price guarantees.
- Do NOT invent fake contact phone numbers or physical office addresses.

[VARIABLES]
- {FORM_STEP}: (e.g., "Property & Scope Context", "Aesthetic Preferences", "Project Vision & Notes", "Submission Confirmation")

[REQUIRED OUTPUT FORMAT]
Markdown specification:
- **Step Title:** [Clear, inviting step title]
- **Step Subtitle:** [1 sentence explaining why this detail helps shape their vision]
- **Microcopy Helpers:** [Key field helper prompts]
- **Submission Button Text:** [Low-friction submit label]
- **Post-Submission Confirmation Message:** [Warm, transparent message outlining next steps]
```

---

## 7. Template 6: Educational & FAQ Content Generation

```markdown
### PROMPT TEMPLATE: EDUCATIONAL & FAQ CONTENT

[CONTEXT]
The FAQ section resolves common user hesitations regarding the interior design process, collaboration model, and project preparation.

[OBJECTIVE]
Generate clear, empathetic Q&A pairs that eliminate confusion and build trust.

[TARGET AUDIENCE]
Homeowners who feel intimidated by professional design services or worry about losing creative control.

[CONSTRAINTS]
- Answers must be realistic, transparent, and encouraging.
- Do NOT invent pricing lists, hourly rates, project timeline guarantees, or specific contractor endorsements.
- Keep answers concise (60–100 words per answer).

[VARIABLES]
- {TOPIC_AREA}: (e.g., "Working with Existing Ideas", "Renovation vs New Build Guidance", "Design Haven Process", "Preparing for a Consultation")

[REQUIRED OUTPUT FORMAT]
Markdown Q&A list:
#### Q: [Clear, natural user question]
**A:** [Transparent, empathetic answer explaining the process, setting expectations, and encouraging exploration.]
```

---

## 8. Execution Guidelines for Generation

1. **Context & Input Injection:** Attach Section 2 System Prompt from `01_BUSINESS_CONTEXT.md` to ground generation and ingest approved strategic content directions from `02_BRAND_AND_AUDIENCE.md` (Prompt #10).
2. **Pre-flight Variable Check:** Ensure all variables (`{ROOM_TYPE}`, `{HERO_THEME}`, `{TARGET_AUDIENCE}`, etc.) are explicitly substituted prior to sending to an LLM.
3. **Fact Check Rule:** Verify that the generated output contains zero unverified facts (awards, metrics, history, prices).
4. **Pipeline Forwarding:** Direct generated copy into `04_CONTENT_EVALUATION.md` for audit and scoring.
