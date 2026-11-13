# Project Report – Group 21

**Historical figure / project title:** Alfred Russel Wallace  
**Group members:** Joshua H (s5826828), James W (s5810465), Louis C (s5813238), Adam B (S5824645)  
**GitHub repository:** https://github.com/ThatLittleBirb/BU-Group-21-Software-Engineering-Chat-Bot

> **INSTRUCTIONS – replace or remove all yellow-highlighted text before submission.**  
> This template is the required structure for your group project report. Keep the main section headings; you may add subheadings or reorder content within sections where appropriate. Replace highlighted prompts and table placeholders with your own evidence rather than submitting the guidance text.  
> Submit the report as a PDF via Brightspace. The report must be no more than 12 pages, including figures and tables, excluding references. Do not add a separate cover page or contents page. Use Times New Roman (or a comparable serif font) at 10 or 12 points for main text, and caption and number all figures and tables. Use APA referencing.  
> This report is one part of the group submission. The source-code ZIP, video demonstration (maximum 6 minutes), and individual peer evaluation forms are separate requirements. Assessment is holistic across the report, code, demonstration and development evidence.  
> AI tools may be used but must be acknowledged. The core conversational functionality must be your team’s own structured-data and application-logic implementation, not provided by an LLM or external generative AI service. Optional AI-powered extensions must be integrated through the Express backend.

---

## PROJECT SUMMARY
* We chose Alfred Russel Wallace. We selected this figure because he is local to the area and is often overlooked in favour of Charles Darwin. The intended audience is people who want to know more about his contributions to evolutionary theory.
* Summarise the main user interactions, including how the user’s choices or actions influence the progression of the experience.
* Introduce your overall solution (React frontend, Express backend and structured conversational data/logic), plus any distinctive features or optional extensions.

---

## REQUIREMENTS
* Explain how you identified and refined requirements (for example: team discussion, review of comparable experiences, user needs, prototyping or feedback). Describe any significant changes to scope.
* List functional requirements that describe observable user or system behaviours. Give each a clear identifier and consider how you will verify it.
* List specific, testable non-functional requirements for quality attributes such as usability, accessibility, responsiveness, performance, security, robustness and maintainability. Where relevant, reference measurable targets or standards.

### Functional requirements
* Organise requirements logically, grouping related features where appropriate.
* Use consistent numbering (e.g., 1.1, 1.2, 2.1).
* Ensure each requirement is atomic, clear and testable.
* Provide a brief rationale for each requirement.

### Non-functional requirements
* Focus on quality attributes rather than system functionality (e.g., performance, usability, security, accessibility).
* Ensure requirements are specific, measurable and testable, avoiding vague statements.
* Reference relevant standards or guidelines where appropriate.
* Provide a brief rationale for each requirement.

---

## DESIGN
* Describe and justify the design you planned before implementation. Use clear, labelled diagrams or wireframes where they provide evidence; refer to them in the text.

### System architecture and data flow
* Include an architecture diagram showing the client, server, data/logic and their responsibilities. Explain the data flow and how the frontend and backend communicate.
* Justify significant design decisions (e.g. API routes, component boundaries, how state is managed, how data is organised, or choices supporting modularity and maintainability).

### Conversational interaction design
* Explain how the historical figure’s conversational content is represented (for example JSON structure, dialogue nodes, conditions or state transitions).
* Illustrate a representative conversation path or flowchart. Show how user choices affect branching, progression, feedback and any restart or recovery behaviour.

### User experience and interface design
* Include a wireframe, user journey or annotated design visual and explain the reasoning behind your interaction and presentation choices.
* Discuss clarity, consistency, accessibility, navigation and responsive behaviour across devices; refer to user needs and design trade-offs, not just visual appearance.

> ***Figure 1.** Insert a numbered caption below each figure or table and describe the figure. Captions should be in Times New Roman 9-point italic bold font. One-line captions should be centred; multi-line captions should be justified. For example, this caption should be:*  
> ***React Ben Chatbot interface, illustrating a short conversation where the chatbot explains JSON logic with humorous feedback options (“Ohhh okay” and “Still confused”).***

---

## IMPLEMENTATION

### Frontend, backend and integration
* Describe the implemented React frontend and Express backend, including key components, routes/endpoints, state and data flow. Show how the two parts are meaningfully integrated.
* Explain how the conversation actually runs using structured data and your team’s application logic. Include one concise, relevant example of data and/or code, with commentary on its purpose.
* Highlight technical decisions that contribute to understandable, maintainable code (e.g. component structure, separation of concerns, naming, documentation, error-handling).
* If an LLM or other generative service is used for an optional extension, explain its purpose and how it connects through Express; distinguish it explicitly from your team-built core conversation.

### Testing, software quality, security and robustness
* Summarise your testing approach and concrete evidence/results: relevant functional tests, conversational paths, frontend–backend integration, usability/accessibility and responsive behaviour.
* Explain how you checked important non-functional requirements and what issues were identified and fixed. Present selected outcomes rather than a long unanalysed list.
* Describe relevant security and robustness measures, such as validating user input, safe handling of API requests and errors, avoiding exposed secrets and handling unexpected interactions.
* Identify any outstanding quality limitations and explain their impact. Cross-reference supporting screenshots, tables, tests or repository evidence.

---

## PROJECT PROCESS
* Explain how the team planned and managed work, made design decisions, and distributed practical contributions across the software lifecycle.
* Describe your GitHub workflow with specific evidence (commits, branches, pull requests, issues, review and merging). Explain how this supported collaboration and code quality.
* Explain how work was tracked, reviewed and integrated; note relevant iterations, milestones and changes of direction.
* Discuss significant coordination or implementation challenges, the decisions taken, and the outcomes. Where useful, point to repository history rather than reproducing large amounts of it.
* Evaluate how well the final experience meets its intended purpose, functional requirements and quality goals. Support your judgement with evidence from testing, feedback or the demonstration.
* Reflect critically on what went well and what did not, including technical design, interaction quality, teamwork and project management.
* Identify your most important lessons about software engineering and explain specific improvements you would make with more time.

### AI use acknowledgement
* State whether and how AI tools were used in design, coding, testing, writing or optional features. Acknowledge material AI use as required by the brief, while making clear that the core conversational logic was implemented by the team.

---

## REFERENCES
* List all sources cited in the report in APA format, including relevant reading, documentation, standards, historical materials and third-party software or resources. References are excluded from the 12-page limit.
