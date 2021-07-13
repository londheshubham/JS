const numbers = [1,-1,2,3];
const filtered = numbers.filter(n => n >= 0);
console.log("Output from filter")
console.log(filtered)

const items = filtered.map(n => "<li>"+n+"</li>");
console.log("Output from map")
console.log(items)

const html = items.join(",");

console.log("The output is");
console.log(html)



