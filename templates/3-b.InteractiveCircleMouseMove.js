// first lets create a new circle
//*** your code ***//



// stylize: fillColor, strokeWidth, and strokeColor
//*** your code ***//



// for annotation
var textItem = new PointText({
	content: 'Move your mouse',
	point: new Point(100, 100),
	fillColor: 'black',
});

// we will add an event on mouse move
function onMouseMove(event) {

	// reposition circle and textItem to current mouse position
	// for raster/shape use item.position
	// for segment use item.point
	//*** your code ***//

	
	
	// Display the coordinate using textItem.content
	//*** your code ***//

	
	
	var r = event.point.x/view.size.width;	// can be used as red  color
	var b = event.point.y/view.size.height;	// can be used as blue color
	
	// change the circle's color using circle.fillColor and new Color(r,g,b) method
	//*** your code ***//


}

