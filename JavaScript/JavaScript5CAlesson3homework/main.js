// SWITCH

// const car = "Mini";

// switch (car) {
//     case "VW":
//     case "Audi":
//     case "Bentley":
//         console.log("VW Group");
//         break;
//     case "BMW":
//     case "Mini":
//     case "RR":
//         console.log("BMW Group");
// }

let weekDay = new Date().getDay();

switch (weekDay) {
    case 0:
        weekDay = "pirmadienis";
        break;
    case 1:
        weekDay = "antradienis";
        break;
    case 2:
        weekDay = "treciadienis";
        break;
    case 3:
        weekDay = "ketvirtadienis";
        break;
}
console.log(weekDay);

// TERNARY - ONELINER

// const vardas = "Unit";
//     vardas.length < 5 ? console.log("Short") : console.log("long");
//     // arba
//     console.log(vardas.length < 5 ? "Short Name" : "Long Name");

// CIKLAI

// for(let i = 0; i<10; i++){
//     console.log('Petras')
// }

// const vardas = 'Petras'
// const kartai = 10;
// for (let i = 0; i < kartai; i++) {
//     console.log(vardas);
// }


// SKAIČIUOJA 10 KARTŲ PETRAS
// const vardas = 'Petras'
// const kartai = 10;
// for (let i = 0; i < kartai; i++) {
//     console.log(`${i}. ${vardas}`);
// }


// SKAIČIUOJA NUO 10 IKI 1
// for (let i = 10; i !==0; i--) {
//     console.log(i);
// }

// WHILE


// miau tris kartus
// let i = 0;

// while (i < 3) {
//     console.log("Miau");
//     i++;
// }

// 

// let combo = '';
// let times = 1;
// const vard = 'miau'
// do {
//     combo += vard;
//     times--;
// } while (times > 0);
// console.log(combo);
