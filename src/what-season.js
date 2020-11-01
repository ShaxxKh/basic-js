const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season;
  if (typeof date === 'undefined') {
    
    return 'Unable to determine the time of year!';
  }
  
   else {
    
    month = date.getMonth();
    if (month < 2 || month === 11) {
      season = "winter";
    } else if (month < 5) {
      season = "spring";
    } else if (month < 8) {
      season = "summer";
    } else if (month < 11) {
      season = "autumn";
    }
    console.log(date.valueOf())
    return season;
  }
  
};
