
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


var current_position_of_touchx,current_position_of_touchy,last_position_of_touchx,last_position_of_touchy
colour="purple";
width_of_line=4;


var width=screen.width;
var new_width= width- 70;
var new_height=screen.height-300;
if(width < 992 ){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}





canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
    console.log("my touchstart");
    
    
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

  canvas.addEventListener("touchmove", my_touchmove) 
   function my_touchmove(e) {
    console.log("my touchmove");
    current_position_of_touchx=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touchy=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.lineWidth=width_of_line;
    ctx.strokeStyle=colour;
    console.log("last position of x - " + last_position_of_x + "last position of y - " + last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current position of x - " + current_position_of_touchx + "current position of y - " + current_position_of_touchy);
    ctx.lineTo(current_position_of_touchx,current_position_of_touchy);
    ctx.stroke();


    last_position_of_x=current_position_of_touchx;
    last_position_of_y=current_position_of_touchy;
     
   }

  