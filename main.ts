// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// Writes a single line of text (1-240 characters) to /output/entry.txt.
// Deterministic, stdlib only, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "After ninety-nine losses, the boy slid his rook forward, and his older brother stared at the board, then tipped his king.";

// Gate self-check (mirrors the house gate): 1-240 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 240 || ENTRY.trim().length === 0) {
  throw new Error(`entry invalid: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
