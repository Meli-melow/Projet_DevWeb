function typeNom() {
    window.addEventListener("click", (event) => {
        nom1 = event.target;
            switch(nom1.value){
                case(nom1.defaultValue):
                    nom1.value = '';
                    break;
                case("Renseignez Nom svp"):
                    nom1.value = '';
                    nom1.style.color = "black";
                    break;
            }
        
    })
    return true;
}


function typePrenom() {
    window.addEventListener("click", (event) => {
        prenom1 = event.target;
            switch(prenom1.value){
                case(prenom1.defaultValue):
                    prenom1.value = '';
                    break;
                case("Renseignez Prenom svp"):
                    prenom1.value = '';
                    prenom1.style.color = "black";
                    break;
            }
    })
    return true;
}


function typeEmail() {
    window.addEventListener("click", (event) => {
        email1 = event.target;
            switch(email1.value){
                case(email1.defaultValue):
                    email1.value = '';
                    break;
                case("Renseignez Email svp"):
                    email1.value = '';
                    email1.style.color = "black";
                    break;
            }
    })
    return true;
}


function typeSujet() {
    window.addEventListener("click", (event) => {
        sujet1 = event.target;
            switch(sujet1.value){
                case(sujet1.defaultValue):
                    sujet1.value = '';
                    break;
                case("Renseignez Prenom svp"):
                    sujet1.value = '';
                    sujet1.style.color = "black";
                    break;
            }
    })
    return true;
}

/*PB CLICK SUBMIT :
- recharge la page après la vérification des champs ;
- ça se produit depuis qu'ont été ajoutées d'autres vérications après celles du Nom
*/


//Le bouton submit disparaît après avoir cliqué 1 type d'input + validé
function validForm() {
    var contact = document.forms["check"]["ladate"].value;
    var nom = document.forms["check"]["lenom"];
    var prenom = document.forms["check"]["leprenom"];
    var email = document.forms["check"]["lemail"];
    var genre = document.forms["check"]["fgenre"].checked || 
                document.forms["check"]["hgenre"].checked ||
                document.forms["check"]["xgenre"].checked;
    var naissance = document.forms["check"]["lanaissance"].value;
    var fonction = document.forms["check"]["metier"].value;
    var sujet = document.forms["check"]["lesujet"];
    var message = document.forms["check"]["lemessage"];
    var isValid = true;

    //Accepter apostrophes ou tirets
    var regexText = /^[[:upper:]][[:lower:]]*$/;
    var regexMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    //Les messages d'alertes ne sont plus alignés
    //Certains apparaissent alors que leur input associé ne vérifie pas le if

    //Trouver le format de contact (la date)
    /* const now = new Date(); */
    if (contact == "" /* || contact != now */) {
        document.querySelector('.alert-date').style.display = "inline-block";
        isValid = false;
    } else {
        document.querySelector('.alert-date').style.display = "none";
    }

    //Cette vérification marche mais les indications de corrections restent cachées
    //Le <p> sous l'entrée du nom dans le html
    if (!regexText.test(nom)) {
        document.querySelector('.alert-date').style.display = "inline-block";
        nom.value = "Renseignez Nom svp";
        nom.style.color = "red";
        isValid = false;
    } else {
        document.querySelector('.alert-nom').style.display = "none";
    }

	//NON RÉALISÉ APRÈS EXÉCUTION
    if (!regexText.test(prenom)) {
        document.querySelector('.alert-prenom').style.display = "inline-block";
        nom.value = "Renseignez Prenom svp";
        nom.style.color = "red";
        isValid = false;
    } else {
        document.querySelector('.alert-prenom').style.display = "none";
    }

	//OK sauf la regex
    if (!regexMail.test(email)) {
        document.querySelector('.alert-mail').style.display = "inline-block";
        email.value = "Renseignez Email svp";
        email.style.color = "red";
        isValid = false;
    } else {
        document.querySelector('.alert-mail').style.display = "none";
    }

	//RAPPEL : AJUSTER LE HTML POUR CHOIX UNIQUE
    if (!genre) {
        document.querySelector('.alert-genre').style.display = "inline-block";
        isValid = false;
    } else {
        document.querySelector('.alert-genre').style.display = "none";
    }

    //Trouver le format de birth (la date)
    if (naissance == "") {
        document.querySelector('.alert-birth').style.display = "inline-block";
        isValid = false;
    } else {
        document.querySelector('.alert-birth').style.display = "none";
    }

	//Reste à cacher sa valeur lors de l'arrivée sur la page
    if (fonction == "") {
        document.querySelector('.alert-metier').style.display = "inline-block";
        isValid = false;
    } else {
        document.querySelector('.alert-metier').style.display = "none";
    }

    if (!regexText.test(sujet)) {
        document.querySelector('.alert-sujet').style.display = "inline-block";
        sujet.value = "Renseignez Sujet svp";
        sujet.style.color = "red";
        isValid = false;
    } else {
        document.querySelector('.alert-sujet').style.display = "none";
    }

	//AUCUN ÉVENT, POURTANT VALUE DISPARAÎT APRÈS CLIC (parfois)
    if (message == "") {
        document.querySelector('.alert-message').style.display = "inline-block";
        isValid = false;
    } else {
        document.querySelector('.alert-message').style.display = "none";
    }

    return isValid;
}
