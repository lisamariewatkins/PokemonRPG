var pickedOpponent = false;

var pickedHero = false;

var opponents;

var opponentsLeft = 3;

var opponent;

var heroId;

var opponentId;

var rounds = 1;

//character array
var playerArray = [
{
	name: "charmander",
	img: "assets/img/charmander.png",
	hpunchanged: 300, //hp unchanged -
	healthPoints: 300,
	ogAttackPoints: 4, //original G health points - to use when increasing player's power
	attackPoints: 4,
	counterAttackPoints: 15
},

{
	name: "pikachu",
	img: "assets/img/pikachu.png",
	hpunchanged: 250,
	healthPoints: 250,
	ogAttackPoints: 8,
	attackPoints: 8,
	counterAttackPoints: 25
},

{
	name: "meowth",
	img: "assets/img/meowth.png",
	hpunchanged: 200,
	healthPoints: 200,
	ogAttackPoints: 16,
	attackPoints: 16,
	counterAttackPoints: 30
},

{
	name: "squirtle",
	img: "assets/img/squirtle.png",
	hpunchanged: 150,
	healthPoints: 150,
	ogAttackPoints: 40,
	attackPoints: 40,
	counterAttackPoints: 40
}];

function heroClick(){
	$(".characterBin").on('click', function(){
		//makes sure you can only pick one character
		if (!pickedHero){
			heroId = $(this).attr("Id")
			$(this).addClass("hero");
			$(this).siblings("div").addClass("opponents");
			hero = $(this).detach();
			opponents = $(this).siblings('div').detach();
			$("#yourHero").append(hero);
			enemyClick();
			attackButtonClick();
			}
		pickedHero = true;
		$("#instructions").html("Pick your first opponent!");
	});
}	

function enemyClick(){
	$(".opponents").on('click', function(){
		if (!pickedOpponent){
			$(this).addClass("currentOpponent")
			opponentId = $(this).attr("Id");
			opponent = $(this).detach();
			$("#currentOpponent").append(opponent);
			opponentsLeft--;
			$("#instructions").html("");
		}
		pickedOpponent = true;
	});
};

function attackButtonClick(){
	$("#attackButton").on('click', function(){
		playerArray[heroId].attackPoints = playerArray[heroId].ogAttackPoints * rounds;
		if (pickedOpponent == true && playerArray[heroId].healthPoints > 0 && playerArray[opponentId].healthPoints > 0){
			playerArray[heroId].healthPoints = playerArray[heroId].healthPoints - playerArray[opponentId].counterAttackPoints;
			playerArray[opponentId].healthPoints = playerArray[opponentId].healthPoints - playerArray[heroId].attackPoints;
			$("#yourHero .health").html("Health: " + playerArray[heroId].healthPoints);
			$("#currentOpponent .health").html("Health: " + playerArray[opponentId].healthPoints);
			rounds++;

			if (playerArray[heroId].healthPoints < 0 && playerArray[opponentId].healthPoints < 0){
				if (playerArray[heroId].healthPoints < playerArray[opponentId].healthPoints){
					alert("You've lost! Click the reset button to play again.")
				}
				else{
					alert("You've won! Press reset to play again.")
				}
			}

			if (playerArray[heroId].healthPoints < 0 && playerArray[opponentId].healthPoints > 0){
				alert("You've lost! Click the reset button to play again.");
			}

			if (playerArray[opponentId].healthPoints < 0 && playerArray[heroId].healthPoints > 0){
				alert("You've won this round!");
				$("#currentOpponent").empty();
				if (opponentsLeft > 0){
					$("#instructions").html("Pick your next opponent!");
				}
				if (opponentsLeft == 0){
					$("#instructions").html("Congratulations! You've won! Press reset to play again.")
				}
				pickedOpponent = false;
			}
		};
		!pickedOpponent;
	});
};

function startGame(){
	for (var i=0; i<playerArray.length; i++){
		playerArray[i].healthPoints = playerArray[i].hpunchanged;
		characterHTML = "<div class='characterBin' id=" + i + "><img class=characterImage src=" + playerArray[i].img + "><p class='name'>" + playerArray[i].name + "</p><p class='health'>Health Points:" + playerArray[i].healthPoints + "</p></div>";
		$("#playerList").append(characterHTML);
		$("#instructions").html("Select your Pokemon!");
	};
};

$(document).ready(function(){
	startGame();
	heroClick();

	$("#resetButton").on('click', function(){
		console.log("I work");
		$("#yourHero").empty();
		$("#currentOpponent").empty();
		$("#playerList").empty();
		startGame();
		heroClick();
		pickedOpponent = false;
		pickedHero = false;
		rounds = 1;
	});

});
