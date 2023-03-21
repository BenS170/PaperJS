
// Basic Path
var point1 = new Point(200, 200);
var point2 = new Point(300, 100);
var point3 = new Point(400, 500);
var point4 = new Point(600, 400);

// Pathing

var myPath = new Path();
myPath.add(point1);
myPath.add(point2);
myPath.add(point3);
myPath.add(point4);

myPath.strokeWidth = 30;
myPath.strokeColor = 'green';