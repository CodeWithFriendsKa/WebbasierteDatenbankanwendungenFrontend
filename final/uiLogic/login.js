/***
 * todo: Logging einbauen
 */
/***
 * Wenn die location.hash auf #login gestellt ist, soll folgendes passieren:
 * Setzte das Navigationsfeld login auf sichtbar und  active
 * Setzte das Navigationsfeld registrieren auf sichtbar
 * Setzte das Navigationsfeld spieler ansicht auf unsichtbar
 * Setzte das Navigationsfeld logout auf unsichtbar
 *
 * Setzte den content login auf active
 * Setzte den content registrieren auf unsichtbar
 * Setzte den content spieler-ansicht auf unsichtbar
 */
function login() {
    document.getElementById("tab-login").className = "nav-link active";
    document.getElementById("tab-logout").className = "nav-link hidden";
    document.getElementById("tab-registrieren").className = "nav-link";
    document.getElementById("tab-spieler-ansicht").className = "nav-link hidden";
    document.getElementById("tab-trainer-ansicht").className = "nav-link hidden";

    document.getElementById("content-login").className = "tab-pane fade in active";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade";

    sessionStorage.clear();
    console.log("setze Sichtbarkeiten für den login");
}

/***
 *Standartmäßig ist der Spieler beim Login ausgewählt
 * Wird die Methode loginCheckRadioButtons ausgerufen, so wird überprüft, welcher radio button ausgewählt ist
 * Bei Trainer -> loginTrainerChecked = true
 * Bei Spieler -> loginSpielerChecked = false
 */
let loginTrainerChecked = false;
function loginCheckRadioButtons() {
    if (document.getElementById("login-trainer-radio-button").checked){
        loginTrainerChecked = true;
    }
    else {
        loginTrainerChecked = false;
    }
    console.log("loginTrainerChecked = " + loginTrainerChecked);
}

/***
 * Diese Methode wird aufgerufen, wenn der button "Login" gedrückt wird
 * Zunächst wird die Methode checkEmpty aufgerufen
 * Wenn die Felder nicht leer sind mache folgendes:
 * Ist der radio button für den Spieler ausgewählt:
 *      - speichere die login Daten in variablen und speichere sie im sessionStorrage
 *      - versuche die Spielergruppe über den BackendAdapter zu holen
 *      - wenn der call erfolgreich ist speichere die gurppeninformationen im sessionStorrage
 *          - speichere im sessionStorrage, dass keine neue registrierung vorliegt
 *          - ändere den location.hash auf #spieler-ansicht
 *      - wenn nicht gebe eine Fehlermeldung aus
 * Ist der radio button für den Trainer ausgewählt:
 *      - speichere die login Daten in variablen und speichere sie im sessionStorrage
 *      - versuche alle Gruppen über den Backendadapter zu holen
 *      - wenn der call erfolgreich ist speichere die gruppeninformationen im sessionStorrage
 *           - ändere den location.hash auf #trainer-ansicht
 *      -wenn nicht gebe eine Fehlermeldung aus
 */
function makeLogin() {
    if (!checkEmpty()) {
        if (loginTrainerChecked === false) {
            let spieler = new Spieler(
                document.getElementById("login-mail").value,
                document.getElementById("login-passwort").value
            );
            console.log(
                "Eingegebene Login Daten:" + "\n" +
                "Mail: " + spieler.mail + "\n" +
                "Passwort: " + spieler.passwort
            );
            sessionStorageSetpieler("spieler", spieler);
            console.log(spieler.mail);

            let gruppe = findGruppeBySpielerMail(spieler.mail, spieler.mail, spieler.passwort);

            if (gruppe === "exception"){
                document.getElementById("login-error").innerText = "Mail oder Passwort falsch!";
            }
            else if (gruppe === "gruppe not found"){
                document.getElementById("login-error").innerText = "";
                sessionStorage.setItem("gruppe-not-found", "true");
                location.hash = "#spieler-ansicht";
            }
            else {
                sessionStorageSetGruppe("gruppe", gruppe);
                document.getElementById("login-error").innerText = "";
                sessionStorage.setItem("new-spieler-registration", "false");
                location.hash = "#spieler-ansicht";
            }
        }
        if (loginTrainerChecked === true) {
            let mail = document.getElementById("login-mail").value;
            sessionStorage.setItem("userMail", mail);
            console.log("Eingegebene Mail:" + mail);

            let passwort = document.getElementById("login-passwort").value;
            sessionStorage.setItem("userPasswort", passwort);
            console.log("Eingegebenes Passwort:" + passwort);

            let gruppen = findAllGruppen(mail, passwort);

            if (gruppen === "exception"){
                document.getElementById("login-error").innerText = "Mail oder Passwort falsch!";
            }
            else {
                location.hash = "#trainer-ansicht";
            }
        }
    }
}

/***
 *Diese Methode prüft, ob das mail und passwortfeld leer sind
 * Wenn leer -> return true
 * Wenn nicht -> return false
 */
function checkEmpty() {
    let loginMail = document.getElementById("login-mail").value;
    let loginPasswort = document.getElementById("login-passwort").value;
    if ((loginMail === "" || loginPasswort === "")){
        document.getElementById("login-error").innerText = "Mail oder Passwort leer";
        console.log("Mail oder Passwort leer");
        return true;
    }
    else {
        document.getElementById("login-error").innerText = "";
        console.log("Mail oder Passwort befüllt");
        return false;
    }
}
