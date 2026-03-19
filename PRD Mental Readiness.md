# Product Requirements Document: Mental Readiness Warning System

## Context

WHOOP users experiencing recurring mental health slumps are derailed from their training plans, health goals, and daily performance for 1-2 weeks at a time. Although these slumps feel sudden, a deeper dive into the data shows that these moments are actually predictable: HRV drops 40-60 points below baseline, RHR spikes 15-25 bpm, and sleep consistency slips below 40%. WHOOP Coach can identify these patterns when users ask, and even offers to configure warning rules. However, this capability remains buried in conversation – users must proactively discover it, opt in, and configure thresholds themselves. Most users never get there. Mental Readiness surfaces this insight automatically and proactively. Instead of requiring users to ask the right questions, the system monitors patterns continuously and alerts users before decline occurs, with actionable guidance built in.

Mental health is a fast-growing segment in consumer health, and yet no existing wearables link physiological signals to mental readiness. Competitors like Flo and Lively predict cycle phases but use calendar math, not physiological signals. Oura shows daily readiness but doesn't forecast mental decline. No wearable connects HRV, sleep, and cycle data to predict mental health slumps before they happen. Surfacing and notifying these warnings helps users take proactive action, stay on track with their physical goals, and manage their mental health better. It puts the action back into the user's hands and gives them the ability to stay ahead of what normally feels uncontrollable – making them proactive rather than reactive individuals.

This isn't just better UX—it's a retention play. Users who experience recurring slumps without support are churn risks: they stop wearing WHOOP, feel like failures, and cancel memberships. By helping users stay ahead of slumps, we reduce churn while positioning WHOOP as the only wearable that treats mental and physical health as inseparable.

## Goals & Success Metrics

### Product Goal
Help users detect mental health decline early and take proactive action, reducing slump duration from 14 days to 5 days while maintaining their fitness and life goals.

### North Star Metric: Average Slump Duration

Slump duration is the metric that indicates a user's mental readiness and ability to bounce back. Although we can't completely erase mental health lows due to some users having chronic conditions, we can provide users the ability and tools to step out of their slumps faster. Research shows that slumps correlate with pattern destabilization (erratic sleep, inconsistent movement, recovery volatility) more than single-metric drops. While we can't eliminate slumps entirely (hormonal cycles, life stress, chronic conditions persist), we can help users maintain behavioral stability during vulnerable periods, preventing the "cascade effect" where one bad day becomes two weeks of collapsed habits.

**Target:** Reduce average slump duration from 14 days to 5 days (65% reduction) within 3 months of feature usage

- **Baseline:** 14 days (based on user research and self-reported data)
- **Target:** 5 days by month 3
- **Rationale:** 5 days is a meaningful improvement from two weeks, while still being an achievable target

### Leading Indicators

The following metrics will tell us within days whether users trust and act on the Mental Readiness alerts:

1. **Alert Action Rate: 70%** take at least one proactive action within 24 hours of receiving the alert
   - **Why this matters:** Taking action is a precursor to shortening the slumps. If users don't act on alerts, they will continue in their current habits and the slumps won't shorten. This is our earliest signal that the feature is useful and trusted
   - **How we measure:** Track completion of any checklist item within 24 hours of alert notification

2. **Checklist completion rate: 50%** of items on checklist
   - **Why this matters:** Completing items with the checklist indicates the user is taking action and seeking to feel better, and thus engaging with the system
   - **How we measure:** Track action items completed from checklist

### Lagging Indicators

The following metrics will tell us the real outcome of the product and the impact:

1. **Slump duration** (14 days to 5 days)
   - **Why this matters:** This is the key and ultimate metric that shows the user is improving their resilience and ability to bounce back from their slumps. It also helps them increase the number of their effective days
   - **How we measure:** Track number of days mood is reported as unstable or low in journal

2. **Activity/Habits maintain or increase:** 75% of users maintain at least 3 of 5 key habits (morning routine, sleep consistency, movement/exercise, healthy eating, social connections) during vulnerable periods
   - **Why this matters:** Slumps typically cause complete habit collapse. Maintaining even 3 out of 5 habits means the user is still functioning and hasn't entered the "cascade effect"
   - **How we measure:** Track habit logging in WHOOP journal during days when Mental Readiness shows "at risk" or "declined" state

