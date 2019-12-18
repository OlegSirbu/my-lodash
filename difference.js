// // EVENT EMITTER
// const EventEmitter = {
//     events:{},
//     dispatch: (event, data) => {
//         if(!this.events[event]) return
//         this.events[event].forEach(cb => cb(data));
//     },
//     subscribe: (event, callback) => {
//         if(!this.events[event]){
//             this.events[event] = [];
//             this.events[event].push(callback);
//         }
//     },
// }

// difference([2, 1], [2, 3]) => [1]


function difference(arr, dubArr){
    let res = [];

    arr.forEach(element => {
        if(!dubArr.indexOf(element)) res.push(element)
    });

    return res;
}
difference([2, 1], [2, 3, 1])