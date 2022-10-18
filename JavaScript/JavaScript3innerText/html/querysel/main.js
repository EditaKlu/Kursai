'use strict';
const result = document.querySelector('.result');
// const resultByClass = document.gerElementsByClassName('result');

const wrapper = document.querySelector('#wrapper');
// const resultById = document.getElementById('result');

const content = document.querySelector('.content');

const savaitgalis = ['sestadienis', 'sekmadienis']
// nustatom, kad rezultatas bus "string" tipo
let rezultatas = '';


// i - nuo kelinto masyvo elemento iteruosime per jį. per masyvo visą ilgį. i++ reiskia didinam per vieną.
for(let i = 0; i < savaitgalis.length; i++) {
    rezultatas = rezultatas + ' ' + savaitgalis[i] + i;
}

result.innerText = rezultatas;

wrapper.innerText = 'Šiandien Ketvirtadienis';

content.innerHTML = '<h1>Ar mums pavyko?</h1><span>dar truputis teksto</span>';

content.style.color = 'red';

content.classList.add('red'); //prideda clase i html.