function $$(qs) {
	return document.querySelectorAll(qs);
}

function $(qs) {
	return document.querySelector(qs);
}

var elem = $('#menu');

elem.addEventListener("click", function(){
	$('#jogos').style.opacity = "1";
	$('#njogos').style.opacity = "1";
	$('#lucas').style.opacity = "1";
});

// var botaoMenosjogo = $('#njogos');

// botaoMenosjogo.addEventListener("mouseover", function(){
// 	$('#njogos').style.backgroundColor = "#FF0000";
// });

var titulo = $('#titulo');

titulo.addEventListener("click", function(){
	$('#unigato').style.top = "85%";
	$('#oi').innerHTML = " ";
});

var uni = $('#unigato');

var i = 0;
uni.addEventListener("click", function(){
	i++;
	if(i == 2){
		$('#primo').style.top = "75%";
	}

	if (i == 10) {
		$('#oi').innerHTML = "Para de me cutucar seu filho da puta";
	};

	if (i == 15) {
		$('#oi').innerHTML = " ";
		$('#unigato').style.top = "100%";
		i = 0;
	}

});

// $('body').addEventListener("keydown", function(){
// 	var e = event.keyCode;
// 	if(e == 17 && e == 107) {
// 		alert("Eu amo você, Wes <3");
// 	};
// })

//Relogio

setInterval(function(){
	var horas    = new Date().getHours();
	var minutos  = new Date().getMinutes();
	var segundos = new Date().getSeconds();
	if(segundos < 10){
		segundos = '0' + segundos;
	}
	minutos = (minutos < 10?'0'+minutos:minutos);
	horas = (horas <10?'0'+horas: horas);
	document.getElementById('relogio').style.opacity = "1";
	document.getElementById('relogio').innerText = horas + ':' + minutos + ':' + segundos;

}, 1000);
		
	
	