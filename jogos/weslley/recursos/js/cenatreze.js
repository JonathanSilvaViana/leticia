function darboanoite(){
	oculta("boanoite");
	mudamusica("triste");
	saiprolado("weslley");
	coisar("Você escolheu terminar a noite de forma seca e insensivel...", 30, function(){
	coisar("Weslley estava cheio de esperanças, Weslley esperava uma noite ardente em seus braços, mas você dispensou ele de forma fria e cruel", 30, function(){
	coisar("Parabens... seu monstro desprovido de sentimentos", 30, function(){
	coisar("Fim de jogo", 30, function(){
	retorna_menu();
	})
	})
	})
	})
	
}

function convidar(){
	oculta("boanoite");
	coisar(nome+ ": Gostaria de entrar pra dar uma formatada no meu pc?", 30, function(){
	coisar("Weslley: Adoraria :3", 30, function(){
	coisar(nome+ ": Você vai conhecer o meu quarto 6_6", 30, function(){
	mudafundo("quarto");
	coisar(nome+ ": Rsrs, quantas linguagens de programação você sabe?", 30, function(){
	coisar("Weslley: Atualmente sei oito, mas eu gostaria de aprender mais uma, e quem sabe você não pode me ajudar?", 30, function(){
	coisar("Weslley: Com tantas linguagens de programação mas eu queria mesmo é saber da sua lingua *aquela carinha*", 30, function(){
	mostra("cenafinal_resposta");
	})
	})
	})
	})
	})
	})
}
function galanteador(){
	oculta("cenafinal_resposta");
	coisar("Weslley: Você ainda não viu nada, gata :3", 30, function(){
	coisar("Weslley: Você trabalha na Nintendo?", 30, function(){
	coisar(nome+ ": Não", 30, function(){
	coisar("Weslley: Então para de fazer jogo e me beija :3", 30, function(){
	mostra("beijo");
	})
	})
	})
	})
}

function saircorrendo(){
	oculta("cenafinal_resposta");
	mudamusica("triste");
	saiprolado("weslley");
	coisar("Você saiu correndo como se não houvesse o amanhã, e Weslley ficou sem entender o porquê...", 30, function(){
	coisar("Weslley ficou arrasado e se sentindo um lixo...", 30, function(){
	coisar("Você largou tudo o que conquistou até agora e isso deixou o Weslley completamente decepcionado...", 30, function(){
	coisar("Você acabou com a noite e a vida de Weslley", 30, function(){
	coisar("Fim de jogo", 30, function(){
	retorna_menu();
	})
	})
	})
	})
	})
}
