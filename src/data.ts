export type OutcomeId =
  | "dump"
  | "switchback"
  | "fog"
  | "crossroads"
  | "basecamp";

export interface Option {
  label: string;
  hint: string;
  outcome: OutcomeId;
}

export interface Question {
  kicker: string;
  text: string;
  options: Option[];
}

export interface Outcome {
  id: OutcomeId;
  tag: string;
  title: string;
  distance: string;
  intro: string;
  rangerNote: string;
  steps: string[];
}

export const QUESTIONS: Question[] = [
  {
    kicker: "Q1 / BEARINGS",
    text: "First — what does “lost” feel like right now?",
    options: [
      {
        label: "Drowning in too many things",
        hint: "the list has a list",
        outcome: "dump",
      },
      {
        label: "Frozen at the starting line",
        hint: "I know what to do, I just can't",
        outcome: "switchback",
      },
      {
        label: "Foggy — the basics don't make sense yet",
        hint: "everyone speaks fluent… whatever this is",
        outcome: "fog",
      },
      {
        label: "Torn between two or more directions",
        hint: "every door looks load-bearing",
        outcome: "crossroads",
      },
      {
        label: "Honestly? Empty. Running on fumes",
        hint: "the tank, not the to-do list",
        outcome: "basecamp",
      },
    ],
  },
  {
    kicker: "Q2 / DURATION",
    text: "How long has it felt this way?",
    options: [
      {
        label: "Today. It's a today-problem",
        hint: "woke up sideways",
        outcome: "switchback",
      },
      {
        label: "A few weeks, slowly snowballing",
        hint: "death by a hundred tabs",
        outcome: "dump",
      },
      {
        label: "Since I had to choose something big",
        hint: "the fork in the road won't unfork",
        outcome: "crossroads",
      },
      {
        label: "Longer than I'd like to admit",
        hint: "I've memorized the ceiling",
        outcome: "basecamp",
      },
    ],
  },
  {
    kicker: "Q3 / FAILURE MODE",
    text: "What usually happens when you try to make progress?",
    options: [
      {
        label: "I write a 47-item list, then close the laptop",
        hint: "the list felt like progress. it wasn't",
        outcome: "dump",
      },
      {
        label: "I open the thing… then open my phone",
        hint: "the phone wins on points, every round",
        outcome: "switchback",
      },
      {
        label: "I read three articles and understand less",
        hint: "the fog has fog now",
        outcome: "fog",
      },
      {
        label: "I argue both sides until it's bedtime",
        hint: "a very persuasive lawyer lives in my head",
        outcome: "crossroads",
      },
    ],
  },
  {
    kicker: "Q4 / RESCUE PREFERENCE",
    text: "A ranger appears. What would actually help?",
    options: [
      {
        label: "Someone to carry my backpack for a mile",
        hint: "just take some of it off me",
        outcome: "dump",
      },
      {
        label: "A gentle but firm shove",
        hint: "I respond well to momentum",
        outcome: "switchback",
      },
      {
        label: "One map, one landmark, no jargon",
        hint: "draw it on a napkin, please",
        outcome: "fog",
      },
      {
        label: "Permission to pick the wrong trail",
        hint: "trails can be un-picked, right?",
        outcome: "crossroads",
      },
      {
        label: "A campfire and a blanket",
        hint: "no further questions, ranger",
        outcome: "basecamp",
      },
    ],
  },
  {
    kicker: "Q5 / FUEL",
    text: "Last one — fuel tank status, honestly:",
    options: [
      {
        label: "Full — I just can't find first gear",
        hint: "engine's revving in neutral",
        outcome: "switchback",
      },
      {
        label: "Half, and leaking somewhere",
        hint: "where is it all going",
        outcome: "dump",
      },
      {
        label: "Fuel's fine — the windshield is fogged",
        hint: "can't see the road, engine's great",
        outcome: "fog",
      },
      {
        label: "Fumes, plus a check-engine light",
        hint: "it's making a noise now too",
        outcome: "basecamp",
      },
    ],
  },
];

