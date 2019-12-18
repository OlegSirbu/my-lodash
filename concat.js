// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);
 
// console.log(other);
// // => [1, 2, 3, [4]]
 
// console.log(array);
// // => [1]


function concat(...args){
    let res = [];
    args.forEach((f)=>{
        if(Array.isArray(f)){
            res.push(f[0]);
        }else {
            res.push(f);
        }
});
return res;
}
concat([1],2, [3], [[4]]);