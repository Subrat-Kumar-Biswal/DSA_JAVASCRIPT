let n = [2, 4, 5, 6, 7, 10];

// map function in javascript

const numbers = n.map( (item, index, array) =>{
    return item + 1
})

// console.log(numbers);


// filter in javascript

const x = n.filter((item) =>{
    return item % 2 == 0;  // item>4

})

console.log(x);

// Reduce function function is use reduce syantax and perfonm some operation
// here it takes a callback fun(accumulator(we pass the value), curindex) 
// it first take acc value and perform operation. 

const r = n.reduce((acc, item, index, array) =>{
    return acc+item
}, 0)

console.log(r);

const array = [[1, 2], [3, 4], [5, 6]];
const flatArray = array.reduce((acc, current) => {
    return acc.concat(current)
 
}, []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]