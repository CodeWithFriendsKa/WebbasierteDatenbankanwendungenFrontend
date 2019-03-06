/***
 * todo Methoden kommentieren, Logging einbauen
 */

function registrieren() {
    document.getElementById("tab-login").className = "nav-link";
    document.getElementById("tab-logout").className = "nav-link hidden";
    document.getElementById("tab-registrieren").className = "nav-link active";
    document.getElementById("tab-spieler-ansicht").className = "nav-link hidden";
    document.getElementById("tab-trainer-ansicht").className = "nav-link hidden";


    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade in active";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade";
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
}

function makeRegistrieren() {
    switch (trainerChecked) {
        case false : registriereSpieler();
        case true : registriereTrainer();
    }
}

function registriereSpieler(){
    console.log("validation result; " + validate());

   if (validate()){
        let mail = document.getElementById("register-mail").value;
        let passwort = document.getElementById("register-passwort").value;
        postSpielerEntity(new Spieler(mail, passwort));
        sessionStorage.setItem("userMail", mail);
        sessionStorage.setItem("userPasswort", passwort);
        sessionStorage.setItem("newSpielerRegistration", "true");
        location.hash = "#spieler-ansicht";
   }
}
function registriereTrainer(){
    if (validate()){
        let mail = document.getElementById("register-mail").value;
        let passwort = document.getElementById("register-passwort").value;
        let code = document.getElementById("register-trainer-code").value;
        postTrainerEntity(new Trainer(mail, passwort), code);
        sessionStorage.setItem("userMail", mail);
        sessionStorage.setItem("userPasswort", passwort);
        location.hash = "#trainer-ansicht";
    }
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
    let geburtsdatum = document.getElementById("register-geburtstag").value;
    let mail = document.getElementById("register-mail").value;
    let passwort = document.getElementById("register-passwort").value;
    let passwortWiederholen = document.getElementById("register-passwort-wiederholen").value;

    let nameValidationResult = nameRegEx.test(name);
    let vornameValidationResult = vornameRegEx.test(vorname);
    let mailValidationResult = mailRegEx.test(mail);
    let passworValidationResult = (passwort === passwortWiederholen) && passwort.toString().length > 2  && passwortWiederholen.toString().length > 2 ;

    let validationResults = [nameValidationResult, vornameValidationResult, mailValidationResult, passworValidationResult];

    console.log("vorname"+ vorname);
    console.log("name"+ name);
    console.log("geburtsdatum"+ geburtsdatum);
    console.log("mail"+ mail);
    console.log("passwort"+ passwort);
    console.log("passwort wiederholen"+ passwortWiederholen);

    console.log("vr name" + nameValidationResult);
    console.log("vr vorname" + vornameValidationResult);
    console.log("vr mail"+ mailValidationResult);
    console.log("vr pwd:" + passworValidationResult);

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