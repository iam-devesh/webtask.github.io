setInterval(() => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let day = weekday[today.getDay()];
    var Time = time;
    let monName=month[today.getMonth()];
    let date=day+', '+today.getDate()+' '+monName;
    var ans=document.querySelector(".time");
    ans.textContent=Time;
    document.querySelector(".date").innerHTML=date;
}, 1000);
function randomColor(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const color=`rgb(${red},${green},${blue})`;
    return color;
}
const time=document.querySelector(".time");
const date=document.querySelector(".date")
time.addEventListener("click",()=>{
    const colors=randomColor();
    time.style.color=colors;
    date.style.color=colors;
})