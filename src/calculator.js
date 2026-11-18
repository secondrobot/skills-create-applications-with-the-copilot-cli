#!/usr/bin/env node

/**
 * Add two numbers.
 */
function addition(a, b) {
  return a + b;
}

/**
 * Subtract the second number from the first.
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * Multiply two numbers.
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * Divide the first number by the second.
 */
function division(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return a / b;
}

function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      return addition(a, b);
    case "-":
      return subtraction(a, b);
    case "*":
      return multiplication(a, b);
    case "/":
      return division(a, b);
    default:
      throw new Error("Unsupported operation. Use +, -, *, or /.");
  }
}

function runCli(args) {
  if (args.length !== 3) {
    throw new Error("Usage: node src/calculator.js <number> <operator> <number>");
  }

  const [leftInput, operator, rightInput] = args;
  const left = Number(leftInput);
  const right = Number(rightInput);

  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    throw new Error("Both operands must be valid numbers.");
  }

  return calculate(left, operator, right);
}

if (require.main === module) {
  try {
    console.log(runCli(process.argv.slice(2)));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  calculate,
};
