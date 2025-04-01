// ## 2. map: Transforming Array Elements

// Write a function that uses `map()` to convert an array of temperatures from Celsius to Fahrenheit.
// Formula: F = C × 9/5 + 32

// ```javascript
// function celsiusToFahrenheit(temperatures) {
//   // Your code here
// }

// // Example usage:
// const celsius = [0, 15, 30, 45];
// console.log(celsiusToFahrenheit(celsius)); // Should output: [32, 59, 86, 113]
// ```

function celsiusToFahrenheit(temperatures) {
  if (Array.isArray(temperatures)) {
    const farenheits = temperatures.map(function (el) {
      return el * 1.8 + 32;
    });
    console.log(farenheits);
    return;
  }

  console.error("please check parameter passed is an array...");
}

// celsiusToFahrenheit([0, 15, 30, 45]);

(function farenheitToCelcius(temperatures) {
  if (Array.isArray(temperatures)) {
    const celcius = temperatures.map(function (el) {
      return (el - 32) * (5 / 9);
    });
    console.log(celcius);
    return;
  }

  console.error("please check parameter passed is an array...");
})([32, 59, 86, 113]);

// (function () {})();

// (() => {})();
