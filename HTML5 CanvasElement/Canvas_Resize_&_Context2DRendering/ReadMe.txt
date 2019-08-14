CanvasRenderingContext2D.fillRect():-

                    The 'CanvasRenderingContext2D.fillRect()' method of the Canvas 2D API draws a rectangle
    that is filled according to the current fillStyle.

This method draws directly to the canvas without modifying the current path, so any subsequent fill() or
stroke() calls will have no effect on it.


Syntax:
    **void ctx.fillRect(x, y, width, height);**

    where:-
        x
            The x-axis coordinate of the rectangle's starting point.

        y
            The y-axis coordinate of the rectangle's starting point.

        width
            The rectangle's width. Positive values are to the right, and negative to the left.
        
        height
            The rectangle's height. Positive values are down, and negative are up.



    The fillReact() method draws a filled rectangle whose starting point is at (x, y) and whose size is
    specified by width and height, 
    as we said that it used to draw a filled rectangle in the canvas now the fill style is determine by the
    current fillStyle attribute. 

-------------------X-------------------X----------------------X-----------------------X---------------------

CONTEXT RENDERING:

	The <canvas> element creates a fixed-size drawing surface that exposes one or more rendering contexts, 
   which are used to create and manipulate the content shown.

              In this in order to draw a rectangle as we have discussed we rendered 2D in order to 
   use its properties and methods, but we can also draw 3D figures by rendering WebGL that is
   created in order to create 3D graphics on the web.

   WebGL uses a 3D context based on OpenGL ES.

