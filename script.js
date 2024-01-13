
const changePixelLayoutButton = document.querySelector("#change-pixel-layout-button")
let frame = document.querySelector(".frame")
let eraseButton = document.querySelector("#erase-button")
let body = document.querySelector("body")
let description = document.querySelector(".description")
let instruction = document.querySelector(".instruction ")
let red = 100
let green  = 100
let blue =100
let pixelNum =8

function changePixelLayOut(){
     
    instruction.style.display = "block"
    red = 100
    green = 100
    blue =100
    pixelNum = Number(prompt("Enter a grid layout", pixelNum))
    if(pixelNum>64 ||isNaN(pixelNum)  || typeof pixelNum!=="number")return alert("You should enter a VALID NUMBER and not exceed 64"); 

        console.log(typeof pixelNum)
        description.textContent = `${pixelNum}x${pixelNum} grid`
        for(let i =0; i<pixelNum; i++){
            let verticalSquares = document.createElement("div")
            verticalSquares.classList.add("v-square")
            frame.appendChild(verticalSquares)

        }
    verticalSquares = document.querySelectorAll(".v-square")
    verticalSquares.forEach((square)=> {
        
        for(let j=0; j<pixelNum; j++){

            
           let horizontalSquares = document.createElement("div")
           horizontalSquares.classList.add("h-square")
            square.appendChild(horizontalSquares)
        }
})
    
  
   
   for(let i=0; i<verticalSquares.length-pixelNum; i++){
    frame.removeChild(verticalSquares[i])
   }
   horizontalSquares = document.querySelectorAll(".h-square")
}
changePixelLayoutButton.addEventListener("click", changePixelLayOut)
let count = 0

function colorSquareHover(){
    
    let options = document.querySelectorAll("option")
    if(options[0].selected){
        count++
        red-=10
        green-=10
        blue-=10
        if(count%10==0){
            red =100
            green = 100
            blue = 100
        }
    }else{
         red = Math.floor(Math.random()*256)
         green = Math.floor(Math.random()*256)
        blue = Math.floor(Math.random()*256)
    }
    
    this.style.background = `rgb(${red},${green},${blue})`
    
}

function clear(){
    red = 100
    green = 100
    blue = 100
   horizontalSquares = document.querySelectorAll(".h-square")
   horizontalSquares.forEach((square)=> square.style.background=body.style.background)
}

function erase(){
    this.style.background = body.style.background
}
eraseButton.addEventListener("click", clear)



changePixelLayOut()


horizontalSquares = document.querySelectorAll(".h-square")
  window.addEventListener("keydown", (event)=>{

    horizontalSquares.forEach((square)=> {
                
        if(event.key==="z"){
        
            square.addEventListener("mouseover", colorSquareHover)
        }          
                
        })
    })

    window.addEventListener("keyup", (event)=>{
        
        horizontalSquares.forEach((square)=>{
        if(event.key==="z"){
            square.removeEventListener("mouseover", colorSquareHover)
        }  
         })   
    })



    window.addEventListener("keydown", (event)=>{

        horizontalSquares.forEach((square)=> {
                    
            if(event.key==="a"){
            
                square.addEventListener("mouseover", erase)
            }          
                    
            })
        })
    
        window.addEventListener("keyup", (event)=>{
            
            horizontalSquares.forEach((square)=>{
            if(event.key==="a"){
                square.removeEventListener("mouseover", erase)
            }  
             })   
        })
