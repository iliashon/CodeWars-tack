const calculate=(...x)=>(...y)=> {
    return [].concat(x,y).reduce((a,b)=>a+b,0)
  }

  console.log(calculate(2,4)(3,7,1))

//   You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

// The function should contain at least 1 argument per set.