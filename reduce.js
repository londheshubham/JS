const numbers = [1,2,3,4];

let sum =0;
for (let n of numbers)
	sum += n;
console.log(sum);


//reduce all the numbers in an array to a single number

//the first argument to reduce is function second is initial value of accumulator

// a=0, c=1 =>1
// a=1, c=2 =>2
const sumUsingReduce = numbers.reduce((accumulator,currentValue) =>{

return accumulator + currentValue;


}, 0); 


console.log(sumUsingReduce);
