
const arr=[10,20,30,40,50]
for (let i = 0; i <=10; i++) {
    console.log(i)
}
console.log("\n");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i*i}`);
    
}

const countries = ['india','china','japan','pakistan'];
const newarr=[];
for (let i = 0; i < countries.length; i++) {
    newarr.push(countries[i].toUpperCase())   
}
console.log(newarr)


let sum=0
for (let i = 0; i < arr.length; i++) {
    sum=sum+arr[i];
}
console.log(sum);
for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
}
  
  // 0 1 2

for(let i = 0; i <= 5; i++){
    if(i == 3){
        continue
    }
    console.log(i)
}
// 0 1 2 4 5
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// 0 1 2 3 4 5