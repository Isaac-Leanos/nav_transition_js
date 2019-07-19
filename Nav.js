// I couldn't get it to toggle, so thats why there are two buttons for animation close and animation open.



var button = document.querySelector(".but1");
var button2 = document.querySelector(".but2");


var work =  function(){
    var here =  document.querySelector(".header");
    
    var step =  function() {
            here.animate([ 
                {   height:'30px', opacity: 1  },
                {   height:'15px', opacity: 1  },
                { height:'0px',  opacity: 0 }, //start        
            ],{duration: 1000, easing: 'ease-in-out', fill: 'forwards'})
    }

       window.requestAnimationFrame(step); //Tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.
    // }
}


var work2 =  function(){
    var here =  document.querySelector(".header");

    var step =  function() {
            here.animate([ 
                {   height:'0px', opacity: 0 },
                {   height:'15px', opacity: 0  },
                { height:'30px',  opacity: 1 }, //start        
            ],{duration: 1000, easing: 'ease-in-out', fill: 'forwards'})
    }

       window.requestAnimationFrame(step); //Tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.
   
}




button.addEventListener('click',work);
button2.addEventListener('click',work2);
