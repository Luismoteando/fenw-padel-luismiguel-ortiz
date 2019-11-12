var http_request = new XMLHttpRequest();

$(document).ready(function () {
    $("#login").click(function () {
        let user = document.getElementById("user").value;
        let password = document.getElementById("password").value;
        let url = "http://fenw.etsisi.upm.es:10000/users/login?username=" + user + "&password=" + password;
        sendRequest(url);
    });
});

function sendRequest(url) {
    http_request.open("GET", url, true);
    http_request.responseType = "json";
    http_request.onload = manageResponse;
    http_request.send();
}

function manageResponse() {
    var response = http_request.response;
    if (http_request.status === 200) {
        sessionStorage.setItem('token', response);
        window.location = "index.html";
    } else if (http_request.status === 401) {
        let warning = $("#warning");
        warning.css({"background-color": "#802727"});
        warning.html("Usuario y/o contraseña erróneos.");
        warning.css({"opacity": "100"});
    }
}