var array = ['a', 'b', 'c', 'd', 'e'];

const nth = (arr, index) => {
    console.log(arr.reverse(), Math.abs(index));
    return index >= 0 ? arr[index] : arr.reverse()[Math.abs(index)];
}

// console.log(nth(array, 1));
console.log(nth(array, -2));