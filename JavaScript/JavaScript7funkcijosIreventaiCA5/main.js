function myFunction() {
    return 2;
}

console.log(myFunction());

function multiplication(n1, n2) {
    return n1 * n2;
}

function substraction(n1, n2) {
    return n1 - n2;
}

console.log(substraction(multiplication(2, 2), 1));

// Sukurkite funkciją, į kurią paduosite vardą ir ji pa'alert'ins jį

// function myName(name) {
//     alert (name);
// }
// myName("Unity");

// sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5

function random() {
    return Math.floor(Math.random() * 5) + 1;
}
console.log(random());

// Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių

function symbolSum(name, surname) {
    return name.length + surname.length;
}
console.log(symbolSum('aaaa', 'bbbb'));

// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę 
// (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 
// Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]),
//  o funkcija paims pagal indeksą atitinkamą raidę.

function NumberToLetter(number) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'];
    return alphabet[number];

}
console.log(NumberToLetter(0));

// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). 
// Operator gali būti "sum", "sub", "div", "multi" 
// (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. 
// Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija 
// (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.

function counting(n1, n2, operator) {
    switch (operator) {
        case "sum":
            return n1 + n2;
            break;
        case "sub":
            return n1 - n2;
            break;
        case "div":
            return n1 / n2;
            break;
        case "multi":
            return n1 * n2;
            break;
    }

}
console.log(counting(6, 3, "multi"));

// Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 
// (įskaitant), kita - gautą skaičių pakelia kvadratu. 
// Iškviesk abi funkcijas vienoje eilutėje 
// (pvz. squareNum(generateRandomNumber()) => 1...100).

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
function squareNum(number) {
    return number ** 2;
}

console.log(squareNum(randomNumber()));

// PIRMA funkcija yra NUMBER antros funkcijos

// pakelti kvadratu buvo galima ir su funkcija:
// return Math.pow(number, 2);

// /////////////////////////////////////////////////

// EVENTAI

document.querySelector('button').addEventListener('click', () => {
    alert('Unity');
    document.body.innerHTML += '<p>Peace among Worlds.</p>';
});


// Sukurk programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas. 
// Paspaudus ant mygtuko, skaičius padidėja (+1).

document.body.innerHTML += '<h1></h1><button class="butt">Paspausk</button>'
let counter = 0;
document.querySelector(".butt").addEventListener('click', () => {
    counter++;
    document.querySelector('h1').innerText = counter;
})
