const fromPairs = (data) => {
    const response = {};
    Array.isArray(data) && data.forEach(([key, val]) => {
       response[key] = val; 
    });
    return response;
};
fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }

