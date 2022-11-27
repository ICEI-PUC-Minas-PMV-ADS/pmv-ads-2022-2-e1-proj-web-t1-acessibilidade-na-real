window.onload = function(){
    var nota = localStorage.getItem("avNota");
    var comentario = localStorage.getItem("avComentario");
    var titulo = localStorage.getItem("locNomelocal");
    var acessibilidade = localStorage.getItem("locAcessibilidade");
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
    if(item.style.color == "red"){
        item.style.color = "black";
        localStorage.removeItem("estNome");
        localStorage.removeItem("estDescricao");
    }else{
        item.style.color = "red";
        localStorage.setItem("estNome", nome);
        localStorage.setItem("estDescricao", descricao);
    }
}