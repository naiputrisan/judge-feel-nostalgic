import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, 215 characters: a childhood memory of a grandmother's
// kitchen on an August evening, grounded in the rattle of the screen
// door and the smell of fried rice and rain.
const ENTRY =
  "Every August evening my grandmother called us in from the yard by rattling the screen door, and the kitchen smelled of fried rice and rain, and I never once hurried, because I believed that sound would last forever.";

// The gate accepts 1 to 280 characters of UTF-8 text; refuse loudly
// instead of shipping an invalid entry if the sentence ever grows.
if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
