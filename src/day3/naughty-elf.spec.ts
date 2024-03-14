/* In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.

Please, keep in mind:

There will always be one different step or none.
The modification can occur anywhere in the string.
The original steps could be empty
*/

import { describe, it, expect } from "vitest";

const original = "abcd";
const modified = "abcde";
// findNaughtyStep(original, modified) // 'e'

const original1 = "stepfor";
const modified1 = "stepor";
// findNaughtyStep(original, modified) // 'f'

const original2 = "abcde";
const modified2 = "abcde";
const original3 = "abcde";
const modified3 = "fabcde";
// findNaughtyStep(original, modified) // ''
function maxStr(a: string, b: string): number {
  return a.length > b.length ? a.length : b.length;
}
export function extraStep(original: string, modified: string) {
  if (original == modified ) return "";
  let idx = 0;
  let difference = "";
  while (true) {
    const max = maxStr(original, modified);
    if (idx > max) break;
    const org = original[idx];
    const mod = modified[idx];
    if (org !== mod) {
      if (modified.length > original.length) difference = mod;
      else {
        difference = org;
      }
      break;
    }
    idx++;
  }
  return difference;
}

describe("The Naughty Elf", () => {
  
  it("Should return an empty string if there is no difference or the original steps are empty", () => {
    expect(extraStep(original2, modified2)).toBe("");
  });
  it("Should return the extra step at the end of the string", () => {
    expect(extraStep(original, modified)).toBe("e");
  });
  it("Should return the extra step anywhere", () => {
    expect(extraStep(original1, modified1)).toBe("f");
    expect(extraStep(original3, modified3)).toBe("f");
  });
});
