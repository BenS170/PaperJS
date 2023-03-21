
// Sinusoidal Path

var height = 100+73

var points = 20;

var myPath = new Path();
var point;

for(var i=0; i<points; i++){
	point = new Point(i*50, 200+20*Math.sin(i*Math.PI*0.5*height));
	myPath.add(point);
}

myPath.strokeColor = 'red';
myPath.strokeWidth = 20;
myPath.smooth({ type: 'continuous' });