function sessionStorageSetpieler(key, spieler) {
    let json = JSON.stringify(spieler);
    sessionStorage.setItem(key, json);
    console.log(
        "Store spieler in session storage." + "\n" +
        "Object: " + spieler.toString() + "\n" +
        "JSON: " + json
    );
}

function sessionStorageGetSpieler(key) {
    let spieler = Spieler.fromJson(sessionStorage.getItem(key));
    console.log(
        "get spieler from storrage." + "\n" +
        "Object: " + spieler.toString()
    );
    return spieler;
}

function sessionStorageSetTrainer(key, trainer) {
    let json = JSON.stringify(trainer);
    sessionStorage.setItem(key, json);
    console.log(
        "Store trainer in session storage." + "\n" +
        "Object: " + trainer.toString() + "\n" +
        "JSON: " + json
    );
}

function sessionStorageGetTrainer(key) {
    let trainer = Trainer.fromJson(sessionStorage.getItem(key));
    console.log(
        "get spieler from storrage." + "\n" +
        "Object: " + trainer.toString()
    );
    return trainer;
}

function sessionStorageSetGruppe(key, gruppe) {
    let json = JSON.stringify(gruppe);
    sessionStorage.setItem(key, json);
    console.log(
        "Store gruppe in session storage." + "\n" +
        "Object: " + gruppe.toString() + "\n" +
        "JSON: " + json
    );
}

function sessionStorageSetAllGruppen(key, gruppen) {
    let json = JSON.stringify(gruppen);
    sessionStorage.setItem(key, json);
    let string = "";
    gruppen.forEach(g => string += g.toString());
    console.log(
        "Store gruppen in session storage." + "\n" +
        "Object: " + string + "\n" +
        "JSON: " + json
    );
}

function sessionStorrageGetAllGruppen(key) {
    //let gruppen = [];
    let g = sessionStorage.getItem(key);
    console.log(g);
    //forEach(gruppe => gruppen.push(Gruppe.fromJson(gruppe)));
    //gruppen.forEach( g => console.log(g.toString()));

    //return gruppen;
}

function sessionStorageGetGruppe(key) {
    let gruppe = Gruppe.fromJson(sessionStorage.getItem(key));
    console.log(
        "get spieler from storrage." + "\n" +
        "Object: " + gruppe.toString()
    );
    return gruppe;
}