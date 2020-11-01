const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let doubleNext = '--double-next'
  let doublePrev = '--double-prev'
  let discardNext = '--discard-next'
  let discardPrev = '--discard-prev'
  let prevArr = arr
  let newArr = []

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number' || arr[i] === discardNext || arr[i] === doubleNext){
      newArr.push(arr[i])
    }else if(arr[i] === discardPrev && i !== 0){
      newArr.pop()
    }else if(arr[i] === doublePrev && i !== 0){
      newArr.push(arr[i - 1])
    }

  for(let n = 0; n < newArr.length; n++){
    if (newArr[n] === discardNext && n !== newArr.length - 1){
      newArr.splice(n, 6)
    }
    else if (newArr[n] === doubleNext){
      newArr.splice(n, 1, newArr[n + 1])
    }
  }

/*     if(arr[i] === doubleNext){
      arr.splice(i, 1, arr[i + 1])
    }
    else if(arr[i] === doublePrev){
      arr.splice(i, 1, arr[i - 1])
    }
    else if(arr[i] === discardNext && i === 0){
      arr.splice(i, 1)
    }
    else if(arr[i] === discardNext && i !== 0){
      arr.splice(i, 2)
    }
    else if(arr[i] === discardPrev && i === 0){
      arr.shift()
    }
    else if(arr[i] === discardPrev && i !== 0){
      arr.splice(i - 1, 2)
    } */
  }
  return newArr
};
