$(document).ready(function(){

	$("h1").css("font-style", "italic");

	//Seleciona Todos os Elementos HTML que tem o Attributo ID
	$("[id]").css("color","#ff0000");


	//Ocultar todos Elementos Visiveis
	$(":visible").hide();

	// Mosta todos os Elementos Ocultos
	$(":hidden").show();


	/* Selecionado Elementos do DOM */

	// : first - Primeiro
	// :last - Ultimo
	// :even - Elementos Pares
 	// :odd - Elementos Impares
 	// :eq(index) o elemento correspondente a posicao "index"
 	// :gt(index) os elementos Posteriores a Posicao "index"
 	// :lt(index) os elementos Anteriores a Posicao Index

 	// mostra as dimencoes da janela
 	function showWindowSize(){
 		$("#paragrafo").text("Largura: " + $(window).width() + " Altura: " + $(window).height());
 	}

 	$(window).resize(function(){
 		showWindowSize();
 	});

 	showWindowSize();


});