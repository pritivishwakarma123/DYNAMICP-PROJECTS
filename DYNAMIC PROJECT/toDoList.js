let input=document.querySelector("input")
let btn=document.querySelector("button")
let cont=document.querySelector("ul")
console.log(input.value)

btn.addEventListener("click", ()=> {
    if(input.value!=""){
        cont.innerHTML+=`<li> <span>${input.value}</span><i class="fa-solid fa-trash"></i></li>`;
        input.value="";
       
        let del=document.querySelectorAll(".fa-trash");
del.forEach((e)=>{
    e.addEventListener("click",()=>{
       e.parentElement.remove()
        console.log(e);
    })
    
})
    }
})



// btn.addEventListener("click" ,()=>{
//     if(input.value!=""){
//         let listItem =document.createElement("li");
//         cont.appendChild(listItem);
//         let span=document.createElement("span");//child elem of lis item,span is to display the o/p
//         span.innerHTML=input.value;
//         listItem.appendChild(span);
//         input.value=""; 
        
//         let del=document.createElement("button");
//         del.innerHTML="delete";
//         listItem.appendChild(del);
       
//     }
// });

