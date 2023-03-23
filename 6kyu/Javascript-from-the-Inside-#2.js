Array.prototype.filter = function (fun, that) {
    let out = [];
  
    if (that) {
      fun = fun.bind(that);
    }
  
    let t = this;
    let len = t.length;
    for (let i = 0; i < len; i++) {
      if (i in t) {
        if (fun(t[i], i, t)) {
          out.push(t[i]);
        }
      }
    }
    return out;
  };
//   https://www.codewars.com/kata/55afe435d2ce100356000032/train/javascript
