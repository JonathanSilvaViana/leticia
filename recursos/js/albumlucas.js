function $(qs) {
	return document.querySelector(qs);
}

var imageName = 1;

//Objeto que armazena as descrições das fotos

var descricao = {
	1:  "Lucas sendo lindo",
	2:  "Você nunca viu um gato dormindo com tanto estilo quanto esse gato",
	3:  "Gato com xênon",
	4:  "Um carinho é sempre bem vindo",
	5:  "Até o Lucas tem alguém pra esquentar ele no inverno e você não",
	6:  "Tá olhando o quê?",
	7:  "Tentando entender o que tá acontecendo",
	8:  "Sabe que hora é agora? Hora de dominar o mundo",
	9:  "Cochilar é legal, ainda mais no braço da mamãe",
	10: "Só sabe dormir",
	11: "Mozão serve de travesseiro",
	12: "Refletindo sobre a existência insignificante dos humanos",
	13: "Lucas quando chegou em casa era pequenino",
	14: "Não é amd mas serve pra esquentar",
	15: "Coisa foufa, Lucas filhotinho",
	16: "Um carinho de leves",
	17: " Gatenho gordenho ", 
	18: "Colinho",
	19: "Só obervo você me trocando por esse livro aí",
	20: "Melhor foto do Lucas",
	21: "Odeio todos os humanos",
	22: "Qual o melhor lugar pra dormir? Isso mesmo, notebook",
	23: "Só dorme",
	24: "Dormir é a melhor coisa",
	25: "Fingiu que ia dar colo e me deu remédio",
	26: "Não sei o que dizer",
	27: "Achou que ia dar atenção só pro notebook",
	28: "Aquele cochilinho numa tarde fria de junho",
	29: "Pensando nas bolas que jamais voltarão",
	30: "Aquela vontade de estudar mas o meu gato não deixa",
	31: "Patenhas mais foufas",
	32: "Gatenho abóbora",
	33: "Contemplem a beleza do Lucas",
	34: "Notebook continua sendo o melhor lugar pra dormir",
	35: "Lemuris",
	36: "Até o Lucas tem alguém pra dormir de conchinha e você não",
	37: "Sonhando com as bolas que não mais tenho",
}

var proximo = $('#proximo');
var qtdFotos = 37;

//Mostra a foto posterior
$('#descricao p').innerText = descricao[imageName];

proximo.addEventListener("click", direita);

function direita(){
	imageName += 1;
	imageName = (imageName>qtdFotos?1:imageName);
	$('#descricao p').innerText = descricao[imageName];
	$('#imagem').src = "../imagens/lucas/"+imageName+".jpg";
}

var anterior = $('#anterior');
//Mostra a foto anterior
anterior.addEventListener("click", esquerda);

function esquerda(){
	imageName -= 1;
	imageName = (imageName<1?qtdFotos:imageName);
	$('#descricao p').innerText = descricao[imageName];
	$('#imagem').src = "../imagens/lucas/"+imageName+".jpg";
}

$('body').addEventListener('keydown', function(event){
	var tecla = event.keyCode;
	if(tecla == 37){
		esquerda();
	} 
	if (tecla == 39) {
		direita();
	}
})






