window.onload = function(){
    var nota = localStorage.getItem("avNota");
    var comentario = localStorage.getItem("avComentario");
    var titulo = localStorage.getItem("locNomelocal");
    var acessibilidade = localStorage.getItem("locAcessibilidade");
    var favorito = localStorage.getItem("favFavorito");
    if(favorito == "true"){
        document.getElementById("favorito").style.color = "red";
    }else{
        document.getElementById("favorito").style.color = "black";
    }
    document.getElementById("titulo").innerHTML = titulo;
    acessibilidades = acessibilidade.split(",");
    for(var i = 0; i < acessibilidades.length; i++){
        document.getElementById(acessibilidades[i]).checked = true;
    }
    if(nota != null){
        var html =
        "<div class='nota'>" 
        + " <h4>Nota:</h4>"
        + " <label class='nota-valor'>" + nota + "</label>"
        + "</div>"
        + "<div class='comentario'>"
        + " <h4>Comentário:</h4>"
        + " <p class='comentario-texto'>" + comentario + "</p>"
        + "</div>";
        document.getElementById("resultado").innerHTML += html;
    }
}

function enviarDados() {
    var nome = localStorage.getItem("locNomelocal");
    sessionStorage.setItem("estTitulo", nome);
    location.href = "avaliacao.html";
}

function addFavorito(item){
    var nome = localStorage.getItem("locNomelocal");
    var descricao = localStorage.getItem("locDescricao");
    var favorito = localStorage.getItem("favFavorito");
    if(favorito == "true"){
        localStorage.setItem("favFavorito", "false");
        item.style.color = "black";
    }else{
        localStorage.setItem("favFavorito", "true");
        localStorage.setItem("estNome", nome);
        localStorage.setItem("estDescricao", descricao);
        item.style.color = "red";
    }

}