3. **User-reported mood improvement:** 70% of users report feeling "emotionally and mentally stable" (WHOOP journal) at least 5 days per week during months 2-3 of feature usage
   - **Baseline (estimated):** Based on personal tracking over 6 months, stability was reported ~37% of days during slump periods and ~82% of days outside of slumps. Population baseline TBD - requires analysis of existing WHOOP journal data for "Felt emotional and mentally stable?" responses among women 25-45 over 3 month periods
   - **Target:** 70% of days stable (up from ~37-60% average)
   - **Why this matters:** Self-reported mood is the ultimate measure of whether the product improves mental health, though it's slower to measure than behavioral changes
   - **How we measure:** Track "Yes" responses to "Felt emotionally and mentally stable?" in WHOOP journal, comparing pre/post feature adoption

### Anti-Metrics

1. **Alert frequency:** Should NOT exceed 4 alerts per month per user
   - **Why this matters:** Exceeding 4 alerts per month, or one per week, will lead to alarm fatigue for the user

2. **False positive rate:** Should stay below 15%
   - **Why this matters:** For Mental Readiness alerts to be trusted, precision matters more than recall. It's better to catch 60% of slumps accurately than to catch 90% but include many false alarms. Users will stop trusting the system if they receive alerts when they feel fine
   - **Risk:** If we optimize for "never missing a slump" (high recall), we'll alert too often and users will ignore all alerts

3. **Time spent in the Mental Readiness section:** Less than 5 minutes
   - **Why this matters:** Unlike some metrics, we don't want users to mull over their mental readiness. These require action and so while we do want them to engage with the initial alerts and checklist, it's better for the user to quickly check-in and move on rather than stay and over analyze their mental health

### Secondary Metrics

- **Adoption rate:** 60% of eligible users (women 20-45 who journal regularly) opt in within first 3 months
- **Satisfaction:** NPS greater than 70 specifically for Mental Readiness (vs. WHOOP overall NPS of ~26)
- **Business:** 10% reduction in churn among users with Mental Readiness enabled vs control group

## User Stories & Scenarios

### The Primary Flow (Happy Path)

Natalie wakes up on Wednesday, feeling a little tired and unmotivated, but ready to take on the work and errands of the day. She has to go into the office for an all day event for her department which involves socializing, presenting, and case studies. At 6:30 am, she receives an alert: "Heads up: Your patterns are shifting. Sleep consistency down 20%, movement below baseline. Take action now to stay on track". User opens the Mental Readiness section, and sees a high risk warning (3+ signals, take action now). Underneath are her top three factors: over the past four days, her sleep consistency is below her 30 day average by 20%, she has no workouts logged for 4 days, and her steps have fallen from her typical average of 10,000 to 2,000. Underneath are two suggested actions: logging a moderate walking activity and committing to a 10:00 pm bed time to increase sleep consistency. Over the next few days, by Natalie just focusing on light exercise and improving her sleep, her mood and energy are boosted and she is able to ride out her slump until the weekend when work is less stressful and she can take the next step by doing a more moderate workout.

### The False Positive

Sonia has been traveling with her family and hasn't been prioritizing her workouts for the past couple of days. Between unpacking her suitcases to catching on work from her time off, she's been too busy to workout. Additionally, increase in alcohol consumption and late nights has negatively impacted her sleep quality and quantity. She receives an alert several days after arriving home, but ignores it due to not feeling at risk. The warning system monitors her behaviors for another 5 days to see if she returns to her previous habits. If the metrics continue to point to a slump, then another warning alert will be triggered, this time prompting Sonia why her behaviors have changed and suggest steps to how she can work her way back. If the metrics improve, then there is no need to follow up with her.

### The Ignored Alert

Lexi has been struggling with stressful work, strained relationships, and insecurities about her body. It's led to her feeling down about herself and she's resorted to overeating, not moving from her bed (accumulating only several hundred steps), and cancelling all her social plans. She receives an alert but is too overwhelmed from the emotional pit she's been in to even start on the first simple checklist item - committing to a sleep schedule. She's been guiltily binge watching Netflix until she falls asleep around 1am and doesn't have the motivation to exercise discipline to go to sleep early.

