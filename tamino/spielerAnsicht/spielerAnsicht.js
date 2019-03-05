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
    document.getElementById("sp-ansicht-platz").innerHTML =  localStorage.getItem("spielerGruppePlatz");
    document.getElementById("sp-ansicht-uhrzeit").innerHTML = localStorage.getItem("spielerGruppeZeit");
    document.getElementById("sp-ansicht-trainer").innerHTML = localStorage.getItem("spielerGruppeTrainer");
    document.getElementById("sp-ansicht-mitspieler").innerHTML = localStorage.getItem("spielerGruppeSpielerListe");
}