/***
 * Klasse für einen Trainer
 */
class Trainer {
    constructor(mail, passwort){
        this.mail = mail;
        this.passwort = passwort;
    }
    toString(){
        return "mail: " + this.mail + "\n" + "passwort: " + this.passwort;
    }
}
/**
 * Methode für die Deserialisierung
 */
Trainer.fromJson = function (json) {
    let obj = JSON.parse(json);
    return new Trainer(obj.mail, obj.passwort);
};
