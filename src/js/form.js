
var nomfield = document.querySelectorAll('.alert-nom').forEach(item=>{
    mssgerror = item.querySelector('alert-nom');
    messgerror.style.display = 'block' ;
})

window.addEventListener("click",
(event) => {
    if(event.target)
    event.target.value = '';} );



function verifForm (){
    var check = document.forms["check"];


    //Uiliser une regex avec 1 majuscule puis au moins 1 minuscule
    var name = check["lenom"];
    //warn1 non reconnu ?????

    //Tests marchent si récup élt avec mail.nextElementSibling.nextElementSibling.[...]
    //Aussi avec .setAttribute(...)

    //var warn1 = document.getElementById('alert-mail').style.display;
    if(name.value === ""){
        /* var warn = document.getElementByClass('alert-nom').style.display; */
        /* alert("Nom svp"); */
        document.querySelectorAll('.alert-nom').forEach(item=>{
            mssgerror = item.querySelector('alert-nom');
            messgerror.style.display = 'block' ;
        })
        /* warn = "block"; */
        
        return false;
    }

    var firstname = check["leprenom"];
    if(firstname.value === ""){
        alert("Prénom svp");
        return false;
    }


    //warn n'est pas reconnu ?????
    var email = check["lemail"];
    //Tests marchent si récup élt avec mail.nextElementSibling.nextElementSibling.[...]
    //var warn = document.getElementById('alert-mail').style.display;
    if(email.value === ""){
        alert("Mail svp");
        //warn = "block";
        return false;
    } else{
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        //Vérifier après saisie 
        if(!re.test(email)){
            alert("Mail invalide");
            //warn = "block";
            return false;
        } else if(warn === "block" && re.test(email)){    //Vérifier après correction
            //warn = "none";
        }
    }

    return true;


}

check.addEventListener("keydown", verifForm());

/*Évent :
- appel preventDefault
- ajout évt --> addEventListener
*/
/*Texte à afficher :
- rajout frère <p> aux input
- appel textContent
*/