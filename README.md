# WHOOP Mental Readiness: Early Warning System

> Predictive mental health feature concept for fitness wearables, reducing slump duration by detecting physiological pattern destabilization 3-5 days before mental decline occurs.

[Live Prototype Link] | [Full PRD](docs/prd.md) | [Reflections](docs/reflections.md)

---

## The Problem

Over 20% of U.S. adults experience mental health challenges, with recurring slumps derailing health goals for 1-2 weeks at a time. Current wearables (WHOOP, Oura, Apple Watch) track physical readiness but don't predict or warn users before mental decline happens.

**Impact:** Users experiencing 4-6 slumps per year lose 25% of the year operating at <50% capacity. For WHOOP, this creates churn risk when users stop wearing the device during low periods.

---

## The Solution

Mental Readiness surfaces early warning alerts by detecting multi-signal pattern destabilization (HRV, sleep consistency, activity levels, recovery volatility) before users feel the decline.

**Key Features:**
- Predictive alerts 3-5 days before mental health slumps
- Personalized action checklists (sleep commitments, movement goals, social connection)
- 7-day trend tracking to build user awareness of patterns

**North Star Metric:** Reduce average slump duration from 14 days → 5 days (65% reduction)

---

## What I Built

1. **15-page PRD** covering problem definition, success metrics, technical requirements, and risk assessment
2. **Interactive prototype** built with React following WHOOP's design system (Proxima Nova, DINPro, brand colors)
3. **Validation framework** outlining research needed to de-risk the concept

---

## What I Learned

This was my first full 0→1 product concept outside of my work at Grainger. Key learnings:

- **Start with research, not requirements** — I should have interviewed 10+ users before writing acceptance criteria
- **Metrics need to be measurable** — I had to revise my North Star Metric 3x to make it realistic
- **Prototyping reveals gaps** — Building the UI forced me to solve edge cases I missed in the PRD
- **Precision matters more than recall** — For mental health alerts, false positives erode trust faster than false negatives

[Read full reflections →](docs/reflections.md)

---

## Next Steps (If I Were the PM)

**Week 1-2: Validate the Problem**
- Interview 20 WHOOP users experiencing mood variability
- Analyze existing journal data for slump patterns
- Quantify churn correlation with mental health periods

**Week 3-4: Test the Concept**
- Low-fidelity prototype testing with 10 target users
- A/B test alert copy and tone variations
- Define go/no-go criteria based on user feedback

**Month 2-3: Pilot & Iterate**
- Limited beta with 100 opted-in users
- Measure leading indicators (alert action rate >70%)
- Refine algorithm thresholds based on false positive rate

---

## Skills Demonstrated

- End-to-end product lifecycle (problem → PRD → prototype → measurement)
- Success metrics definition (North Star + leading/lagging indicators)
- Precision vs. recall tradeoffs in ML product design
- User research frameworks and validation planning
- React prototyping with design system adherence

---

## About This Project

**Context:** Portfolio project (2025-2026)  
**Role:** Solo product work (research, requirements, design, prototyping)  
**Timeline:** 6 weeks (PRD: 3 weeks, Prototype: 2 weeks, Refinement: 1 week)

**Note:** This is a concept project, not affiliated with WHOOP. Built to demonstrate PM skills in AI/ML product development for health tech.
