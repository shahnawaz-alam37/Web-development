//let arr= array()//error
//console.log(arr)

let numbers=[1,2,3,4,5,6,7,8,9]
console.log("Numbers=",numbers)
console.log("length=",numbers.length)

const fruit=['banana','apple','orange',]
console.log(fruit);
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)

console.log(numbers.indexOf(1));
console.log(numbers.includes(4));
console.log(numbers.join('|'));
numbers.push(10)
console.log(numbers)
numbers.pop()
numbers.pop()
console.log(numbers)
numbers.reverse()
console.log(numbers)
numbers.shift()
console.log(numbers)
numbers.unshift(0)
console.log(numbers)
const third= numbers.concat(fruit)
console.log(third)