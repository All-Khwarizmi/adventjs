import { describe, it, expect } from "vitest";
// import { hello } from "../src/index";

export function hello(name: string) {
  console.log(`Hello, ${name}!`);
  return `Hello, ${name}!`;
}

describe("Test", () => {
  it("should be 'Hello, Bro!'", () => {
    expect(hello("Bro")).toBe("Hello, Bro!");
  });
});
