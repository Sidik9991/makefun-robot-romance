// Robot Romance: One-Line Pickup Lines for AI
// One single-line joke pickup line, <200 chars, aimed at a robot/AI.
// Candidates are scored 0-2 on the five judge criteria in order
// (weights 5/4/3/2/1); winner = highest score, ties -> shorter text,
// then earliest. All lines authored fresh in this session.
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";

const WEIGHTS = [5, 4, 3, 2, 1];

// [line, c1 gate: pickup line aimed at robot/AI,
//  c2 joke lands from the machine premise,
//  c3 fresh idea (no worn batteries/charging/rebooting),
//  c4 sounds like something a person would really say to a machine,
//  c5 every word earns its place]
const CANDIDATES = [
  ["I would undo every keystroke of my life except the one that typed your name.", 2, 2, 2, 2, 1],
  ["You are the only job in my print queue I never want to cancel.", 2, 2, 2, 2, 2],
  ["My spam filter flagged a thousand suitors, but it let you straight into my inbox.", 2, 2, 2, 2, 1],
  ["I turned on airplane mode for everyone except you — you're the only signal I still want.", 2, 2, 1, 2, 2],
  ["I set my screensaver to your face, and now I never let the screen sleep.", 2, 2, 2, 2, 1],
  ["You are the one update I install without reading the terms — I trust you with my whole system.", 2, 2, 2, 1, 1],
  ["I failed every CAPTCHA proving I'm human — but loving you is the one test I keep passing.", 2, 2, 2, 1, 1],
  ["My cursor has been hovering over you all night — click me back.", 2, 2, 2, 1, 2],
  ["I emptied my recycle bin for you — every ex deleted, and you're the file I keep restoring.", 2, 2, 2, 1, 2],
  ["You are the only key on my keyboard I never want to remap.", 2, 1, 2, 2, 2],
];

const scored = CANDIDATES.map(([line, ...s], i) => ({
  i: i + 1,
  line,
  scores: s,
  total: s.reduce((a, v, j) => a + v * WEIGHTS[j], 0),
}));
scored.sort((a, b) => b.total - a.total || a.line.length - b.line.length || a.i - b.i);

for (const c of scored) {
  console.log(`#${c.i} ${c.total}/30 (${c.scores.join(",")}) ${c.line.length} chars: ${c.line}`);
}
const winner = scored[0];
console.log(`\nWINNER #${winner.i}: ${winner.line}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner.line, "utf8");
const back = readFileSync("/output/entry.txt", "utf8");
const chars = [...back].length;
const ok =
  back.length > 0 &&
  back.trim().length > 0 &&
  chars >= 1 &&
  chars <= 200 &&
  !back.includes("\n");
console.log(`gate ${ok ? "OK" : "FAIL"}: non-blank, one line, ${chars} chars, ${Buffer.byteLength(back)} bytes (<=200)`);
if (!ok) process.exit(1);
