
const intersection = (firstArr, secondArr) => {
    let result = [];
    firstArr.forEach(a => {
        secondArr.forEach(b => {
            if(a === b){
                result.push(a);
            }
        });
    });
    return result;
}

// intersection([2, 1], [2, 3]);
// => [2]