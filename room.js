// LIGHT FUNCTION

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

	
	

//  ROOM 2 FUNCTION
// W : mother > X , twirl > X, door > r1 (after event > r3
// B : mother = event , kill mother > game over , door > r1



//  ROOM 3 FUNCTION
// W : eat cake > X , draw > X, diary = event
// B : door > r2 (after event r4) , write > X (click 30x makes words appear on wall), sleep > X



//  ROOM 4 FUNCTION
// W : pluck petals > fade out to r3 , pick knife = knife is picked, door > r3 (after events (2) r5)
// B : touch hands > game over , stab hand = event, stab self > game over



//  ROOM 5 FUNCTION
// W : open window > game over , painting > X, lay in bed > X
// B : write letter = event (letter appears on table) , painting > X (person dies), leave > game over (after event, end1)



//  ROOM 6 FUNCTION
// W : lay triangle > X (triangle is placed)
// B : goodbye = end2 (sinks into water)

