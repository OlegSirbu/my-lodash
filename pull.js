var array = ['a', 'b', 'c', 'a', 'b', 'c'];
const pull = (arr, ...values) => {
    // 1 method
    // const newArr = [];
    // for (let a of arr){
    //     if(!values.includes(a)){
    //         newArr.push(a);
    //     }
    // }
    // return newArr;
    
    // 2 method
    return arr.map(element => {
        if(!values.includes(element)) {
            return element;
        }
    }).filter( Boolean );
}
console.log(pull(array, 'a', 'c'));