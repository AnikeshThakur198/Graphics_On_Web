//console.log('HTML5 Canvas Element');

// This is how we resize the canvas element using the JavaScript
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;   // canvas.width is used to target the width attribute of the canvas element
canvas.height = window.innerHeight; // canvas.height will target the height attribute of the canvas element
console.log(canvas);

document.querySelector('body').style.margin = "0px";


/**
 *      getContext():
 *              The getContext() method in the JavaScript is basically used to create an object that provide
 *          methods and properties to draw graphics inside the <canvas> element.
 * 
 *      eg:-
 *      getContext('2d'), leading to the creation of a CanvasRenderingContext2D object representing a 
 *      two-dimensional rendering context              
 */ 

var c = canvas.getContext('2d');  // this will provide method and properties to draw a 2D graphics inside the canvas element
c.fillStyle = 'rgba(255, 0, 0 , 0.8)';
c.fillRect(200, 200, 200, 200);

c.fillStyle = 'rgba(0, 255, 0, 0.6)';
c.fillRect(300, 300, 200, 200);

c.fillStyle = 'rgba(0, 0, 255, 0.4)';
c.fillRect(400, 400, 200, 200);

// c is the required variable that stores the reference of the CanvasRenderingContext2D so that we can 
// use its properties and methods using c 
