import { reverseString } from "./reverseString";

test("Reverse String Test 1", () => {
  expect(reverseString("test")).toBe("tset");
});

test("Reverse String Test 2", () => {
  expect(reverseString("this is a longer test")).toBe("tset regnol a si siht");
});
