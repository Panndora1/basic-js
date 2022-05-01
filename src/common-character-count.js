const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0; 
  


let min = s1.split('').sort()
let max = s2.split('').sort()

if (s1.length > s2.length) {
  min = s2.split('').sort()
  max = s1.split('').sort()
}

for (let i = 0; i < max.length; i++) {
  if (min.includes(max[i])) {
    res++
    min.shift()
  }
}
  return res
}

module.exports = {
  getCommonCharacterCount
};
