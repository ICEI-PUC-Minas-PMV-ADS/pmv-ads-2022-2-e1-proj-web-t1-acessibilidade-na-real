window.onload = function () {
    if (sessionStorage.getItem("login") == "true") {
        location.href = "src/html/home.html";
    }
    
};




document.getElementById("sign-in").onclick = function () {
    location.href = "src/html/sign-in.html";
};

document.getElementById("sign-up").onclick = function () {
    location.href = "src/html/sign-up.html";
};