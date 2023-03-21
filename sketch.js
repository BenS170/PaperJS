// // Adapted from the following Processing example:
// // http://processing.org/learning/topics/follow3.html

// // The amount of points in the path:
// var points = 25;

// // The distance between the points:
// var length = 35;

// var path = new Path({
// 	strokeColor: '#E4141B',
// 	strokeWidth: 20,
// 	strokeCap: 'round'
// });

// var start = view.center / [10, 1];
// for (var i = 0; i < points; i++)
// 	path.add(start + new Point(i * length, 0));

// function onMouseMove(event) {
// 	path.firstSegment.point = event.point;
// 	for (var i = 0; i < points - 1; i++) {
// 		var segment = path.segments[i];
// 		var nextSegment = segment.next;
// 		var vector = segment.point - nextSegment.point;
// 		vector.length = length;
// 		nextSegment.point = segment.point - vector;
// 	}
// 	path.smooth({ type: 'continuous' });
// }

// function onMouseDown(event) {
// 	path.fullySelected = true;
// 	path.strokeColor = '#e08285';
// }

// function onMouseUp(event) {
// 	path.fullySelected = false;
// 	path.strokeColor = '#e4141b';
// }

// collection of points
var x = [  0.0, 25.71428571, 51.42857143, 77.14285714,
	102.85714286, 128.57142857, 154.28571429, 180.0,
	205.71428571, 231.42857143, 257.14285714, 282.85714286,
	308.57142857, 334.28571429, 360.0];

var y = [30.0, 34.33883739, 37.81831482, 39.74927912, 39.74927912,
	37.81831482, 34.33883739, 30.0, 25.66116261, 22.18168518,
	20.25072088, 20.25072088, 22.18168518, 25.66116261, 30.0]

// create a new path
//*** your code ***//
var path = new Path();



// stylize: strokeWidth and strokeColor
//*** your code ***//
path.strokeColor = 'green';
path.strokeWidth = 30;



// now use a for loop to add all the points to the path
//*** your code ***//
for(var i=0; i<x.length; i++){
	path.add(x[i], y[i]);
}



// uncomment the following and check the outcome 
path.selected = true;
path.smooth({ type: 'continuous' });
