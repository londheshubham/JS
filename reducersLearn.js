const numbers = [1,-1,2,3]

let sum = 0

for (let n of numbers)
	sum += n
	
//console.log(sum)
	
const sumUsingReducers = numbers.reduce((accumulator,currentValue)=>{
	return accumulator + currentValue
},0)
//zero is initial value for the accumulator

console.log(sumUsingReducers)

const sumUsingReducersSimpler = numbers.reduce(
	(accumulator,currentValue) => accumulator + currentValue
)
