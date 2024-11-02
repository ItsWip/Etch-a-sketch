let color= "black";
let drawing= false;

document.addEventListener("DOMContentLoaded", function(){
    createboard(16);

        //accepting clicks only on grid
    document.querySelector(".grids").addEventListener("click", function(e){
        drawing= !drawing;
        let reply= document.querySelector("#reply");

    
        if(drawing){
            reply.innerHTML= "Click to lift the pen.";           
        }else{
            reply.innerHTML="Click to draw.";
        }
    })

            //select button
    let select_btn= document.querySelector("#prompt");
    select_btn.addEventListener("click",function(){
        let size=getsize();
        createboard(size);
    })
})

        //creating board of any size
function createboard(size){
    let grids=document.querySelector(".grids");

    grids.style.gridTemplateColumns= `repeat(${size}, 1fr)`;        //1fr (1 fraction)
    grids.style.gridTemplateRows= `repeat(${size}, 1fr)`;

    let total_grids= size*size;

        //giving color by grid
    for(let i=0;i<total_grids;i++){
        let grid=document.createElement("div");
        grid.addEventListener("mouseover", color_selection);
        grids.insertAdjacentElement("beforeend",grid);
    }
}

        //size input
function getsize(){
    let input= prompt("Enter size of grids you want.\n Number should be between 0 and 100.");
    let reply= document.querySelector("#reply");

    if (input === ""){
        reply.innerHTML= "Don't you have a keyboard?\n Use that education loan to buy one.";
    }else if(input>0 && input<100){
        reply.innerHTML= "Click to use pen."
        return input;
    }else{
        reply.innerHTML= "Last time someone did this was a blind arts student. \n Is it you again?";
    }
}

function set_color(new_color){
    color= new_color;
    return color;
}

function color_selection(){
    if(drawing){
        if(color=== "random"){
            this.style.backgroundColor= `hsl(${Math.random()*360},100%,50%)`;
        }else if(color=== "erase"){
            this.style.backgroundColor= `#c5c6d0`;
        }else{
            this.style.backgroundColor= "black";
        }
    }
}

function reset_btn(){
    let all_grid= document.querySelectorAll(".grids div");
    all_grid.forEach((grid)=> grid.style.backgroundColor= `#c5c6d0`);
}