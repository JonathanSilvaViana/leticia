function sim(){
	oculta("cenasete_resposta");
	coisar("Weslley: Então já que você estará livre, será que você topa sair comigo hoje à noite?", 30, function(){
	mostra("cenaoito_resposta");
	})
}

function simpq(){
	oculta("cenasete_resposta");
	coisar("Weslley: Ah é porque eu gostaria de te chamar pra sair comigo para jantar hoje à noite, você topa?", 30, function(){
	mostra("cenaoito_resposta");
	})
}

function interessa(){
	oculta("cenasete_resposta");
	oculta("empe");
	saiprolado("empe");
	mudamusica("mmm");
	mudaboneco("leslobolado");
	mostra("boneco");
	coisar("Você foi muito grosseira com Weslley...", 30, function(){
	coisar("Assim você perdeu qualquer chance de ter um romance com ele...", 30, function(){
	oculta("boneco");
	coisar("Fim de jogo!!!", 30, function(){
	retorna_menu();
	})
	})
	})
}