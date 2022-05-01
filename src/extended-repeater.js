const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
 // repeatTimes устанавливает numberколичество повторений str;
  // separator является stringразделяющим повторением str;
  // addition является дополнительным string, который будет добавляться к каждому повторению str;
  // additionRepeatTimes устанавливает numberколичество повторений addition;
  // additionSeparator является string разделяющим повторением addition.

  let res = ''
  let answer = ''

  // условия для разделителей

  if(options.separator == undefined) {
    options.separator = '+'
  }

  if(options.additionSeparator == undefined) {
    options.additionSeparator = '|'
  }


  //условия для циклов

  if (options.additionRepeatTimes != undefined) {
    for (let i = 1; i <= options.additionRepeatTimes; i++) {
      if (i == options.additionRepeatTimes) {
        res += String(options.addition);
      } else {
        res += String(options.addition) + options.additionSeparator;
      }
    }
  } else if (options.addition != undefined) {
    res = String(options.addition)
  }
  

  if (options.repeatTimes != undefined) {

    for (let j = 1; j <= options.repeatTimes; j++) {
      if(j == options.repeatTimes) {
        answer += str + res;
      } else {
        answer += str + res + options.separator;
      }
    } 
  }

  //условия отсутствия повторений

  if(options.repeatTimes == undefined && options.additionRepeatTimes == undefined) {
    return str + String(options.addition)
  }
   
  return answer
}

module.exports = {
  repeater
};
