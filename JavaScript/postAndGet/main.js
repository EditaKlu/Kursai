import {fetchData, postData} from './src/crud.js';

const dataEl = document.querySelector('#data');
const formEl = document.querySelector('#formElem');

formEl.onsubmit = async (event) => {
    event.preventDefault();
    const idValue = formEl.querySelector('#id').value;
    const nameValue = formEl.querySelector('#name').value;
    const birthdayValue = formEl.querySelector('#age').value;
    const data = {
        id: idValue,
        name: nameValue,
        birthday: birthdayValue,
    }

    postData(data).then((item) => {displayData(item)});
}

function displayData(data) {
    let tableRow = '';
    data.forEach(item => {
        const today = new Date();
        const age =  today.getFullYear() - new Date(item.birthday).getFullYear()
        tableRow += `<tr><td>${item.id}</td><td>${item.name}</td><td>${age}</td><td>${new Date(item.birthday).toLocaleDateString()}</td></tr>`
    })
    const tableBody = `<table class="table">
    <thead><tr>
    <th scope="col">id</th><th scope="col">Vardas</th>
    </tr></thead>
    ${tableRow}
    </table>`

  dataEl.innerHTML = tableBody;
}

function init() {
    fetchData().then((data) => {
        if (data) {
            displayData(data);
        }
    })
}


init();