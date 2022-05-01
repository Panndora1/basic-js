const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!(Array.isArray(arr))) throw new Error(`'arr' parameter must be an instance of the Array!`);

  let myArr = arr.slice(0)
  let res = [];

  let accDoub = 0
  let accDis = 0
  let emp = 0

  for (let i = 0; i < myArr.length; i++) {
    if(myArr[i] == '--discard-prev') {
      if (emp == 0) {
        res.pop()
      }
      } else if (myArr[i] == '--double-prev') {
        if (i != 0 && emp == 0) {
          res.push(myArr[res.length-1])
          emp = 0
        }
      } else if (myArr[i] == '--discard-next') {
        accDis += 1
        emp += 1
      } else if (myArr[i] == '--double-next') {
        accDoub += 1
      } else if (accDoub == 1) {
        res.push(myArr[i])
        res.push(myArr[i])
        accDoub = 0
      } else if (accDis == 1) {
        res.push(myArr[i])
        res.pop()
        accDis = 0
      } else {
        res.push(myArr[i])
      } 
  }
  return res


}

module.exports = {
  transform
};
