/***
 * Klasse für einen Spieler
 */
class Spieler {
    constructor(mail, passwort){
        this.mail = mail;
        this.passwort = passwort;
    }
    toString(){
        return "mail: " + this.mail + "\n" + "passwort: " + this.passwort;
    }
}
/**
 * Methode für die Serialisierung
 */
Spieler.fromJson = function (json) {
    let obj = JSON.parse(json);
    return new Spieler(obj.mail, obj.passwort)
};
