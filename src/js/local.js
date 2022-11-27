function valida_form (){
	if(document.getElementById("nome").value.length < 3){
	alert('Por favor, preencha o campo nome');
	document.getElementById("nome").focus();
	return false
	}
	}
	
	
	
// 	function estabelecimento(){
//     var localName = document.getElementById ('localName').value
// 	var category = document.getElementById ('category').value
// 	var cep = document.getElementById ('cep').value
// 	var logradouro = document.getElementById ('logradouro').value
// 	var numero = document.getElementById ('numero').value
// 	var bairro = document.getElementById ('bairro').value
// 	var estado = document.getElementById ('estado').value
// 	var acessibilidade = document.getElementById ('acessibilidade').value


// 	console.log (localName)
// 	console.log (category)
// 	console.log (cep)
// 	console.log (logradouro)
// 	console.log (numero)
// 	console.log (bairro)
// 	console.log (estado)
// 	console.log (acessibilidade)

	
// 	if (string.length === 0) {
// 		alert ("Erro!")
// 	} else {
// 		localStorage.setItem ("nomeLocal", localName)
// 		localStorage.setItem ("categoriaLocal", category)
// 		localStorage.setItem ("cepLocal", cep)
// 		localStorage.setItem ("ruaLocal", logradouro)
// 		localStorage.setItem ("numLocal", numero)
// 		localStorage.setItem ("bairroLocal", bairro)
// 		localStorage.setItem ("ufLocal", estado)


// 		alert('Estabelecimento criado com sucesso!')
// 		window.location.href = "home.html"
// 	}
// }
// // // 
// // 	Object.keys(localStorage).forEach(function (key) {
// // 		if (document.getElementById ('email').value = key)
// // 		{
// // 			if (password == sessionStorage.getItem (email)){
// // 				alert("Login realizado com sucesso!")
// // 				window.location.href = "home.html"
// // 			} else {
// // 				alert("Senha incorreta!")
// // 			} 
// // 		} else {
// // 			alert("Conta não existe.")
// // 		}
// // 	})
// // }