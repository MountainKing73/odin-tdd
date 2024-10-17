import { calculator } from "./calculator";

test("Calculator Add Test 1", () => {
  const result = calculator.add(1, 2);
  expect(result).toEqual(3);
});

test("Calculator Add Test 2", () => {
  const result = calculator.add(13, 22);
  expect(result).toEqual(35);
});

test("Calculator Subtract Test 1", () => {
  const result = calculator.subtract(2, 1);
  expect(result).toEqual(1);
});

test("Calculator Subtract Test 2", () => {
  const result = calculator.subtract(22, 13);
  expect(result).toEqual(9);
});

test("Calculator Multiply Test 1", () => {
  const result = calculator.multiply(2, 1);
  expect(result).toEqual(2);
});

test("Calculator Multiply Test 2", () => {
  const result = calculator.multiply(22, 13);
  expect(result).toEqual(286);
});

test("Calculator Divide Test 1", () => {
  const result = calculator.divide(2, 1);
  expect(result).toEqual(2);
});

test("Calculator Divide Test 2", () => {
  const result = calculator.divide(22, 2);
  expect(result).toEqual(11);
});
