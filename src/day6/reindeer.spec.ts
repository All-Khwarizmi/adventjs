import { it, expect, describe } from "vitest";
import { reindeer } from ".";
/* 
The elves are cataloging Santa's reindeer 🦌 based on the distance they can travel.

For this, they have a text string movements where each character represents the direction of the reindeer's movement:

> = Moves to the right
< = Moves to the left
* = Can move forward or backward
For example, if the movement is >>*<, it goes to the right twice, then it can go either left or right (whichever maximizes the final traveled distance) and then left.

The elves want to know what the maximum distance the reindeer travels is after completing all movements.

In the previous example, the maximum distance the reindeer travels is 2. It goes to the right twice +2, then with the * it can go to the right again to maximize the distance +1 and then it goes to the left -1.

Create a maxDistance function that takes the text string movements and returns the maximum distance that the reindeer can travel in any direction:

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
Keep in mind that it doesn't matter whether it is to the left or right, the distance is the absolute value of the maximum distance traveled at the end of the movements.
*/

const movements = ">>*<";
const movements2 = "<<<>";
const movements3 = ">***>";
const movements4 = ">>*<"; // 2
const movements5 = "<<<>"; // 2
const movements6 = ">***>"; // 5
const movements7 = ">>*<<"; // 1
const movements8 = ">>*<<<"; // 2

describe("Reindeer Trial", () => {
  it("should be of type function", () => {
    expect(reindeer).toBeTypeOf("function");
  });
  it("should throw if a string is not passed as argument", () => {
    expect(() => reindeer({ movements: "" })).toThrow();
  });

  it("should return a number", () => {
    expect(reindeer({ movements: ">" })).toBeTypeOf("number");
  });
  it("should return the max distance", () => {
    expect(reindeer({ movements })).toBe(2);
    expect(reindeer({ movements: movements2 })).toBe(2);
    expect(reindeer({ movements: movements3 })).toBe(5);
    expect(reindeer({ movements: movements4 })).toBe(2);
    expect(reindeer({ movements: movements5 })).toBe(2);
    expect(reindeer({ movements: movements6 })).toBe(5);
    expect(reindeer({ movements: movements7 })).toBe(1);
    expect(reindeer({ movements: movements8 })).toBe(2);
  });
});
