var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// So first we will draw a line on the element and to draw a line we 
// first need to specify the required path of the line
var c = canvas.getContext('2d'); // We can create various shapes with just one reference variable

// for Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(600, 200);
// Now to add colors to the line we uses
c.strokeStyle = "blue";
c.stroke();


// The graphic that we created will only be shown inside the canvas elements container