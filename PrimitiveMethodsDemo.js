

/* Given name , mobile - output name in capital letters and calculate the
   average of his/her mobile number(should be a integer) and round off to 3 digits. */



let user = {
    name : "dinesh",
    mobile : "9889722141"
}

console.log(user.name.toUpperCase())

let strNum = user.mobile;

let totalSum = 0;

for(let i=0;i<=strNum.length;i++){
    let num = Number(strNum.charAt(i))
    totalSum+=num;
}

let average = totalSum/10;
console.log(average.toFixed(0))
