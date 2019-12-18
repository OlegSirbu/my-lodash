//chunk(['a', 'b', 'c', 'd'], 2) // => [['a', 'b'], ['c', 'd']]
//chunk(['a', 'b', 'c', 'd', 'v'], 2) // => [['a', 'b'], ['c', 'd'], ['v']]

function chunk(arr, len){
   let a = [];
   let lnMax = Math.ceil(arr.length / len);
    let i = 0;
    while(lnMax > 0){
        a.push(arr.slice(i, i+=len));
        lnMax--;
    }
   return a;
}
// chunk(['a', 'b', 'c', 'd'], 2)
// chunk(['a', 'b', 'c', 'd', 'v'], 2)
// chunk(['a', 'b', 'c', 'd', 'v', 'i'], 3)
// chunk(['a', 'b', 'c', 'd', 'v', 'i', 'y'], 1)