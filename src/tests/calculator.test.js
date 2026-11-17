const {
  addition,
  subtraction,
  multiplication,
  division,
  calculate,
} = require("../calculator");

describe("calculator operations", () => {
  test.each([
    [2, 3, 5],
    [0, 0, 0],
    [-4, 6, 2],
    [0.1, 0.2, 0.30000000000000004],
  ])("addition(%p, %p) returns %p", (a, b, expected) => {
    expect(addition(a, b)).toBe(expected);
  });

  test.each([
    [10, 4, 6],
    [0, 5, -5],
    [-4, -6, 2],
    [5.5, 2.25, 3.25],
  ])("subtraction(%p, %p) returns %p", (a, b, expected) => {
    expect(subtraction(a, b)).toBe(expected);
  });

  test.each([
    [45, 2, 90],
    [0, 12, 0],
    [-4, 6, -24],
    [1.5, 2, 3],
  ])("multiplication(%p, %p) returns %p", (a, b, expected) => {
    expect(multiplication(a, b)).toBe(expected);
  });

  test.each([
    [20, 5, 4],
    [0, 5, 0],
    [-12, 3, -4],
    [7.5, 2.5, 3],
  ])("division(%p, %p) returns %p", (a, b, expected) => {
    expect(division(a, b)).toBe(expected);
  });

  test("division by zero throws an error", () => {
    expect(() => division(10, 0)).toThrow("Cannot divide by zero.");
  });
});

describe("calculate", () => {
  test.each([
    [2, "+", 3, 5],
    [10, "-", 4, 6],
    [45, "*", 2, 90],
    [20, "/", 5, 4],
  ])("calculates %p %p %p as %p", (a, operator, b, expected) => {
    expect(calculate(a, operator, b)).toBe(expected);
  });

  test("rejects unsupported operators", () => {
    expect(() => calculate(2, "%", 3)).toThrow(
      "Unsupported operation. Use +, -, *, or /.",
    );
  });

  test("propagates division by zero errors", () => {
    expect(() => calculate(20, "/", 0)).toThrow("Cannot divide by zero.");
  });
});
