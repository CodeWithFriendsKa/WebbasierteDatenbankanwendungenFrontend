let alleZeiten = getPossibleTrainingTimes("max1.mustermann@dhbw.de", "12345678");
console.log(alleZeiten);
console.log(alleZeiten[0]);

let dummyOben = 24;
let dummyUnten = 0;

for(let i = 0; i<7; i++){
    for(let j =0; j<24; j++){

        if(alleZeiten[j]=1){
            if(dummyUnten>j){
                dummyUnten = j;
            }
            break;
        }
    }
}

for(let i=7; i>0; i--){
    for(let j=24; j>0; j--){

        if(alleZeiten[j]=1){
            if(dummyOben<j){
                dummyUnten = j;
            }
            break;
        }
    }



    var reiheNr = dummyUnten;
    var spalteNr = 0;
    let idNummer  = 0;

    let addRow = (e) => {
        reiheNr++;
        idNummer = 7*reiheNr + spalteNr;
        let table = document.getElementById("trainerKonfigKalender");
        let tr = table.insertRow( reiheNr );

        let td1 = document.createElement("td");
        td1.innerHTML = '<input id=zeit name="name" placeholder="'+(reiheNr-1)+':00 Uhr - '+reiheNr+':00 Uhr" type="text" />';
        tr.appendChild( td1 );

        for(var i=0;i<7;i++){
            spalteNr++;
            let td1 = document.createElement("td");
            if(alleZeiten[idNummer] = 1) td1.innerHTML = '<input id=idNummer name="name" type="checkbox" />';
            else td1.innerHTML = '<input id=idNummer name="name" type="checkbox" DISABLED/>'
            tr.appendChild( td1 );
        }

        spalteNr=0

        if(reiheNr>dummyOben){
            return;
        }
    };

    var times = [];

    let checkQuestion = (e) => {
        times = [];
        for(var i=0;i<168;i++){
            console.log(idNummer);
            if(document.getElementById(idNummer).checked === true){
                window.alert("juhu");
                console.log("Yes");
                times.push(1);}
            else{console.log("No");
                times.push(0);}

        }
        console.log(times);
    } ;

    for(let j=0;j<24;j++){
        addRow();
    }

    //ToDo: Lese alle gesetzten Checkboxen aus, speichern in Array
    //ToDo: Spieler-Entity: TrainingsArray + Anzahl gewünschter Trainings hinzufügen
    //putSpielerEntity(spieler, userMail, userPasswort);
}