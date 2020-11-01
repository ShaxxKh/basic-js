const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let catsNum = 0;

  backyard.forEach(line => {
    line.forEach(place => {
      if (place === '^^') {
        catsNum += 1
      }
    });
  });  
  return catsNum
  // remove line with error and write your code here
};
