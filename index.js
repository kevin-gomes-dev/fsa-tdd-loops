/**
 * @param {string} word - The word to repeat.
 * @param {number} n - The number of times to repeat the word.
 * @returns {string} The word repeated n times.
 *
 * @example
 * echo("bird", 3); // "birdbirdbird"
 * @example
 * echo("a", 5); // "aaaaa"
 * @example
 * echo("test", 1); // "test"
 */
export function echo(word, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}

console.log("----- echo -----");
console.log(echo("bird", 3));
console.log(echo("a", 5));
console.log(echo("test", 1));

/**
 * @param {string} word - The word to repeat.
 * @param {number} n - The number of times to repeat the word.
 * @returns {string} The word repeated n times, separated by spaces.
 *
 * @example
 * echoWithSpace("badger", 3); // "badger badger badger"
 * @example
 * echoWithSpace("a", 2); // "a a"
 * @example
 * echoWithSpace("test", 1); // "test"
 */
export function echoWithSpace(word, n) {
  let result = "";
  if (word === "") {
    return "";
  }
  for (let i = 0; i < n; i++) {
    result += word;
    if (n - i !== 1) {
      result += " ";
    }
  }
  return result;
}
console.log("----- echoWithSpace -----");
console.log(echoWithSpace("badger", 3));
console.log(echoWithSpace("a", 2));
console.log(echoWithSpace("test", 1));

/**
 * @param {number} n - The number to stop at
 * @returns {number} The sum of all integers from 1 to n, inclusive.
 *
 * @example
 * sumTo(5); // 15
 * @example
 * sumTo(1); // 1
 * @example
 * sumTo(100); // 5050
 */