**Escalation Pattern:**
1. **Day 1:** Initial alert (moderate urgency)
2. **Day 2:** If ignored, gentler follow-up: "Yesterday's alert - still relevant. One small step today?"
3. **Day 4:** If still ignore, shift tone: "It's been 3 days. We notice you still haven't engaged. No judgement - but your patterns show continued decline. Want to talk about what's getting in the way?"
4. **Day 7:** If still ignore, pause alerts but leave door open: "We'll give you space. Mental Readiness is here when you're ready."
5. **Post-Slump:** When patterns improve, prompt reflection: "Welcome back. Want to review what happened and plan for next time?"

#### Design Tension: Support vs Accountability

Mental Readiness must balance two competing needs:

1. **Supportive approach:** Gentle encouragement, no pressure, user-controlled pace
   - **Works for:** users who need permission to rest, reduce overwhelm, take it slow
   - **Risk:** users in deep slumps may ignore gentle nudges entirely

2. **Accountability approach:** Direct feedback, escalating urgency, honest reflection
   - **Works for:** Users who need a "wake-up call", clear consequences, structured push
   - **Risk:** Judgemental or increase shame for vulnerable users

**Our Approach:** Start supportive, escalate thoughtfully
- Early alerts: Gentle, data-driven, actionable
- Repeated ignoring: More direct, honest, but never shaming
- Post-slump: Reflective, learning-oriented, forward-looking

This acknowledges mental health exists on a spectrum - some users need a soft touch, others need structured accountability. Our escalation pattern adapts to user response.

### The Success Pattern

User has enabled Mental Readiness for six months and has received a total of 6 alerts in her first five months of using the Mental Readiness alerting. In the past month and a half, she hasn't received any alerts. Her slumps went from 10 days to five to 3 by acting on 80% of her alerts. Over the past six months, her training has not waned, she's built strength, her sleep and recovery are optimized, and her health monitor shows her age is lower and pace of aging is negative. Though her periods still come every month, she's now able to stay proactive in actions to mitigate slumps. And when one day of slump-like activity occurs, she is equipped with the knowledge to take action the next day. In a month, she may go through another slump, but this time she'll be able to work through it without losing any progress.

### Jobs to Be Done

- When I'm entering a vulnerable period, I want to know before I lose all progress, so that I can take action while I still have the mental energy
- When I receive an alert, I want to understand why I'm at risk, so that I can trust the recommendation
- When I receive an alert, I want to be provided achievable tasks in a simple checklist, so that I am not overwhelmed, but encouraged to get out of the slump
- When I ignore an alert, I want to be encouraged without being suffocated, so that I can still trust WHOOP and ultimately step out on my own

## Requirements

### P0: Must-Haves

#### P0-1: Pattern Detection Algorithm

**Description:** System continuously monitors sleep consistency, activity, strain, variance in recovery and cycle phase over a rolling 7-day window to detect behavioral pattern destabilization.

**Rationale:** Accurate pattern detection is the core of Mental Readiness. Without it, alerts will be random and users will lose trust. Multi-signal detection over a 7-day window aligns with observed slump patterns: destabilization across 3+ metrics (not single bad days) emerging over 3-5 days (not overnight). This balance catches patterns early (day 3-4 vs day 14) while minimizing false positives from isolated events (one bad night, travel, illness). 3 out of 5 signals provides confidence without over-conservatism.

