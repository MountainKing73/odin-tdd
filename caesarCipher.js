function isLetter(c) {
  const charCode = c.charCodeAt(0);
  if (
    (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) ||
    (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0))
  ) {
    return true;
  } else {
    return false;
  }
}
function shiftChar(c, factor) {
  //console.log("shiftChar: " + c);

  if (isLetter(c)) {
    //console.log("isLetter is true");
    const charCode = c.charCodeAt(0);
    let newCharCode = charCode + factor;
    if (
      (charCode >= "a".charCodeAt(0) &&
        charCode <= "z".charCodeAt(0) &&
        newCharCode > "z".charCodeAt(0)) ||
      (charCode >= "A".charCodeAt(0) &&
        charCode <= "Z".charCodeAt(0) &&
        newCharCode > "Z".charCodeAt(0))
    ) {
      newCharCode -= 26;
    }
    //console.log("New code: " + newCharCode);
    return String.fromCharCode(newCharCode);
  } else {
    return c;
  }
}

function caesarCipher(str, factor) {
  let newStr = "";
  for (const char of str) {
    newStr += shiftChar(char, factor);
  }
  return newStr;
}

export { caesarCipher };
