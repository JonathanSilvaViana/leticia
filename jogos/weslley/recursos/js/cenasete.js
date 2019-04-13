function continuar(){
	oculta("decisao");
	mudamusica("end");
	mudaboneco("lesleyne");
	mostra("boneco");
	coisar("Welley: Eu sabia que vc iria escolher o melhor pra vc!!!", 30, function(){
	coisar("Weslley: Estou muito feliz que você preferiu ficar comigo", 30, function(){
	coisar("Weslley: Então... vamos?", 30, function(){
	coisar("", 30, function(){
	oculta("boneco");
	mudaboneco("empe");
	mudafundo("casadois");
	mudamusica("tokimeki");
	coisar(nome+": Bom... chegamos na minha casa...", 30, function(){
	mostra("empe");
	de_ladinho("empe");
	coisar("Weslley: Hoje a noite você estará livre?", 30, function(){
	mostra("cenasete_resposta");

	})
	})
	})
	})
	})
	})
}

function kettry(){
	oculta("decisao");
	embaixo("triki");
	coisar("Kettry: Você não vai se arrepender, eu posso te levar ao céu, gatan", 30, function(){
    oculta("dialogo");
    mudamusica("triste");
    mostra("dialogo");
    saiprabaixo("triki");
    mudaboneco("welly");
    coisar("Você escolheu ficar com a Kettry...", 30, function(){
    coisar("Weslley ficou muito chateado com a sua péssima escolha, e isso causou um séria depressão em Weslley", 30, function(){
    coisar("Weslley trancou a faculdade e passou o resto dos seus dias confinado em seu quarto escuro ouvindo Tim Maia", 30, function(){
    coisar("Bom trabalho... seu monstro!", 30, function(){
    coisar("Fim de jogo", 30, function(){
    retorna_menu();
    })
    })
    })
    })
    })
	})
}