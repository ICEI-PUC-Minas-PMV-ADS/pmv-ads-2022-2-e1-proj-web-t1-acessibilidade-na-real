window.onload = function(){
    var nota = localStorage.getItem("AVnota");
    var comentario = localStorage.getItem("AVcomentario");
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
    var titulo = document.getElementById("titulo").innerHTML;
    sessionStorage.setItem("estTitulo", titulo);
    location.href = "avaliacao.html";
}