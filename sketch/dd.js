
const button = document.querySelector("#add-grids")
let frame = document.querySelector(".frame")
let count = 0

function createGrids(){
    
    let pixelNum = prompt("How many Pixels?", 8)
    for(let i =0; i<pixelNum; i++){
        let grid = document.createElement("div")
      
        
        grid.classList.add("v-pixel")
        frame.appendChild(grid)
        
        

    }
    pixels =document.querySelectorAll(".v-pixel")
    pixels.forEach((div)=> {
        
        for(let j=0; j<pixelNum; j++){

            
            let h_pixel = document.createElement("div")
            h_pixel.classList.add("h-pixel")
            div.appendChild(h_pixel)
        }
})
    
   h_pixel = document.querySelectorAll(".h-pixel")
   h_pixel.forEach((div)=> {
    div.addEventListener("mouseover", hover)

   })

   for(let i=0; i<pixels.length-pixelNum; i++){
    frame.removeChild(pixels[i])
   }

   
   
    

    
   
   
   
   
   
   
}
button.addEventListener("click", createGrids)

function hover(){
    this.style.background = "red"
    console.log("OK!")
}