export const OUTCOMES: Record<OutcomeId, Outcome> = {
  dump: {
    id: "dump",
    tag: "OVERWHELM ROUTE",
    title: "The Brain-Dump Trail",
    distance: "≈ 35 MIN · FLAT WALKING",
    intro:
      "You don't have too much to do. You have too much to hold in your head at once. This trail moves the weight from memory to paper, then picks exactly one thing to carry.",
    rangerNote:
      "A list in your head is a threat. A list on paper is just data. Get it out of the skull before you negotiate with it.",
    steps: [
      "Set a 10-minute timer. Write down every open loop — tasks, worries, errands, that thing from 2019. No order, no judgment.",
      "When the timer rings, circle ONE item that actually matters this week. Not five. One.",
      "Define its smallest physical first step. “Open the document” is a real step. So is “find the form.”",
      "Work that step for 25 minutes. The rest of the list is safe on paper — it can't escape, so it can stop screaming.",
      "Cross it off in ink, out loud if you have to. Then schedule the next 25 — or stop, guilt-free. You did the thing.",
    ],
  },
  switchback: {
    id: "switchback",
    tag: "STARTING ROUTE",
    title: "The Two-Minute Switchback",
    distance: "≈ 15 MIN · SHORT CLIMB",
    intro:
      "You're not lazy — you're at the bottom of a climb staring at the summit. The fix isn't motivation, it's making the first step so small it would be embarrassing not to take it.",
    rangerNote:
      "Motion comes before mood, almost every time. You don't feel like starting and then start — you start, and the feeling catches up two minutes later.",
    steps: [
      "Shrink the task until it sounds ridiculous: “open the laptop.” “Put on shoes.” “Write one sentence.” That's the whole assignment.",
      "Set a 2-minute timer. You are allowed — encouraged — to stop when it rings. That permission is what gets you moving.",
      "Start before your brain finishes its objection. It will object. Nod politely and move your hands anyway.",
      "When the timer rings, choose: stop and count it as a win, or roll ten more minutes while you're warm. Both count.",
      "Write one line somewhere: what you did, and when. Future-you reads the log, not the mood.",
    ],
  },
  fog: {
    id: "fog",
    tag: "LEARNING ROUTE",
    title: "The Fog Burner Ridge",
    distance: "≈ 30 MIN · STEADY GRADE",
    intro:
      "Confusion isn't a wall, it's a toll booth — it means you're at the edge of your map, which is exactly where learning happens. Fog burns off one landmark at a time, never all at once.",
    rangerNote:
      "Twelve open tabs is zero sources. One source, one pass, one page of notes — that's how fog loses.",
    steps: [
      "Write your confusion as a single sentence: “I don't understand ______.” Vague dread becomes a question, and questions can be answered.",
      "Pick ONE source — a video, a doc, a chapter. Close the other eleven tabs. They'll still be confused tomorrow.",
      "Consume it for 20 minutes with a pen moving. Write three things in your own words, badly. Bad words you wrote beat perfect words you skimmed.",
      "Explain it out loud to a plant, a pet, or the kettle. Every stumble marks a patch of fog that's still there.",
      "Turn the biggest stumble into tomorrow's one-sentence question. Repeat daily. The ridge clears faster than you think.",
    ],
  },
  crossroads: {
    id: "crossroads",
    tag: "DECIDING ROUTE",
    title: "The Crossroads Pass",
    distance: "≈ 1 EVENING · WINDY",
    intro:
      "You're not stuck because the choice is wrong — you're stuck because you're trying to feel certain before moving, and certainty only shows up after. Most doors are two-way; walk through one and see.",
    rangerNote:
      "The coin flip trick isn't about the coin. It's about the split-second when it's in the air and you notice which side you're hoping for. That's your answer, wearing a disguise.",
    steps: [
      "Run 10 / 10 / 10: how will you feel about each option in 10 minutes, 10 months, 10 years? Most panic lives in the 10-minute column.",
      "Flip an actual coin. Watch your gut while it spins — the flinch tells you more than the spreadsheet did.",
      "Ask which option is reversible. When in doubt, choose the two-way door; you can gather real data instead of imaginary data.",
      "Shrink the decision to the next physical step only. Not “change my life” — “send the email,” “book the call,” “try the Tuesday class.”",
      "Tell one person your choice out loud before your courage evaporates. Spoken decisions have bones.",
    ],
  },
  basecamp: {
    id: "basecamp",
    tag: "RECOVERY ROUTE",
    title: "The Base Camp Reset",
    distance: "TONIGHT · NO CLIMBING",
    intro:
      "Read this carefully: you are not lazy, you are depleted. Those need completely different fixes, and you've been applying the wrong one — whipping a horse that needs water.",
    rangerNote:
      "Rest is not a reward you earn after the trail. It's equipment. Nobody summits on an empty tank, and pretending otherwise is how people get hurt out here.",
    steps: [
      "Say it out loud: “I'm depleted, not broken.” It sounds soft. It's the hardest step on this whole page.",
      "Do the animal checklist: water, real food, ten minutes of window or outside. Physiology first, philosophy later.",
      "Lower today's bar to one keepable promise — “laptop closed by 9.” Keep it. That's the entire workout.",
      "Write the worries down so they can wait on paper overnight. They'll keep. They've been keeping for weeks.",
      "Tomorrow, pick the SMALLEST trail in this guide — not the most ambitious one. Momentum beats intensity when you're rebuilding.",
    ],
  },
};

