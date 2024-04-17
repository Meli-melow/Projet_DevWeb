function typeNom()
{
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

function typePrenom()
{
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

function typeText()
{
    window.addEventListener("click", (event) => 
    {
        saisie = event.target;
        if(saisie.value === saisie.defaultValue)
        {
            saisie.value = '';
        }
        else
        {   
            corrEntries = ["Renseignez Nom svp","Renseignez Prenom svp","Renseignez Email svp"];
            if(corrEntries.includes(saisie.value))
            {
                saisie.value = '';
                saisie.style.color = "black";
            }
        }
    }
    )
    return true;
}

//SANS EFFET : le formulaire est envoyé
function textCheck()
{
    //Renvoie un tab avec tous les HTML éléments dans la classe .box
    form = document.querySelectorAll(".box");
    var regexText = /^[[:upper:]][[:lower:]]*$/;
    //Faire le test pour tout ces éléments HTML
    for(elm in form)
    {
        if (!regexText.test(elm))
        {   
            elm.setProperty("color","red");
            if(elm.id === "nom")
            {
                document.querySelector('.alert-nom').style.display = "inline-block";
                elm.value = "Renseignez Nom svp";
            }
            else if(elm.id === "prenom")
            {
                document.querySelector('.alert-prenom').style.display = "inline-block";
                elm.value = "Renseignez Prenom svp";
            }
            return false;
        }
    }
    return true;
}

//REGEX ?????
//Source : https://html.form.guide/best-practices/validate-email-address-using-javascript/
function mailCheck(mail)
{
    var regexMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (!regexMail.test(mail))
    {
        document.querySelector('.alert-mail').style.display = "inline-block";
        mail.value = "Renseignez Email svp";
        mail.style.color = "red";
        return false;
    }
    return true;
}

function validForm()
{
    var nom = document.forms["check"]["lenom"];
    var prenom = document.forms["check"]["leprenom"];
    var email = document.forms["check"]["lemail"];

    var isValid = true;
    


    //Accepter apostrophes ou tirets

    isValid = textCheck() && mailCheck(email);

    return isValid;
    
}