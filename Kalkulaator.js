function Izracunaj() {
    const broj1 = parseFloat(document.getElementById("Broj1").value);
    const broj2 = parseFloat(document.getElementById("Broj2").value);
    const operacija = document.getElementById("operacija").value;
    let rezultat;

    if (isNaN(broj1) || isNaN(broj2)) {
        rezultat = "Unesite oba broja!";
    } else {
        if (operacija === "plus") rezultat = broj1 + broj2;
        else if (operacija === "minus") rezultat = broj1 - broj2;
        else if (operacija === "Puta") rezultat = broj1 * broj2;
        else if (operacija === "Djeljenje") {
            if (broj2 === 0) {
                rezultat = "Dijeljenje s nulom nije moguće!";
            } else {
                rezultat = broj1 / broj2;
            }
        }
    }

    document.getElementById("Rezultat").textContent = "Rezultat: " + rezultat;
}
document.addEventListener('DOMContentLoaded', function() {
  
    const buttonEl = document.querySelector('#changeButtonsStyle');
    buttonEl.addEventListener('click', function(e) {
   
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
    button.style.border = 'white';
    button.style.background = 'black';
    button.style.color = '#fff';
    button.style.padding = '10px 15px';
    });
    });
    });