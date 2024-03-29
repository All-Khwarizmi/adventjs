import { describe, expect, it } from "vitest";
import { decode, reverse } from ".";
/* 
In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: the words within the brackets must be read backwards.

Santa needs these messages to be correctly formatted. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

Notes:

- The input strings will always be well formed with parentheses that match correctly, you do not need to validate them.
- There should not be any parentheses left in the final message.
- The maximum nesting level is 2.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

sa
  u(cla)atn)s

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus

 */

const msg = "hola (odnum)";
const nested = "sa(u(cla)atn)s";

describe("Santa's workshop messages", () => {
  it("Should reverse a string", () => {
    expect(reverse("odnum")).toBe("mundo");
  });
  it("Should return a string", () => {
    expect(decode(msg)).toBeTypeOf("string");
  });
  it("Should remove the parentheses from a string", () => {
    expect(decode("(odnum)")).toBe("mundo");
  });

  it("Should reverse a string which is in parentheses", () => {
    expect(decode(msg)).toBe("hola mundo");
  });
  it("Should reverse a string which is nested and in parentheses", () => {
    expect(decode(nested)).toBe("santaclaus");
  });
});
