function trainerkonfig() {
    document.getElementById("tab-login").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link";
    document.getElementById("tab-registrieren").className = "nav-link hidden";
    document.getElementById("tab-spieler-ansicht").className = "nav-link hidden";
    document.getElementById("tab-trainer-ansicht").className = "nav-link";
    document.getElementById("tab-trainer-konfig").className = "nav-link active";

    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-konfig").className = "tab-pane fade in active";
    document.getElementById("content-trainer-detailansicht").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht-noch-keiner-gruppe-zugeordnet").className = "tab-pane fade";

}

function trainerKonfigValidation(){
    var trainingsfeld= document.querySelector("#trainerKonfigTrainingsfeld");
    if (trainingsfeld.value == "" || isNaN(trainingsfeld.value)){
        document.getElementById("trainerKonfigTrainingsfeld-error").innerHTML = "Bitte geben Sie die Feldnummern ein";
        return false;
    }

    else{
        document.getElementById("trainerKonfigTrainingsfeld-error").innerHTML = "";
    }
    var trainingszeiten= document.querySelector("#trainerKonfigTrainingszeiten");
    if (trainingszeiten.value == "" || isNaN(trainingszeiten.value)){
        document.getElementById("trainerKonfigTrainingszeiten-error").innerHTML = "Bitte geben Sie die Trainingszeiten ein";
        return false;
    }

    else{
        document.getElementById("trainerKonfigTrainingszeiten-error").innerHTML = "";
    }
    var trainerName= document.querySelector("#trainerKonfigTrainer");
    if (trainerName.value == "" || !isNaN(trainerName.value)) {
        document.getElementById("trainerKonfigTrainer-error").innerHTML = "Bitte geben Sie die Namen aller Trainer ein";
        return false;
    }
    else{
        document.getElementById("trainerKonfigTrainer-error").innerHTML = "";
    }
}
function trainerKonfigSpeichern() {
    //trainerKonfigValidation();
    //muss noch fertig ausprogrammiert werden
    confirm("Wollen Sie die Einträge speichern?");
}
function trainerKonfigAlgorithmus(){

}