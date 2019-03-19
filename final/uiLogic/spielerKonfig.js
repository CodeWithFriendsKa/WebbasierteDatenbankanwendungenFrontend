function spielerKonfig() {
    document.getElementById("tab-login").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link";
    document.getElementById("tab-registrieren").className = "nav-link hidden";
    document.getElementById("tab-spieler-ansicht").className = "nav-link";
    document.getElementById("tab-spieler-konfig").className ="nav-link active";
    document.getElementById("tab-trainer-ansicht").className = "nav-link hidden";
    document.getElementById("tab-trainer-konfig").className = "nav-link hidden";

    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-konfig").className = "tab-pane fade";
    document.getElementById("content-spieler-konfig").className ="tab-pane fade in active";
    document.getElementById("content-trainer-detailansicht").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht-noch-keiner-gruppe-zugeordnet").className = "tab-pane fade";
}

function setSpieletTrainingData(spieler, userMail, userPasswort) {
    //ToDo: Lese alle gesetzten Checkboxen aus, speichern in Array
    //ToDo: Spieler-Entity: TrainingsArray + Anzahl gewünschter Trainings hinzufügen
    putSpielerEntity(spieler, userMail, userPasswort);
}