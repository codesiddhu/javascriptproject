
const bodye1 =document.querySelector("body");
bodye1.addEventListener("mousemove",(event)=>{
    const xpos =event.offsetX;
    const ypos =event.offsetY;
    const spanel =document.createElement("span");
    spanel.style.left =xpos+"px";
    spanel.style.top =ypos+"px";
    const size =Math.random()*100
    spanel.style.width =size+"px";
    spanel.style.height =size+"px";
    
    bodye1.appendChild(spanel);
    setTimeout(()=>{
        spanel.remove();
    
    },300);
})