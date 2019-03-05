function spielerAnsicht() {
    document.getElementById("tab-login").className = "nav-link hidden";
    document.getElementById("tab-registrieren").className = "nav-link hidden";
    document.getElementById("tab-spieler-ansicht").className = "nav-link active";
    document.getElementById("tab-logout").className = "nav-link";
    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade in active";
    baueSpielerAnsicht();
}
function baueSpielerAnsicht() {
    if (localStorage.getItem("newSpielerRegistration") !== "true"){
        document.getElementById("sp-ansicht-platz").innerHTML =  localStorage.getItem("spielerGruppePlatz");
        document.getElementById("sp-ansicht-uhrzeit").innerHTML = localStorage.getItem("spielerGruppeZeit");
        document.getElementById("sp-ansicht-trainer").innerHTML = localStorage.getItem("spielerGruppeTrainer");
        document.getElementById("sp-ansicht-mitspieler").innerHTML = localStorage.getItem("spielerGruppeSpielerListe");
    }
    else {
        let boxView = document.getElementById("sp-ansicht-box");
        while (boxView.firstChild) {
            boxView.removeChild(boxView.firstChild);
        }
        document.getElementById("sp-ansicht-h1").innerText = "Du bist noch keiner Gruppe zugeordnet, bitte trage deine Zeiten ein!"
    }
}