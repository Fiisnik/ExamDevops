// TODO: Add here the function to validate
const isEmpty = (label) => !label || label.length === 0;

module.exports.checkGamerTag = (gamerTagValue) => {
    if(gamerTagValue.length < 8) return false;

    const regex = /[_!"`'#%&,:;<>=@{}~$()*+/?^|]/g
    const regex2 = /[0-9]/g
    const found = gamerTagValue.match(regex)
    const found2 = gamerTagValue.match(regex2)
    console.log(found)
    if ( found.length >=1 && found2.length >=1) return true
    else return false

    
  }

exports.isEmpty = isEmpty;
