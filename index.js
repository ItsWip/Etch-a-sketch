document.addEventListener("DOMContentLoaded", function(){
    create_grids(16);
})

function create_grids(size){
    let grids= document.querySelector(".grids");

    grids.style.gridTemplateColumns =`repeat(${size},1fr)`;
    grids.style.gridTemplateRows =`repeat(${size},1fr)`;

    let total_grids=(size*size);

    for(let i=0; i<total_grids; i++){
        let grid=document.createElement("div");
        grid.style.backgroundColor="grey";
        grids.insertAdjacentElement("beforeend",grid);   
    }
}