const numbers = [1,-1,2,3];

const items = numbers.map(n =>{
	const obj = {value:n};
	return obj;


});


console.log(typeof(items));

//another way to declare the same code

const items = numbers.map(n =>{
	return obj = {value:n};



});

//another way to declare the same code using arrow functions
// in JS {} this will be considered as a code block

const items = numbers.map(n => ({value:n}));




