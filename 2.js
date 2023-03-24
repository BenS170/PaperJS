// Rectangle

var origin = new Point(200, 100);
var rectSize = new Size(250, 150);

var myPath = new Path.Rectangle(origin, rectSize);
myPath.strokeColor = 'gold';
myPath.strokeWidth = 10;
myPath.fillColor = 'maroon';

myPath.segments[3].remove();