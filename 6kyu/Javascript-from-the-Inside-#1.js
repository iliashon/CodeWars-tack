Array.prototype.map = function(fn, nThis) {
    var newArr = this.slice();
    this.forEach((v, i, arr) => newArr[i] = fn.apply(nThis, [v, i, arr]));
    return newArr;
  }

//   https://www.codewars.com/kata/558ccca75f511f2b0d0000f7/train/javascript