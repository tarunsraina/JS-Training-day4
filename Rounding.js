/* Given a number and a math operation , perform the requested operation*/

let num = 2.1;


// use "round" , "floor" , "ceil"  , "trunc"
let mathOperation = "ceil"

switch(mathOperation){
    case "round" : console.log(Math.round(num))
                    break;

    case "floor" : console.log(Math.floor(num))
                    break;

    case "ceil" : console.log(Math.ceil(num))
                    break;

    case "trunc" : console.log(Math.trunc(num))
}