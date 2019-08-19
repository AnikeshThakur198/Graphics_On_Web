Animating the <canvas> element:
	To animate the HTML <canvas> we uses a function called as requestAnimationFrame() and use it as:
	
	function animate(){
		requestAnimationFrame(animate);
	}

	the requestAnimationFrame() will continiously call the animate function and it will only stops when we
	wanted it to. The code that we want to animate, we write it inside the animate() function.
	
	example shows the animation of a circle in horizontal direction
	eg:
	
	var dx = 1;
	var dy = 1;
	var x = 200;
	var y = 300;
	function animate(){
		c.clearRect(0, 0, window.innerWidth, window.innerHeight);
		c.beginPath();
		c.arc(x, y, 40, 0, Math.PI * 2);
		c.fillStyle = "blue";
		c.stroke();
		
		if(dx + 40 > canvas.width || dx < 40){
			dx = - dx;
		}else if(dy + 40 > canvas.height || dy < 40){
			dy = -dy;
		}
		
		x += dx;
		y += dy;
		requestAnimationFrame(animate);	
	}