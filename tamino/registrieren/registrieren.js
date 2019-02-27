function registrieren() {
    document.getElementById("tab-login").className = "nav-link";
    document.getElementById("tab-registrieren").className = "nav-link active";
    document.getElementById("tab-spieler-ansicht").className = "nav-link hidden";

    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade in active";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
}