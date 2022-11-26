function signup(){
    var fname = document.getElementById ('fname').value
	var lname = document.getElementById ('lname').value
	var email = document.getElementById ('email').value
	var password = document.getElementById ('password').value
	var confirm_password = document.getElementById ('confirm_password').value

	console.log (password)
	console.log (confirm_password)
	if (password != confirm_password) {
		alert ("Senhas não coincidem")
	} else {
		localStorage.setItem ("sguNome", fname)
		localStorage.setItem ("sguSobrenome", lname)
		localStorage.setItem (email, password)
		alert('Sua conta foi criada com sucesso!')
		window.location.href = "home.html"
	}
}

function signin(){
	console.log('Teste')
	var email = document.getElementById ('email').value
	var password = document.getElementById ('password').value
	if(localStorage.length == 0){
		alert("Usuário não cadastrado")
	}else {Object.keys(localStorage).every(function (key) {
		if (key == email) {
			if (localStorage.getItem(key) == password) {
				alert('Login realizado com sucesso!')
				sessionStorage.setItem ("sguNome", localStorage.getItem("sguNome"))
				window.location.href = "home.html"
			} else {
				alert('Senha incorreta!')
				return false
			}
		} else {
			alert('Usuário não encontrado!')
			return false
		}
	})}
}	