// TODO: Add here the function to validate
const isEmpty = (label) => !label || label.length === 0;

module.exports.checkGamerTag = (gamerTagValue) => {
    if(gamerTagValue.length < 8) return false;
    return true;
  }

exports.isEmpty = isEmpty;
