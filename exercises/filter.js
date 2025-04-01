// ## 3. filter: Creating Subsets of Arrays

// Write a function that uses `filter()` to return all the even numbers from an array.

// ```javascript
// function filterEvenNumbers(numbers) {
//   // Your code here
// }

// // Example usage:
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(filterEvenNumbers(nums)); // Should output: [2, 4, 6, 8, 10]
// ```

function filterEvenNumbers(numbers) {
  // Your code here
  /**
   * if 1 is true
   * !1 is false
   */
  if (Array.isArray(numbers)) {
    const evens = numbers.filter((el) => !(el % 2));
    console.log(evens);
    return;
  }

  console.error("check parameter passed in an array...");
}

// filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// *******
// function checkIsArray(arr, callback) {
//   if (Array.isArray(arr)) {
//     callback(arr);
//   } else {
//     console.error("CHECK PARAMETER");
//   }
// }

const people = [
  {
    name: "Adam",
    isBoy: true,
    isGirl: false,
  },
  {
    name: "Stephen",
    isBoy: false,
    isGirl: true,
  },
  {
    name: "Felicia",
    isBoy: false,
    isGirl: true,
  },
  {
    name: "Reggie",
    isBoy: true,
    isGirl: false,
  },
];

function onlyGirls(arr) {
  const girls = arr.filter((person) => person.isGirl);
  console.log("girls =", girls);
}

onlyGirls(people);
