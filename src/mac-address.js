const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split('-');

  let res = true;

  for (let i = 0; i < arr.length; i++) {
    if (res == false) {
      break;
    }
    
    if(isNaN(parseInt(arr[i], 16))) {
      res = false;
      return res
    } else {
      res = true
    }
    
  }
//console.log(isNaN(parseInt('Z1', 16)))
  return res
}
module.exports = {
  isMAC48Address
};
