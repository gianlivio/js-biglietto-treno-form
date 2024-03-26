// RACCOLTA DEI DATI
let userKm = prompt("km:"); // string | null
console.log(isNaN(userKm));

userKm = parseInt(userKm); // number
console.log(userKm);

let userAge = prompt("età:"); // string | null
console.log(isNaN(userAge));
userAge = parseInt(userAge); // number
console.log(userAge);

// ESECUZIONE LOGICA
const basePrice = userKm * 0.21; // number
console.log(basePrice);

let discount = 0;

if (userAge < 18) {
  discount = 20;
} else if (userAge > 65) {
  discount = 40;
}

console.log("discount in %", discount);

const totalDiscount = (basePrice * discount) / 100; // number
console.log("discount in euro", totalDiscount);


// OUTPUT
const finalPrice = basePrice - totalDiscount; // number
console.log("prezzo finale", finalPrice.toFixed(2));


