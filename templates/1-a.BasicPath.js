// example point
var point1 = new Point(500, 50);

// add three more points
//*** your code ***//
var point2 = new Point(300,350);
var point3 = new Point(500,550);
var point4 = new Point(700, 350);
var point5 = new Point(500, 50);


// declare a new path
var path = new Path();

// set color and stroke size
path.strokeColor = 'black';
path.strokeWidth = 30;

// example adding points to the path
path.add(point1);


// add your points to the path
//*** your code ***//
path.add(point2);
path.add(point3);
path.add(point4);
path.add(point5);


// uncomment the following and check the outcome 
path.selected = true;
path.smooth({ type: 'continuous' });

