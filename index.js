// let startbtn=document.getElementById("startbtn");
// let resetbtn=document.getElementById("resetbtn");
// let stopbtn=document.getElementById("stopbtn");
let displayTime=document.getElementById("displayTime");
let timer=null;
let starttime=0;
let elapsedTime=0;
let isRunning=false;

function startTime(){
    if(!isRunning){
        starttime=Date.now()-elapsedTime;
        timer=setInterval(update,10);
        isRunning=true;
    }
      
}

function stopTime(){
    if(isRunning){
        clearInterval(timer);
        isRunning=false;
    }

}

function resetTime(){
    clearInterval(timer);
    elapsedTime=0;
    starttime=0;
    isRunning=false;
    displayTime.textContent="00:00:00:00";
}

function update(){
    const currtime=Date.now();
    elapsedTime=currtime-starttime;
    let hours=Math.floor(elapsedTime/(1000*60*60));
    let minutes=Math.floor(elapsedTime/(1000*60)%60);
    let seconds=Math.floor((elapsedTime /1000)%60);
    let milliseconds=Math.floor(elapsedTime%1000/10);
    
    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");
    displayTime.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
}