// const flattenDeep = (arr, prevRes) => {
//     let flattenDeepResult = prevRes ? prevRes : [] 
//     arr.forEach(element => {
//         if(Array.isArray(element)){
//             return flattenDeep(element, flattenDeepResult);
//         }else {
//             flattenDeepResult.push(element);
//         }
//     });
//     return flattenDeepResult;
// }
// flattenDeep([1, [2, [3, [4]], 5, [1,2]]]);
// => [1, 2, 3, 4, 5, 1, 2]

const flattenDeep = (arr) => {
    arr.flat(Infinity);
};
flattenDeep([1, [2, [3, [4]], 5, [1,2]]]);
