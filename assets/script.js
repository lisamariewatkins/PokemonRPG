$(document).ready(function(){

	var myHTML = "";

	var playerArray = [{
	name: "charmandar",
	img: "assets/img/charmandar.png",
	healthPoints: 10,
	attackPoints: 4,
	counterAttackPoints: 4},

	{name: "pikachu",
	img: "assets/img/pikachu.png",
	healthPoints: 10,
	attackPoints: 8,
	counterAttackPoints: 8},

	{name: "meowth",
	img: "assets/img/meowth.png",
	healthPoints: 10,
	attackPoints: 16,
	counterAttackPoints: 16},

	{name: "squirtle",
	img: "assets/img/squirtle.png",
	healthPoints: 10,
	attackPoints: 2,
	counterAttackPoints: 2}]

	for (var i = 0; i < playerArray.length; i++){
		myHTML += "<div id=" + i + "><p>" + playerArray[i].name + "</p><div class='inner-img-container'><img class='characterImage' src=" + heroArray[i].img + "></div><p class='health'</p>" + "health: " + playerArray[i].healthPoints + "</div>"
	}

	$("#selectPlayer").html(myHTML);


	$("characterImage").on('click', function(){
		var opponents = $(this).siblings;
		$("#enemies").append(opponents);
	});

});
