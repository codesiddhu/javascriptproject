let btn =document.getElementById("btn");
let details =document.getElementById("data");
btn.addEventListener("click",update);

function update(){
 let xhr =new XMLHttpRequest();
 xhr.open("GET","text.txt",true);
 xhr.send();
 xhr.onprogress =function(){
    details.innerText ="loading........"
 }
 xhr.onload =function(){
    details.textContent=xhr.responseText;
 }
}