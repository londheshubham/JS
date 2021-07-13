 //in JS functions are first class objects just like you can pass objects   into functions as arguments you can pass other function in to function and execute at some point so lets

let x = function(){
console.log("I am called from inside a function")
};


let y = function(callback){
console.log("Do something")
callback()

}


y(x)

//why do we need call back function
//simple example

/*

let calc = function(num1,num2,calcType){

if (calcType === "add"){

return num1+num2

}


else if(calcType === "multiply"){

return num1*num2

}


};

*/


// now using a more better method

let add = function(a,b){
return a+b;

};


let multiply = function(a,b){
return a*b;

};



let calc = function(num1,num2,callback){

if (typeof callback === "function"){


return callback(num1,num2)

}


return callback(num1,num2);



};



console.log(calc(2,3,add))
console.log(calc(2,3,multiply))


console.log(calc(2,3,function(a,b){
			return a-b;
})) //anonymous function which are only called once


