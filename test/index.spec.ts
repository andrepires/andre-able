import { Able } from "../src/Able";

describe("Able", () => {
  it("flatten() includes own name", () => {
    expect(Able.flatten({}, ["foo"])).toContain("foo");
  });

  // ...remaining tests...
});