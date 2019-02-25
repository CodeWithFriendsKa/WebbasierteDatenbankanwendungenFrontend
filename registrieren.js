function validationLogIn(){
    var emailLogIn= document.querySelector("#spielerEmailLogIn");
    if (emailLogIn.value == "" || emailLogIn.value.indexOf("@") <= 0){
        document.getElementById("emailErrorLogIn").innerHTML = "Bitte geben Sie Ihre Emailadresse ein";
        return false;
    }

    else{
        document.getElementById("emailErrorLogIn").innerHTML = "";
    }

    var passwortLogIn = document.querySelector("#spielerPasswortLogIn");
    if (passwortLogIn.value==""){
        document.getElementById("passwortErrorLogIn").innerHTML = "Bitte geben Sie Ihr Passwort ein";
    }
    else{
        document.getElementById("passwortErrorLogIn").innerHTML = "";
    }
}
function validationRegistrieren(){
    var name= document.querySelector("#spielerVorname");
    if (name.value == "" || !isNaN(name.value)) {
        document.getElementById("vornameError").innerHTML = "Bitte geben Sie Ihren Vornamen ein";
        return false;
    }
    else{
        document.getElementById("vornameError").innerHTML = "";
    }

    var name2= document.querySelector("#spielerNachname");
    if (name2.value == "" || !isNaN(name2.value)) {
        document.getElementById("nachnameError").innerHTML = "Bitte geben Sie Ihren Nachnamen ein";
        return false;
    }
    else{
        document.getElementById("nachnameError").innerHTML = "";
    }

    var alter= document.querySelector("#spielerAlter");
    if (alter.value == "" || isNaN(alter.value)){
        document.getElementById("alterError").innerHTML = "Bitte geben Sie Ihr Alter ein";
        return false;
    }

    else{
        document.getElementById("alterError").innerHTML = "";
    }

    var email= document.querySelector("#spielerEmail");
    if (email.value == "" || email.value.indexOf("@") <= 0){
        document.getElementById("emailError").innerHTML = "Bitte geben Sie Ihre Emailadresse ein";
        return false;
    }

    else{
        document.getElementById("emailError").innerHTML = "";
    }

    var passwort = document.querySelector("#spielerPasswort");
    if (passwort.value==""){
        document.getElementById("passwortError").innerHTML = "Bitte geben Sie Ihr Passwort ein";
    }
    else{
        document.getElementById("passwortError").innerHTML = "";
    }

    var passwortWdh = document.querySelector("#spielerPasswortWdh");
    if (passwort.value != passwortWdh.value){
        document.getElementById("passwortWdhError").innerHTML = "Ihre Passwörter stimmen nicht überein";
    }
    else{
        document.getElementById("passwortWdhError").innerHTML = "";
    }
}