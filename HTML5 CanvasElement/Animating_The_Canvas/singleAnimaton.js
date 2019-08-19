var canvas = document.querySelector('canvas');
canvas.width = "1366";
canvas.height = "690";

var c = canvas.getContext('2d');

// We gonna Animate a single circle first
//    c.beginPath();
//    c.arc(400, 300, 100, 0, 2*Math.PI);
//    c.strokeStyle = "rgba(0, 0, 255, 0.6)";
//    c.stroke();

var x = (Math.random() * 1200) + 50;
var dx = (Math.random() - 0.5) * 10;
var y = (Math.random() * 550) + 50;
var dy = (Math.random() - 0.5) * 10;
var radius = 40;
function animate(){
    if(x >= 1366-50 || x <= 50){
        dx = -dx;
    }else if(y >= 690-50 || y <= 50){
        dy = -dy;
    }
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, radius, 0, 2*Math.PI);
    c.strokeStyle = "rgba(220, 255, 0, 1)";
    c.stroke();
	c.fill();
    x += dx;
    y += dy;
    //c.addEventListener("mouseover", animate2);
    requestAnimationFrame(animate);
}

/*function animate2(event){
    dx = 1; dy = 1;
    if(x >= 1366-50){
        dx = -1;
    }else if(y >= 690-50){
        dy = -1;
    }else if(x <= 50){
        dx = 1;
    }else if(y <= 50){
        dy = 1;
    }
    x += dx;
    y += dy;
}*/

animate();


// Now to create multiple animated circles on the screen we'll use the object orieted JS and to use it we'll
// create an object to do create multiple elements in the screen.