//normal functions 

function greet2(){
    document.writeln("<h1> hello welcome </h1><br/>");
}

greet2();

//parameters function 

function greet(x,y){
    document.write("additon of two number :"+(x+y));
}

greet(10,20);

// parameters with return types 

function sum(x,y){
    return x+y;

}
let ans =sum(20,30);
document.write("<p> ans is : "+ans+"<br></br>");

//functions with multile function

function ex(x){
    document.write("<h1>haha</h1></br>");
    function ex2(y){
        return x+y;
    }
    return ex2(10);
}

document.writeln(ex(10));

//anoter way multiple function callbaclk functions 

function name(){
    let x =10
    document.write(x)
    

}

function name2(m,n,call){
    document.write(`${m}and ${n} ${call}`);
}

name2("siddhu","royals",name);

//arrow function

let names =function(){
    return "hello"
}

document.writeln(names());

(
    function names2(){
        return "siddhu"
    }
)
