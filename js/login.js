$().ready(function () {
    $("#login").click(function () {
        let user = $("#user").val();
        let password = $("#password").val();
        let url = "http://fenw.etsisi.upm.es:10000/users/login?username=" + user + "&password=" + password;
        sendRequest(url);
    });
});

function sendRequest(url) {
    $.ajax({
        type: 'GET',
        url: url,
        success: function (response) {
            sessionStorage.setItem('token', response);
            window.location = "index.html";
        },
        error: function (response) {
            if (response.status === 401) {
                let warning = $("#warning");
                warning.css({"background-color": "#802727"});
                warning.html("Usuario y/o contraseña erróneos.");
                warning.css({"opacity": "100"});
            }
        },
    });
}