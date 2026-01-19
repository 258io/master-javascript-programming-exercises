function computePerimeterOfARectangle(length, width) {
  let result = 2* length + 2* width;
  return result;
}

let output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14
