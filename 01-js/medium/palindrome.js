/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const regex = /[^a-z0-9]/gi;
  const processedStr = str.toLowerCase().replace(regex, "");
  const reversedString = processedStr.split("").reverse().join("");

  return processedStr === reversedString;
}

module.exports = isPalindrome;
