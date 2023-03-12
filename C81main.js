canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.rect(180, 180, 440, 200);
ctx.stroke();

 
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(290,230,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(400,230,40,0,2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(510,230,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 4;
ctx.arc(345,266,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(455,266,40,0,2 * Math.PI);
ctx.stroke();



