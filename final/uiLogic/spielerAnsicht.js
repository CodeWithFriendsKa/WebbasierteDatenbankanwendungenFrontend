/***
 * todo Methoden kommentieren, Logging einbauen
 */

function spielerAnsicht() {
    document.getElementById("tab-login").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link";
    document.getElementById("tab-registrieren").className = "nav-link hidden";
    document.getElementById("tab-spieler-ansicht").className = "nav-link active";
    document.getElementById("tab-spieler-konfig").className ="nav-link";
    document.getElementById("tab-trainer-ansicht").className = "nav-link hidden";
    document.getElementById("tab-trainer-konfig").className = "nav-link hidden";

    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade in active";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-konfig").className = "tab-pane fade";
    document.getElementById("content-spieler-konfig").className ="tab-pane fade";
    document.getElementById("content-trainer-detailansicht").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht-noch-keiner-gruppe-zugeordnet").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht-keine-gruppen-gefunden").className = "tab-pane fade";

    baueSpielerAnsicht();
}
function baueSpielerAnsicht() {
    if (sessionStorage.getItem("new-spieler-registration") === "true" || sessionStorage.getItem("gruppe not found") === "true"){
        document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
        document.getElementById("content-spieler-ansicht-noch-keiner-gruppe-zugeordnet").className = "tab-pane fade in active";
    }
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