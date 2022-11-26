function valida_form (){
	var nomeLocal = document.getElementById("localName").value;
	var categoria = document.getElementById("category").value;
	var rua = document.getElementById("rua").value;
	var numero = document.getElementById("numero").value;
	var bairro = document.getElementById("bairro").value;
	var estado = document.getElementById("estado").value;
	var acessilibilidade = getSelectValues(document.getElementsByTagName("select")[2]);
	
	if (nomeLocal == "" || categoria == "" || rua == "" || numero == "" || bairro == "" || estado == "" || acessilibilidade == ""){
		alert("Preencha todos os campos!");
		return false;
	} else {
		localStorage.setItem("nomeLocal", nomeLocal);
		localStorage.setItem("categoria", categoria);
		localStorage.setItem("rua", rua);
		localStorage.setItem("numero", numero);
		localStorage.setItem("bairro", bairro);
		localStorage.setItem("estado", estado);
		localStorage.setItem("acessilibilidade", acessilibilidade);
		alert("Local cadastrado com sucesso!");
		window.location.href = "home.html";
	}
	
	function getSelectValues(select) {
	 	var result = [];
	 	var options = select && select.options;
	 	var opt;
	
	 	for (var i=0, iLen=options.length; i<iLen; i++) {
	 	  opt = options[i];
	
	 	  if (opt.selected) {
	 		result.push(opt.value || opt.text);
	 	  }
	 	}
	 	return result;
	}
}


