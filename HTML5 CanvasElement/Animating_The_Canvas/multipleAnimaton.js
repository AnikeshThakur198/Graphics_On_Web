var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        c.strokeStyle = "rgba(0, 0, 0, 1)";
        c.stroke();
        c.fill();
    };

    this.update = function() {
        if(this.x + this.radius >= 1366){
            this.dx = - this.dx;
        }else if(this.x <= this.radius){
            this.dx = - this.dx
        }
        else if(this.y + this.radius >= 690){
            this.dy = - this.dy;
        }
        else if(this.y <= this.radius){
            this.dy = - this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    };        
}


var circleArray = [];
for(var i=0; i<20; i++){
    
    var x = (Math.random() * 1200) + 50;
    var dx = (Math.random() - 0.5) * 20;
    var y = (Math.random() * 550) + 50;
    var dy = (Math.random() - 0.5) * 20;
    var radius = 40;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);
//circle1.draw();

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(var i=0; i<100; i++){
        circleArray[i].update();
    }
}

animate();