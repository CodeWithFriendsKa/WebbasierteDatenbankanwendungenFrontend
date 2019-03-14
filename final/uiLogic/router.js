/***
 * Diese Datei beinhaltet die für das routing notwendigen Mehtoden
 * Die Navigation innerhalb der single page application erfolgt mittels des location.hashs.
 * Dabei handelt es sich um einen Wert der aus einem hashtag und einem beliebigen Namen zusammengesetz ist ( #test ).
 * Dieser Wert ist immer eindeutig und kann als ganz normaler href = "#test" in einen Anker (<a>) eingebaut werden.
 * Wenn mann dann aud den Anker klickt ändert sich der location.hash auf den wert #test.
 * Die folgende Methode holt sich den aktuellen location.hash.
 * 1) lautet der location.hash login, so wird die "baue den login"- Methode ausgerufen, welche sagt, welche Elemente sichtbar sind und welche nicht
 * 2) lautet der location.hash registrieren, so wird die "baue die registrierung"- Methode ausgerufen, welche sagt, welche Elemente sichtbar sind und welche nicht
 * 3) lautet der location.hash spieler-ansicht, so wird die "baue die spieler-ansicht"- Methode ausgerufen, welche sagt, welche Elemente sichtbar sind und welche nicht
 * 4) lautet der location.hash logout, so wird die "baue den logout"- Methode ausgerufen, welche sagt, welche Elemente sichtbar sind und welche nicht
 */
function navigate(){

    // Get a reference to the "content" div.
    // Isolate the fragment identifier using substr.
    // This gets rid of the "#" character.
    var fragmentId = location.hash.substr(1);
    console.log("location.hash wurde geändert auf: " + fragmentId);

    if (fragmentId === "login"){
        login();
    }
    if (fragmentId === "registrieren"){
        registrieren();
    }
    if (fragmentId === "spieler-ansicht"){
        spielerAnsicht();
    }
    if (fragmentId === "logout"){
        login();
    }
    if (fragmentId === "trainer-ansicht"){
        trainerAnsicht();
    }
    if (fragmentId === "gruppe-detail-ansicht"){
        gruppeDetailAnsicht();
    }
    if (fragmentId === "trainer-konfig"){
        trainerkonfig();
    }
}

/***
 * Rufe die zuvor definierte router methode auf
 */
navigate();

/***
 * Rufe bei einem location.hash Wechsel die router methode auf
 */
window.addEventListener("hashchange", navigate);