// take to secret ending when player types "goodbye" at home page

Mousetrap.bind('g o o d b y e', function() {
   document.location.href = "r6.html";
});

// Switching images when lights are clicked ON & OFF

$(function(){  
    var lightsOn = true;

    $('#lights').click(function(){
       lightsOn = !lightsOn;
       
        if(lightsOn){
            $('.object').removeClass('lights-off');
        } else {
            $('.object').addClass('lights-off');
        }
        
    }); 
});