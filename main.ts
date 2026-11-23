// One Letter for Your Day — writes a single letter to /output/entry.txt.
// The letter is Z: for "zombie", a day lived half-dead on zero sleep.
// One character, no newline — the entry is the letter itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LETTER = "Z";

const here = dirname(fileURLToPath(import.meta.url));
const targets = ["/output/entry.txt", join(here, "output", "entry.txt")];

let done = false;
for (const target of targets) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, LETTER, "utf8");
    done = true;
    break;
  } catch {
    // fall through to the next location
  }
}

if (!done) {
  throw new Error("could not write entry.txt to any location");
}
