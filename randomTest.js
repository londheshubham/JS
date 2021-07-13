function reverseString(str) {
  arr = []
  for (let i = str.length-1; i >= 0; i--){
  arr.push(str[i])
  console.log(str[i])
  }
  let value=  String(arr)
	
  return value.replace(/,/g,"");
}

console.log(reverseString("hello"));

