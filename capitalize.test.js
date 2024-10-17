import { capitalize } from "./capitalize";

test("Capitalize Test 1", () => {
  expect(capitalize("test")).toBe("Test");
});

test("Capitalize Test 2", () => {
  expect(capitalize("another test")).toBe("Another test");
});