**Acceptance Criteria:**
- Alert triggers when 3+ of the 5 key signals show destabilization vs. user's 30-day baseline
- Sleep consistency: Bed/wake time variance >60 min from baseline average
- Movement: Daily steps <70% of baseline average for 3+ days in rolling window
- Recovery volatility: 3+ red/yellow days in 7-day window (vs. user's typical pattern)
- Strain variance
- Cycle phase: Luteal phase + correlation to historical mood dips (if enabled)
- System runs nightly after Recovery calculation completes

**Dependencies:**
- Access to WHOOP sleep, activity, Recovery data
- User must have 30 days of baseline data before alerts activate
- Journal tracking mood stability to label data must be tracked for 30 days
- Cycle tracking (optional) requires user opt-in

#### P0-2: Alert Notification

**Description:** When pattern destabilization is detected, system sends a push notification to alert the user. Notification includes specific metrics that triggered the alert and prompts immediate action. Example: "Heads up: Your patterns are shifting. Sleep consistency down 20%, movement below baseline. Take action now to stay on track."

**Rationale:** Users don't naturally monitor multiple metrics simultaneously to detect destabilization patterns. Proactive push notifications surface these insights when users can still take preventative action (early in the day), driving engagement and behavior change before the slump deepens.

**Acceptance Criteria:**
- Alerts sent within 30 minutes of sleep processing
- Alert triggers only when 3+ signals show destabilization vs 30-day baseline
- Notification copy includes top 2 most destabilized metrics (e.g., "Sleep consistency down 20%, movement below baseline")
- Tapping notification navigates user to Mental Readiness section
- Maximum 1 alert per day
- Alert is not sent if user dismissed a similar alert within the last 48 hours
- If user is already in Mental Readiness section when alert would trigger, show in-app banner instead of push notification

**Dependencies:**
- Sleep processing must be complete
- User has Mental Readiness feature enabled
- User has push notifications enabled for WHOOP app
- User has minimum 30 days of baseline data for pattern detection
- iOS/Android push notification infrastructure

#### P0-3: Mental Readiness UI Section

**Description:** Mental Readiness appears on WHOOP Home screen as a card (positioned between Journal and Cycle Insights) showing current risk level and brief summary. Tapping the card navigates to the full Mental Readiness page, which displays:
- Current risk level (green/yellow/orange/red) with icon
- Action checklist (up to 3 protective actions) with completion tracking
- Five key metrics (sleep consistency, daily movement, Recovery volatility, HRV trend, cycle phase if enabled) ranked as Poor/Sufficient/Optimal with deviation from baseline
- Expandable detail and trend view for each metric

**Rationale:** Users need to understand why they're at risk (data transparency builds trust) and what to do about it (actionable guidance drives behavior change). The two-tier UI (glanceable Home card + detailed page) balances quick check-in with deeper exploration. Ranking metrics as Poor/Sufficient/Optimal aligns with existing WHOOP patterns, reducing learning curve.

**Acceptance Criteria - Home Card:**
- Displays on Home screen between My Journal and Menstrual Cycle Insights
- Shows current risk level (🟢 Low, 🟡 Moderate, 🟠 High, 🔴 Critical)
- Includes 1-line summary of primary concern (e.g., "Sleep consistency declining")
- Updates daily after sleep processing

**Acceptance Criteria - Mental Readiness Page:**
- Large risk level indicator at top with icon and color
- Action checklist displayed prominently below risk level, before metrics
- Up to 3 suggested actions with checkboxes for completion tracking
- **Summary Metrics Card:**
  - Metrics section labeled 'Your 7-Day Metrics' to clarify timeframe (rolling 7-day averages vs. 30-day baseline)
  - Metrics include: Sleep Consistency, Recovery Volatility, HRV Trend, Daily Steps, Cycle Phase
  - Each metric shows 7-day average vs 30-day baseline with status indicator (e.g., 'Steps 1200 🔻2,000' where 1200 = today, 2000 = 7-day avg, compared against 30-day baseline of 10,000 to determine Poor/Sufficient/Optimal)
  - Color legend displayed below metrics
  - No expansion on this card
- **Weekly Trends Section:**
  - Positioned below Summary Metrics Card
  - Lists all 5 metrics with expandable arrows
  - Tapping any metric shows 7-day trend graph
  - Links to WHOOP's existing trends page for deeper analysis
  - Allows users to explore patterns over time

**Dependencies:**
- User has opted into Mental Readiness feature
- User has minimum 30 days of baseline data
- Integration with WHOOP trends infrastructure
- Home screen card architecture supports new module

#### P0-4: Action Checklist

**Description:** Action Checklist displays on Mental Readiness page with up to 3 personalized protective actions. Actions are mix of same-day completions (steps, outdoor time, social connection) and next-day commitments (sleep schedule). System tracks completion automatically where possible (steps, activity) and prompts manual confirmation for others (outdoor time, social connection).

**Rationale:** Tangible, achievable actions drive behavior change. Mixing same-day completions with next-day commitments addresses the timing mismatch (morning alert, evening actions) while maintaining momentum. Auto-tracking reduces friction; manual tracking builds mindfulness.

**Acceptance Criteria:**
- Display a maximum of 3 actions per day
- Actions prioritized based on most destabilized metrics:
  - Sleep consistency off: "Commit to [optimal bedtime] tonight" (validates next morning)
  - Steps low: "Get [X] steps today" where X is calculated as the following to ensure goals are challenging but achievable based on recent activity levels:
    - If 7-day avg < 5,000: X = 7-day avg x 2.5 (progressive increase, max 8000)
    - If 7-day avg 5,000-8,000: X = 8,000
    - If 7-day avg > 8,000: X = 7-day avg + 3,000 (push above normal)
  - No activity logged: "Do 15-min light activity (yoga, walk, stretch)" (manual check after logging)
  - Low outdoor time: "Spend 15 min outside" (manual check)
  - Social isolation pattern: "Reach out to friend/family" (manual check)
- Same day actions (steps, activity, outdoor, social) show progress/completion in real-time
- Next-day actions (sleep) marked as "committed" when checked, validated next morning
- Auto-tracked actions (steps, logged activity) check automatically when threshold met
- Manual actions remain checkable/uncheckable by user
- Next morning: If commitment made but not achieved, show gentle prompt (not shame): "Bedtime slipped to 11:30pm. Try again tonight?"

**Dependencies:**
- 30 days baseline data to personalize action thresholds
- Mental Readiness UI is built
- Integration with WHOOP data - sleep, activity, steps, and journal
- Real-time step tracking for auto-completion
- Next-day validation logic for sleep commitments

#### P0-5: Action Tracking & Completion

**Description:** Actions can be tracked automatically via real-time data, or manually, in which the user is required to check a box of either completing an action or committing to one.

**Rationale:** Tracking the action provides the user a sense of accomplishment by completing an item from the action list.

**Acceptance Criteria:**
- Actions that can be auto-tracked include: step count, activity logged, sleep (the following day)
- Actions that require manual logging: outside time, social connection, sleep commitment
- When user has completed an action, send a push notification to celebrate the user taking action and encouraging them to keep going
- If the user still has not completed any actions for the day, send nudge to ask if they will commit tomorrow
- When user clicks box, UI reflects action is complete by crossing off item & checking box
- Separate actions that can be completed from commitments (i.e., sleep)
- What gets logged to database: `action_displayed`, `action_committed`, `action_completed_auto`, `action_completed_manual`
- Timestamp all events for analytics

**Dependencies:**
- Mental Readiness page complete
- Integration with WHOOP step, activity, and journal data

#### P0-6: Opt-In Flow

**Description:** For privacy and personalization reasons, a user must opt-in to the mental readiness warning system. Flow provides them the basic information for context as to what the feature does before displaying the UI card on the home page. Similar to cycle tracking, the toggle to turn on the feature will be housed in the user's settings. The toggle should remain disabled until at least 30 days worth of data is collected.

**Rationale:** Not all WHOOP users will require this feature.

**Acceptance Criteria:**
- User must explicitly enable Mental Readiness
- 30 days worth of data is available to turn on
- Display toggle in button
- Build modal that provides context of the Mental Readiness score, asks user quick questionnaire to determine if it is meant for the user, and a final check from the user to turn on
- User is able to turn off the feature by accessing their user settings

**Dependencies:**
- 30 days worth of data
- Add toggle, header, and description to user settings

#### P0-7: Data Requirements

**Description:** WHOOP's existing data is sufficient to build this feature. Accessing sleep consistency percentage values, hours in bed, sleep efficiency, daily steps, etc is key to building this feature. Data should include both data that is real-time and daily static data that is only refreshed once daily (such as averages, sleep scores, recovery scores, etc.)

**Rationale:** This is a data driven feature that requires the existing WHOOP data to be built.

**Acceptance Criteria:**
- Minimum 30 days of: sleep data (bed/wake times), activity data (workouts, steps), Recovery scores, journal entries (if available)
- Baseline calculation: Rolling 30-day average for each metric
- Handle data gaps: If user has 5+ missing days in 30-day window, extend baseline period
- Optional data improves accuracy: Cycle tracking, mood journal entries

**Dependencies:**
- 30 days minimum for all data
- Access to WHOOP Sleep, activity, Recovery APIs
- Real-time step count updates
- Nightly batch processing for baseline recalculation

#### P0-8: Measurement/Logging

**Description:** System logs all user interactions and product events to measure success metrics defined in Goals section. Events tracked include alert delivery, user engagement, action completion, and slump outcomes.

**Rationale:** These events feed directly into success metrics (alert action rate, slump duration, habit maintenance). Without measurement, we can't validate if the product works or iterate to improve it.

**Acceptance Criteria:**
- Log these events with timestamps and user_id:
  - `alert_sent` (risk_level, top_metrics, cycle_phase_if_enabled)
  - `alert_opened` (time_to_open_seconds)
  - `mental_readiness_viewed` (source: alert, home_card, navigation)
  - `action_displayed` (action_type, priority_rank)
  - `action_committed` (action_type, commitment_time)
  - `action_completed` (action_type, completion_method: auto/manual)
  - `slump_detected` (based on journal mood entries)
  - `slump_duration` (days_count, actions_taken_during)
- Events stored for minimum 90 days for analysis
- Privacy: Events are pseudonymized, no PII in event logs
- Integration with existing WHOOP analytics infrastructure

**Dependencies:**
- Analytics infrastructure
- Event schema defined and approved
- Privacy review completed

### P1: Should-Haves

The following features would significantly improve Mental Readiness but are not required for initial launch:

- **Escalation Logic:** Automated follow-up alerts on Day 2, 4, 7 when user ignores initial alert
- **Personalized Action Ranking:** Learn which protective actions work best for each user based on historical effectiveness
- **WHOOP Coach Integration:** Deep-link to Coach for personalized guidance on specific concerns
- **Pattern Insights:** "Your slumps typically start with X" retrospective analysis
- **Custom Action Library:** Allow users to add their own protective actions beyond defaults
- **Deep Content Library:** Help/education module at bottom: "Understanding Mental Readiness" (links to support articles, description page, video explainer); "Why am I seeing this alert" expandable section with personalized explanation

### P2: Nice-to-Have (Future Roadmap)

Features for consideration in v2/v3:

- **Post-Slump Reflection:** Prompt user to review what happened and plan for next time when patterns stabilize
- **Accountability Partner:** Notify trusted contact when user at high risk
- **Therapy App Integration:** Share Mental Readiness data with external mental health apps
- **Advanced ML:** Improve prediction accuracy with more sophisticated modeling
- **Predictive Window Extension:** Forecast risk 3-7 days out instead of 24-48 hours

## Technical Considerations

### Algorithm & Data Processing

Mental Readiness relies on pattern detection across multiple physiological and behavioral signals. The core algorithm runs nightly after Recovery calculation completes and evaluates a rolling 7-day window against the user's 30-day baseline.

**Detection Approach:**
- Multi-signal pattern recognition of metrics (not single-threshold alerts)
- Weighted scoring based on historical correlation to user's mood patterns
- Personalization improves over time as system learns individual patterns
- Moderate-conservative thresholds balance precision and recall (3+ signals, 7-day window catches patterns by Day 3-5 while minimizing false positives from isolated events like travel or illness)
- System self-corrects for false negatives: if early signals missed, worsening patterns trigger alert within same 7-day window (typically by Day 7-8)

### Data Infrastructure

**Access required:** WHOOP sleep data (bed/wake times, sleep stages, efficiency), activity data (workouts, steps, strain), Recovery scores, HRV/RHR trends, optional cycle tracking, optional mood journal entries

**Real-time updates:** Step count for auto-completion of actions

**Batch processing:** Nightly baseline recalculation, pattern detection, alert generation

**Storage:** Event logs retained 90 days minimum for analytics; user Mental Readiness history retained indefinitely (unless user deletes account)

### Platform Considerations

**iOS & Android:**
- Native push notifications for alerts (requires user permission)
- Home screen card integration with existing WHOOP architecture
- Real-time UI updates for step tracking and action completion
- Deep linking from notifications to Mental Readiness section

**Backend:**
- Nightly batch job for pattern detection and alert generation
- Real-time API for action completion tracking
- Analytics pipeline for event logging
- Privacy-compliant data handling (mental health data is sensitive)

### Privacy & Security

Mental Health data requires heightened privacy protection:

- User must explicitly opt in (feature disabled by default)
- Data access limited to Mental Readiness feature (not shared with third parties)
- Event logs pseudonymized (no PII)
- User can disable feature and optionally delete historical data
- Compliance with HIPAA considerations for health data

## Design Principles

Mental Readiness should feel supportive, not clinical; empowering, not judgmental. The following principles guide all design decisions:

### 1. Clarity Over Complexity

- Simple, glanceable interface (Home card shows risk level + 1-line summary)
- Detailed page for those who want depth, but not required
- Plain language, no jargon ("Sleep consistency declining" not "σ sleep variance elevated")

### 2. Action Over Analysis

- Prioritize what user can do over what's wrong (action checklist shown first before metrics)
- Maximum of 3 actions in order to avoid overwhelming user
- Specific, achievable guidance ("Get 8,000 steps") not vague advice ("be more active")

### 3. Supportive, Not Patronizing, Tone

- Alerts are informative, not alarmist ("Heads up: patterns shifting" not "WARNING: Mental health crisis")
- Celebration when actions completed
- Gentle accountability when commitments missed (ex. "Bedtime slipped to 11:30pm. Try again tonight?")
- Never shaming or finger-wagging

### 4. Alignment with WHOOP Design System

- Risk levels mirror Recovery (green, yellow, red)
- Metric ranking uses existing patterns (Poor, Sufficient, Optimal)
- Visual consistency with other WHOOP health cards such as cycle and journal
- Familiar interaction patterns (expandable details, buttons linked to trend views)

### 5. Privacy-Respectful

- Opt-in required
- Clear explanation of what data is used
- User controls (can disable anytime)
- No social features unless explicitly requested by user

## Out of Scope

The following features are explicitly NOT included in v1 to maintain focus on core value proposition.

### Not Building in v1:

- **Manual mood journaling within Mental Readiness:** Users can use existing WHOOP Journal; building separate mood tracker adds complexity
- **Community/social features:** No sharing slump patterns, comparing with friends, or group challenges; mental health is private
- **Integration with external apps:** No data sharing with therapy apps, meditation apps, or mental health platforms in v1
- **Customizable alert thresholds:** System determines risk using standardized algorithm; user can't adjust sensitivity
- **Multi-day predictive forecasting:** v1 focuses on 24-48 hour early warnings; 3-7 day forecasting deferred to v2
- **Accountability ML personalization:** v1 uses rules-based pattern detection; ML enhancements in v2
- **In-app coaching/therapy resources:** Mental Readiness surfaces patterns but doesn't provide therapy; users directed to WHOOP Coach or external resources
- **Medication tracking:** Out of scope; some users take medication for mental health, but tracking this adds regulatory complexity
- **Crisis intervention:** Mental Readiness is preventative, not crisis response; no suicide hotline integration or emergency contacts

### Future Considerations (v2/v3):

- Post-slump reflection prompts (learning from patterns)
- Escalation logic for ignored alerts (P1)
- Pattern insights dashboard ("Your slumps typically correlate with X")
- Integration with WHOOP Coach for deeper guidance
- Advanced ML for improved prediction accuracy
- Extended prediction window (7+ days out)

## Risks

### Product Risks

**Risk: False positives vs. false negatives (precision vs. recall tradeoff)**

- **Impact:**
  - False positives: Users receive alerts when not at risk, leading to alarm fatigue, leading to ignoring future alerts
  - False negatives: System alerts too late (Day 7 vs Day 3), so user is already in slump, and it's harder to intervene
- **Tension:** Both damage trust in different ways. False positives create immediate negative feedback ("this is wrong"). False negatives mean late intervention, though system typically self-corrects within the 7-day window as signals worsen
- **Mitigation:** Start with moderate-conservative thresholds (3+ signals, 7-day window). Monitor both error types: false positive rate via user feedback ("Was this helpful") target <15%, and false negative rate via post-slump survey ("Did you receive timely warning?") target >75% caught by Day 4. Adjust thresholds based on 30-day data review
- **Success indicator:** Alert action rate >70% and 80%+ of users report receiving alert before Day 5 slump

**Risk: Users ignore alerts when they're already in slump**

- **Impact:** By the time user feels terrible, they lack motivation to engage and miss the intervention window
- **Mitigation:** Escalation pattern (Day 2, 4, 7 follow-ups in P1); shift from gentle to more direct tone; focus on smallest possible action ("Just commit to bedtime tonight"); post-slump reflection to learn for next time
- **Success indicator:** Even if some alerts ignored, slump duration still reduced for engaged users

**Risk: Over-reliance on physiological signals misses psychological factors**

- **Impact:** HRV/sleep/activity don't capture full mental health picture (stress, relationships, work) and so alerts miss real slumps or trigger incorrectly
- **Mitigation:** Optional mood journaling improves accuracy; cycle tracking adds context; user feedback loop ("Did you experience a slump this week?"); acknowledge in messaging that feature is one tool, not comprehensive mental health solution
- **Success indicator:** 70% user-reported mood stability improvement vs. baseline

### Business Risks

**Risk: Feature increases support burden**

- **Impact:** Users contact support about alerts, disagree with risk assessment, need mental health resources WHOOP can't provide
- **Mitigation:** In-app education (FAQ, videos, tooltips); WHOOP Coach can answer feature questions; clear disclaimers that this isn't medical advice; escalation protocol for users in crisis (refer to external resources)
- **Success indicator:** Mental Readiness-related support tickets <5% of active Mental Readiness users (not all WHOOP users). Tickets primarily about feature mechanics, not crisis intervention

**Risk: Regulatory/liability concerns with mental health claims**

- **Impact:** Feature positioned as "mental health tool" could create liability if user experiences harm
- **Mitigation:** Clear disclaimers (not medical advice, not crisis intervention); focus on "mental readiness" and "pattern detection" not diagnosis; legal review before launch; user agrees to terms during opt-in
- **Success indicator:** Legal approval obtained; no liability issues in first 6 months

## Open Questions

1. **Cycle Tracking Accuracy:** For users with irregular cycles, how do we weight cycle phase signal without over-indexing on unreliable predictions?
2. **Action Personalization:** How quickly should we adapt action suggestions based on user's completion patterns? (After 1 cycle? 3 cycles?)
3. **Precision vs Recall Balance:** Initial thresholds set at 3+ signals to balance both error types. After 30-day review, should relax (catch more slumps earlier) or tighten (reduce false positives) based on user feedback?
4. **Support Escalation:** What happens if user messages WHOOP Coach saying "I'm in crisis?" Need documented escalation protocol
5. **Competitive Intelligence:** Has Oura, Apple, Garmin, or others announced similar features? Need market check before launch

## Success Review Plan

### 30 Days Post-Launch

- Review adoption rate, alert action rate, false positive feedback
- Identify quick wins for improvement (copy changes, threshold adjustments)
- User interviews with 10 early adopters (5 engaged, 5 low engagement)

### 90 Days Post-Launch

- Measure North Star metric: Average slump duration (baseline vs. post-feature)
- Evaluate leading indicators: Alert action rate, habit maintenance rate
- A/B test variations (alert copy, action suggestions, escalation timing)
- Decide on P1 priorities based on data

### 6 Months Post-Launch

- Full metric review: All success metrics from Goals section
- User satisfaction survey: NPS specifically for Mental Readiness
- Retention analysis: Churn reduction among target segment
- Roadmap planning: v2 features based on learnings
