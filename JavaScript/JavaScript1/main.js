// typeof 5
// patikrins kokie yra duomenys
// string - tekstas
// 5 === 5
// tikrina, ar 5 lygu 5
// 1 visada true
// 0 visada false
// duomenų tipas masyvas []
// duomenų tipas objektas {}


// function spausdink(vardas) {
//     console.log('Tavo vardas: ', vardas, 'haha');
// }
// spausdink("Aha")

// // function labas() {
// //     console.log('Hello World');
// // }

// // console.log('Hello World');
// // alert('I love JavaScript');
// // confirm('Ready to learn more?');


const skaicius = prompt('Įvesk skaičių:');
if (skaicius > 0 && skaicius < 11)
{
console.log(skaicius);
} else {
    console.log("nesamone");
}

// const UserName = prompt();
// const birthDay = "gegužės 12";
// console.log(UserName , "yra gimęs (-usi)" , birthDay);


// const darbingi = 1761463;
// const budget = 8489300000;
// const skaicius = prompt('Įveskite bazinio užmokesčio dydį:');
// console.log('Sudarytų', Math.round(((skaicius * darbingi) / budget) * 100) + '% Lietuvos biudžeto');

// galima rašyti tekstą (`kiekprocentu ${darbingi}%`) ir išskirti funcijas, o ne tekstą.

// triguba lygybė lygina pagal tipą
// dviguba lygina reikšmę, bet ne tipą
// vienguba priskiria reikšmę

// boolean conditions (salygos)
// if veikia ir be else

// const today = 'antradienis'

// if (today === 'antradienis') {
//     console.log('siandien antradienis');
// } else {
//     console.log('siandien ne antradienis');
// }

// arba galima parašyti taip
// condition ? "trueValue" : "falseValue";

// today === 'antradienis' ?
//     console.log('siandien antradienis') :
//     console.log('siandien ne antradienis');



// const sk1 = 3;
// const sk2 = 5;
// if (sk > sk2) {
//     console.log(sk1 + ' < ' + sk2);
// } else {
//     console.log(sk1 + " < " + sk2);
// }

// loginiai operatoriai:
// && reiškia AND
// !== reiškia NELYGU
// || reiškia OR
// % parodo dalybą su liekana

// const sk = prompt('Įveskite skaičių:');
// if (sk % 2 === 0) {
//     console.log('lyginis');
// } else {
//     console.log('nelyginis');
// }

// switch statement patikrina vieną ir jei atitinka
// daugiau nieko nebevykdo, baigiasi switch

// const dabar = 'antradienis';
// switch (dabar) {
//     case 'pirmadienis':
//     case 'treciadienis':
//         console.log('siandien ne savaitgalis');
//         break;
//     case 'antradienis':
//         console.log('siandien ne savaitgalis');
//         break;
//     default:
//         console.log(savaitgalis);
//         break;
// }


// namų darbai

// Sukurk variable 'legalAge', kuris būtų lygus 20. Antra variable 'clientAge' su bet kokiu skaičiumi. 
// Pasirašyk if-else, kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne.

// const legalAge = 20;
// const clientAge = 20;
// if (clientAge >= legalAge) {
//     alert ('jau legal');
// } else {
//     alert ('dar mažiukas');
// }

// Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas",
//  jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes. String ilgį
//  gali susižinoti prirašant 'length' property
//  (pvz.: "Petras".length arba su kintamu: name.length). 

// const vardas = "Unity";
// if (vardas.length > 6) {
//     console.log('ilgas vardas');
// }

// Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis nei 100, 
// arba mažesnis nei 0 - tegul išmeta "Invalid age"; jei tarp 1 ir 18 - "Child"; 
// jei tarp 19 ir 99 - "Adult".

// const age = 18;
// if (age>100 || age < 0 ) {
//     console.log('invalid age');
// } 
// else if (age<18 && age>1) {
//     console.log('baby');    
// } else {
//     console.log ('adult');
// }


// Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. 
// Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, 
// ar nei vienam.
// VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
// BMW group priklauso: BMW, Mini, Rolls-Royce.

// const car = "BMW";
// if (car === "VW" || car === "Audi" || car === "Audi" || car === 'Bentley' || 
//     car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
//     console.log('VW Group');
// } else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
//     console.log('BMW Group');
// } else {
//     console.log('Niekam');
// }