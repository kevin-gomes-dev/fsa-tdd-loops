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
  // TODO
}

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
  // TODO
}

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
  // TODO
}

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
  // TODO
}

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
  // TODO
}

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
  // TODO
}

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
  // TODO
}

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
  // TODO
}

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
  // TODO
}

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
  // TODO
}
