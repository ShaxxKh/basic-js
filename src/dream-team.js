const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  let teamNameArray = []
  let teamName = ''
  if(Array.isArray(members)){
    members.map(member => {
      if(typeof member === "string"){
        teamNameArray.push(member.replace(/\s+/g, '')[0].toUpperCase())
      }
      else {
        return false
      }
      
    });
  }
  
  else {
    return false
  }
  teamNameArray.sort().map(membeer => {
    teamName += membeer[0]
  })
  return teamName
};
