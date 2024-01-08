
const button = document.querySelector("#add-grids")
let frame = document.querySelector(".frame")
let eraseButton = document.querySelector("#delete")
let body = document.querySelector("body")
let red = 100
let green  = 100
let blue =100
let pixelNum =8
let count2 = 0
function createv_pixelss(){
     
    
    red = 100
    green = 100
    blue =100
    pixelNum = prompt("Enter a grid layout", pixelNum)
    if(pixelNum>128)return alert("Not more than 128");
    for(let i =0; i<pixelNum; i++){
        let v_pixels = document.createElement("div")
      
        
        v_pixels.classList.add("v-pixel")
        frame.appendChild(v_pixels)
        
        

    }
    v_pixels =document.querySelectorAll(".v-pixel")
    v_pixels.forEach((div)=> {
        
        for(let j=0; j<pixelNum; j++){

            
            let h_pixel = document.createElement("div")
            h_pixel.classList.add("h-pixel")
            div.appendChild(h_pixel)
        }
})
    
   h_pixel = document.querySelectorAll(".h-pixel")
   h_pixel.forEach((div)=> {
        window.addEventListener("keydown", (event)=>{
            if(event.key==="z"){
                div.addEventListener("mouseover", gradedBlackHover)
            }

            
        })
        window.addEventListener("keyup", (event)=>{
            if(event.key==="z"){
                div.removeEventListener("mouseover", gradedBlackHover)
            }
            
        })
        
        
    })
    

   
   for(let i=0; i<v_pixels.length-pixelNum; i++){
    frame.removeChild(v_pixels[i])
   }
}
button.addEventListener("click", createv_pixelss)
let count = 0

function gradedBlackHover(){
    
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



function white(){
    this.style.background = "white"
}

function erase(){
    red = 100
    green = 100
    blue = 100
    h_pixel = document.querySelectorAll(".h-pixel")
    h_pixel.forEach((div)=> div.style.background=body.style.background)
}
eraseButton.addEventListener("click", erase)






