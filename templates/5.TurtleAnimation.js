var url = 'https://tinyurl.com/24sd2bux';
var turtle = new Raster(url);

// If you create a Raster using a url, you can use the onLoad
// handler to do something once it is loaded:
turtle.onLoad = function() {
    console.log('The raster has loaded.');
};


var path = new Path();
var counter = 0;


function onMouseDown(event)
{
  
    // re-declare the path to make it empty
    //*** your code ***//
    path = new Path();


    // add tutle's current position to the path
    //*** your code ***//
    



    // add event.point to the path
    //*** your code ***//



    // set counter to 0
    counter = 0;
}


function onFrame(event)
{
    if(path.length>0 && counter<1)
    {
        var offset = counter*path.length;


        // get the point at the offset
        // use path.getPointAt method
        //*** your code ***//



        // get the tanget angle at the offset
        // use angle property from the path.getTangentAt method
        //*** your code ***//



        // change turtle's position to the obtained point
        //*** your code ***//



        // change turle's rotation to the obtain angle
        // use turtle.rotation property
        //*** your code ***//




        // increament the counter
        counter = counter + 0.01;
    }
}

