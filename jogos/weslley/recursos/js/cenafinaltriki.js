function aceito(){
	oculta("namorar");
	mudamusica("girls");
	some("triki");
	coisar("Você aceitou namorar a Kettry, uma semana depois vocês noivaram e já juntaram as escovas, Kettry levou suas malas e cuias e levou para a casa dela e adotaram um gato...", 30, function(){
	coisar("Um mês depois vocês se casaram e a lua de mel foi nas ilhas Cayman, esqueci de mencionar que o nome do gato é Luscas...", 30, function(){
	coisar("Vocês foram felizes para sempre...", 30, function(){
	coisar("Fim de jogo");
	retorna_menu();
	})
	})
	})
}

function naoaceito(){
	oculta("namorar");
	mudamusica("triste");
	coisar(nome+ ": Me desculpa, eu não quero apressar as coisas, eu mal te conheço...", 30, function(){
	coisar(nome+ ": Espero que entenda...", 30, function(){
	coisar("Kettry: Eu entendo, me desculpe..", 30, function(){
	some("triki");
	coisar("Você recusou o pedido de namoro da Kettry e isso partiu o coração dela", 30, function(){
	coisar("Em menos de uma semana você maguou duas pessoas do modo mais brutal e cruel...", 30, function(){
	coisar("Espero que esteja feliz, seu monstro", 30, function(){
	coisar("Fim de jogo", 30, function(){
	voltaprolado("triki");
	retorna_menu();
	})
	})
	})
	})
	})
	})
	})
}