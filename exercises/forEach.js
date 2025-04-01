/**
 * ## 1. forEach: Iterating through Arrays

Write a function that uses `forEach()` to log each element of an array along with its index.

```javascript
function logArrayElements(arr) {
  // Your code here
}

// Example usage:
logArrayElements(["apple", "banana", "cherry", "date"]);
// Should output:
// Element at index 0: apple
// Element at index 1: banana
// Element at index 2: cherry
// Element at index 3: date
```
 */

/**
 * @definition function to log all elements in array with the index
 * @param {Array} arr - array of elements to traverse over
 */
function logArrayElements(arr) {
  if (Array.isArray(arr)) {
    // for(let i = 0; i < arr.length; i++) {

    // }
    // console.log(`Element at index ${0}: ${arr[0]}`);
    // console.log(`Element at index ${1}: ${arr[1]}`);
    // console.log(`Element at index ${2}: ${arr[2]}`);
    // console.log(`Element at index ${3}: ${arr[3]}`);

    arr.forEach(function (el, idx) {
      console.log(`Element at index ${idx}: ${el}`);
    });
    return;
  } else {
    console.error("parameter must be an array...");
    return;
  }
}

// logArrayElements([13, 4, 2, 1, 4, 5, 6]);
// logArrayElements(["apple", "banana", "cherry", "date"]);

/**
 * @definition will return number of boys and number of girls passed in
 * @param {Array} arr - array of people { name: string, isBoy: boolean, isGirl: boolean }
 */
function tallyBoysAndGirls(arr) {
  if (Array.isArray(arr)) {
    const counts = { boys: 0, girls: 0 };

    arr.forEach(function (el, idx) {
      if (el.isBoy) counts.boys++;
      if (el.isGirl) counts.girls++;
    });

    console.log("counts =", counts);

    return;
  }

  console.error("parameter passed must be array...");
}

tallyBoysAndGirls([
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
]);
