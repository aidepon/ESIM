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