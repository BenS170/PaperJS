var path = new Path();

function onMouseDown(event){
	var newPoint = new Point(event.point);
	path.add(newPoint);

	console.log(event.point.x);

	path.strokeColor = new Color(event.point.x/view.size.width, event.point.y/view.size.height, 0.5);
}

path.strokeColor = 'red';
path.strokeWidth = 10;