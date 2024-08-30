let input=document.querySelector("input")
let btn=document.querySelector("button")
let result=document.querySelector("#result")
console.log(input,btn,result)

btn.addEventListener("click",async()=>{
    if (input.value!="") {
      result.innerHTML=""
      let apiKey="6396b42c23dfb2919bdfe0ea3c78e97d"
      let dataFromServer=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`)  
       let store=await dataFromServer.json()
       console.log(store)
       let cityName=document.createElement("h2")
       cityName.innerHTML=`cityname:${store.name}`
       result.appendChild(cityName)

       let weather=document.createElement("h2")
       weather.innerHTML=`tempreture:${(store.main.temp-273).toFixed(2)}°c`
       result.appendChild(weather)
    }

})
