/**
 * Beschreibung des Adapters:
 * Dieser Adapter stellt eine Schnittstele zwischen der single page application und dem backend her.
 * Für jeden REST-Endpoint im Backendserver gibt es eine eindeutige Funktion hier im Adapter.
 * Das bendeutet, mann muss sich nun keine Gedanken über den HTTP Aufruf zum Backend machen, sondern nur die geeignete Methode hier im Adapter wählen.
 */

/**
 * Diese Methode gibt ein Array von Gruppen zurück
 * Es werden 2 Parameter benötigt:
 * 1) Mail des Anfragenden
 * 2) Passwort des Anfragenden
 * Hinweis zur Authorisierung: Alle Gruppen können nur Trainer holen
 * Trainer haben Adminrechte
 */
function findAllGruppen(userMail, userPasswort) {
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/gruppen';
    Http.open("GET", url, false);
    Http.setRequestHeader("Authorization", "Basic " + btoa(userMail+ ":"+ userPasswort));
    Http.send();

    if (Http.status == 200){
        let gruppenListe = JSON.parse(Http.responseText);
        console.log("dsdffwf" + JSON.stringify(gruppenListe[0]));
        console.log(
            "BackendAdapter Methode findAllGruppen wurde aufgerufen mit:" + "\n"
            + " userMail:" + userMail + "\n"
            + " userPasswort: " + userPasswort + "\n"
            + " HTTP-Response: " + Http.responseText + "\n"
            + " Deserialisiertes Objekt:"
        );
        gruppenListe.forEach(gruppe => console.log(gruppe));
        let liste = [];
        gruppenListe.forEach(gruppe => liste.push(Gruppe.fromJson(JSON.stringify(gruppe))));
        liste.forEach(l => console.log("test test tst"+ l.toString()));
        return liste;
    }
    else if (Http.status == 403){
        throw new AuthorizationException("Du bist nicht berechtigt alle Gruppen zu holen");
    }
    else if (Http.status == 404){
        throw new GruppeNotFoundException("Keine Gruppen gefunden");
    }
    else throw new BadRequestException("clientseitiger Fehler");
}
/**
 * Diese Methode gibt eine Gruppe anhand der Mailadresse eines Spielers als Objekt zurück
 * Es werden 3 Parameter benötigt:
 * 1) Mail des Spielers, dessen Gruppe gefunden werden soll
 * 2) Mail des Anfragenden
 * 3) Passwort des Anfragenden
 * Hinweis zur Authorisierung: Jeder Spieler kann seine Gruppe anhand seiner Mail holen, nicht aber für andere Spieler
 * Trainer haben Adminrechte
 */
function findGruppeBySpielerMail(spielerMail, userMail, userPasswort){
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/gruppen/' + spielerMail;
    console.log(url);
    Http.open("GET", url, false);
    Http.setRequestHeader("Authorization", "Basic " + btoa(userMail+ ":"+ userPasswort));
    Http.send();
    
    if (Http.status == 200) {
        var gruppe = Gruppe.fromJson(Http.responseText);
        console.log(
            "BackendAdapter Methode findGruppeBySpielerMail wurde aufgerufen mit:" + "\n"
            + " spielerMail:" + spielerMail + "\n"
            + " userMail:" + userMail + "\n"
            + " userPasswort: " + userPasswort + "\n"
            + " HTTP-Response: " + Http.responseText + "\n"
            + " Deserialisiertes Objekt:"
        );
        console.log(gruppe);
        return gruppe;
    }
    else if (Http.status == 404){
        throw new GruppeNotFoundException("gruppe not found");
    }
    else if (Http.status == 403){
        throw new AuthorizationException("Du bist nicht berechtigt diese Gruppe zu holen");
    }
    else throw new BadRequestException("clientseitiger Fehler");
}
/**
 * Diese Methode gibt einen Spieler anhand seiner Mailadresse als Objekt zurück
 * Es werden 3 Parameter benötigt:
 * 1) Mail des Spielers, der gefunden werden soll
 * 2) Mail des Anfragenden
 * 3) Passwort des Anfragenden
 * Hinweis zur Authorisierung: Jeder Spieler kann sich selbst anhand seiner Mail finden, nicht aber andere Spieler
 * Trainer haben Adminrechte
 */
function getSpielerByMail(spielerMail, userMail, userPasswort) {
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/spieler/' + spielerMail;
    console.log(url);
    Http.open("GET", url);
    Http.setRequestHeader("Authorization", "Basic " + btoa(userMail+ ":"+ userPasswort));
    Http.send();
    Http.onreadystatechange=(e)=>{
        var spieler = JSON.parse(Http.responseText);
        console.log(
            "BackendAdapter Methode getSpielerByMail wurde aufgerufen mit:" + "\n"
            + " spielerMail:" + spielerMail + "\n"
            + " userMail:" + userMail + "\n"
            + " userPasswort: " + userPasswort + "\n"
            + " HTTP-Response: " + Http.responseText + "\n"
            + " Deserialisiertes Objekt:"
        );
        console.log(spieler);
        return JSON.parse(Http.responseText);
    }
}

/**
 * Diese Methode erlaubt das Anlegen eines neuen Sielers
 * Es wird 1 Parameter benötigt:
 * 1) Objektinstanz eines Spielers
 * Hinweis zur Authorisierung: Jeder darf sich als Spieler anmelden
 */
