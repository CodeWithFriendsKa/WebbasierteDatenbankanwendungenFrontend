// Updates dynamic content based on the fragment identifier.
function navigate(){

    // Get a reference to the "content" div.
    // Isolate the fragment identifier using substr.
    // This gets rid of the "#" character.
    var fragmentId = location.hash.substr(1);

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
}

// If no fragment identifier is provided,
if(!location.hash) {
    // default to #home
    location.hash = "#home";
}

// Navigate once to the initial hash value.
navigate();

// Navigate whenever the fragment identifier value changes.
window.addEventListener("hashchange", navigate)

function changeFragmentId(){
    location.hash = "#spieler-ansicht";
}