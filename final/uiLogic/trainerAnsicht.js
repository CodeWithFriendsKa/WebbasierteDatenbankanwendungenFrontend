/***
 * todo Methoden kommentieren, Logging einbauen
 */
function trainerAnsicht() {
    document.getElementById("boxDetail").innerHTML = "";
    document.getElementById("tab-login").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link";
    document.getElementById("tab-registrieren").className = "nav-link hidden";
    document.getElementById("tab-spieler-ansicht").className = "nav-link hidden";
    document.getElementById("tab-trainer-ansicht").className = "nav-link active";
    document.getElementById("tab-trainer-konfig").className = "nav-link";
    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade in active";
    document.getElementById("content-trainer-konfig").className = "tab-pane fade";
    document.getElementById("content-trainer-detailansicht").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht-noch-keiner-gruppe-zugeordnet").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht-keine-gruppen-gefunden").className = "tab-pane fade";
    baueTrainerAnsicht();
}

/**
 * todo Emil: wenn im SessionStorrage steht, dass die Trainingszeiten zu setzen sind mache folgendes:
 * - zeige die Konfig an
 * - ansonsten mache nichts
 */
function baueTrainerAnsicht() {
    if (sessionStorage.getItem("keine-gruppen") === "true"){
        document.getElementById("content-trainer-ansicht").className = "tab-pane fade";
        document.getElementById("content-trainer-ansicht-keine-gruppen-gefunden").className = "tab-pane fade in active";
    }
    else {
        let gruppen = sessionStorrageGetAllGruppen("all-gruppen");
        gruppen.forEach(gruppe => boxInnerHtml(gruppen.indexOf(gruppe),gruppe.platz, gruppe.zeit));
    }
}

function boxInnerHtml(index, platz, uhrzeit) {
    console.log(index);
    let box = document.getElementById("boxDetail");
    let node = "<a href=#detailansicht"+ index + ">" + platz + "</a>" + "<p>" + uhrzeit + "</p>\n" + "<hr>";
    box.innerHTML = box.innerHTML + node;
}

