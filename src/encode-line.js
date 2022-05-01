const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('')
  let num = [];
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      num.push(arr[i])
    } else if (arr[i] !== arr[i + 1]) {
      if (num === []) {
        res.push(arr[i])
      } else {
        num.push(arr[i])
        res.push(num.length)
        res.push(arr[i])
      }
      num = []
    }
  }

  return res.join('').replace(/1/gi, '')
}

module.exports = {
  encodeLine
};
