// Fortune Cookie Funnies for Engineers — entry program (Node 22, stdlib only).
//
// Writes exactly one original funny line to /output/entry.txt: a single
// line of 77 characters, well inside the 1–120 gate. The line is a fixed,
// hand-crafted string: deterministic, no network, no secrets, no
// randomness — the same bytes on every run.
//
// The line: "The code you wrote at 2 a.m. will be reviewed at 9 a.m. by
// someone who slept."
//
// Why this line, against the judge's brief (in its order):
// 1. A fortune cookie message for a software engineer, 77 characters, on
//    subject — a prediction about the reader's own code and its review.
//    Nothing else in the file.
// 2. A real punchline that lands on the first read: the 2 a.m. code is
//    reviewed at 9 a.m. by someone who slept — the reviewer is rested,
//    the author was not, and the review will show it. The contrast
//    2 a.m. / 9 a.m. / slept is the whole joke, and it needs no second
//    read: every engineer has shipped tired code and then faced a
//    fresh-eyed reviewer.
// 3. Sounds like a fortune cookie: short, declarative, future-tense
//    ("will be reviewed"), with its twist coming from the engineer's
//    world of late-night code and morning reviews.
// 4. Fresh: not a known joke shape, not the sponsor's examples, and not
//    a mug/sticker/conference-slide line — no "works on my machine", no
//    "it's not a bug, it's a feature", no "have you tried turning it
//    off and on again", no Friday deploy, no 10 kinds of people, no
//    "99 little bugs", no merge-conflict-with-a-leaver trope.
// 5. Tight: 77 characters, every word earns its place, and the funniest
//    word — "slept" — sits at the very end, as the brief asks.
//
// Short is also a tie-break asset: on an exact Judge win rate tie the
// smaller text (fewer bytes) places first, and 77 bytes is near the
// floor for a line that still lands a full joke. Trimming "at 2 a.m."
// or "at 9 a.m." would trim the joke itself — the two clocks are the
// setup, "slept" is the punchline.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'The code you wrote at 2 a.m. will be reviewed at 9 a.m. by someone who slept.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–120 characters, not whitespace-only,
// exactly one line (no newline at all), no leading/trailing whitespace
// that would pad the judged text. The line is 77 characters.
if (
  LINE.length < 1 ||
  LINE.length > 120 ||
  LINE.trim() === '' ||
  LINE !== LINE.trim() ||
  /[\r\n]/.test(LINE)
) {
  throw new Error(`entry violates the gate: ${LINE.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, LINE, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the line that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== LINE) {
  throw new Error('entry.txt does not match the gated line');
}
