/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  var letters = str.toLowerCase().split("");
  var count = 0;

  for (var i = 0; i < letters.length; i++) {
    if (
      letters[i] == "a" ||
      letters[i] == "e" ||
      letters[i] == "i" ||
      letters[i] == "o" ||
      letters[i] == "u"
    ) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;
