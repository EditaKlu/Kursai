const firstNumber = document.querySelector('#first');
const secondNumber = document.querySelector('#second');
const sum = document.querySelector('#sum');
const sub = document.querySelector('#sub');
const div = document.querySelector('#div');
const mul = document.querySelector('#mul');
const mod = document.querySelector('#mod');
const result = document.querySelector('#result');
const clear = document.querySelector('#clear');


sum.addEventListener('click', () => {
    displayResult('sum', +firstNumber.value, +secondNumber.value )
})

sub.addEventListener('click', () => {
    result.innerText = +firstNumber.value - +secondNumber.value
})

div.addEventListener('click', () => {
    result.innerText = +firstNumber.value / +secondNumber.value
})

mul.addEventListener('click', () => {
    result.innerText = +firstNumber.value * +secondNumber.value
})

mod.addEventListener('click', () => {
   result.innerText = +firstNumber.value % +secondNumber.value
})



//mod.addEventListener('click', getModule);
//function getModule() {
//    result.innerText = +firstNumber.value % +secondNumber.value
//}

// const getModule = () => {
//     result.innerText = +firstNumber.value % +secondNumber.value
// }
// mod.addEventListener('click', getModule);

clear.addEventListener('click', () => {
    result.innerText = '';
    firstNumber.value = '';
    secondNumber.value = '';
})

function doMath(value, n1, n2) {
    switch(value){
        case 'sum':
            return n1 + n2;
        case 'sub':
            return n1 - n2;
        case 'div':
            return n1 / n2;
        case 'mul':
            return n1 + n2;
        case 'sum':
            return n1 * n2;
        case 'mod':
            return n1 % n2;
    }
}

function displayResult(value, n1, n2){
    result.innerText = 'rezultatas:' + doMath(value, n1, n2)
}