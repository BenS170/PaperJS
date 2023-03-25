// interactive scatter plot

var rain_chance = [88, 6, 10, 24, 18, 21, 49, 31, 20, 24, 36, 18, 43, 58, 38];
var dates = ["Thu 02","Fri 03","Sat 04","Sun 05","Mon 06","Tue 07","Wed 08","Thu 09","Fri 10","Sat 11","Sun 12","Mon 13","Tue 14","Wed 15","Thu 16"];
var totalcount = rain_chance.length;


var height = view.size.height;
var width = view.size.width;
var yposition = height*0.5;            //middle of the screen
var xposition = 75;
var space = (width-2*xposition)/totalcount;


for(var i=0;i<totalcount;i++)
{
    var x = xposition+space*i;
    var y = yposition;
    var radius = rain_chance[i]/2;
   
    var circle = new Path.Circle(new Point(x, y), radius);
    circle.fillColor = new Color(rain_chance[i]/50, rain_chance[i]/100, rain_chance[i]/20);

    var y_text = y+120;
    var text = new PointText(x, y_text);
    text.content = dates[i];
    text.rotation = 45;

}

var rain_text = new PointText({
    point: [50, 50],
    content: '',
    fillColor: 'red',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 20,
	rotation: -45
});

function onMouseMove(event)
{
    if(event.item!=null)
    {
        var itemindex = event.item.index; 
        if(itemindex%2==0)
        {
            var i = itemindex/2;
            rain_text.content = rain_chance[i] + '% chance of rain.';
            rain_text.position = new Point(event.item.position);
            rain_text.position.y += 20;
        }else{
			rain_text.content = '';	
		}
    }else{
		rain_text.content = '';
	}
}

