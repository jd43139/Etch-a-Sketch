
const frame = document.querySelector(".frame")

function colorIt(){
    this.style.background = "red"
}


function createGrid(){
    for(let i = 0; i<10; i++){
        let grid = document.createElement("div")
        frame.appendChild(grid)
        grid.classList.add(".pixel")
    }
}




let btn = document.querySelector("#add-grids")

let grids = document.querySelectorAll(".pixel")
btn.addEventListener("click", createGrid)


grids.forEach(grid => grid.addEventListener("onmouseover", colorIt))
let ask = prompt("How many pixels", 100)



