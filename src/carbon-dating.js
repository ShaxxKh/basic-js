const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if(typeof sampleActivity === 'string' && sampleActivity > 0 && sampleActivity < 15){
        return Math.log(15 / sampleActivity) / (0.693 / 5730)
    }
    else {
        return false
    }
};
