var characterHTML = "";

var hero;

var opponents;

var defender;

var villian = "";

var playerId;

var defenderId;

var pickedCharacter = false;

var pickedDefender = false;

$(document).ready(function(){

	

	function startGame(){
		for (var i=0; i<playerArray.length; i++){
			characterHTML = "<div class='characterBin'><img class=characterImage src=" + playerArray[i].img + "><p>" + playerArray[i].name + "</p><p class='health'>Health Points:" + playerArray[i].healthPoints + "</p></div>";
			$("#playerList").append(characterHTML);
		};
		$("#yourPokemonIs").hide();
		$("#selectFirstOpponent").hide(); 
		$(".btn").hide();
	};

	function attack(){
		
	};

	function counterAttack(){
		//computer attack code here
	};

	var playerArray = [
	{
		name: "charmander",
		img: "assets/img/charmander.png",
		healthPoints: 10,
		attackPoints: 4,
		counterAttackPoints: 4
	},

	{
		name: "pikachu",
		img: "assets/img/pikachu.png",
		healthPoints: 10,
		attackPoints: 8,
		counterAttackPoints: 8
	},

	{
		name: "meowth",
		img: "assets/img/meowth.png",
		healthPoints: 10,
		attackPoints: 16,
		counterAttackPoints: 16
	},

	{
		name: "squirtle",
		img: "assets/img/squirtle.png",
		healthPoints: 10,
		attackPoints: 2,
		counterAttackPoints: 2
	}];

	startGame();

	$(".characterBin").on('click', function(){
		if (pickedCharacter == false){
			//hides "choose" paragraph
			$("#choose").hide();
			//sets var hero = to clicked character
			hero = $(this).detach();
			opponents = $("#playerList .characterBin");
			opponents.addClass("opponents");
			enemyClick();
			$("#yourHero").append(hero);
			$("#yourEnemies").append(opponents);
			$("#yourPokemonIs").show();
			$("#selectFirstOpponent").show();
			}
		pickedCharacter = true;
	});

	function enemyClick(){
		$(".opponents").on('click', function(){
			if (!pickedDefender){
				defenderId = $(this).attr("Id");
				attackButtonClick();
				defender = $(this).detach();
				$("#selectFirstOpponent").hide();
				$("#yourPokemonIs").hide();
				$("#currentDefender").append(defender); //not appending to this div
				$(".btn").show(); //consider visibility hidden
			}
			pickedDefender = true;
		});
	};

	function attackButtonClick(){
		$("#attackButton").on('click', function(){
			if (pickedDefender == true){
				playerArray[playerId].healthPoints = playerArray[playerId].attackPoints - playerArray[defenderId].counterAttackPoints;
				playerArray[defenderId].healthPoints = playerArray[defenderId].attackPoints - playerArray[playerId].counterAttackPoints;
				$("#yourHero .health").html("Health: " + playerArray[playerId].healthPoints);
				$("#currentDefender .health").html("Health: " + playerArray[defenderId].healthPoints);
			}
		});
	};


	// if healthPoints == 0{
	// 	you lost;
	// };

});
