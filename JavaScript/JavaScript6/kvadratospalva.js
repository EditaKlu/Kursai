const changeColor = document.getElementsByClassName('kvadratas')[0];
const myButton = document.querySelector('.myButton');
const myButtonTwo = document.querySelector('.myButtonTwo');
let status = true;

changeColor.addEventListener('mouseover', () => 
  myFunction('firebrick')
);
changeColor.addEventListener('mouseout', () => 
myFunction('black')
);
changeColor.addEventListener('dblclick', () => 
myFunction('green')
);


// myButton.addEventListener('click', () => 
// myFunction('none')
// );
// myButtonTwo.addEventListener('click', () => 
// myFunction('block')
// );
myButton.addEventListener('click', () => {
  status = !status; //pakeicia kintamojo reiksme is neigiamo i teigiama ir atv.
  console.log(status);
  status ? changeColor.style.display = "block" : 
  changeColor.style.display = "none"
//arba
  // changeColor.style.display = status ? "block" : "none";
})

function myFunction(color) {
  changeColor.style.backgroundColor = color;
}