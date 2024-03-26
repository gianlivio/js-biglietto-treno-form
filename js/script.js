// // RACCOLTA DEI DATI
// let userKm = prompt("km:"); // string | null
// console.log(isNaN(userKm));

// userKm = parseInt(userKm); // number
// console.log(userKm);

// let userAge = prompt("età:"); // string | null
// console.log(isNaN(userAge));
// userAge = parseInt(userAge); // number
// console.log(userAge);

// // ESECUZIONE LOGICA
// const basePrice = userKm * 0.21; // number
// console.log(basePrice);

// let discount = 0;

// if (userAge < 18) {
//   discount = 20;
// } else if (userAge > 65) {
//   discount = 40;
// }

// console.log("discount in %", discount);

// const totalDiscount = (basePrice * discount) / 100; // number
// console.log("discount in euro", totalDiscount);


// // OUTPUT
// const finalPrice = basePrice - totalDiscount; // number
// console.log("prezzo finale", finalPrice.toFixed(2));

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button'); // Preleva il bottone
    const risultatoDiv = document.getElementById('risultato'); // Preleva il div dove compare il risultato

    button.addEventListener('click', function() {
        const km = document.getElementById('km').value; // Ottiene il valore dei km
        const eta = document.getElementById('eta').value; // Ottiene l'età

        let prezzoBase = km * 0.21;
        let sconto = 0;

        if (eta < 18) {
            sconto = prezzoBase * 0.2;
        } else if (eta > 65) {
            sconto = prezzoBase * 0.4;
        }

        const prezzoFinale = prezzoBase - sconto;

        risultatoDiv.innerHTML = `Totale: ${prezzoFinale.toFixed(2)} €`;
        risultatoDiv.style.display = 'block'; // Mostra il div del risultato
    });
});