function postSpielerEntity(spieler) {
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/spieler';
    console.log(url);
    Http.open("POST", url, false);
    Http.setRequestHeader('Content-type','application/json');
    Http.send(JSON.stringify(spieler));

    if (Http.status == 200){
        console.log(
            "BackendAdapter Methode postSpieler wurde aufgerufen" + "\n"
            + " Serialisiertes Objekt:"
        );
        console.log(spieler);
    }
    else if (Http.status == 400){

    }
}


/**
 * Diese Methode erlaubt es, die Trainingsdaten zu einem vorhandnenen Spieler zu übergeben
 */

function putSpielerEntity(spieler, userMail, userPasswort) {
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/spieler/';
    console.log(url);
    Http.open("PUT", url, false);
    Http.setRequestHeader("Authorization", "Basic " + btoa(userMail+ ":"+ userPasswort));
    Http.setRequestHeader('Content-type','application/json');
    Http.send(JSON.stringify(spieler));

    if (Http.status == 200){
        console.log(
            "BackendAdapter Methode putSpieler wurde aufgerufen" + "\n"
            + " geädnertes Objekt:"
        );
        console.log(spieler);
    }
    else {
        return "exception";
    }
}
/**
 * Diese Methode gibt einen Trainer anhand seiner Mailadresse als Objekt zurück
 * Es werden 3 Parameter benötigt:
 *  * 1) Mail des Trainers, der gefunden werden soll
 * 2) Mail des Anfragenden
 * 3) Passwort des Anfragenden
 * Hinweis zur Authorisierung: Nur Trainer können diese Methode nutzen
 * Trainer haben Adminrechte
 */
function getTrainerByMail(trainerMail, userMail, userPasswort) {
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/trainer/' + trainerMail;
    console.log(url);
    Http.open("GET", url);
    Http.setRequestHeader("Authorization", "Basic " + btoa(userMail+ ":"+ userPasswort));
    Http.send();
    Http.onreadystatechange=(e)=>{
        var trainer = JSON.parse(Http.responseText);
        console.log(
            "BackendAdapter Methode getTrainerByMail wurde aufgerufen mit:" + "\n"
            + " trainerMail:" + trainerMail + "\n"
            + " userMail:" + userMail + "\n"
            + " userPasswort: " + userPasswort + "\n"
            + " HTTP-Response: " + Http.responseText + "\n"
            + " Deserialisiertes Objekt:"
        );
        console.log(trainer);
        return JSON.parse(Http.responseText);
    }
}
/**
 * Diese Methode erlaubt das Anlegen eines neuen Trainers
 * Es wird 2 Parameter benötigt:
 * 1) Objektinstanz eines Trainers
 * 2) Verifizierungscode für einen Trainer
 * Hinweis zur Authorisierung: Nur mit Code ist eine Anmeldung möglich
 */
function postTrainerEntity(trainer, code) {
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/trainer/' + code;
    console.log(url);
    Http.open("POST", url, false);
    Http.setRequestHeader('Content-type','application/json');
    Http.send(JSON.stringify(trainer));

    if (Http.status == 200){
        console.log(
            "BackendAdapter Methode postSpieler wurde aufgerufen" + "\n"
            + " Serialisiertes Objekt:"
        );
        console.log(trainer);
    }
    else {
        return "exception";
    }
}

/**
 * Diese Methode erlaubt es, die Trainingsdaten zu einem vorhandnenen Trainer zu übergeben
 */
function putTrainerEntity(trainer, userMail, userPasswort) {
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/trainer/';
    console.log(url);
    Http.open("PUT", url, false);
    Http.setRequestHeader("Authorization", "Basic " + btoa(userMail+ ":"+ userPasswort));
    Http.setRequestHeader('Content-type','application/json');
    Http.send(JSON.stringify(trainer));

    if (Http.status == 200){
        console.log(
            "BackendAdapter Methode putSpieler wurde aufgerufen" + "\n"
            + " geädnertes Objekt:"
        );
        console.log(trainer);
    }
    else {
        return "exception";
    }
}
/**
 * Diese Methode erlaubt es, die verfügbaren Trainingszeiten einzusehen
 */
function getPossibleTrainingTimes(userMail, userPasswort) {
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/possibletimes';
    console.log(url);
    Http.open("GET", url, false);
    Http.setRequestHeader("Authorization", "Basic " + btoa(userMail+ ":"+ userPasswort));
    Http.send();

    if (Http.status == 200){
        var times = JSON.parse(Http.responseText);
        console.log(
            "BackendAdapter Methode getPossibleTrainingTimes wurde aufgerufen" + "\n" +
            "Mögliche Trainingszeiten: " + times
        );
        return times;
    }
    else {
        return "exception";
    }
}
/**
 * Diese Methode erlaubt es den algo zu starten
 */
function startAlgo(userMail, userPasswort) {
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/startalgo';
    console.log(url);
    Http.open("POST", url, false);
    Http.setRequestHeader("Authorization", "Basic " + btoa(userMail+ ":"+ userPasswort));
    Http.send();

    if (Http.status == 200){
        console.log("BackendAdapter Methode startAlgo wurde aufgerufen");
    }
    else {
        return "exception";
    }
}
/**
 * Diese Methode erlaubt es den algo zu starten
 */
function spielerTragtEureZeitenEin(userMail, userPasswort) {
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/writetimes';
    console.log(url);
    Http.open("POST", url, false);
    Http.setRequestHeader("Authorization", "Basic " + btoa(userMail+ ":"+ userPasswort));
    Http.send();

    if (Http.status == 200){
        console.log("BackendAdapter Methode tragt eure Zeiten ein wurde aufgerufen");
    }
    else {
        return "exception";
    }
}