function numberOfPairs(gloves){

    var glovesObj = gloves.reduce((acc, el)=> {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {})
  
    let r = 0;
  
    for(color in glovesObj){
      r+=Math.floor(glovesObj[color] / 2)
    }
  
    return r
  }

  console.log(numberOfPairs(['gray','black','purple','purple','gray','black']));

//   Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.