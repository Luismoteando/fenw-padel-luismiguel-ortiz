var liSignin, liLogin, liReservations, liLogout;

$(function () {
    createSigninElement();
    createLoginElement();
    createLogoutElement();
    createReservationsElement();
    $("#navbar").load("secondary-navbar.html", function () {
        setNavbarRole();
    });
    $("#footer").load("footer.html");
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