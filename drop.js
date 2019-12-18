// _.drop([1, 2, 3]);
// => [2, 3]
 

function drop(arr, lngNeedRemove = 1){
    return arr.slice(lngNeedRemove, arr.length);
}

drop([1, 2, 3], 2) 

