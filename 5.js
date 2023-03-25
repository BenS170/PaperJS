var url = 'https://tinyurl.com/24sd2bux';
var turtle = new Raster(url);

// If you create a Raster using a url, you can use the onLoad
// handler to do something once it is loaded:
turtle.onLoad = function() {
    console.log('The raster has loaded.');
};


var path = new Path();
var counter = 0;
var path_completed = false;


function onMouseDrag(event){
	path.add(event.point);
}

function onMouseDown(event)
{
    path = new Path();
	path.strokeColor = 'red';
	path.strokeWidth = 10;
    counter = 0;
}

function onKeyDown(event){
	if(event.key == 'space'){
		turtle.position = event.point;
		path_completed = true;
	}
	
}


function onFrame(event)
{
    if(path.length>0 && counter<1 && path_completed)
    {
        var offset = counter*path.length;
		var off_point = path.getPointAt(offset);
		var tangent = path.getTangentAt(offset).angle;
		turtle.position.x = off_point.x;
		turtle.position.y = off_point.y;
		turtle.rotation = tangent;
        counter = counter + 0.01;
    }
	if(counter >= 1){
		path.remove();
		path_completed = false
	}
}
