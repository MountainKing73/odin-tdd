import { caesarCipher } from "./caesarCipher";

test("Caesar Cipher Lower Case", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Caesar Cipher Upper Case", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("Caesar Cipher Mixed Case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Caesar Cipher With Punctuation Case", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
