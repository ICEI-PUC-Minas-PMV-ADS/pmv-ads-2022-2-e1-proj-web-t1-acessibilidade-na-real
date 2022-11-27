window.onload = function() {
    if(sessionStorage.getItem("login")!="true"){
        document.getElementById("body").style.display = "none";
        window.location.href = "sign-in.html";
    } else {
        console.log('favFavorito')
        if(localStorage.getItem("favFavorito") == "true"){
            document.getElementById("titulo").innerHTML = localStorage.getItem("estNome");
            document.getElementById("descricao").innerHTML = localStorage.getItem("estDescricao");
        }else{
            alert("Você não tem favoritos!");
        }
    }
}