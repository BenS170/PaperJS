
var circle = new Shape.Circle(new Point(200, 150), 50);
circle.fillColor = 'black';
var text = new PointText({
    point: [0, 50],
    content: 'x: 100, y: 100',
    fillColor: 'black',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 20
});

function onMouseMove(event){
	circle.position = new Point(event.point);
	circle.fillColor = new Color(event.point.x/view.size.width, event.point.y/view.size.height, 1);
	circle.bounds.height = (event.point.y+event.point.x)/4;
	circle.bounds.width = (event.point.y+event.point.x)/4;

	text.point = new Point(event.point.x-200, event.point.y-100);
	text.content = '(x: ' + event.point.x + ', y: ' + event.point.y + ')';
}