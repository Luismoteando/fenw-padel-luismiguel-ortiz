var liSignin, liLogin, liLogout;

$(document).ready(function () {
    createSigninElement();
    createLoginElement();
    createLogoutElement();
    $("#main-navbar").load("main-navbar.html", function () {
        setNavbarRole();
        setNavbarStyle();
    });
});

function createSigninElement() {
    let aSignin = document.createElement("a");
    liSignin = document.createElement("li");
    liSignin.setAttribute("id", "liSignin");
    liSignin.setAttribute("class", "nav-item");
    aSignin.setAttribute("href", "signin.html");
    aSignin.setAttribute("class", "nav-link");
    aSignin.innerHTML = "Regístrate";
    liSignin.appendChild(aSignin);
}

function createLoginElement() {
    let aLogin = document.createElement("a");
    liLogin = document.createElement("li");
    liLogin.setAttribute("id", "liLogin");
    liLogin.setAttribute("class", "nav-item");
    aLogin.setAttribute("href", "login.html");
    aLogin.setAttribute("class", "nav-link");
    aLogin.innerHTML = "Iniciar sesión";
    liLogin.appendChild(aLogin);
}

function createLogoutElement() {
    let aLogout = document.createElement("a");
    liLogout = document.createElement("li");
    liLogout.setAttribute("id", "liLogout");
    liLogout.setAttribute("class", "nav-item");
    aLogout.setAttribute("id", "aLogout");
    aLogout.setAttribute("onclick", "javascript:logout()");
    aLogout.setAttribute("class", "nav-link");
    aLogout.innerHTML = "Cerrar sesión";
    liLogout.appendChild(aLogout);
}

function logout() {
    sessionStorage.removeItem("token");
    window.location = "index.html";
}

function setNavbarRole() {
    if (sessionStorage.getItem("token") !== null) {
        $("#ulSession").append(liLogout);
    } else {
        $("#ulSession").append(liSignin);
        $("#ulSession").append(liLogin);
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