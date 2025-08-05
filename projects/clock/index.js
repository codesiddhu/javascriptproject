const hour =document.getElementById("hours");
const min =document.getElementById("minutes");
const sec =document.getElementById("seconds");
const am =document.getElementById("ampm");
function updateClock(){
    let h =new Date().getHours()
    let m =new Date().getMinutes();
    let s =new Date().getSeconds();
    let a ="Am"
    if (h>12){
        h =h-12
        a ="PM"
    }
    h =h <10 ? "0"+h :h;
    m =m <10 ? "0"+ m : m
    s =s <10 ? "0"+ s :s
    hour.textContent =h;
    min.textContent =m;
    sec.textContent=s;
    am.textContent =a;
    setTimeout(()=>{
        updateClock()
    },1000)

}
updateClock()
// setInterval(updateClock,100);