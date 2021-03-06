/***
 * todo Methoden kommentieren, Logging einbauen
 */
function registrieren() {
    document.getElementById("tab-login").className = "nav-link";
    document.getElementById("tab-logout").className = "nav-link hidden";
    document.getElementById("tab-registrieren").className = "nav-link active";
    document.getElementById("tab-spieler-ansicht").className = "nav-link hidden";
    document.getElementById("tab-spieler-konfig").className ="nav-link hidden";
    document.getElementById("tab-trainer-ansicht").className = "nav-link hidden";
    document.getElementById("tab-trainer-konfig").className = "nav-link hidden";

    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade in active";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-konfig").className = "tab-pane fade";
    document.getElementById("content-spieler-konfig").className ="tab-pane fade fade";
    document.getElementById("content-trainer-detailansicht").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht-noch-keiner-gruppe-zugeordnet").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht-keine-gruppen-gefunden").className = "tab-pane fade";


    console.log("setzte Sichtbarkeiten für die Registrierung");
}
let trainerChecked = false;
function checkRadioButtons() {
    if (document.getElementById("register-radio-button-trainer").checked){
        trainerChecked = true;
        document.getElementById("register-trainer-code").className = "field-label";
        document.getElementById("register-trainer-code-hinweis").className = "information";
    }
    else {
        trainerChecked = false;
        document.getElementById("register-trainer-code").className = "field-label hidden";
        document.getElementById("register-trainer-code-hinweis").className = "information hidden";
    }
    console.log("TrainerChecked = " + trainerChecked);
}
function makeRegistrieren() {
    sessionStorage.clear();
    if(validate()){
        let mail = document.getElementById("register-mail").value;
        let passwort = document.getElementById("register-passwort").value;

        if (trainerChecked){
            registriereTrainer(mail, passwort);
        }
        if (!trainerChecked){
            registriereSpieler(mail, passwort);
        }
    }
}
/**
 *  todo Emil: wenn eine WriteNewTrainingsTimesException geworfen wird mache folgendes:
 *  - setze im SessionStorrage eine Info, dass die trainingszeiten zu setzen sind
 *  - wechsle zur trainer-ansicht
 */
function registriereSpieler(mail, password){
    let spieler = new Spieler(mail, password);
    postSpielerEntity(spieler);
    clearInputs();
    sessionStorageSetpieler("spieler", spieler);
    sessionStorage.setItem("new-spieler-registration", "true");
    location.hash = "#spieler-ansicht";
}
/**
 *  todo Emil: wenn eine WriteNewTrainingsTimesException geworfen wird mache folgendes:
 *  - setze im SessionStorrage eine Info, dass die trainingszeiten zu setzen sind
 *  - wechsle zur trainer-ansicht
 */
function registriereTrainer(mail, password){
    let code = document.getElementById("register-trainer-code").value;
    let trainer = new Trainer(mail, password);
    postTrainerEntity(trainer, code);
    sessionStorageSetTrainer("trainer", trainer);
    let gruppen = findAllGruppen(trainer.mail, trainer.passwort);
    sessionStorageSetAllGruppen("all-gruppen", gruppen);
    location.hash = "#trainer-ansicht";
}
function validate() {
    let nameError = document.getElementById("register-vorname-error");
    let vornameError = document.getElementById("register-nachname-error");
    let mailError = document.getElementById("register-mail-error");
    let passwortWiederolenError = document.getElementById("register-passwort-wiederholen-error");
    let errors = [nameError, vornameError, mailError, passwortWiederolenError];
    let nameErrorText = "Bitte geben Sie Ihren Nachnamen richtig ein!";
    let vornameErrorText = "Bitte geben Sie Ihren Vornamen richtig ein";
    let mailErrorText = "Bitte geben Sie Ihre E-Mailadresse richtig ein";
    let passwortWiederolenErrorText = "Die Passwörter stimmtn nicht überein!";
    let errorTexte = [nameErrorText, vornameErrorText, mailErrorText, passwortWiederolenErrorText];
    let nameRegEx = /^[a-z ,.'-]+$/i;
    let vornameRegEx = /^[a-z ,.'-]+$/i;
    let mailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let name = document.getElementById("register-nachname").value;
    let vorname = document.getElementById("register-vorname").value;
    let mail = document.getElementById("register-mail").value;
    let passwort = document.getElementById("register-passwort").value;
    let passwortWiederholen = document.getElementById("register-passwort-wiederholen").value;
    let nameValidationResult = nameRegEx.test(name);
    let vornameValidationResult = vornameRegEx.test(vorname);
    let mailValidationResult = mailRegEx.test(mail);
    let passworValidationResult = (passwort === passwortWiederholen) && passwort.toString().length > 2  && passwortWiederholen.toString().length > 2 ;
    let validationResults = [nameValidationResult, vornameValidationResult, mailValidationResult, passworValidationResult];
    let validationResult = true;
    for (let i = 0; i < validationResults.length; i++){
        if (!validationResults[i]){
            errors[i].innerText = errorTexte[i];
            validationResult = false;
        }
    }
    console.log(validationResult);
    return validationResult;
}

function clearInputs() {
    console.log("clearInputs");
    let inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}