function trainerkonfig() {
    document.getElementById("tab-login").className = "nav-link hidden";
    document.getElementById("tab-logout").className = "nav-link";
    document.getElementById("tab-registrieren").className = "nav-link hidden";
    document.getElementById("tab-spieler-ansicht").className = "nav-link hidden";
    document.getElementById("tab-trainer-ansicht").className = "nav-link";
    document.getElementById("tab-trainer-konfig").className = "nav-link active";

    document.getElementById("content-login").className = "tab-pane fade";
    document.getElementById("content-registrieren").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-ansicht").className = "tab-pane fade";
    document.getElementById("content-trainer-konfig").className = "tab-pane fade in active";
    document.getElementById("content-trainer-detailansicht").className = "tab-pane fade";
    document.getElementById("content-spieler-ansicht-noch-keiner-gruppe-zugeordnet").className = "tab-pane fade";

    trainerKonfigKalender();
}

function trainerKonfigKalender() {
    var reiheNr = 0;
    var spalteNr = 0;

    let addRow = (e) => {
        reiheNr++;
        let table = document.getElementById("trainerKonfigKalender");
        let tr = table.insertRow( reiheNr );

        let td1 = document.createElement("td");
        td1.innerHTML = '<input id=zeit name="name" placeholder="'+(reiheNr-1)+':00 Uhr - '+reiheNr+':00 Uhr" type="text" />';
        tr.appendChild( td1 );

        for(var i=0;i<7;i++){
            spalteNr++;
            let td1 = document.createElement("td");
            td1.innerHTML = '<input id=reihe'+reiheNr+'MitSpalte'+spalteNr+' name="name" type="checkbox" />';
            tr.appendChild( td1 );
        }
        spalteNr=0
    };

    var times = [];

    let checkQuestion = (e) => {
        times = [];
        for(var i=1;i<8;i++){
            for(var j=1;j<25;j++){
                var temp = "reihe" + j + "MitSpalte" + i + "";
                console.log(temp);
                if(document.getElementById(temp).checked === true){
                    window.alert("juhu");
                    console.log("Yes");
                    times.push(1);}
                else{console.log("No");
                    times.push(0);}
            }
        }
        console.log(times);
    } ;

    for(var i=0;i<24;i++){
        addRow();
    }

    let testButton = document.getElementById("testButton");
    testButton.addEventListener( "click", checkQuestion);
}
    //disabled macht checkbox vergraut