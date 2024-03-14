/* In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that given a list of gifts and the available materials:
1)  returns a list of the gifts that can be made.
2) A gift can be made if we have all the necessary materials to make it.
 */

import { describe, it, expect } from "vitest";

import { manufacture } from ".";

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
    expect(manufacture(gifts2, materials2).sort()).toStrictEqual(
      ["puzzle"].sort()
    );
    expect(manufacture(gifts3, materials3).sort()).toStrictEqual(
      ["tren", "oso"].sort()
    );
  });
});
