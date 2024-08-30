let btn=document.querySelector("button")
let result=document.querySelector("p")
let pd1=document.querySelector("#pd1")
let pd2=document.querySelector("#pd2")
let cd1=document.querySelector("#cd1")
let cd2=document.querySelector("#cd2")
let playerSum=document.querySelector("#psum")
let computerSum=document.querySelector("#csum")
console.log(btn,result,pd1,pd2,cd1,cd2,playerSum,computerSum)

btn.addEventListener("click", ()=>{
    let pdice1=randomNumber();
    let pdice2=randomNumber();
    let cdice1=randomNumber();
    let cdice2=randomNumber();

    pd1.innerHTML=pdice1;
    pd2.innerHTML=pdice2;
    cd1.innerHTML=cdice1;
    cd2.innerHTML=cdice2;

    let playerDiceSum= pdice1+pdice2;
    let computerDiceSum=cdice1+cdice2;
    playerSum.innerHTML=`player Sum:${playerDiceSum}`;
    computerSum.innerHTML=`computer Sum:${computerDiceSum}`;

    if (playerDiceSum>computerDiceSum) {
        result.innerHTML="congratulation you won the game"
        result.style.color="green"
    } else if(playerDiceSum<computerDiceSum){
        result.innerHTML="sorry,better luck next time"
        result.style.color="hotpink"
    }else{
        result.innerHTML="good fight it is a tie"
        result.style.color="blue"
    }

})

function randomNumber(){
    let number=Math.floor( Math.random()*6+1);
    return number
}
