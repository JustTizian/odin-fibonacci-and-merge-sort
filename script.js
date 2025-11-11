function fibs(count) {
  const output = [0, 1];
  for (let i = 2; i < count; i++) {
    output.push(output[i - 2] + output[i - 1]);
  }
  return output;
}

console.log(fibs(-1));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(4));
console.log(fibs(10));