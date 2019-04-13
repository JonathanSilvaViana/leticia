function continuar_dois(){
	oculta("decisao_dois");
	mudamusica("end");
	mudaboneco("lesleyne");
	mostra("boneco");
	coisar("Weslley: Eu sabia que você não ia me abandonar!", 30, function(){
	coisar("Weslley: Estou muito feliz que você preferiu ficar comigo :3", 30, function(){
	coisar("Weslley: Então " +nome+ ", vamos?", 30, function(){
	mudamusica("tokimeki");
	oculta("boneco");
	mudafundo("casanoite");
	coisar("", 30, function(){
	meiao("weslley"); 
	coisar(nome+ ": Hoje foi muito divertido, obrigada.", 30, function(){
	coisar("Weslley: Imagina, eu que agradeço por ter me dado o prazer de estar ao seu lado.", 30, function(){
	mostra("boanoite");
	})
	})	
	})
	})
	})
	})
}

function meiriane(){
	oculta("decisao_dois");
	embaixo("mey");
	coisar("Meiriane: Você não vai se arrepender, eu posso te levar ao paraíso de Macapá, sua linda!", 30, function(){
    oculta("dialogo");
    mudamusica("triste");
    mostra("dialogo");
    saiprabaixo("mey");
    mudaboneco("welly");
    coisar("Você escolheu ficar com a Meiriane...", 30, function(){
    coisar("Weslley ficou muito chateado com a sua péssima escolha, e isso causou um séria depressão em Weslley", 30, function(){
    coisar("Weslley trancou a faculdade e passou o resto dos seus dias confinado em seu quarto escuro ouvindo Tim Maia e tomando toddynho.", 30, function(){
    coisar("Bom trabalho... seu monstro de coração de pedra!", 30, function(){
    coisar("Fim de jogo", 30, function(){
    retorna_menu();
    })
    })
    })
    })
    })
	})
}