const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let convertedStr = "" + str
  let repeatedAdd = []
  let addAndSeparator
  let repeatedStr = []
  let repeatedStrAndAdd = []
  let strAndAdd
  let res

if(options.hasOwnProperty("addition")){
  let addition = "" + options.addition
  if(typeof options.additionRepeatTimes === 'number'){
    for(var i = 0; i < options.additionRepeatTimes; i++){
      repeatedAdd.push(addition)
    }
  }
  else {
    repeatedAdd.push(addition)
  }
  if(options.hasOwnProperty('additionSeparator')){
    addAndSeparator = repeatedAdd.join(options.additionSeparator)
  }else{
    addAndSeparator = repeatedAdd.join('|')
  }
  strAndAdd = convertedStr + addAndSeparator
  if(typeof options.repeatTimes === 'number'){
    for(var i = 0; i < options.repeatTimes; i++){
      repeatedStrAndAdd.push(strAndAdd)
    }
  }
  else {
    repeatedStrAndAdd.push(strAndAdd)
  }
  if(options.hasOwnProperty('separator')){
    res = repeatedStrAndAdd.join(options.separator)
  }else{
    res = repeatedStrAndAdd.join('+')
  }
}
else {
  for(let i = 0; i < options.repeatTimes; i++){
    repeatedStr.push(convertedStr);
  }
  if(options.hasOwnProperty('separator')){
    res = repeatedStr.join(options.separator)
  }
  else {
    res = repeatedStr.join('+')
  }
}



  return res;
};
