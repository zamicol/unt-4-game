var turbo = {
	"health": 200,
	"attack": 5,
	"counterAttack" : 40
}

var rocket = {
	"health": 170,
	"attack": 5,
	"counterAttack" : 45
}

var slug = {
	"health": 200,
	"attack": 5,
	"counterAttack" : 20
}

var love = {
	"health": 200,
	"attack": 5,
	"counterAttack" : 190
}



$(document).ready(function(){

	// If our hero is selected
	let hero = false;

	// If our hero is selected
	let enemy = false;
	let countDefeated = 0;

	// Counter
	let turboCount = 0;
	let rocketCount = 0;
	let slugCount = 0;
	let loveCount = 0;

	// Disable button
	let disableBtn = false;
	
	// Select character
	$('.character').on('click',function(){
		console.log(this.id);
		if (hero == false){
			$('#' + this.id).addClass('hero');
			hero = true;
			return;
		}

		if (enemy == false){
			$('#' + this.id).addClass('enemy');
			enemy = true;
			return;
		}


		//$('.character').not('#'+ this.id).appendTo('.enemiesBox');
	
	});


});


function setCharacterStats(){
	$('.character').attr('id');
}