import { capitalize } from "./capitalize";

test("works", () => {
  expect(capitalize("test")).toBe("Test");
});

test("works", () => {
  expect(capitalize("another test")).toBe("Another test");
});
