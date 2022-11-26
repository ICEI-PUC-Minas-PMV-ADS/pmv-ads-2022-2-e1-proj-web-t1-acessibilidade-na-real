window.onload = function () {
    var nomeLocal = localStorage.getItem("locNomelocal");
    var categoria = localStorage.getItem("locCategoria");
    var descricao = localStorage.getItem("locDescricao");
    console.log(nomeLocal);
    console.log(categoria);
    console.log(descricao);
    if (nomeLocal != null) {
        var html =
        "<div class=" + categoria + " " + "id="+ categoria + ">"
        + " <h2>" + nomeLocal + "</h2>"
        + "<div class='desc'>"
        + " <label class='descricao'>Descrição:</label>"
        + " <p class='descricao-texto'>" + descricao + "</p>"
        + "</div>"
        + "</div>";
        document.getElementById("lugares").innerHTML += html;

        document.getElementById(categoria).style.border = "1px solid black";
        document.getElementById(categoria).style.borderRadius = "10px";
        document.getElementById(categoria).style.backgroundColor = "#f2f2f2";
        document.getElementById(categoria).style.padding = "10px";
    }
}
