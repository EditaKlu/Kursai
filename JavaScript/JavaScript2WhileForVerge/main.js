// neiašku kodėl, papasakos kitose temose. Neleidžia naudoti tam tikrų funkcijų, jei gaunasi
// nelogiška nesąmonė ar kažkas tokio
'use strict'; 

let variable = 20;

// jei nori let reiskme keisti, reikia ja ir perrasyti, negalima is naujo parasyti
// let variable = 30; 

// negalima kaip cont pavadinimo pradėti skaičiu ar pan.

// įhardkodinti kažką :
// pirma komanda įhardkodinta, nes ji absoliuti ir nekintanti (statinė). Antra - priklausoma
// nuo kitų komandų (dinaminė). kad atskirt įhardkodintas, cont pavadinimai rašomi iš didziuju
// atskiriant apat. bruksneliais.
const MY_NUMBER = 20; 
const calcnumb = MY_NUMBER * 20;

// Jei labai didelis skaičius, gale rašom n
const bigInteger = 12312312312312312312313123123n;

let age = null;
// null - tuščia vertė. kintamasis jau yra, bet niekam
// nepriskirtas;

// confirm  - išmeta langą, kur atsakai ok arba cancel. 
// jei parašysi Number("250") tai išmes skaičių.
// šauktukas iš esmės - neiginys. pvz. !== - nelygu

// i dažniausiai reiškia index


// WHILE LOOP

// let index = 0;
// while (index < 5) {
//     alert ( index );
//     index++;
// }

// ++i prideda ir iškart gražina reikšmė su pridėjimu
// i++ prideda, bet grazina dar pries tai buvusia (originalia) reiksme.
// let index = 0;
// do {
//     alert ( index );
//     index++;
// } while (index < 5);

// // FOR- BEGIN, CONDITION, STEP
// for (let index = 0; index < 5; index++ ) {
//     alert ( index );
// }

// // output even numbers in the loop

// for (let i = 1; i < 11; i+=2) {
//     console.log (`index yra ${index}`);
// }

const verge = prompt('Ar vergė gera?');
if (verge === "gera" || verge === "nuostabi" || verge === "puiki" || verge === "šaunuolė" || verge === "taip") {
    alert ('good girl <3');
} else {
    alert ("ateini čia");
}
