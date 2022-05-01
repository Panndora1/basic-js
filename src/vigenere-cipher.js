const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  chars = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7,
    'I': 8,
    'J': 9,
    'K': 10,
    'L': 11,
    'M': 12,
    'N': 13,
    'O': 14,
    'P': 15,
    'Q': 16,
    'R': 17,
    'S': 18,
    'T': 19,
    'U': 20,
    'V': 21,
    'W': 22,
    'X': 23,
    'Y': 24,
    'Z': 25,
  }

  numbers = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
    8: 'I',
    9: 'J',
    10: 'K',
    11: 'L',
    12: 'M',
    13: 'N',
    14: 'O',
    15: 'P',
    16: 'Q',
    17: 'R',
    18: 'S',
    19: 'T',
    20: 'U',
    21: 'V',
    22: 'W',
    23: 'X',
    24: 'Y',
    25: 'Z',
  }

  encrypt(message, key) {
    if(message == undefined || key == undefined) {
      throw new Error(`Incorrect arguments!`)
    }

    let numbersOfMassage = [];

    for(let i = 0; i < message.length; i++) {
      if(this.chars[message[i].toUpperCase()] == undefined) {
        numbersOfMassage.push(message[i])
      } else {
        numbersOfMassage.push(this.chars[message[i].toUpperCase()])
      }      
    }

    //console.log(numbersOfMassage)

    let numberOfRepeat = Math.ceil(message.length / key.length);
    let keyWithMassage = key.repeat(numberOfRepeat)
    

    keyWithMassage = keyWithMassage.split('').slice(0, message.length);
    //console.log(keyWithMassage.length, message.length)

    let numbersOfKey = []

    for(let i = 0; i < keyWithMassage.length; i++) {
      numbersOfKey.push(this.chars[keyWithMassage[i].toUpperCase()])
    }

    

    let code = []

    let j = 0

    for(let i = 0; i < numbersOfMassage.length; i++) {
      if(typeof numbersOfMassage[i] == 'string') {
        code.push(numbersOfMassage[i])
        
      } else {
        code.push(numbersOfMassage[i] + numbersOfKey[j])
        j++
      }
    }

    //console.log(code)

    let answer = [];

    for (let i = 0; i < code.length; i++) {
      if(typeof code[i] == 'string') {
        answer.push(code[i])
      } else if (code[i] > 25) {
        answer.push(this.numbers[code[i] - 26])
      } else {
        answer.push(this.numbers[code[i]])
      }
    }

    return this.mode ? answer.join('') : answer.reverse().join('')
  }


  decrypt(encryptedMessage, key) {
    if(encryptedMessage == undefined || key == undefined) {
      throw new Error(`Incorrect arguments!`)
    }

    let numbersOfMassage = [];

    for(let i = 0; i < encryptedMessage.length; i++) {
      if(this.chars[encryptedMessage[i].toUpperCase()] == undefined) {
        numbersOfMassage.push(encryptedMessage[i])
      } else {
        numbersOfMassage.push(this.chars[encryptedMessage[i].toUpperCase()])
      }      
    }

    let numberOfRepeat = Math.ceil(encryptedMessage.length / key.length);
    let keyWithMassage = key.repeat(numberOfRepeat)
    

    keyWithMassage = keyWithMassage.split('').slice(0, encryptedMessage.length);
    

    let numbersOfKey = []

    for(let i = 0; i < keyWithMassage.length; i++) {
      numbersOfKey.push(this.chars[keyWithMassage[i].toUpperCase()])
    }

    let code = []

    let j = 0

    for(let i = 0; i < numbersOfMassage.length; i++) {
      if(typeof numbersOfMassage[i] == 'string') {
        code.push(numbersOfMassage[i])
        
      } else {
        code.push(numbersOfMassage[i] - numbersOfKey[j])
        j++
      }
    }

    let answer = [];
    j = 0;

    for (let i = 0; i < code.length; i++) {
      if(typeof code[i] == 'string') {
        answer.push(code[i])
      } else if (code[i] < 0) {
        answer.push(this.numbers[numbersOfMassage[i] + 26 - numbersOfKey[j]])
        j++
      } else {
        answer.push(this.numbers[code[i]])
        j++
      }
    }


    return this.mode ? answer.join('') : answer.reverse().join('')


  }
}

module.exports = {
  VigenereCipheringMachine
};
