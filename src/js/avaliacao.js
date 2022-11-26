window.onload = function(){
    var titulo = sessionStorage.getItem("estTitulo");
    document.getElementById("titulo-texto").innerHTML = titulo;
}
function classificacaoNota(item){
    var nota = item.id;
    for (var i = 1; i <= 5; i++) {
        if (i <= nota) {
            document.getElementById(i).style.color = "orange";
        }
        else {
            document.getElementById(i).style.color = "black";
        }
    }
    document.getElementById("nota").value = parseInt(nota);
}

function send(){
    var nota = document.getElementById("nota").value;
    var comentario = document.getElementById("comentario").value;
    if (nota != 0) {
        localStorage.setItem("avNota", nota);
        localStorage.setItem("avComentario", comentario);
        alert("Avaliação enviada com sucesso!");
        window.location.href = "estabelecimento.html";
        return 0;
    }
    else {
        alert("Selecione uma nota");
        return 0;
    }
}