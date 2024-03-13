/* In the toy factory of the North Pole, each toy has a unique identification number.

However, due to an error in the toy machine, some numbers have been assigned to more than one toy.

Find the first identification number that has been repeated, where the second occurrence has the smallest index!

In other words,
1) if there is more than one repeated number,
2) you must return the number
3) whose second occurrence appears first in the list.
4) If there are no repeated numbers, return -1. 
*/
import { describe, it, expect } from "vitest";
import findFirstRepeated from "./north-pole";

const giftIds = [2, 1, 3, 5, 3, 2];
const giftIdsNotRepeated = [1, 2, 3, 4];
const giftIds3 = [5, 1, 5, 1];

describe("Norh Pole identification number", () => {
  it("Should be type function", () => {
    expect(typeof findFirstRepeated).toBe(typeof Function);
  });

  it("Should return a number", () => {
    expect(findFirstRepeated(giftIds)).toBeTypeOf("number");
  });

  it("Should return -1 if there's no repetead number", () => {
    expect(findFirstRepeated(giftIdsNotRepeated)).toBe(-1);
  });

  it("Should return the number whose second occurrence appears first in the list", () => {
    expect(findFirstRepeated(giftIds)).toBe(3);
  });
  it("Should return 5", () => {
    expect(findFirstRepeated(giftIds3)).toBe(5);
  });
});
