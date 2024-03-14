/* In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that given a list of gifts and the available materials:
1)  returns a list of the gifts that can be made.
2) A gift can be made if we have all the necessary materials to make it.
 */

import { describe, it, expect } from "vitest";

export function manufacture(gifts: string[], materials: string): string[] {
  interface hash {
    [key: string]: boolean;
  }
  const obj: hash = {};
  const materialsChars = materials.split("");

  for (let j = 0; j < gifts.length; j++) {
    const element = gifts[j];
    obj[element] = true;
    const elementChar = element.split("");

    for (let k = 0; k < elementChar.length; k++) {
      const char = elementChar[k];
      if (!materialsChars.includes(char)) obj[element] = false;
    }
  }

  const returnObj: string[] = [];
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      returnObj.push(key);
    }
  });
  return returnObj;
}

const gifts = ["libro", "ps5"];
const materials = "psli";

const gifts2 = ["juego", "puzzle"];
const materials2 = "jlepuz";

const gifts3 = ["tren", "oso", "pelota"];
const materials3 = "tronesa";

describe("Day 2: Santa's manufacture", () => {
  it("Should return an empty array if no available material", () => {
    expect(manufacture(gifts, materials).length).toBe(0);
  });
  it("Should return an array with all the gifts that could be made given the materials", () => {
    expect(manufacture(gifts2, materials2)).toStrictEqual(["puzzle"]);
    expect(manufacture(gifts3, materials3)).toStrictEqual(["tren", "oso"]);
  });
});
