$(function () {
    $("#login").click(function () {
        let user = $("#user").val();
        let password = $("#password").val();
        let url = "http://fenw.etsisi.upm.es:10000/users/login?username=" + user + "&password=" + password;
        sendRequest(url);
    });
});

function sendRequest(url) {
    $.ajax({type: 'GET', url: url})
        .done(function (data, status, xhr) {
            let token = xhr.getResponseHeader('Authorization');
            sessionStorage.setItem('token', token);
            window.location = "index.html";
        })
        .fail(function (xhr, status, err) {
            if (xhr.status === 401) {
                let warning = $("#warning");
                warning.text("Usuario y/o contraseña erróneos.");
                warning.css({"background-color": "#802727", "opacity": "100"});
            }
        });
}