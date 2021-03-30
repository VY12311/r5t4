console.log("HI WELCOME");
        console.log("email- ??");
        console.log("password- ??");
        console.log("-------------");
        console.log("Password GH(Enter heck)");
        console.log("email-akhileshvy123");
        console.log("Password-AB158601");
        console.log("Log sucess(heck5)");
        console.log("-------------------78976g6gw_67h");
        console.log("0002100100100010001001111010001");
        console.log(" console.log printed")
        console.log("My first console.log project. <<<Incoming message>>>");
            var fn = "Akhilesh ";
            var ln = "Vaghela";
            var fln = fn.concat(ln);
        console.log(fln);
            var n1 = "7";
        console.log("Number 1 is 7");
            var n2 = "5";
        console.log("Number 2 is 5");
            var sum = n1 + n2;
        console.log('Addition',sum );
        var z = n1 - n2;
        console.log("Subtract",z);
        var mup = n1 * n2;
        console.log("Multilpy",mup);
        var div = n1 / n2;
        console.log("Divide",div);
        console.log("Array.activity");
        var nu = ["Array 1.1","Array 1.2","Array 1.3"];
        console.log("#Array enter mode 518 2.67",nu);
        var gh = nu[0];
        console.log("array enter 1 518 2.734",gh);
        var gh1 = nu[1];
        console.log("array enter 2 518 2.789",gh1);
        var gh2 = nu[2];
        console.log("array enter 2 518 2.890",gh2);
        var len = nu.length;
        console.log("array enter length 518 2.789",len);
        var arr_val = "";
        for (i = 0; i < nu.length; i++) {
            console.log("array enter 2 518 2.789",nu[i])
            arr_val = arr_val + nu[i] + "<br>"
        } ;
        nu.push("Array 1.4");
        console.log("Add 1.object",nu);
        nu.push("Array 1.5");
        nu.push("Array 1.6_end");
        console.log("Add 2.objects",nu);
        nu.unshift("Array 1.0");
        console.log("Add 1.Object at start 518.56",nu);
        nu.shift();
        console.log("remove 1.Object at start",nu);
        nu.pop();
        console.log("remove 1.object at end",nu);
        console.log("enter new array");
        var nu2 = [2,4,3,1];
        console.log("new number array",nu2);
        nu2.sort;
        console.log("sorted array 2",nu2);
        nu2.reverse;
        console.log("reversed array 2",nu2);
        console.log("#perfecting array 2...loading........");
        nu2.sort;
        console.log("new number array")
        var nu3 = [5,6,7,8];
        console.log("array 3 =",nu3,"joining 2 number array")
        var full = nu2.concat(nu3);
        console.log("joined 2 arrays..",full);
        console.log("Finding max number in number array 1");
        var max = Math.max.apply(Math, nu2);
        console.log("Max number =",max);
        console.log("Finding min number in number array 1");
        var min = Math.min.apply(Math, nu2);
        console.log("Min number =",min);
        console.log("Exiting array mode.....");
console.log("Windows PowerShell");
console.log("Copyright (C) Microsoft Corporation. All rights reserved.");
console.log("");
console.log("Try the new cross-platform PowerShell https://aka.ms/pscore6");
console.log("");
console.log("PS D:\workspace>");
var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var width = screen.width;
new_width =  screen.width - 70; 
new_height = screen.height - 300;
if(width < 992)
{
document.getElementById("myCanvas").width = new_width;
document.getElementById("myCanvas").height = new_height;
document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) 
{
console.log("my_touchstart");
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value; 
last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) 
{
console.log("my_touchMove");
current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
console.log("Last position of x and y coordinates = ");
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y);
console.log("Current position of x and y coordinates = ");
console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = Radius;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 40, 0, 2 * Math.PI);
ctx.stroke();
last_position_of_x = current_position_of_touch_x; 
last_position_of_y = current_position_of_touch_y;
}
function clearArea() {
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}