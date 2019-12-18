const initial = (arr) => {
    arr.splice(arr.length - 1, 1);
    return arr;
}

initial([1, 2, 3, 4,5]);
// [1, 2, 3, 4]