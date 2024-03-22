import { describe, it, expect, expectTypeOf } from "vitest";
import { s } from "vitest/dist/reporters-P7C2ytIv";
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

export function cyberTruck({ road, time }: { road: string; time: number }) {
  const result: string[] = [];
  if (!road || !time) throw new Error();
  for (let idx = 0; idx < road.length; idx++) {
    const element = road[idx];
    if (idx >= 4) {
      result.push(road.replaceAll("|", "*"));
    } else {
      result.push(road);
    }
  }
  return result;
}

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
describe("Santa's cyber truck", () => {
  it("Should be a function", () => {
    expect(typeof cyberTruck).toBe("function");
  });
  it("Should throw if not called with a string road and a number time argument", () => {
    expect(() => cyberTruck({ road: "", time: 0 })).toThrow();
  });
  it("Should return an array of strings", () => {
    // Check if the return type is an array of strings
    expect(cyberTruck({ road: "1", time: 2 })[0]).toBeTypeOf("string");
  });
  it("After 5 units of time, all barriers should be open", () => {
    expect(
      cyberTruck({ road, time }).some((state, idx) => {
        if (idx >= 4) {
          return state.includes("|");
        }
      })
    ).toBeFalsy();
  });
});
