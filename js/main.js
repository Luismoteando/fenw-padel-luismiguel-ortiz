var liSignin, liLogin, liReservations, liLogout;

$(function () {
    createSigninElement();
    createLoginElement();
    createLogoutElement();
    createReservationsElement();
    $("#navbar").load("main-navbar.html", function () {
        setNavbarRole();
        setNavbarStyle();
    });
    $("#footer").load("footer.html", function () {
        $(".footer").addClass('position-relative');
    });
});

function createSigninElement() {
    let aSignin = $("<a></a>").attr({"href": "signin.html", "class": "nav-link"});
    aSignin.text("Regístrate");
    liSignin = $("<li></li>").attr({"class": "nav-item"});
    liSignin.append(aSignin);
}

function createLoginElement() {
    let aLogin = $("<a></a>").attr({"href": "login.html", "class": "nav-link"});
    aLogin.text("Iniciar sesión");
    liLogin = $("<li></li>").attr({"class": "nav-item"});
    liLogin.append(aLogin);
}

function createLogoutElement() {
    let aLogout = $("<a></a>").attr({"onclick": "javascript:logout()", "class": "nav-link"});
    aLogout.text("Cerrar sesión");
    liLogout = $("<li></li>").attr({"class": "nav-item"});
    liLogout.append(aLogout);
}

function createReservationsElement() {
    let aReservations = $("<a></a>").attr({"href": "reservations.html", "class": "nav-link"});
    aReservations.text("Mis reservas");
    liReservations = $("<li></li>").attr({"class": "nav-item"});
    liReservations.append(aReservations);
}

function logout() {
    sessionStorage.removeItem("token");
    window.location = "index.html";
}

function setNavbarRole() {
    if (sessionStorage.getItem("token") !== null) {
        $("#ulSession").append(liReservations, liLogout);
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