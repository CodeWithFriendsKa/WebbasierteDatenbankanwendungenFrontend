function login() {
    document.getElementById("tab-login").className = "nav-link active";
    document.getElementById("tab-registrieren").className = "nav-link";
    document.getElementById("tab-spieler-ansicht").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link hidden";

    document.getElementById("content-login").className = "tab-pane fade in active";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
}

function makeLogin() {
    let mail = document.getElementById("login-mail").value;
    localStorage.setItem("userMail", mail);
    console.log("Eingegebene Mail :" + mail);
    let passwort = document.getElementById("login-passwort").value;
    localStorage.setItem("userPasswort", passwort);
    console.log("Eingegebenes Passwort :" + passwort);

    location.hash = "#spieler-ansicht";
}