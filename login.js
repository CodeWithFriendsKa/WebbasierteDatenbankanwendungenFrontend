function validationLogIn(){
    var email= document.querySelector("#spielerEmailLogIn");
    if (email.value == "" || email.value.indexOf("@") <= 0){
        document.getElementById("emailErrorLogIn").innerHTML = "Bitte geben Sie Ihre Emailadresse ein";
        return false;
    }

    else{
        document.getElementById("emailErrorLogIn").innerHTML = "";
    }

    var passwort = document.querySelector("#spielerPasswortLogIn");
    if (passwort.value==""){
        document.getElementById("passwortErrorLogIn").innerHTML = "Bitte geben Sie Ihr Passwort ein";
    }
    else{
        document.getElementById("passwortErrorLogIn").innerHTML = "";
    }
}
