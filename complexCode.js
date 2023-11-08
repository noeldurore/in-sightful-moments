// Filename: complexCode.js

// This code implements a complex sorting algorithm called Merge Sort
// It takes an array of numbers as input and sorts them in ascending order
// The algorithm utilizes recursion and auxiliary arrays to merge and sort the sub-arrays

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArray = [9, 2, 5, 1, 7, 4, 8, 6, 3];

const sortedArray = mergeSort(unsortedArray);

console.log("Sorted Array:", sortedArray);

// Output: Sorted Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]