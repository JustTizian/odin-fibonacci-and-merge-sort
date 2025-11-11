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

function fibsRec(num) {
  if (num <= 1) return [0];
  if (num === 2) return [0, 1];

  const prev = fibsRec(num - 1);

  const next = prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, next];
}

console.log(fibs(-1));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(4));
console.log(fibs(10));

function mergeSort(nums) {
  if (!nums || nums.length === 0) return "Invalid Input";

  if (nums.length === 1) {
    return nums;
  }

  let half = Math.ceil(nums.length / 2);

  const firstHalf = nums.slice(0, half);
  const secondHalf = nums.slice(half);

  const sortedFirst = mergeSort(firstHalf);
  const sortedSecond = mergeSort(secondHalf);

  return merge(sortedFirst, sortedSecond);
}

function merge(leftArr, rightArr) {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArr.length) {
    result.push(leftArr[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArr.length) {
    result.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return result;
}

console.log(mergeSort([]));
console.log(mergeSort([1]));
console.log(mergeSort([2, 5, 6]));
console.log(mergeSort([2, 3, 4, 5, 8, 0, 1, 6, 7, 8]));
console.log(mergeSort([1, 3, 99, 55, 23, 41, 37, 43, 12, 11, 109])); 