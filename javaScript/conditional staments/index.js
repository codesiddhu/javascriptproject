let age =22;

let country ="India";

if ((age <=20) && (country =="India"))
{
    document.write("you are not eligible for dirving license ")


}
else if ((age>=20)&&(country =="India"))
{
    document.write("you are eligible for driving")
}
else
{
    document.write("sorry :")
}

// switch

let a =window.prompt("enter the values of a : ");
let b =window.prompt("enter the values of b: ");
let result =0
let oparand =window.prompt("selct operations(+,-,*,/,%,**): ");
switch(oparand){
    case "+":
        result =a+b;
        document.write(result);
        break;
    case "-":
        result =a-b;
        document.write(result);
        break;
    case "*":
        result =a*b;
        document.write(result);
        break;
    case "/":
        result =a/b;
        document.write(result);
        break;
    case "%":
        result =a%b;
        document.write(result);
        break;
    case "**":
        result =a**b;
        document.write(result);
        break;
    default:
        document.write("please enter valid operand .....")
}
document.write(`a values is${a} and ${b} <br>
            ${a} ${operand} ${b} =${result}`);