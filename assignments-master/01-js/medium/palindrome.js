/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var str = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "") //IMPORTANT
    .split("");
  for (var i = 0; i < str.length; i++) {
    if (str[i] == str[str.length - i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
