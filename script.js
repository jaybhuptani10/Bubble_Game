var hitrn = 0;

function makeBubble(){
    var clutter = ""
    for(var i=0;i<=160 ;i++){
        var rand = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rand}</div>`
    }
    document.querySelector(".p-btm").innerHTML = clutter;
}

var timer=60;
function runtimer(){
    var timerint = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timing").textContent = timer;
        }
        else{
            alert("Time's UP")
            document.querySelector(".p-btm").innerHTML="";
            clearInterval(timerint);
        }
    },1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hits").textContent = hitrn;
}
var score = 0;

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".p-btm").addEventListener("click",function(dets){
    var match = Number(dets.target.textContent);
    if (match === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    
})

runtimer();
makeBubble();
getNewHit();

