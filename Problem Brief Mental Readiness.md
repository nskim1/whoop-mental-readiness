# Problem Brief: Mental Readiness Early Warning System

**Author:** Natalie Kim  
**Date:** November 2025  
**Status:** Concept Development

---

## The Problem

Over one in five U.S. adults (23.1%) live with a mental health disorder, and a 60% rise in depression among adolescents and adults has been recorded in the last decade. While some mental health disorders such as anxiety and depression can be chronic, others may come in waves due to environmental factors or life changes. Experiencing recurring mental health slumps (low mood, anxiety, loss of motivation) often derail health habits and performance goals for 1-2 weeks at a time. **Although these slumps may feel out of the blue, they are actually predictable**—there are insidious warning signs that users don't notice until they're already at the bottom.

Current WHOOP metrics (Recovery, Sleep, Strain) focus on physical readiness. They don't capture mental readiness, and more critically, **they don't warn users before a decline happens**.

## What This Looks Like in Real Life

A WHOOP user wakes up feeling great on Monday. By Wednesday, she's exhausted after a networking event and binges an entire pack of Oreos. By Friday, she's skipping workouts and social plans. By the following Monday, she hasn't left her apartment in 3 days, her sleep schedule is destroyed, and her training plan is abandoned.

**The worst part:** Her Recovery score was 40-70% (yellow/green) throughout. The system said she was physically fine, but mentally she was collapsing.

## Who Experiences This & How Often

### Primary User Segment

Women aged 25-45 who:
- Track their health proactively (already WHOOP users)
- Experience mood fluctuations tied to menstrual cycle, sleep, and stress
- Have performance goals (fitness, weight loss, career projects, work callouts)
- Struggle to maintain habits during low periods
- Anyone who is stressed

### Frequency

- Slumps occur 4-6 times per year
- Each slump lasts 1-2 weeks
- **Total impact: 2-3 months per year (25% of the year) operating at 30-50% capacity**

### Market Size

- WHOOP has ~1.2-2 million active members (estimated)
- ~40-50% are women, ~60-80% experience mood variability
- Conservative estimate: 324K-432K women experience this problem regularly

### Adjacent Users

- Men with seasonal depression, burnout, or anxiety disorders
- Anyone managing chronic mental health conditions alongside physical training

## The Impact of NOT Solving This

### User Impact

**Lost Progress:**
- Abandoned training plans (can't maintain half-marathon prep)
- Weight regain from stress eating during slumps
- Stalled career projects (no energy for extra work)
- Social withdrawal (missing events, declining invitations)

**Compounding Cycle:** Each slump makes the next one worse:
1. Binge eating → next day feels awful → takes it easier
2. Sleep slips → more fatigue → skips workout
3. Skips one social event → isolated → anxiety & depression increases
4. By day 7: no routine, no progress, no momentum
5. Feelings of hopelessness / Low Self-Esteem and Need to abandon goals

**Recovery Time:** 1-2 weeks to climb out of slump + additional time to rebuild habits = **3-4 weeks of lost performance per episode**

### Business Impact (WHOOP)

**Churn Risk:** Users who experience repeated slumps where they:
- Stop wearing WHOOP (embarrassed by lack of activity)
- Cancel membership ("I'm not using it anymore")
- Feel like failures ("I can't stick to anything", "I'm not making any progress")

**Missed Opportunity:**
- Women's health is a growing market (competitors: Oura, Apple Watch with cycle tracking)
- Mental health integration is an untapped differentiator
- Current products (Lively, Flo, Clue) provide generic advice, not personalized physiological predictions. Additionally, their "predictions" are only based on the symptoms logged from previous cycles

## Why Now

1. **WHOOP already has the data:** HRV, RHR, sleep patterns, body temperature, logged behaviors
2. **Growing market awareness:** Mental health destigmatization + women's health investment
3. **Competitive gap:** No wearable connects physiological data to mental health predictions
4. **User demand:** Existing workaround (manual mood tracking in spreadsheets) proves need
5. **Technical feasibility:** Pattern detection doesn't require advanced ML — correlations are observable
6. **WHOOP Coach is built out:** Can add on to it like customizing an agent to a GPT

## How We'll Know We've Solved It

### Success Metrics

**Primary (User Outcomes):**
- **Slump duration:** Reduce from 14 days → 3-5 days (65-85% reduction)
- **Slump frequency:** Reduce from 5/year → 3/year (40% reduction)
- **Goal maintenance:** % of users who maintain training/habit streaks during vulnerable periods

**Secondary (Engagement):**
- Alert action rate: % of users who take suggested actions within 24 hours
- Feature adoption: % of eligible users who enable Mental Readiness alerts
- User satisfaction: NPS specifically for this feature

**Business:**
- Retention lift: Reduced churn among women 25-45
- Differentiation: Press coverage, competitive positioning vs. Oura/Apple
- Expansion: Foundation for broader mental health features

### What "Success" Looks Like in Practice

A user receives an alert on Tuesday: "Mental Readiness declining — take protective action now."

She:
1. Goes for a 20-minute walk at lunch
2. Preps a healthy dinner instead of ordering takeout
3. Commits to 10pm bedtime (vs. letting it slip to midnight)
4. Reaches out to a "safe" person; someone she seeks accountability to
5. Recognizes the pattern matches her menstrual cycle and seeks care from GYN about addressing PMDD (a treatable mental health disorder)

By Thursday, her patterns stabilize. Instead of a 2-week slump, she has 2-3 harder days but maintains her habits and goals.

**That's the win.**

## Open Questions & Risks

**Data Requirements:**
- How much historical data needed for accurate predictions? (Hypothesis: 2-3 cycles / 60-90 days)
- Can we predict without cycle tracking? (Yes, but less accurate)

**Accuracy Threshold:**
- What false positive rate is acceptable? (Alert when not needed)
- What false negative rate is unacceptable? (Miss a real slump)

**User Trust:**
- Will users follow suggestions if they "feel fine" on Day 2?
- How do we build credibility quickly?

**Scope Creep Risk:**
- This could expand into full mental health coaching
- Need to stay focused on early warning (prevention, not treatment)

## Next Steps

1. **Research Phase:** Analyze existing WHOOP data for correlations between physiological markers and self-reported mood/energy
2. **User Interviews:** Talk to 10-15 women WHOOP users about slump experiences
3. **Competitive Analysis:** Deep dive on Lively, Flo, Clue, Oura — what works, what doesn't
4. **PRD Development:** Define MVP scope, success criteria, and technical approach

---

## Appendix: Personal Context

This problem brief is based on lived experience as a WHOOP user tracking mood manually for 3 months. Observed patterns:
- Slumps correlate strongly with luteal phase + sleep inconsistency + habit slip
- "Slow slippage" pattern: 2-3 days of small declines before crash
- Recovery score didn't reflect mental state (40-70% during worst periods)
- Existing apps (Lively) provide generic advice, not actionable early warnings
