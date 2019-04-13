function simlivre(){
	oculta("livrepralambada");
	coisar("Kettry: Você topa ir lá em casa pra dançar lambada comigo?", 30, function(){
	mostra("resposta_lambada");
	})
}

function naolivre(){
	oculta("livrepralambada");
	oculta("resposta_lambada");
	mudamusica("triste");
	coisar("Você dispensou Kettry...", 30, function(){
	coisar("Em menos de 24 horas você magoou duas pessoas da forma mais fria e cruel...", 30, function(){
	coisar("Fim de jogo", 30, function(){		
	oculta("triki");
	mudaboneco("welly");
	retorna_menu();
	})
	})
	})
}
function simlambada(){
	oculta("resposta_lambada");
	coisar("Kettry: À que horas eu posso te pegar?", 30, function(){
	coisar(nome+ ": A noite toda se deus quiser", 30, function(){
	coisar("Kettry: Então combinado, até sexta!", 30, function(){
	coisar(nome+ ": Até...Tchau", 30, function(){
	saiprabaixo("triki");
	coisar("", 30, function(){
	mudafundo("festa");
	embaixo("triki");
	coisar("Kettry: Preparei essa festa só pra você...", 30, function(){
	coisar("Kettry: Quero que hoje seja um dia especial pra nós duas", 30, function(){
	coisar(nome+ ": Ficou realmente lindo, eu adorei", 30, function(){
	coisar("Kettry: Então " +nome+ " vamos dançar?", 30, function(){
	coisar(nome+ ": Vamos sim :3", 30, function(){
	mudamusica("lambada");
	some("triki");
	coisar("", 30, function(){	
	coisar("(Dançando)", 30, function(){
	coisar("", 30, function(){
	coisar("(Dançando)", 30, function(){
	coisar("", 30, function(){
	coisar("(Dançando)", 30, function(){
	coisar("", 30, function(){
	aparece("triki");
	meiao("triki");
	coisar("Kettry: Eu te achei muito linda e inteligente, eu sei que pode estar um pouco cedo mas...", 30, function(){
	coisar("Kettry: Gostaria de namorar comigo?", 30, function(){
	mostra("namorar");	
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