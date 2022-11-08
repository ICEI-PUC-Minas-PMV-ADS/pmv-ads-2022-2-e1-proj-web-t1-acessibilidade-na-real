document.getElementById("mostrar-mais").onclick = function(){ 
	// Cria as variáveis que irão armazenar os elementos
	var pontos = document.getElementById("ponto");
	var maisTexto = document.getElementById("mais");
	var textoBtn = document.getElementById("mostrar-mais");

	// Verifica se o texto está expandido ou não
	if (pontos.style.display === "none") {
		// altera os elementos para o estado inicial
		pontos.style.display = "inline";
		textoBtn.innerHTML = "Mais";
		maisTexto.style.display = "none";
	} else {
		// altera os elementos para o estado expandido
		pontos.style.display = "none";
		textoBtn.innerHTML = "Menos";
		maisTexto.style.display = "inline";
	}
}