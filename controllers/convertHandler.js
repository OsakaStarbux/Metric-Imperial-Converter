/*
*
*
*       Complete the handler logic below
*       
*       
*/
const math = require('mathjs')

function ConvertHandler() {
  
 
  let units = {
      gal: { spelling: 'gallons',     toUnit: 'l',   ratio: 3.78541  },
      l: { spelling: 'liters',      toUnit: 'gal', ratio: 0.26417  },
      kg: { spelling: 'kilograms',   toUnit: 'lbs', ratio: 2.20462  },
      lbs: { spelling: 'pounds',      toUnit: 'kg',  ratio: 0.453592 },
      mi: { spelling: 'miles',       toUnit: 'km',  ratio: 1.60934  },
      km: { spelling: 'kilometers',  toUnit: 'mi',  ratio: 0.621371 }
    };
  
  
  this.getNum = function(input) {
  
    let doublefraction = /\/.*\//g
    if (doublefraction.test(input)){
      return null
    }    
    let alphabet1 = /[a-z]/i.exec(input)
    let index = alphabet1.index
    if (index === 0){
      return 1
    }
    
    let num = input.slice(0, index)
      if (!num){
        return 1
      } else {
        return math.evaluate(num)
      }
  };
  
  this.getUnit = function(input) {
    
    let regex = /[a-z]/i
    let index = regex.exec(input).index
    let result = input.slice(index).toLowerCase()
    
   if (!units[result]){
     return null
   }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    result = units[initUnit]['toUnit']
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    result = units[unit]['spelling']
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
   
    var result;
    result = initNum * units[initUnit]['ratio']
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
    return result;
  };
  
}

module.exports = ConvertHandler;
