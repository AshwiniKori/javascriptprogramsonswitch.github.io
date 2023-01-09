//.Program to find a DAY
function findDay() {
    var num = document.getElementById("num").value;
    // var num = Number(document.getElementById("num").value);
    // "Number" typecasting to convert string to number

    switch (num) {
        case "0":
            document.getElementById("p1").innerHTML = "The day is Sunday";
            break;

        case "1":
            document.getElementById("p1").innerHTML = "The day is Monday";
            break;

        case "2":
            document.getElementById("p1").innerHTML = "The day is Tuesday";
            break;

        case "3":
            document.getElementById("p1").innerHTML = "The day is Wednesday";
            break;

        case "4":
            document.getElementById("p1").innerHTML = "The day is Thursday";
            break;

        case "5":
            document.getElementById("p1").innerHTML = "The day is Friday";
            break;

        case "6":
            document.getElementById("p1").innerHTML = "The day is Saturday";
            break;

        default:
            document.getElementById("p1").innerHTML = "Invalid Input";
            document.getElementById("p1").style.color = "red";
    }
}

//.Program to find a calculator
// function calculator() {
//     var num1 = document.getElementById("num1").value;
//     var num2 = document.getElementById("num2").value;
//     var operator = document.getElementById("opr").value;
//     var result;
//     switch (operator) {
//         case "+":
//             result = (num1 + num2);
//             document.getElementById("p2").innerHTML = `${num1} + ${num2} = ${result}`;
//             break;

//         case "-":
//             result = (num1 - num2);
//             document.getElementById("p1").innerHTML = `${num1} - ${num2} = ${result}`;
//             break;

//         case "*":
//             result = (num1 * num2);
//             document.getElementById("p1").innerHTML = `${num1} * ${num2} = ${result}`;
//             break;

//         case "/":
//             result = (num1 / num2);
//             document.getElementById("p1").innerHTML = `${num1} / ${num2} = ${result}`;
//             break;

//         case "%":
//             result = (num1 % num2);
//             document.getElementById("p1").innerHTML = `${num1} % ${num2} = ${result}`;
//             break;

//         default:
//             document.getElementById("p1").innerHTML = "Invalid Operator";


//     }
// }
var result;
var operator = prompt("enter operator");
var number1 = parseFloat(prompt("enter first number"));
var number2 = parseFloat(prompt("enter second number"));

switch(operator) {
    case "+":
        result= (number1 + number2);
        // document.write(result);
        document.getElementById("p2").innerHTML = `Result is ${result}`;
        break;
    case "-":
        result=number1 - number2;
        document.getElementById("p2").innerHTML = `Result is ${result}`;
        break;
    case "*":
        result=number1 * number2;
        document.getElementById("p2").innerHTML = `Result is ${result}`;
        break;
    case "/":
        result=number1 / number2;
        document.getElementById("p2").innerHTML = `Result is ${result}`;
        break;
    case "%":
        result=number1 % number2;
        document.getElementById("p2").innerHTML = `Result is ${result}`;
        break;
    default:
        document.getElementById("p2").innerHTML = "Invalid";

}

//Find Grade of Given Marks
function marksGrade() {
    var marks = document.getElementById("marks").value;

    switch(true){
        case marks >= 100 :
            document.getElementById("p3").innerHTML = "invalid";
            break;

        case marks >= 90 :
            document.getElementById("p3").innerHTML = "A Grade";
            break;

        case marks >= 75:
            document.getElementById("p3").innerHTML = "B Grade";
            break;

        case marks >= 65:
            document.getElementById("p3").innerHTML = "C Grade";
            break;

        case marks >= 35:
            document.getElementById("p3").innerHTML = "D Grade";
            break;
        
        case marks <= 35 && marks >= 0:
             document.getElementById("p3").innerHTML = "fail";
            break;
        
        case marks >= 100 :
            document.getElementById("p3").innerHTML = "invalid";
            break;

        default:
            document.getElementById("p3").innerHTML = "inavlid";
            
    }
}

function posNagNumber() {
    var num3 = document.getElementById("num3").value;
    switch(true) {
        case num3 > 0:
            document.getElementById("p4").innerHTML = "Number is Positive";
            break;

        case num3 == 0:
            document.getElementById("p4").innerHTML = "Number is Zero";
            break;

        case num3 < 0:
            document.getElementById("p4").innerHTML = "Number is Negative";
            break;

        default:
            document.getElementById("p4").innerHTML = "Invalid Number";
        
    }
}

//program to find Month
function monthIs() {
    var month = document.getElementById("month").value;

    switch(month){
        case "1":
            document.getElementById("p5").innerHTML = "Month is January";
            break;
        case "2":
            document.getElementById("p5").innerHTML = "Month is Februvary";
            break;
        case "3":
            document.getElementById("p5").innerHTML = "Month is March";
            break;
        case "4":
            document.getElementById("p5").innerHTML = "Month is Apri";
            break;
        case "5":
            document.getElementById("p5").innerHTML = "Month is May";
            break;
        case "6":
            document.getElementById("p5").innerHTML = "Month is June";
            break;
        case "7":
            document.getElementById("p5").innerHTML = "Month is July";
            break;
        case "8":
            document.getElementById("p5").innerHTML = "Month is August";
            break;
        case "9":
            document.getElementById("p5").innerHTML = "Month is September";
            break;
        case "10":
            document.getElementById("p5").innerHTML = "Month is Actober";
            break;
        case "11":
            document.getElementById("p5").innerHTML = "Month is November";
            break;
        case "12":
            document.getElementById("p5").innerHTML = "Month is December";
            break;
        default:
            document.getElementById("p5").innerHTML = "Invalid Month";
            
    }
}
