var click_callback = function(){};

function coisar(txt, delay, callback){
	if(typeof callback == 'undefined') callback = function(){};
	if(typeof delay == 'undefined') delay = 10;
	var c = null;
	clearInterval(c);
	var i = 0;

	click_callback = function(){
		i = txt.length+1;
	}

	c = setInterval(function(){
		if(i>txt.length){

			click_callback = callback;

			clearInterval(c);
		}
		document.getElementById('dialogo').innerText = txt.substr(0, i++);
	}, delay);
}

window.addEventListener('click', function(){
	click_callback();
});

function mudafundo(fundo){
	setTimeout(function(){
		document.body.style.backgroundImage = "url(recursos/imagem/background/"+ fundo +".jpg)";
	}, 100)
}

function mudaboneco(boneco){
	document.getElementById('boneco').src = "recursos/imagem/caracter/"+ boneco +".png";
}

function mudamusica(musica){
	document.getElementById('musica').src = "audio/"+ musica +".mp3";
	document.getElementById('musica').parentElement.load();
}
function mostra(id){
	document.getElementById(id).style.display = "initial";
}
function oculta(id){
	document.getElementById(id).style.display = "none";
}
function embaixo(id){
	document.getElementById(id).style.display = "block";
	setTimeout(function(){
		document.getElementById(id).style.top = "0";
	}, 10)
};

function de_ladinho(id){
	document.getElementById(id).style.display = "block";
	setTimeout(function(){
		document.getElementById(id).style.left = "55%";
	}, 10)
};

function saiprabaixo(id){
	setTimeout(function(){
		document.getElementById(id).style.top = "100%";
	}, 5)

}

function saiprolado(id){
	setTimeout(function(){
		document.getElementById(id).style.left = "100%";
	}, 1)
}

function some(id){
	setTimeout(function(){
		document.getElementById(id).style.opacity = "0";
	})
}
function aparece(id){
	document.getElementById(id).style.display = "block";
	setTimeout(function(){
		document.getElementById(id).style.opacity = "1";
	})
}

function wellyfurioso(id){
	document.getElementById(id).style.display = "block";
	setTimeout(function(){
		document.getElementById(id).style.top = 0;
	})
}
function lermenu(id){
	setTimeout(function(){
		document.getElementById(id).style.display = "block";
		oculta("olhar");
	})
}
function definenome(event){
	if (event.key == 'Enter') {
		nome = document.getElementById('camponome').value;
		aposnome();
	}
}
function definenome_dois(event){
	if (event.key == 'Enter') {
		nome = document.getElementById('camponome_dois').value;
		aposnome_dois();
	}
}

function meiao(id){
	document.getElementById(id).style.display  = "block";
	setTimeout(function(){
		document.getElementById(id).style.left = "20%";
	}, 30)
}

function voltaprolado(id){
	document.getElementById(id).style.display  = "block";
	document.getElementById(id).style.opacity  = "1";
	setTimeout(function(){
		document.getElementById(id).style.top  = "100%"
		document.getElementById(id).style.left = "55%";
	})
}

function finall(id){
	document.getElementById(id).style.display = "inherit"; 
	setTimeout(function(){
		document.getElementById(id).style.opacity = "1";

	}, 10)
}


