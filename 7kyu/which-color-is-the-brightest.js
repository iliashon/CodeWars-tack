function brightest(colors){
    let arr = [];
  for(let i = 0; i < colors.length; i++){
    arr.push(colors[i].slice(1).split(/(.{2})/).filter(O=>O));
  }
  let result = arr.map(function(elem) {
    return elem.map(function(num){
        return parseInt(num, 16);
    });
  });
  let max = 0;
  let indexI = 0;
  for (let i = 0; i < result.length; i++){
    for (let j = 0; j < result[i].length; j++){
        if (max < result[i][j]) {
            max = result[i][j];
            indexI = i;
        }
    }
  }

 return (colors[`${indexI}`]);
}


console.log(brightest(["#FFFFFF", "#123456", "#000000"]));

// 10-чная      2-чная      
// 0 = 0           0        0
// 1 = 1           1        1
// 2 = 2          10        2
// 3 = 3          11        3
// 4 = 4         100        4
// 5 = 5         101        5
// 6 = 6         110        6
// 7 = 7         111        7
// 8 = 8        1000        8
// 9 = 9        1001        9
// 10 = 10      1010        A
// 11 = 11      1011        B
// 12 = 12      1100        C
// 13 = 13      1101        D
// 14 = 14      1110        E
// 15 = 15      1111        F
// 16 = 16     10000        10
// 17 = 17     10001        11
