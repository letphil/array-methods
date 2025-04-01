// ## 6. reduce: Combining Array Elements

// Write a function that uses `reduce()` to calculate the total value of a shopping cart.

// ```javascript
// function calculateTotal(cart) {
//   // Your code here
// }

// // Example usage:
// const cart = [
//   { item: "Laptop", price: 999.99, quantity: 1 },
//   { item: "Mouse", price: 29.99, quantity: 2 },
//   { item: "Keyboard", price: 79.99, quantity: 1 },
//   { item: "Monitor", price: 249.99, quantity: 1 },
// ];

// console.log(calculateTotal(cart)); // Should output: 1389.95
// ```

function getTotal(arr) {
  if (Array.isArray(arr)) {
    const total = arr.reduce((acc, curr) => acc + curr, 0);
    // acc - 6
    // curr - 3
    // acc + curr
    console.log("total =", total);
    return;
  }

  console.error("SOMETHIGN WENT WRONG...");
}

// getTotal([1, 2, 3, 4, 5, 6]);

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

function tally(arr) {
  const tallies = arr.reduce(
    (acc, curr) => {
      if (curr.isBoy) acc.boys++;
      if (curr.isGirl) acc.girls++;
      return acc;
    },
    {
      boys: 0,
      girls: 0,
    }
  );
  console.log(tallies);
}

// tally(people);

const fruits = [
  "apple",
  "apple",
  "kiwi",
  "banana",
  "strawberry",
  "grapes",
  "melon",
  "oranges",
  "grapes",
];

// const counts = {};

// for (let i = 0; i < fruits.length; i++) {
//   const current = fruits[i];
//   if (current in counts) counts[current]++;
//   else counts[current] = 1;
// }

// console.log(counts);

const counts = fruits.reduce((acc, curr) => {
  if (curr in acc) acc[curr]++;
  else acc[curr] = 1;
  return acc;
}, {});

console.log(counts);
