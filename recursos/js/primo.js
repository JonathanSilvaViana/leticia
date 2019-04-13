function primo(numero){
	for (var i = 2; i <= Math.sqrt(numero); i++){
		if (numero%i == 0) {
			return false;
		}
	}
	return true;
}

function $(qs){
	return document.querySelector(qs);
}

var input = 0;
$("#txtfield").addEventListener("keydown", function(event){
	if(event.key == 'Enter'){
		input = $('#txtfield').value;
		var retorno = primo(input);
		
		var divisores = [1];
		if(input == 1 || input == 0){
			$('#resposta').innerText = input + " não é primo nem composto, apenas diferente";
		} else if(retorno == true) {
			$('#resposta').innerText = input + " é um número primo";
			$('#divisores').innerText = "Só divide por 1 e por " + input;
		} else {
			$('#resposta').innerText = input + " é um número composto";
			for(var i = 2; i <= input; i++){
				if (input%i == 0) {
					divisores.push(i);
				}
			}
			$('#divisores').innerText = "Divisores: " + divisores;
		}
	}
});


