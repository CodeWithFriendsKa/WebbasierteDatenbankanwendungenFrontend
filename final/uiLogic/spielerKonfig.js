
function spielerKonfig() {

    document.getElementById("tab-login").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link";
    document.getElementById("tab-registrieren").className = "nav-link hidden";
    document.getElementById("tab-spieler-ansicht").className = "nav-link";
    document.getElementById("tab-spieler-konfig").className ="nav-link active";
    document.getElementById("tab-trainer-ansicht").className = "nav-link hidden";
    document.getElementById("tab-trainer-konfig").className = "nav-link hidden";

    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-konfig").className = "tab-pane fade";
    document.getElementById("content-spieler-konfig").className ="tab-pane fade in active";
    document.getElementById("content-trainer-detailansicht").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht-noch-keiner-gruppe-zugeordnet").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht-keine-gruppen-gefunden").className = "tab-pane fade";
    setSpielerTrainingData();

}

/**
 * todo Emil: Zeiten auslesen und mit BackendAdapter an Backend schicken
 */
function setSpielerTrainingData() {

    //console.log(document.getElementById("tabelle").length);
    for(var i= 0;document.getElementById("tabelle").getElementsByTagName("tr").length-1;i++){
        document.getElementById("tabelle").deleteRow(1);
    }

    var reiheNr = 0;
    var spalteNr = 0;

    let addRow = (e) => {
        reiheNr++;
        let table = document.getElementById("tabelle");
        let tr = table.insertRow( reiheNr );

        let td1 = document.createElement("td");
        td1.innerHTML = '<input id=zeit name="name" placeholder="'+(reiheNr-1)+':00 Uhr - '+reiheNr+':00 Uhr" type="text" />';
        tr.appendChild( td1 );

        for(var i=0;i<7;i++){
            spalteNr++;
            let td1 = document.createElement("td");
            var counter = 0;
            counter = (spalteNr-1)*24+reiheNr;
            console.log(counter);
            td1.innerHTML = '<input id='+counter+' name="name" type="checkbox" />';
            tr.appendChild( td1 );
        }
        spalteNr=0
    };

    var times = [];

    let checkQuestion = (e) => {
        times = [];
        for(var i=1;i<169;i++){
            let temp = i;

            if(document.getElementById(temp).checked == true){
                console.log("Yes");
                times.push(1);}
            else{console.log("No");
                times.push(0);}
        }
        console.log(times);
    } ;

    let uncheck = (e) => {
        let spieler1 = sessionStorageGetSpieler("spieler");

        console.log(spieler1.mail, spieler1.passwort);
        let times2 = getPossibleTrainingTimes(spieler1.mail, spieler1.passwort);
        console.log(times2);
        for(var i=1;i<169;i++){
            if(times2[i-1] == 0){
            document.getElementById(i).hidden = true;
            }
            else{

            }
        }
    }

    for(var i=0;i<24;i++){
        addRow();
    }



    let test2Button = document.getElementById("test2Button");
    test2Button.addEventListener( "click", checkQuestion);

    let uncheckButton = document.getElementById("uncheckButton");
    uncheckButton.addEventListener( "click", uncheck);
}
/**
 *  todo Emil: methode schreiben, die die Inhalte der Tabelle dynamisch ausließt und ein int[] erzeugt
 */
function readSpielerKonfig() {
    let zeiten = {};
    //...
    return zeiten;
}

