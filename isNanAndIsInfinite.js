

let num = 1234;
let str = "hello"
let floatNum = 1.4;

console.log(isNaN(num))
console.log(isNaN(NaN))
console.log(isNaN(str))
console.log(isNaN(floatNum))


console.log("--------------------")

console.log(isFinite(num));
console.log(isFinite(str));
console.log(isFinite(floatNum));
console.log(isFinite(Infinity));