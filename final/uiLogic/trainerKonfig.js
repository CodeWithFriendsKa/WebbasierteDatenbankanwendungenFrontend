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
    var table = document.getElementById("trainerKonfigKalender");
    var tr = table.insertRow(0);
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");
    var th6 = document.createElement("th");
    var th7 = document.createElement("th");

    th1.innerHTML = "";
    th2.innerHTML = "Montag";
    th3.innerHTML = "Dienstag";
    th4.innerHTML = "Mittwoch";
    th5.innerHTML = "Donnerstag";
    th6.innerHTML = "Freitag";
    th7.innerHTML = "Samstag";

    tr.appendChild( th1 );
    tr.appendChild( th2 );
    tr.appendChild( th3 );
    tr.appendChild( th4 );
    tr.appendChild( th5 );
    tr.appendChild( th6 );
    tr.appendChild( th7 );
}
    //disabled macht checkbox vergraut