const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
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

  test.each([
    [10, 3, 1],
    [-10, 3, -1],
    [12, 4, 0],
  ])("modulo(%p, %p) returns %p", (a, b, expected) => {
    expect(modulo(a, b)).toBe(expected);
  });

  test("modulo by zero throws an error", () => {
    expect(() => modulo(10, 0)).toThrow("Cannot modulo by zero.");
  });

  test.each([
    [2, 3, 8],
    [2, -2, 0.25],
    [-3, 2, 9],
  ])("power(%p, %p) returns %p", (base, exponent, expected) => {
    expect(power(base, exponent)).toBe(expected);
  });

  test.each([
    [9, 3],
    [0, 0],
    [2, Math.sqrt(2)],
  ])("squareRoot(%p) returns %p", (number, expected) => {
    expect(squareRoot(number)).toBe(expected);
  });

  test("squareRoot of a negative number throws an error", () => {
    expect(() => squareRoot(-1)).toThrow(
      "Cannot take the square root of a negative number.",
    );
  });
});

describe("calculate", () => {
  test.each([
    [2, "+", 3, 5],
    [10, "-", 4, 6],
    [45, "*", 2, 90],
    [20, "/", 5, 4],
    [10, "%", 3, 1],
    [2, "^", 3, 8],
  ])("calculates %p %p %p as %p", (a, operator, b, expected) => {
    expect(calculate(a, operator, b)).toBe(expected);
  });

  test("calculates a square root", () => {
    expect(calculate(9, "sqrt")).toBe(3);
  });

  test("rejects unsupported operators", () => {
    expect(() => calculate(2, "?", 3)).toThrow(
      "Unsupported operation. Use +, -, *, /, %, ^, or sqrt.",
    );
  });

  test("propagates division by zero errors", () => {
    expect(() => calculate(20, "/", 0)).toThrow("Cannot divide by zero.");
  });

  test("propagates modulo by zero errors", () => {
    expect(() => calculate(10, "%", 0)).toThrow("Cannot modulo by zero.");
  });

  test("propagates negative square root errors", () => {
    expect(() => calculate(-1, "sqrt")).toThrow(
      "Cannot take the square root of a negative number.",
    );
  });
});
