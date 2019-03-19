function baueSpieleransicht(platz, uhrzeit, trainer, mitspieler) {
    document.getElementById("platzId").innerHTML = platz;
    document.getElementById("uhrzeitId").innerHTML = uhrzeit;
    document.getElementById("trainerId").innerHTML = trainer;
    document.getElementById("mitspielerId").innerHTML = mitspieler;
}

let p = "test";
let u = "Mo 12:00-14:00 Uhr";
let t = "tim1.trainer";
let m = ["max1.mustermann", "max1.mustermann"];

baueSpieleransicht(p,u,t,m);