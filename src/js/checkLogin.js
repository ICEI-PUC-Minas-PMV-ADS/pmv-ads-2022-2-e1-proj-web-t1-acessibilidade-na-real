window.addEventListener("load", checkLogin());
function checkLogin() {
    if(sessionStorage.getItem("login") == "true"){
        document.getElementById("entrar").style.display = "none";
        document.getElementById("cadastro").style.display = "none";
        document.getElementById("favoritos").style.display = "inline-block";
        document.getElementById("cad-estabelecimento").style.display = "inline-block";
    }
}

