// collection of points
var x = [ 0,51.42857142,102.85714286,154.28571428,
        205.71428572,257.14285714,308.57142858,360,
        411.42857142, 462.85714286,514.28571428,
        565.71428572,617.14285714,668.57142858,720];
var y = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


// set the height variable to 100+last two digits of your UIN
//*** your code ***//
var height = 100;



// create a new path
//*** your code ***//



// stylize: strokeWidth and strokeColor
//*** your code ***//



// now use a for loop to add all the points to the path
//*** your code ***//



function onFrame(event) {

	// Loop through the each segment of the path:
	for (var i = 0; i <x.length; i++) {
		// select each segment
		var segment = path.segments[i];


		// Math.sin(event.time + i) gives a cyclic value based on time+i between -1 and 1
		// multipy with the height and add 2*height to get the desired height and offset
		//*** your code ***//
		

		// finally change the y position of the selected segment to the obtained sin value
		// using segment.point.y
		//*** your code ***//



		// make the path smooth
		//*** your code ***//

		
	}
}

