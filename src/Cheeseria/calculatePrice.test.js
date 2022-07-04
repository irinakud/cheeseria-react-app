import calculatePrice from "./calculatePrice";

describe("calculatePrice", () => {
  it("calculates the price correctly", () => {
    expect(calculatePrice(1, 100)).toBe(100);
  });

  // TODO: more tests to add, including for edge cases
});
