const textAreaElement = document.getElementById('tekstas'); 
const formElement = document.querySelector('form');
const posts = document.getElementById('posts');
let zinutes = [];

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    posts.innerHTML += `<p>${textAreaElement.value}</p>`;
    zinutes.push(textAreaElement.value);
    localStorage.setItem('manoZinutes', JSON.stringify(zinutes));
});

(() => {
    const data = JSON.parse(localStorage.getItem('manoZinutes'))
    if(data.length > 0) {
        zinutes.push(...data);
        data.forEach(element => posts.innerHTML += `<p>${element}</p>`);
    }
    
})();