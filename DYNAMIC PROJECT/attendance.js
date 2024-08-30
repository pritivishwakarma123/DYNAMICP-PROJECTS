let attendance=document.querySelector("h1");
let previousRecords= document.querySelector("p");
let addbtn=document.querySelectorAll("button")[0];
let savebtn=document.querySelectorAll("button")[1];
console.log(attendance,previousRecords,addbtn,savebtn);

let count=0;

addbtn.addEventListener("click",()=>{
    // count=count+1;//addition hppn 
    count+=1;
    attendance.innerHTML=count;
})
savebtn.addEventListener("click",()=>{
    // previousRecords.innerHTML= previousRecords.innerHTML + count;//concat hppn
    previousRecords.innerHTML +=`${count} -`;
    count=0;
    attendance.innerHTML=count;
})