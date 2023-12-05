const fs = require("fs");
const { MarkovMachine } = require("./markov.js");
// const { makeText, makeURLText } = require("./makeText.js");

describe("MarkovMachine", () => {
  let mm;

  beforeAll(() => {
    const text = fs.readFileSync("eggs.txt", "utf8");
    mm = new MarkovMachine(text);
  });

  test("makeText generates a string", () => {
    const output = mm.makeText();
    expect(typeof output).toBe("string");
  });

  test("makeText generates a string of the correct length", () => {
    const output = mm.makeText(50);
    expect(output.split(" ").length).toBeLessThanOrEqual(50);
  });

  test("makeText generates a string that contains words from the input text", () => {
    const output = mm.makeText();
    expect(mm.words.some((word) => output.includes(word))).toBe(true);
  });
});
