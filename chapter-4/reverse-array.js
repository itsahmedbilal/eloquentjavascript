// Your code here.

function reverseArray(array = []) {
  let result = [];
  if (array.length === 0) return [];
  else {
    for (let i = array.length - 1; i > -1; i--) {
      result.push(array[i]);
    }
    return result;
  }
}

function reverseArrayInPlace(array = []) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left++;
    right--;
  }
  return array;
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
