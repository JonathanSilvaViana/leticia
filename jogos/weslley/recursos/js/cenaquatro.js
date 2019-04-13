function fofo(){
	oculta("respostatres");
	coisar("Weslley: Você que é *-*", 30, function(){
	coisar("Weslley: Posso te acompanhar até a sua casa, depois da aula?", 30, function(){
	mostra("respostacinco");
	})
	})
};

function uhu(){
	oculta("respostatres");
	coisar("Weslley: Você é tão foooofs *---*", 30, function(){
	coisar("Weslley: Posso te acompanhar até a sua casa, depois da aula?", 30, function(){
	mostra("respostacinco");
	})
	})
};

function otario(){
	oculta("respostatres");
	mudamusica("mmm");
	mudaboneco("leslobolado");
	coisar("Você foi muito grossa com o Weslley...", 30, function(){
	coisar("Weslley ficou muito magoado e triste...", 30, function(){
	coisar("Por sua culpa Weslley irá trancar a faculdade e se isolar em um quarto escuro e chorar para sempre...", 30, function(){
	coisar("Parabéns, seu monstro sem sentimentos", 30, function(){
	retorna_menu();
	})
	})
	})
	})
}