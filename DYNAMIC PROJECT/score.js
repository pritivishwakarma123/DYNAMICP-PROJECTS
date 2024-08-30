let team1=document.querySelectorAll("h1")[0];
let team2=document.querySelectorAll("h1")[1];
let t1Records= document.querySelectorAll("p")[0];
let t2Records= document.querySelectorAll("p")[1];
let scorebtn1=document.querySelectorAll("button")[0];
let finalbtn2=document.querySelectorAll("button")[1];
let scorebtn11=document.querySelectorAll("button")[2];
let finalbtn22=document.querySelectorAll("button")[3];
console.log(team1,team2,t1Records,t2Records,scorebtn1,finalbtn2,scorebtn11,finalbtn22)


let count=0;
scorebtn1.addEventListener("click",()=>{
    count+=3;
    team1.innerHTML=count;
})
finalbtn2.addEventListener("click",()=>{
    t1Records.innerHTML +=`${count} -`;
    count=0;
    team1.innerHTML=count;
});



scorebtn11.addEventListener("click",()=>{
    count+=2;
    team2.innerHTML=count;
})
finalbtn22.addEventListener("click",()=>{
    t2Records.innerHTML +=`${count} -`;
    count=0;
    team2.innerHTML=count;
});
