/***
 * todo Methoden kommentieren, Logging einbauen
 */
function gruppeDetailAnsicht(index) {
    document.getElementById("tab-login").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link";
    document.getElementById("tab-registrieren").className = "nav-link hidden";
    document.getElementById("tab-spieler-ansicht").className = "nav-link hidden";
    document.getElementById("tab-trainer-ansicht").className = "nav-link active";
    document.getElementById("tab-trainer-konfig").className = "nav-link";

    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-konfig").className = "tab-pane fade";
    document.getElementById("content-trainer-detailansicht").className = "tab-pane fade in active";
    document.getElementById("content-spieler-ansicht-noch-keiner-gruppe-zugeordnet").className = "tab-pane fade";

    makeDetailansicht(index);
}

function makeDetailansicht(index) {
    let gruppen = sessionStorrageGetAllGruppen("all-gruppen");
    let gruppe = gruppen[index];

    document.getElementById("trainer-detail-ansicht-platz").innerHTML = gruppe.platz;
    document.getElementById("trainer-detail-ansicht-uhrzeit").innerHTML = gruppe.zeit;
    document.getElementById("trainer-detail-ansicht-trainer").innerHTML = gruppe.trainer;
    document.getElementById("trainer-detail-ansicht-mitspieler").innerHTML = gruppe.spielerListe;
}