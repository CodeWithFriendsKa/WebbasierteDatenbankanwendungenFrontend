function spielerAnsicht() {
    document.getElementById("tab-login").className = "nav-link hidden";
    document.getElementById("tab-registrieren").className = "nav-link hidden";
    document.getElementById("tab-spieler-ansicht").className = "nav-link active";
    document.getElementById("tab-logout").className = "nav-link";

    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade in active";

    var gruppe = findGruppeBySpielerMail("max1.mustermann@dhbw.de","max1.mustermann@dhbw.de", "123");
    baueSpielerAnsicht(gruppe);
}
function baueSpielerAnsicht(gruppe) {

    console.log(gruppe);

    document.getElementById("sp-ansicht-platz").innerHTML = "ddd";
    document.getElementById("sp-ansicht-uhrzeit").innerHTML = "ddd";
    document.getElementById("sp-ansicht-trainer").innerHTML = "ddd";
    document.getElementById("sp-ansicht-mitspieler").innerHTML = "ddd";
}