export const FIELD_NOTES = [
  {
    num: "01",
    title: "Nobody actually knows what they're doing.",
    body: "Ask anyone calm and competent. They're improvising with better filing. The people who look sure just decided earlier — the uncertainty was the same.",
  },
  {
    num: "02",
    title: "Confusion is a toll, not a wall.",
    body: "Feeling lost means you're at the edge of your map — which is the definition of learning something. Nobody pays the toll standing still.",
  },
  {
    num: "03",
    title: "Small beats smart, every single day.",
    body: "A clumsy 25 minutes of real movement outruns a brilliant plan that lives in your notes app. The trail doesn't care how elegant your boots are.",
  },
  {
    num: "04",
    title: "You can't think your way out of a feeling.",
    body: "Clarity is a byproduct of action, not a prerequisite. Move first, even badly — the fog thins around moving objects.",
  },
  {
    num: "05",
    title: "“Done” is a direction.",
    body: "Perfect is a swamp — scenic, endless, and full of people who never shipped. Ship the lopsided version. It can be steered; a plan can't.",
  },
  {
    num: "06",
    title: "Getting lost is data.",
    body: "Every wrong turn teaches you terrain no map could. The people who never get lost aren't skilled — they just never leave the parking lot.",
  },
];

export const QUICK_WINS = [
  { label: "Drink a full glass of water", detail: "half of “I'm falling apart” is dehydration" },
  { label: "Open a window for 60 seconds", detail: "fresh air is free medicine" },
  { label: "Write one honest sentence", detail: "about the thing. one is enough today" },
  { label: "Stand up and stretch like a cat", detail: "the body keeps the score; pay it a little" },
  { label: "Send one kind text to a human", detail: "connection outranks productivity, always" },
  { label: "Set a 10-minute timer for the scary thing", detail: "just start it — stopping is allowed" },
];

export const TICKER_ITEMS = [
  "YOU ARE HERE",
  "NO TRAIL TOO SMALL",
  "CONFUSION IS A TOLL, NOT A WALL",
  "SMALL BEATS SMART",
  "DONE IS A DIRECTION",
  "REST IS EQUIPMENT",
  "MOTION BEFORE MOOD",
  "47-STEP SYSTEMS NOWHERE IN SIGHT",
];

export const TRAIL_PATH =
  "M 40 352 C 112 336 78 284 142 262 C 206 240 262 236 246 190 C 230 144 132 156 156 112 C 180 68 258 96 298 58";
