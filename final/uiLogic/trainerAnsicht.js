/***
 * todo Methoden kommentieren, Logging einbauen
 */
function trainerAnsicht() {
    document.getElementById("tab-login").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link";
    document.getElementById("tab-registrieren").className = "nav-link hidden";
    document.getElementById("tab-spieler-ansicht").className = "nav-link hidden";
    document.getElementById("tab-trainer-ansicht").className = "nav-link active";

    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade in active";
    baueTrainerAnsicht();
}

function baueTrainerAnsicht() {
    sessionStorrageGetAllGruppen("all-gruppen");
}