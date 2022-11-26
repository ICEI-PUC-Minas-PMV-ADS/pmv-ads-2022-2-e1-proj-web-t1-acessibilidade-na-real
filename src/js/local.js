function valida_form (){
	var nomeLocal = document.getElementById("localName").value;
	var categoria = document.getElementById("category").value;
	var rua = document.getElementById("rua").value;
	var numero = document.getElementById("numero").value;
	var bairro = document.getElementById("bairro").value;
	var estado = document.getElementById("estado").value;
	var acessilibilidade = document.getElementsByTagName("select")[2];
	console.log(acessilibilidade);
	// function getSelectValues(select) {
	// 	var result = [];
	// 	var options = select && select.options;
	// 	var opt;
	  
	// 	for (var i=0, iLen=options.length; i<iLen; i++) {
	// 	  opt = options[i];
	  
	// 	  if (opt.selected) {
	// 		result.push(opt.value || opt.text);
	// 	  }
	// 	}
	// 	return result;
	//   }
}


