function analyzeArray(array) {
  const length = array.length;
  let min = Number.MAX_VALUE;
  let max = 0;
  let sum = 0;

  for (const elem of array) {
    sum += elem;
    if (elem < min) {
      min = elem;
    }
    if (elem > max) {
      max = elem;
    }
  }

  const average = sum / length;

  return { average: average, min: min, max: max, length: length };
}

export { analyzeArray };
