import { describe, it, expect, expectTypeOf } from "vitest";
import { sledStepper, stepperII } from ".";
/* 
Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road. The road is represented by a string of characters, where:

. = Road
S = Santa's Sled
* = Open barrier
| = Closed barrier
Example of a road: S...|....|.....

Each unit of time, the sled moves one position to the right. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes through directly.

All barriers start closed, but after 5 units of time, they all open forever.

Create a function that simulates the sled's movement for a given time and returns an array of strings representing the state of the road at each unit of time:
*/

const road = "S..|...|..";
const time = 10; // units of time
const result = [
  "S..|...|..", // initial state
  ".S.|...|..", // sled advances on the road
  "..S|...|..", // sled advances on the road
  "..S|...|..", // sled stops at the barrier
  "..S|...|..", // sled stops at the barrier
  "...S...*..", // barrier opens, sled advances
  "...*S..*..", // sled advances on the road
  "...*.S.*..", // sled advances on the road
  "...*..S*..", // sled advances on the road
  "...*...S..", // passes through the open barrier
];

describe("Sled Stepper", () => {
  it("Should be a function", () => {
    expect(sledStepper).toBeTypeOf("function");
  });
  it("Should throw if param is not type of string and is equal to '' ", () => {
    expect(() => sledStepper("", 0)).toThrow();
  });
  it("Should return a string", () => {
    expect(sledStepper("S..|...|..", 1)).toBeTypeOf("string");
  });
  it("Should make S move one step forward if • or *", () => {
    expect(sledStepper("S..|...|..", 0)).toBe("S..|...|..");
    expect(sledStepper("S..|...|..", 1)).toBe(".S.|...|..");
    expect(sledStepper("S..|...|..", 2)).toBe("..S|...|..");
    expect(sledStepper("S..|...|..", 3)).toBe("..S|...|..");
    expect(sledStepper("S..|...|..", 4)).toBe("..S|...|..");
    expect(sledStepper("S..|...|..", 5)).toBe("...S...*..");
    expect(sledStepper("S..|...|..", 6)).toBe("...*S..*..");
    expect(sledStepper("S..|...|..", 7)).toBe("...*.S.*..");
    expect(sledStepper("S..|...|..", 8)).toBe("...*..S*..");
    expect(sledStepper("S..|...|..", 9)).toBe("...*...S..");
  });
  it("Should update the path behind the sled replacing with the old symbol after it leaves it", () => {
    expect(sledStepper("S..|...|..", 6)).toBe("...*S..*..");
  });
  it("Should make S stop if |", () => {
    expect(sledStepper("S..|...|..", 3)).toBe("..S|...|..");
  });
});

describe("Sled Stepper II", () => {
  it("Should be a function", () => {
    expect(typeof stepperII).toBe("function");
  });
  it("Should throw if not called with a string road and a number time argument", () => {
    expect(() => stepperII({ path: "", step: 0 })).toThrow();
  });
  it("Should return an array of strings", () => {
    // Check if the return type is an array of strings
    expect(stepperII({ path: "1", step: 2 })[0]).toBeTypeOf("string");
  });
  it("Should match the expected states", () => {
    expect(stepperII({ path: road, step: time })).toStrictEqual(result);
  });
});
