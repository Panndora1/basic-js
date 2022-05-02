const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let helpArr = [];
  let arrNegative = []
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] == -1) {
      arrNegative.push(i)
    } else {
      helpArr.push(arr[i])
    }
  }

  helpArr = helpArr.sort((a, b) => a - b)

  let j = 0

  for (let i = 0; i < arr.length; i++) {
    if (arrNegative.includes(i)) {
      res.push(-1);
    } else {
      
      res.push(helpArr[j]);
      j++
    }
  }

  return res

}

module.exports = {
  sortByHeight
};