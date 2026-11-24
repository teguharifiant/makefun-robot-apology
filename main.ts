// The Robot Apology — entry for make.fun bounty
// u-suga-the-robot-apology-dd96bb59
//
// The entry is exactly two lines:
//   Line 1: one sentence — the robot apologizes for ONE specific mistake.
//   Line 2: one sentence — what the robot learned and what it will do
//           differently, following directly from that mistake.
// Total entry: 1-400 characters (counted by code points), ASCII only,
// no leading/trailing whitespace, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const ENTRY: string =
  "I am sorry I vacuumed up the wedding ring you dropped behind the radiator.\n" +
  "I have learned to scan for small metal objects before every sweep, and from now on I will check the dustbin before I empty it.";

/**
 * Validate an entry against the bounty gates:
 * - 1-400 characters, counted by code points
 * - exactly two lines (split on "\n", no "\r")
 * - neither line only whitespace
 * - no leading or trailing whitespace overall
 */
export function validateEntry(text: string): void {
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 400) {
    throw new Error(
      `entry must be 1-400 characters, got ${codePoints} code points`,
    );
  }
  if (text.includes("\r")) {
    throw new Error("entry must not contain carriage returns");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  const lines = text.split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly two lines, got ${lines.length}`);
  }
  for (const [index, line] of lines.entries()) {
    if (line.trim().length === 0) {
      throw new Error(`line ${index + 1} must not be only whitespace`);
    }
    // Each line is a single sentence, so it must contain exactly one
    // sentence-ending period.
    const periods = line.split("").filter((ch) => ch === ".").length;
    if (periods !== 1) {
      throw new Error(
        `line ${index + 1} must be a single sentence with exactly one period, got ${periods}`,
      );
    }
  }
}

function main(): void {
  validateEntry(ENTRY);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
}

main();
