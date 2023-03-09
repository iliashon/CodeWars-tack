function squareSum(numbers){
    let result = 0;
    for (let i = 0; i < numbers.length; i++){
      result += numbers[i] ** 2;
    }
    return result;
  }

console.log(squareSum([1,2]));

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript