function vctbm(){
	oculta("lindeza");
	coisar("Weslley: Obrigado *-*", 30, function(){
	saiprolado("weslley");
	de_ladinho("garcom");
	coisar("Garçom: Com licença, gostaria de fazer o pedido agora?", 30, function(){
	mostra("olhar");
	})
	})
}
function obrigada(){
	oculta("lindeza");
	saiprolado("weslley");
	de_ladinho("garcom");
	coisar("Garçom: Com licença, gostaria de fazer o pedido agora?", 30, function(){
	mostra("olhar");
	})
}

function fechamenu(id){
	setTimeout(function(){
		document.getElementById(id).style.display = "none";
		oculta("olhar");
	})
	mostra("tentaculo");
}

function sotemtentaculo(){
	oculta("tentaculo");
	oculta("olhar");
	coisar("Garçom: Sim madame, comida sem tentáculos são contra o nosso regulamento.", 30, function(){
	tentaculocozido();
	})
}

function tentaculocozido(){
	oculta("tentaculo");
	oculta("olhar");
	coisar(nome+ ": Eu gostaria de um tentáculo cozido, por favor", 30, function(){
	coisar("Garçom: Anotado o seu pedido!", 30, function(){
	oculta("garcom");
	de_ladinho("weslley");
	coisar("Weslley: Vejo que temos algo em comum, você também gosta de tentáculos cozido", 30, function(){
	coisar("Weslley: Vamos aproveitar esse momento para nos conhecermos melhor", 30, function(){
	coisar(nome+ ": Por que você escolheu ciência da computação?", 30, function(){
	coisar("Weslley: Porque quero fazer uma rede social, apesar de que meu maior sonho era ser o melhor baixista do mundo", 30, function(){
	mudamusica("triste");	
	coisar("Weslley: Eu desisti desse sonho quando meu baixo foi roubado e eu caí em uma profunda depressão, depois disso minha vida não fez mais sentido.", 30, function(){
	coisar("Weslley: Eu senti uma tristeza muito grande porque aquele baixo era muito simbólico pra mim...", 30, function(){
	coisar("Weslley: Eu ganhei meu baixo do meu irmão mais velho que faleceu há 2 anos...", 30, function(){
	coisar("Weslley: O maior sonho era formar uma banda e dar orgulho à ele, e agora eu desisti de tudo!", 30, function(){
	mostra("consolo");
	})
	})
	})
	})	
	})
	})
	})
	})
	})
	})
}

