function classificacaoNota(item){
    var nota = item.id;
    sessionStorage.valor = nota;
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

function enviar(){}