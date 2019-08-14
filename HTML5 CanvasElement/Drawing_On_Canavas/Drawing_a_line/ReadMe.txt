METHODS USED TO DRAW A LINE USING HTML5 CANVAS:-

	It all begins with rendering a 2d context using getContext() method as

		var c = canvas.getContext();

	after that we need to call beginPath() method in order to define path of line

		c.beginPath();

	now we need to specify the starting points or the axes point from where line starts
	and we'll do so by using the method

		c.moveTo(x1, y1); 
			where, x1 is the x-axis coordinate
			   and   y1 is the y-axis coordinate

	moveTo() will move the pointer to the starting location from where the line starts
	
	after doing all these we will actually call the lineTo() that will specify the endPoints 
	of the line as
	
		c.lineTo(x2, y2);
	
	we can further extend the line by calling the same method again as
	
		c.lineTo(x3, y3);

	after that we'll use the stroke() method to actually draw the path on the canvas.

		c.stroke();

	now in order to style the line we uses
		
		c.strokeStyle = "blue/whatever you like"