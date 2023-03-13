function deepCount(a){
  let sum = 0;
  function results(a){
    for(let i = 0; i < a.length; i++){
        sum++;
        if(typeof a[i] === 'object'){
            results(a[i]);
        }
    }
  }
  results(a);
return sum;
}

console.log(deepCount([1, 2, [3, 4, [5]]]));


// You are given an array. Complete the function that returns the number of 
// ALL elements within an array, including any nested arrays.
