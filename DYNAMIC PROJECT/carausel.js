let image=document.querySelector("img");
let leftBtn=document.querySelector(".fa-chevrons-left");
let rightBtn=document.querySelector(".fa-chevrons-right");
console.log(image,leftBtn,rightBtn);

let storage=["./image/img1.jpg",
            "./image/img2.jpg",
            "./image/img3.jfif",
            "./image/img4.avif" 
        ];

        let index=0;
        rightBtn.addEventListener("click",()=>{
            index=(index+1)%storage.length;  //storage is array 
            image.src=storage[index]; //src is attribute 
        });

        leftBtn.addEventListener("click",()=>{
            index=(index-1+storage.length)%storage.length;
            image.src=storage[index];
            
        })
        setInterval(()=>{
            index=(index+1)%storage.length;  //storage is array 
            image.src=storage[index]; //src is attribute 
        }, 1000 )  
