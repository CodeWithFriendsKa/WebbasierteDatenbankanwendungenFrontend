/***
 * todo Methoden kommentieren, Logging einbauen
 */

function spielerAnsicht() {
    document.getElementById("tab-login").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link";
    document.getElementById("tab-registrieren").className = "nav-link hidden";
    document.getElementById("tab-spieler-ansicht").className = "nav-link active";
    document.getElementById("tab-trainer-ansicht").className = "nav-link hidden";

    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade in active";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade";
    baueSpielerAnsicht();
}
function baueSpielerAnsicht() {
    if (sessionStorage.getItem("newSpielerRegistration") !== "true"){
        document.getElementById("sp-ansicht-platz").innerHTML =  sessionStorage.getItem("spielerGruppePlatz");
        document.getElementById("sp-ansicht-uhrzeit").innerHTML = sessionStorage.getItem("spielerGruppeZeit");
        document.getElementById("sp-ansicht-trainer").innerHTML = sessionStorage.getItem("spielerGruppeTrainer");
        document.getElementById("sp-ansicht-mitspieler").innerHTML = sessionStorage.getItem("spielerGruppeSpielerListe");
    }
    //todo wenn du das Element löschst und einen Text überschreibst, kehrt der alte Text beim erneuten login nicht mehr zurück, besser mit Sichtbarkeiten arbeiten!
    else {
        let boxView = document.getElementById("sp-ansicht-box");
        while (boxView.firstChild) {
            boxView.removeChild(boxView.firstChild);
        }
        document.getElementById("sp-ansicht-h1").innerText = "Du bist noch keiner Gruppe zugeordnet, bitte trage deine Zeiten ein!"
    }
}