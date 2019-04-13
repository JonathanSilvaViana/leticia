function awn(){
	oculta("consolo");
	coisar(nome+ ": Não fique assim, pode ser que coisas boas acontecerão em sua vida, às vezes mudanças podem não parecer legais a curto prazo, mas são melhores a longo prazo.", 30, function(){
	coisar("Weslley: Você tem razão, tenho que olhar pro futuro agora", 30, function(){
	oculta("weslley");
	mudamusica("japa");
	mostra("garcom");
	coisar("Garçom: Aqui estão seus tentáculos, bom apetite", 30, function(){
	oculta("garcom");
	coisar("", 30, function(){
	mostra("weslley");
	coisar("Weslley: Vamos comer", 30, function(){
	coisar("", 30, function(){
	mudamusica("tokimeki");
	mudafundo("ruanoite");
	oculta("weslley");
	saiprolado("weslley");
	coisar(nome+ " e Weslley estavam caminhando tranquilamente quando de repente...", 30, function(){
	mudamusica("zinimiga");
	embaixo("mey");
	coisar("Meiriane: O que você está fazendo com essa novinha?", 30, function(){
	coisar("Meiriane: Esse território é meu, caralho! Se manda daqui, otário.", 30, function(){
	saiprabaixo("mey");
	de_ladinho("weslley");
	coisar("Weslley: Qualé ô lesba fidida, só estou levando a " +nome+ " pra casa", 30, function(){
	saiprolado("weslley");
	embaixo("mey");
	coisar("Meiriane: Oi " +nome+ ", tá afim de ter uma noite mais agradável?", 30, function(){
	coisar("Meiriane: Vamos lá em casa pra assisitr um filme *aquela carinha*", 30, function(){
	saiprabaixo("mey");
	de_ladinho("weslley");
	coisar("Weslley: Sai daqui sua fedida, sapatona mal amada!", 30, function(){
	coisar("Weslley: Deixa ela decidir com quem ela quer ficar", 30, function(){
	mostra("decisao_dois");
	oculta("weslley");
	saiprolado("weslley");
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

function pretoviado(){
	oculta("consolo");
	mudamusica("mmm");
	oculta("weslley");
	mudaboneco("leslobolado");
	mostra("boneco");
	coisar("Você feriu os sentimentos de Weslley...", 30, function(){
	coisar("Agora você não tem mais chance nenhuma de conquistar o coração do moreno", 30, function(){
	coisar("Fim de jogo.", 30, function(){
	retorna_menu();
	oculta("boneco");
	})
	})		
	})
	
}