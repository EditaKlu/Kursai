const inputLaukas = document.querySelector('input');
const rezultatas = document.querySelector('span');
const mygtukas = document.querySelector('button');


// inputLaukas.addEventListener('input', (event) => {
//   rezultatas.innerText = `Labas, ${event.target.value}`;
// })
mygtukas.addEventListener('click', () => {
  rezultatas.innerText = `Labas, ${inputLaukas.value}`;
})