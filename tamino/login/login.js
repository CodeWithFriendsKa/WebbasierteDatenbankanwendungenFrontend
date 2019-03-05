function login() {
    document.getElementById("tab-login").className = "nav-link active";
    document.getElementById("tab-registrieren").className = "nav-link";
    document.getElementById("tab-spieler-ansicht").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link hidden";

    document.getElementById("content-login").className = "tab-pane fade in active";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
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
            localStorage.setItem("userMail", mail);
            console.log("Eingegebene Mail:" + mail);

            let passwort = document.getElementById("login-passwort").value;
            localStorage.setItem("userPasswort", passwort);
            console.log("Eingegebenes Passwort:" + passwort);

            let gruppe = findGruppeBySpielerMail(mail,mail, passwort);

            if (gruppe === "exception"){
                document.getElementById("login-error").innerText = "Mail oder Passwort falsch!";
            }
            else {
                let mitspieleler = "";
                gruppe.spielerListe.forEach( s => mitspieleler += (s.mail + " ") );
                localStorage.setItem("spielerGruppePlatz", gruppe.platz);
                localStorage.setItem("spielerGruppeZeit", gruppe.zeit);
                localStorage.setItem("spielerGruppeSpielerListe", mitspieleler);
                localStorage.setItem("spielerGruppeTrainer", gruppe.trainer.mail);
                document.getElementById("login-error").innerText = "";
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
