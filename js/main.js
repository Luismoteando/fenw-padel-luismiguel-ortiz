var liSignin, liLogin, liLogout;

$().ready(function () {
    createSigninElement();
    createLoginElement();
    createLogoutElement();
    $("#main-navbar").load("main-navbar.html", function () {
        setNavbarRole();
        setNavbarStyle();
    });
});

function createSigninElement() {
    let aSignin = $("<a></a>").attr({"href": "signin.html", "class": "nav-link"});
    aSignin.text("Regístrate");
    liSignin = $("<li></li>").attr({"id": "liSignin", "class": "nav-item"});
    liSignin.append(aSignin);
}

function createLoginElement() {
    let aLogin = $("<a></a>").attr({"href": "login.html", "class": "nav-link"});
    aLogin.text("Iniciar sesión");
    liLogin = $("<li></li>").attr({"id": "liLogin", "class": "nav-item"});
    liLogin.append(aLogin);
}

function createLogoutElement() {
    let aLogout = $("<a></a>").attr({"id": "aLogout", "onclick": "javascript:logout()", "class": "nav-link"});
    aLogout.text("Cerrar sesión");
    liLogout = $("<li></li>").attr({"id": "liLogout", "class": "nav-item"});
    liLogout.append(aLogout);
}

function logout() {
    sessionStorage.removeItem("token");
    window.location = "index.html";
}

function setNavbarRole() {
    if (sessionStorage.getItem("token") !== null) {
        $("#ulSession").append(liLogout);
    } else {
        $("#ulSession").append(liSignin, liLogin);
    }
}

function setNavbarStyle() {
    $("#btnToggler").click(function () {
        if ($(window).scrollTop() > 56) {
            if ($("#navIndex").hasClass("bg-transparent")) {
                $("#navIndex").removeClass("bg-transparent").addClass("bg-dark shadow");
            }
        } else {
            if ($("#navIndex").hasClass("bg-transparent")) {
                $("#navIndex").removeClass("bg-transparent").addClass("bg-dark shadow");
            } else {
                $("#navIndex").removeClass("bg-dark shadow").addClass("bg-transparent");
            }
        }
    });
}