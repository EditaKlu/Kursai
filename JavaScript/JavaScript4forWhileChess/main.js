// FOR ciklas

const varduMasyvas = ['Jevgenij', 'Edita', 'Rūta', 'Andrius', 'Julita', 'Ana', 'Darius', 'Dovilė', 'Edita', 'Eglė'];
for (let i = 0; i < varduMasyvas.length; i++) {
    console.log (`${varduMasyvas [i]} yra CA studentas/studente`)
}

// WHILE ciklas

console.log('---888---');
let n = 0;

while (n < varduMasyvas.length) {

  console.log(`${varduMasyvas[n]} yra CA studentas/studentė`)

  n++;

}

// forEach ciklas
console.log('---888---');
varduMasyvas.forEach( (vardas, i) => 
    console.log(` ${i} - ${vardas} yra CA studentas/studentė`)
 )