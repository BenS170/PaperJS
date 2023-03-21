// interactive scatter plot

var rain_chance = [88, 6, 10, 24, 18, 21, 49, 31, 20, 24, 36, 18, 43, 58, 38];
var dates = ["Thu 02","Fri 03","Sat 04","Sun 05","Mon 06","Tue 07","Wed 08","Thu 09","Fri 10","Sat 11","Sun 12","Mon 13","Tue 14","Wed 15","Thu 16"];
var totalcount = rain_chance.length;


var height = view.size.height;
var width = view.size.width;
var yposition = height*0.5;            //middle of the screen
var xposition = 100;
var space = (width-2*xposition)/totalcount;


for(var i=0;i<totalcount;i++)
{
    // create an origin point
    // you may use x = xposition+space*i and y = yposition for origin point
    //*** your code ***//
    

    
    // get the radius from the rain_chances array
    //*** your code ***//
    
   

    // now create the circle using new Path.Circle method
    //*** your code ***//




    // stylize
    // set the circle.fillColor based on the rain chances
    // you may use new Color(r,g,b) method
    // you may use rain_chance[i]/100 to get a color value for r,g, or b
    //*** your code ***//
    
    
   

    // create a pointtext
    // y position of the pointtext will be below the circle
    // thus add necessay offset to the origin
    // content of the pointtext will be correspoing date
    // you can additionally set the font size using pointtext.fontSize property
    // set the pointtext rotation to 45
    //*** your code ***//
    


}

// create another pointtext for information display
// content of this point text will be empty, i.e., ""
// set rotation to -45
// set fillColor and fontSize as you like
//*** your code ***//



function onMouseMove(event)
{
    if(event.item!=null)
    {
        var itemindex = event.item.index; 
        // since we are adding a circle and then text, all circles have even index
        if(itemindex%2==0)
        {
            var i = itemindex%2;
            
            // set information display pointtext content to show the rain chance
            //*** your code ***//
            
            
            // now move the pointtext position to event.item.position + (0,y_offset)
            // set a desired y_offset value so that the info is show above the cirle
            //*** your code ***//
            
            
        }
          
    }
    else
    {
        // set the information display pointtext content to blank, i.e., ""
        //*** your code ***//


    }
}