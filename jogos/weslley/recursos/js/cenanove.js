function topo(){
	oculta("cenaoito_resposta");
	coisar("Weslley:  Então combinado! Até mais tarde *-*", 30, function(){
	coisar(nome+ ": Até mais tarde *-*", 30, function(){
	oculta("empe");
	mudafundo("restaurante");
	coisar("À noite Weslley leva " +nome+ " para um restaurante japonês", 30, function(){
	coisar("", 30, function(){
	mudafundo("resdentro");
	mudamusica("japa");
	coisar("", 30, function(){
	de_ladinho("weslley");
	coisar("Weslley: Estou muito feliz que você veio hoje", 30, function(){
	coisar(nome+ ": Está uma noite muito agrádavel você não acha?", 30, function(){
	coisar("Weslley: Não tão agrádavel quanto a sua presença, você está muito linda esta noite!", 30, function(){
	mostra("lindeza");
	})
	})
	})
	})
	})
	})
	})		
	})
};

function nem(){
	oculta("cenaoito_resposta");
	oculta("empe");
	saiprolado("empe");
	mudamusica("triste");
	mudaboneco("leslobolado");
	mostra("boneco");
	coisar("Você dispensou o Weslley de uma maneira muito grosseira...", 30, function(){
	coisar("Assim você perdeu qualquer chance de ter um romance com ele...", 30, function(){
	oculta("boneco");
	coisar("Fim de jogo!!!", 30, function(){
	retorna_menu();
	})
	})
	})
}