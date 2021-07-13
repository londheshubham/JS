var timeoutId = setTimeout(bye,3000)

console.log('Hello')

//this clears out the timer
clearTimeout(timeoutId)

function bye(){
	console.log('goodbye')
}


var count = 0
var intId = setInterval(counter,1000)

function counter(){
	console.log(++count)
}
