const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink( value ) {
    this.chain.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
    if(position <= 0 || position > this.chain.length || !(Number.isInteger(position))) {
      this.chain = [];

      throw new Error(`You can't remove incorrect link!`)
    }

    let leftSide = this.chain.slice(0, position - 1) 
    let rightSide = this.chain.slice(position, this.chain.length)

    this.chain = leftSide.concat(rightSide)

    return this
  },
  reverseChain() {
    
    this.chain.reverse();
    return this
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = []
    return res 

    
  }
};

module.exports = {
  chainMaker
};
