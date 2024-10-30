document.addEventListener("DOMContentLoaded", function(){
    createboard(16);
    console.log("hi")
})

function createboard(size){
    let grids=document.querySelector(".grids");

    grids.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
    grids.style.gridTemplateRows= `repeat(${size}, 1fr)`;

    let total_grids= size*size;

    for(let i=0;i<total_grids;i++){
        let grid=document.createElement("div");
        grid.style.backgroundColor="grey";
        grids.insertAdjacentElement("beforeend",grid);
    }
}