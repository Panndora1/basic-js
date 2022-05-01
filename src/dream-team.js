const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
/*
  
  if (members == 0) {
    return false
  }

  if (!Array.isArray(members)) {
    return false
  }

  let arrSort = members.sort();

  let res = '';


  for (let i = 0; i < arrSort.length; i++) {
    if(typeof arrSort[i] == 'string') {
      for (let j = 0; i < arrSort[i].length; j++) {
        if (arrSort[i][j] != ' ') {
          res += arrSort[i][0];
        }
      }

      
    } 
  }

  return res.toLocaleUpperCase()  */

}

module.exports = {
  createDreamTeam
};
