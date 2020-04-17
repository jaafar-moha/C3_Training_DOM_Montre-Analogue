// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

setInterval(demarrerLaMontre, 1000);

function demarrerLaMontre() {
    let day = new Date();
    let sec = day.getSeconds() / 60;
    let min = day.getMinutes() / 60;
    let hour = day.getHours() / 12; 
    

    AIGUILLEHR.style.transform = "rotate(" + (hour * 360) + "deg)";
    AIGUILLEMIN.style.transform = "rotate(" + (min * 360) + "deg)";
    AIGUILLESEC.style.transform = "rotate(" + (sec * 360) + "deg)";
    

}
demarrerLaMontre();
