//  ROOM 1 FUNCTION
// W : windowON > X, mirrorON > X, flower > X
// B : windowOFF > X, mirrorOFF = event, door > home (after event > r2

var mirrorOFFStat = false;
var trapdoorStat = false;
// 
// window.onload = function () {
// 	var mirrorOFFClicks = document.getElementById('mirror.lights-off'); 
// 	mirrorOFFClicks.addEventListener('click', mirrorOFFClick);
// 	
// 	var trapdoorClicks = document.getElementById('trapdoor.lights-off'); 
// 	trapdoorClicks.addEventListener('click', trapdoorClick);}

$( "#mirror.lights-off" ).click(function(){

		if (mirrorOFFStat == false) {
		document.getElementById('mirror').setAttribute('id', 'mirror.lights-off:hover');
						
		mirrorOFFStat = true;}})

$( "#trapdoor.lights-off" ).click(function(){

		if (trapdoorStat == false) {
		document.getElementById('trapdoor').setAttribute('id', 'trapdoor.lights-off:hover');
						
		trapdoorStat = true;}})

function clearFacade () {
	if (mirrorOFFStat == true && trapdoorStat == true) {
		window.location.href= "r2.html";
		}
		
	else if (mirrorOFFStat == false && trapdoorStat == true) {
		window.location.href= "index.html";}
		}
		
$( "p" ).click(function() {
$( this ).slideUp();
});