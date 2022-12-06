document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();
    console.log(event);
    const result = document.querySelector('input[name=name]').value;
    document.querySelector('h1').textContent = 'Tavo amzius: '+ result;      //i h1 iraso inputo reiksme
    // alert(result);                                          //alertina inputo reiksme
}
