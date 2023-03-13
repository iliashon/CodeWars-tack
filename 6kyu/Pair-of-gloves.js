function numberOfPairs(gloves)
{
    function counter(obj) {
        for (let key in obj) {
            if (obj[key] < 2){
                delete obj[key];
            }
          }
        return Object.keys(obj).length;
      }
    function count(array){
        let names = {};
        array.forEach(item => {
          names[item] = (names[item] || 0) + 1;
        });
        return names;
      }

    return counter(count(gloves));
}

console.log(numberOfPairs(['red','green','blue']));

for (let key in obj) {
    if (obj[key] <= 1){
        delete key;
    }

  }