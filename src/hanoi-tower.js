const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turnsNum = Math.pow(2, disksNumber) - 1;
  speedSecond = Math.floor(turnsNum / (turnsSpeed / 3600))
  let res = {
    turns: turnsNum,
    seconds: speedSecond
  }
  return res;
};
