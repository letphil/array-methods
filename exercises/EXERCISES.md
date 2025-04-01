## 1. forEach: Iterating through Arrays

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

## 2. map: Transforming Array Elements

Write a function that uses `map()` to convert an array of temperatures from Celsius to Fahrenheit.
Formula: F = C × 9/5 + 32

```javascript
function celsiusToFahrenheit(temperatures) {
  // Your code here
}

// Example usage:
const celsius = [0, 15, 30, 45];
console.log(celsiusToFahrenheit(celsius)); // Should output: [32, 59, 86, 113]
```

## 3. filter: Creating Subsets of Arrays

Write a function that uses `filter()` to return all the even numbers from an array.

```javascript
function filterEvenNumbers(numbers) {
  // Your code here
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(nums)); // Should output: [2, 4, 6, 8, 10]
```

## 4. find/findIndex: Locating Specific Elements

Write two functions:

1. One that uses `find()` to get the first person over 18 years old
2. One that uses `findIndex()` to get the index of the first person over 18 years old

```javascript
function findFirstAdult(people) {
  // Your code here
}

function findFirstAdultIndex(people) {
  // Your code here
}

// Example usage:
const people = [
  { name: "Alice", age: 16 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 17 },
  { name: "David", age: 19 },
];

console.log(findFirstAdult(people)); // Should output: { name: 'Bob', age: 21 }
console.log(findFirstAdultIndex(people)); // Should output: 1
```

## 5. sort: Ordering Array Elements

Write a function that uses `sort()` to arrange an array of strings by their length (shortest to longest).

```javascript
function sortByLength(strings) {
  // Your code here
}

// Example usage:
const words = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(sortByLength(words)); // Should output: ['date', 'apple', 'cherry', 'banana', 'elderberry']
```

## 6. reduce: Combining Array Elements

Write a function that uses `reduce()` to calculate the total value of a shopping cart.

```javascript
function calculateTotal(cart) {
  // Your code here
}

// Example usage:
const cart = [
  { item: "Laptop", price: 999.99, quantity: 1 },
  { item: "Mouse", price: 29.99, quantity: 2 },
  { item: "Keyboard", price: 79.99, quantity: 1 },
  { item: "Monitor", price: 249.99, quantity: 1 },
];

console.log(calculateTotal(cart)); // Should output: 1389.95
```
