

let num1 = 10000;
let num2 = 10_000; // underscore for better readability

console.log(num1==num2)


let billion1 = 1000000000;
let billion2 = 1e9;

console.log(billion1==billion2)


let num3 = 1e-6;
let num4 = 0.000001;
console.log(num3==num4)


let num5 = 2.e-3;
let num6 = 0.002;
console.log(num5==num6)


let n = 2;
console.log(n.toString(16))  // 2 in base 16
console.log(n.toString(2))   // 2 in base 2
