/***
 * todo Methoden kommentieren, Logging einbauen
 */

function spielerAnsicht() {
    document.getElementById("tab-login").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link";
    document.getElementById("tab-registrieren").className = "nav-link hidden";
    document.getElementById("tab-spieler-ansicht").className = "nav-link active";
    document.getElementById("tab-trainer-ansicht").className = "nav-link hidden";
    document.getElementById("tab-trainer-konfig").className = "nav-link hidden";

    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade in active";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-konfig").className = "tab-pane fade";

    baueSpielerAnsicht();
}
function baueSpielerAnsicht() {
    if (sessionStorage.getItem("new-spieler-registration") === "true" || sessionStorage.getItem("gruppe not found") === "true"){
        console.log(sessionStorage.getItem("new-spieler-registration"));
        let boxView = document.getElementById("sp-ansicht-box");
        while (boxView.firstChild) {
            boxView.removeChild(boxView.firstChild);
        }
        document.getElementById("sp-ansicht-h1").innerText = "Du bist noch keiner Gruppe zugeordnet, bitte trage deine Zeiten ein!";

    }
    //todo wenn du das Element löschst und einen Text überschreibst, kehrt der alte Text beim erneuten login nicht mehr zurück, besser mit Sichtbarkeiten arbeiten!
    else {
        console.log(sessionStorage.getItem("new-spieler-registration"));
        let gruppe = sessionStorageGetGruppe("gruppe");
        document.getElementById("sp-ansicht-platz").innerHTML = gruppe.platz;
        document.getElementById("sp-ansicht-uhrzeit").innerHTML = gruppe.zeit;
        document.getElementById("sp-ansicht-trainer").innerHTML = gruppe.trainer;
        let spielerListe = "";
        gruppe.spielerListe.forEach( s => spielerListe += s.toString());
        document.getElementById("sp-ansicht-mitspieler").innerHTML = spielerListe;
    }
}