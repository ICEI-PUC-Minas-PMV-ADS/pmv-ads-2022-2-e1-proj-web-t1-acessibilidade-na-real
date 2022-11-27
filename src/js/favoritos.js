window.onload = function() {
    if(sessionStorage.getItem("login")!="true"){
        document.getElementById("body").style.display = "none";
        window.location.href = "sign-in.html";
    } else {
        var nome = sessionStorage.getItem("estNome");
        var descricao = sessionStorage.getItem("estDescricao");
    }
}