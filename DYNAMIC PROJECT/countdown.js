let input=document.querySelector("input");
let btn=document.querySelector("button");
let display=document.querySelector("h1");
let pauseBtn=document.querySelector("#pause");
let playBtn=document.querySelector("#resume");
let a=null;
let count=null;
btn.addEventListener("click",()=>{
      count=input.value;
      a= setInterval(()=>{
        display. innerHTML=count;
        count=count-1;
        if (count<0) {
            clearInterval(a)
        }
    },1000);
})
pauseBtn.addEventListener("click",()=>{
    clearInterval(a);
});
playBtn.addEventListener("click",()=>{
    a= setInterval(()=>{
        display. innerHTML=count;
        count=count-1;
        if (count<0) {
            clearInterval(a)
        }   
        
    },1000);
    input.value="";
})