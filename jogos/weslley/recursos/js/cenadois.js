function sistemas(){
	oculta("resposta");
	mostra("dialogo");
	coisar("Weslley: Nossaaaaaa que legal!!", 30, function(){
	coisar("Weslley: Eu tbm sou dessa area, eu curso ciência da computação", 30, function(){
	coisar("Weslley: Mas e aê, o que vc gosta de fazer?", 30, function(){
	mostra("respostadois");
	})
	})
	})
};

function psicologia(){
	oculta("resposta");
	mostra("dialogo");
	coisar("Weslley: hmm, humanas, é?", 30, function(){
	coisar("Weslley: hunf! u_u", 30, function(){
	coisar("Weslley: Mas e aê, o que vc gosta de fazer?", 30, function(){
	mostra("respostadois");
	})
	})
	})
};

function rejeitar(){
	oculta("resposta");
	oculta("respostadois");
	oculta("respostacinco");
	mudamusica("mmm");
	mudaboneco("leslobolado");
	mostra("boneco");
	coisar("Você rejeitou Ueslow, e o coração dele foi destroçado...", 30, function(){
	coisar("Ueslow ficou muito deprimido e começou a se cortar...", 30, function(){
	coisar("Parabéns, seu monstro!!", 30, function(){
	coisar("Fim de jogo", 30, function(){
	oculta("empe");
	oculta("boneco");
	mudaboneco("welly");
	saiprolado("empe");
	retorna_menu();
	})
	})
	})
	})

};

