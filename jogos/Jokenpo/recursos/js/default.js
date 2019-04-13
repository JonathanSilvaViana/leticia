//math.random é função que escolhe uma coisa randomicamente
//Função que compara input do usuario com a resposta aleatorio
var compare = function(choice1, choice2){
	if(choice1 === choice2){
	return "Resultado deu empate";
	}
	else if (choice1 === "pedra") {
		if (choice2 === "tesoura") {
			return "Vc venceu";
		} else {
			return "Vc perdeu";
		}
	}
	else if (choice1 === "papel") {
		if (choice2 === "pedra") {
			return "Vc venceu";
		} else {
			return "Vc perdeu";
		}
	}
	else if (choice1 === "tesoura") {
		if (choice2 === "papel"){
			return "Vc venceu";
		} else {
			return "Vc perdeu";
		}
	}
};
var campo = document.getElementById('textField');

campo.addEventListener("keydown", function(event){

	if (event.key == 'Enter') {
		document.getElementById("userChoiceTxt").innerHTML = "---";
		document.getElementById("computerChoicetext").innerHTML = "---";
		var computerChoice = Math.floor(Math.random() * 3);
		switch(computerChoice){
			case 0: computerChoice = "tesoura"; break;
			case 1: computerChoice = "pedra";   break;
			case 2: computerChoice = "papel";   break;
		}

		var userChoice = document.getElementById("textField").value;
		userChoice = userChoice.toLowerCase();

		if(userChoice !== "pedra" && userChoice !== "tesoura" && userChoice !== "papel"){
			document.getElementById("resultTxt").innerHTML = userChoice + " é inválido, seu animal de teta";
			document.getElementById("textField").value = "";
		} else {
			document.getElementById("userChoiceTxt").innerHTML = "Você escolheu " + userChoice;
			document.getElementById("computerChoicetext").innerHTML = "Pc escolheu " + computerChoice;
			document.getElementById("resultTxt").innerHTML = compare(userChoice, computerChoice);
			document.getElementById("textField").value = "";
		}
 	}

});

