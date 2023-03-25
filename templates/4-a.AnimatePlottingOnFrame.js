// collection of points
var x = [ 0.0, 25.71428571, 51.42857143, 77.14285714,
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
path.strokeWidth = 15;
path.strokeColor = 'purple';

// slow down factor
// set slowDown variable to 20+last digit of your UIN 
//*** your code ***//
var slowDown = 20 + 73; 



var i = 0;
// we will use the onFrame event
function onFrame(event){
    // Paper.js onFrame is typically 60fps
    // event.count returns how many frames have passed
    // Thus, event.count%slowDown==0 slows down the animation by a factor of slowDown
    // it means if slowDown number of frames have elapsed the path will be updated
    if(event.count%slowDown==0 && i<x.length){
        
        // create a new Point from x[i] and y[i]
        //*** your code ***//
        var point = new Point(x[i], y[i]);


        // add that point to your path
        //*** your code ***//
        path.add(point);

        

        // we will update index by 1
        i++;
        path.smooth({ type: 'continuous' });
    }
}

