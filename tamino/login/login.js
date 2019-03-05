function login() {
    document.getElementById("tab-login").className = "nav-link active";
    document.getElementById("tab-registrieren").className = "nav-link";
    document.getElementById("tab-spieler-ansicht").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link hidden";

    document.getElementById("content-login").className = "tab-pane fade in active";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";

    sessionStorage.clear();
}

let loginTrainerChecked = false;

function loginCheckRadioButtons() {
    if (document.getElementById("login-trainer-radio-button").checked){
        loginTrainerChecked = true;
    }
    else loginTrainerChecked = false;
}

function makeLogin() {

    if (!checkEmpty()) {
        if (loginTrainerChecked === false) {
            let mail = document.getElementById("login-mail").value;
            sessionStorage.setItem("userMail", mail);
            console.log("Eingegebene Mail:" + mail);

            let passwort = document.getElementById("login-passwort").value;
            sessionStorage.setItem("userPasswort", passwort);
            console.log("Eingegebenes Passwort:" + passwort);

            let gruppe = findGruppeBySpielerMail(mail,mail, passwort);

            if (gruppe === "exception"){
                document.getElementById("login-error").innerText = "Mail oder Passwort falsch!";
            }
            else {
                let mitspieleler = "";
                gruppe.spielerListe.forEach( s => mitspieleler += (s.mail + " ") );
                sessionStorage.setItem("spielerGruppePlatz", gruppe.platz);
                sessionStorage.setItem("spielerGruppeZeit", gruppe.zeit);
                sessionStorage.setItem("spielerGruppeSpielerListe", mitspieleler);
                sessionStorage.setItem("spielerGruppeTrainer", gruppe.trainer.mail);
                document.getElementById("login-error").innerText = "";
                sessionStorage.setItem("newSpielerRegistration", "false");
                location.hash = "#spieler-ansicht";
            }
        }
        if (loginTrainerChecked === true) {

        }
    }
}

function checkEmpty() {
    let loginMail = document.getElementById("login-mail").value;
    let loginPasswort = document.getElementById("login-passwort").value;
    if ((loginMail === "" || loginPasswort === "")){
        document.getElementById("login-error").innerText = "Mail oder Passwort leer";
        return true;
    }
    else {
        document.getElementById("login-error").innerText = "";
        return false;
    }
}
