/***
 * Klasse für eine Gruppe
 */
class Gruppe {
    constructor(platz, zeit, spielerListe, trainer){
        this.platz = platz;
        this.zeit = zeit;
        this.spielerListe = spielerListe;
        this.trainer = trainer;
    }
    toString(){
        let spielerListe = "";
        this.spielerListe.forEach( s => spielerListe += s.toString());
        return "platz: " + this.platz + "\n" + "zeit: " + this.zeit + "\n" + "spilerListe: " + spielerListe + "\n" + "trainer: " + this.trainer;
    }
}
/**
 * Methode für die Serialisierung
 */
Gruppe.fromJson = function (json) {
    let obj = JSON.parse(json);
    let spielerliste = obj.spielerListe.map(function (spieler) {
        return new Spieler(spieler.mail, spieler.passwort);
    });
    return new Gruppe(obj.platz, obj.zeit, spielerliste, new Trainer(obj.trainer.mail, obj.trainer.passwort));
};