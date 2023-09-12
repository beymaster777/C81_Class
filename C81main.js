canvas= document.getElementById("myCanvas");
color="red";

tasty= canvas.getContext("2d")

tasty.beginPath();
tasty.strokeStyle= color;
tasty.lineWidth= 2;
tasty.arc(200,200, 40,0, 2*Math.PI);
tasty.stroke();

mouse_x= e.clientX
mouse_y= e.clientY

tasty.beginPath();
tasty.strokeStyle= color;
tasty.lineWidth= 2;
tasty.arc(200, 40,0, 2*Math.PI);
tasty.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from imput box
    //additional activity start
    color= document.getElementById("color").value;
    console.log(color);
    //additon acitvity ends

    mouse_x= e.clientX- canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;

    console.log("X="+ mouse_x +",Y ="+mouse_y );
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y)
{
    tasty.beginPath();
    tasty.strokeStyle= color;
    tasty.lineWidth=2;
    tasty.arc(mouse_x, mouse_y, 40, 0,2*Math.PI );
    tasty.stroke();

}
