function numberOfPairs(gloves)
{

    

    function counter(obj) {
        let rend = Math.random();
        for (let key in obj) {
            if (obj[key] < 2){
                delete obj[key];
            } 
            if (obj[key] >= 4){
                let del = Math.floor(obj[key] / 2);
                for(let i = 1; i < del; i++){
                    obj[i] = 2;
                }
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

console.log(numberOfPairs(['gray','black','purple','purple','gray','black','dfgf','dfgf', 
'dfgf', 'dfgf', 'dfgf', 'dfgf', 'dfgf']));


