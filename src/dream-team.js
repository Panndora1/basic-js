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
  if (members == 0 || !Array.isArray(members)) {
    return false
  }

  let arrSort = members.sort();

  let res = [];

  arrSort.forEach(el => {
    if(typeof el == 'string') {
      let h = el.replace(/\s/gi, '');
      res.push(h[0].toUpperCase())
      
    }
  })

  return res.sort().join('')


}

module.exports = {
  createDreamTeam
};
