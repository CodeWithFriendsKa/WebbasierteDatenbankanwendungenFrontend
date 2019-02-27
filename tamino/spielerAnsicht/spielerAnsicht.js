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
    let gruppe = findGruppeBySpielerMail(localStorage.getItem("userMail"), localStorage.getItem("userMail"), localStorage.getItem("userPasswort"));
    if (gruppe !== "exception"){
        document.getElementById("sp-ansicht-platz").innerHTML = gruppe.platz;
        document.getElementById("sp-ansicht-uhrzeit").innerHTML = gruppe.zeit;
        document.getElementById("sp-ansicht-trainer").innerHTML = gruppe.trainer;
        document.getElementById("sp-ansicht-mitspieler").innerHTML = gruppe.spielerListe;
    }
}