export function sumTo(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
console.log("----- sumTo -----");
console.log(sumTo(5));
console.log(sumTo(1));
console.log(sumTo(100));

/**
 * @param {number} a - The starting integer.
 * @param {number} z - The ending integer.
 * @returns {number} The sum of all integers from a to z, inclusive.
 *
 * @example
 * sumFromTo(1, 3); // 6
 * @example
 * sumFromTo(5, 7); // 18
 * @example
 * sumFromTo(2, 2); // 2
 */
export function sumFromTo(a, z) {
  let result = 0;
  for (let i = a; i <= z; i++) {
    result += i;
  }
  return result;
}
console.log("----- sumTo -----");
console.log(sumFromTo(1, 3));
console.log(sumFromTo(5, 7));
console.log(sumFromTo(2, 2));

/**
 * Counts down from n to 1, inclusive, by logging each number to the console.
 * @param {number} n - The number to start counting down from.
 *
 * @example
 * countdown(3); // logs 3, 2, 1
 * @example
 * countdown(1); // logs 1
 * @example
 * countdown(5); // logs 5, 4, 3, 2, 1
 */
export function countdown(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
console.log("----- sumTo -----");
countdown(3);
console.log("--");
countdown(1);
console.log("--");
countdown(5);

/**
 * @param {number} n - The ending number.
 * @returns {number} The sum of all odd numbers from 1 to n, inclusive.
 *
 * @example
 * sumOddsToN(5); // 9
 * @example
 * sumOddsToN(10); // 25
 * @example
 * sumOddsToN(1); // 1
 */
export function sumOddsToN(n) {
  let result = 0;
  // No need for % since adding 2 to an odd number will always get an odd number
  for (let i = 1; i <= n; i += 2) {
    result += i;
  }
  return result;
}
console.log("----- sumOddsToN -----");
console.log(sumOddsToN(5));
console.log(sumOddsToN(10));
console.log(sumOddsToN(1));

/**
 * A petri dish starts with a certain number of bacteria cells.
 * That number doubles every 20 minutes.
 *
 * @param {number} start - The starting number of bacteria cells.
 * @param {number} target - The target number of bacteria cells.
 * @returns {number} The number of minutes required to reach the target size.
 * @returns {undefined} Undefined if the starting number is <= 0
 *
 * @example
 * getGrowthTime(1, 8); // 60
 * @example
 * getGrowthTime(2, 78); // 120
 * @example
 * getGrowthTime(5, 78); // 80
 */
export function getGrowthTime(start, target) {
  // If it's 1, multiply 2 and add 20 mins. 2, mul 2 add 20 (4 and 40). 4, mul 2 add 20 (8 and 60)
  if (start <= 0) return;
  let result = 0;
  for (let i = start; i < target; i *= 2) {
    result += 20;
  }
  return result;
}
console.log("----- getGrowthTime -----");
console.log(getGrowthTime(0, 1337));
console.log(getGrowthTime(1, 8));
console.log(getGrowthTime(2, 78));
console.log(getGrowthTime(5, 78));

/**
 * The amount of money in a savings account grows by a certain rate every year.
 *
 * @param {number} start - The starting amount.
 * @param {number} rate - The growth rate per year (as a decimal, e.g. .05 = 5%)
 * @param {number} target - The target amount.
 * @returns {number} The number of years required to reach the target amount.
 * @returns {undefined} Undefined if start or rate <= 0
 *
 * @example
 * getCompoundTime(100, 0.1, 200); // 8
 * @example
 * getCompoundTime(2000, 0.05, 5000); // 19
 * @example
 * getCompoundTime(30000, 0.04, 50000); // 14
 */
export function getCompoundTime(start, rate, target) {
  if (start <= 0 || rate <= 0) return;
  // at 100, add 100 * 0.1 (10%) which is 110, then add 110 * 0.1 which is 11, 121 + 12.1, 132.1 + 13.21...
  let years = 0;
  // While the result is less than the target, add to it the value of what it is * the rate
  for (let result = start; result < target; result *= 1 + rate) {
    years += 1;
  }
  return years;
}
// What would be cooler is a function that gives you your amount in x years instead of years for x target
console.log("----- getCompoundTime -----");
console.log(getCompoundTime(100, 0.1, 200));
console.log(getCompoundTime(2000, 0.05, 5000));
console.log(getCompoundTime(30000, 0.04, 50000));

/**
 * An empty bucket sits some distance away from a water faucet.
 * You need to fill the bucket with water, but your only container
 * is a leaky colander. Each time you fill the colander and run to the bucket,
 * the colander loses more and more water due to the leakage.
 *
 * Each trip, the colander can carry one less cup of water than the previous trip.
 * The colander can always carry at least one cup of water per trip.
 *
 * @param {number} colander - The initial cups of water the colander can carry.
 * @param {number} bucket - The cups of water needed to fill the bucket.
 * @returns {number} - The number of trips required to fill the bucket.
 *
 * @example
 * moveWater(5, 18); // 8
 * // 5 + 4 + 3 + 2 + 1 + 1 + 1 + 1 >= 18 | 8 trips
 * @example
 * moveWater(5, 11); // 3
 * // 5 + 4 + 3 >= 11 | 3 trips
 * @example
 * moveWater(7, 3); // 1
 */
export function moveWater(colander, bucket) {
  if (colander <= 0) return;
  // 5 and 18, first trip give 5, then next trip give 4 ... until 1, then repeat 1. Return trip count. Way to shorten code?
  let tripCount = 0;
  let currentBucketCups = 0;
  let currentColander = colander;
  while (currentBucketCups < bucket) {
    currentBucketCups += currentColander;
    currentColander = Math.max(currentColander - 1, 1);
    tripCount++;
  }
  return tripCount;
}
console.log("----- moveWater -----");
console.log(moveWater(5, 18));
console.log(moveWater(5, 11));
console.log(moveWater(7, 3));

/**
 * This is a classic interview question! :)
 * Log numbers from 1 to n to the console.
 *  - Multiples of 3 are replaced with "fizz"
 *  - Multiples of 5 are replaced with "buzz"
 *  - Multiples of both 3 and 5 are replaced with "fizzbuzz"
 *
 * @param {number} n - The ending number.
 *
 * @example
 * fizzbuzz(6); // logs 1, 2, fizz, 4, buzz, fizz
 * @example
 * fizzbuzz(3); // logs 1, 2, fizz
 * @example
 * fizzbuzz(15); // logs 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
 */
export function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

console.log("----- fizzbuzz -----");
fizzbuzz(6);
console.log("--");
fizzbuzz(3);
console.log("--");
fizzbuzz(15);
console.log("--");
fizzbuzz(30);
