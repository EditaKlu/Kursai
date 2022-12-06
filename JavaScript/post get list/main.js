import { fetchData, postData, deleteData, updateData } from './src/crud.js';

const textInput = document.querySelector("#task");
const descriptionInput = document.querySelector("#description");
const dateInput = document.querySelector("#date");
let editMode = false;

function displayData(tasks) {
    const taskContainer = document.querySelector(".tasks");
    let taskDiv = "";
    tasks.forEach(task => {
        taskDiv += `<div id="${task.id}" class="newTask">
        <h3>${task.text}</h3>
        <h4>${task.date}</h4>
        <p>${task.description}</p>
        <span class="options">
            <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            <i  class="fas fa-trash-alt"></i>
        </span>
        </div>`
    });
    taskContainer.innerHTML = taskDiv;

    const deleteIcons = document.querySelectorAll(".fa-trash-alt");
    deleteIcons.forEach(icon => {
        icon.onclick = (event) => {
            event.preventDefault();
            const id = event.target.parentElement.parentElement.id; //paima ikonos tevini elementa span, tada tevini task div, tada jo ID
            deleteData(id).then(item => displayData(item)) //siunciam istrinymo id i backa, tik gavus atsakyma is backo nes pas mus async funkcija su pazadu, THEN display kas liko
        }
    })
    const updateIcons = document.querySelectorAll(".fa-edit");
    updateIcons.forEach(icon => {
        icon.onclick = (event) => {
            event.preventDefault();
            editMode = true;
            const task = event.target.parentElement.parentElement;
            textInput.value = task.children[0].textContent; //su input laukais naudojam value, su visais kitais textcontent, innerhtml
            dateInput.value = task.children[1].textContent;
            descriptionInput.value = task.children[2].textContent;
            const modalId = document.querySelector(".modal-title");
            modalId.innerHTML = `Redaguoti užduotį <span>${task.id}</span>`
        }
    })
}

const formEl = document.querySelector("form");
formEl.onsubmit = async (event) => {
    event.preventDefault();
    if (textInput.value === "") {
        const errorDiv = document.querySelector(".error");
        errorDiv.textContent = "Užduoties laukas privalomas"
    } else {
        if (!editMode) {
            const data = {
                text: textInput.value,
                date: dateInput.value,
                description: descriptionInput.value,
                id: Math.floor(Math.random() * 1000 + 1),
            }
            postData(data).then(item => displayData(item))
        } else {
            editMode = false;
            const id = document.querySelector(".modal-title > span").textContent;
            const updatedData = {
                text: textInput.value,
                date: dateInput.value,
                description: descriptionInput.value,
                id: +id,
            }
            updateData(updatedData).then(item => displayData(item))
        }
        const modalEl = document.getElementById('exampleModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
        // modalEl.addEventListener('hide.bs.modal', () => console.log('closed'))
    }
}


(() => { fetchData().then(data => displayData(data)) })(); //funkcija pati save iskviecia


        const modalEl = document.getElementById('exampleModal');
        modalEl.addEventListener('hide.bs.modal', () => {
            const modalId = document.querySelector(".modal-title");
            modalId.innerHTML = `Pridėti užduotį`
        })
        // const modal = bootstrap.Modal.getInstance(modalEl);
        // modal.hide();
        // modalEl.addEventListener('hide.bs.modal', () => {
        //    console.log("hello");// modal.dispose();
        // });

//tas pats, kas butu aprasyta taip:
// function init() {
//     fetchData().then((data) => {
//         if (data) {
//             displayData(data);
//         }
//     })
// }


// init();