// Attack is for?
// Counter attack is for?
const constTurbo = {
	name:"Turbo",
	hp: 200,
	attack: 5,
	counterAttack : 40
}

const constRocket = {
	name:"Rocket",
	hp: 170,
	attack: 5,
	counterAttack : 45
}

const constSlug = {
	name:"Slug",
	hp: 200,
	attack: 5,
	counterAttack : 20
}

const constLove = {
	name:"Love",
	hp: 200,
	attack: 5,
	counterAttack : 190
}

// Instance of our characters.  
var turbo;
var rocket;
var slug;
var love;

// The following line is useless without pointers.  
// var characters = [turbo, rocket, slug, love];

// Selection of hero and enemy.  
var hero;
var enemy;

var heroSelected = false;
var enemySelected = false;

var countDefeated = 0;
var originalHP = "";


$(document).ready(function(){
	//Set the HTML page and set the character stats.  
	reset();
	$('.attackBtn').hide();


	// Select character
	$('.character').on('click',function(){
		console.log(this.id);
		if (heroSelected == false){
			$('#' + this.id).addClass('hero');
			heroSelected = true;
			hero = this.id;
			return;
		}

		if (enemySelected == false){
			$('#' + this.id).addClass('enemy');
			enemySelected = true;
			enemy = this.id;
			$('.attackBtn').show();
			return;
		}

		// Do nothing. 
		return;
	});


	$('.attackBtn').on('click', function(){
	let h, e

	if( hero == "turbo"){
		h = turbo;
	}
	if( hero == "rocket"){
		h = rocket;
	}
	if( hero == "slug"){
		h = slug;
	}
	if( hero == "love"){
		h = love;
	}


	if( enemy == "turbo"){
		e = turbo;
	}
	if( enemy == "rocket"){
		e = rocket;
	}
	if( enemy == "slug"){
		e = slug;
	}
	if( enemy == "love"){
		e = love;
	}

		attack(h, e);
	});

	$('.resetBtn').on('click', reset);
});


function attack(hero, enemy){
	// Reset HP on win.  
	if (originalHP == ""){
		originalHP = hero.hp;
	}

	enemy.hp = enemy.hp - hero.attack;




	// Player Wins case
	if (enemy.hp <= 0){
		// We don't want HP to ever be less than 0.
		enemy.hp = 0;
		enemySelected = false;
		$('#'+enemy.name.toLowerCase()).hide();
		hero.hp = originalHP;
		setCharactersStats();
		$('.attackBtn').hide();


		if($(".character").filter(":visible").length > 1) {
			$('.defence').html('<p>' + 'You defeated ' + enemy.name+  '! </p> '+ 
			'<p> Please choose a new opponent.</p>').css({'font-size': '20px'});
			return
			} else {
				$('.defence').html('<p>You Win! </p>').css({'font-size': '20px'});
				return
			}

		return
	}

	hero.hp = hero.hp - enemy.counterAttack;
	if (hero.hp <= 0){
		// We don't want HP to ever be less than 0.
		hero.hp = 0;
		$('.defence').html('<p>' + 'You have been defeated...Game Over!!!' + ' </p>').css({'font-size': '20px'});
		setCharactersStats();
		$('.attackBtn').hide();
		return
	}



	setCharactersStats();

	$('.defence').html('<p>' + 'You attacked ' + enemy.name + 
	' for ' + hero.attack +  ' damage. </p>' +
	'<p>'+ enemy.name + ' attacked you back for ' + 
		enemy.counterAttack + '.  </p>').css({'font-size': '20px','text-align':'center'});

	// Double the hero's attack for the next time.  
	hero.attack = hero.attack * 2;
}


function reset(){
	// Reinitialize all characters to original values.  
	turbo = Object.assign({}, constTurbo);
	rocket = Object.assign({}, constRocket);
	slug = Object.assign({},constSlug);
	love = Object.assign({},constLove);

	heroSelected = false;
	enemySelected = false;

	


	setCharactersStats();

	$(".character").show();
	$(".character").removeClass("enemy hero");

	$('.defence').html("")
}


// Set the HTML values on the page to display for the users.  
function setCharactersStats(){
	setCharacterStats(turbo);
	setCharacterStats(rocket);
	setCharacterStats(slug);
	setCharacterStats(love);
}


function setCharacterStats(c){
	console.log(c);
	console.log(c.hp);

	$('#'+c.name.toLowerCase()).find(".hp").text(c.hp);
}