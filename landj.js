const bodi = document.querySelector('.bod');
var h = 256

bodi.style.gridTemplateColumns = "repeat(16, auto)";
bodi.style.gridTemplateRows = "repeat(16, auto)";

for(let i = 0; i < h; i++)
{
    var boxy = document.createElement("div");
    boxy.classList.add('box');
    bodi.appendChild(boxy);
}

const bof = document.querySelectorAll('.box');

bof.forEach((box) => {

    // and for each one we add a 'click' listener
    box.addEventListener('click', () => {
      box.classList.toggle('yup');
      console.log('yup');
    });
  });

const bChoose = document.querySelector('.rest');

bChoose.addEventListener('click', () => {
  removeAllChildNodes(bodi);

  let choiceX = prompt("What x dimension would you like?");
  let choiceY = prompt("What y dimension would you like?");

  bodi.style.gridTemplateColumns = `repeat(${choiceY}, auto)`;
  bodi.style.gridTemplateRows = `repeat(${choiceX}, auto)`;

  let num = choiceX * choiceY;

  for(let i = 0; i < num; i++)
  {
     var boxy = document.createElement("div");
     boxy.classList.add('box');
     bodi.appendChild(boxy);
  } 

  var boffy = document.querySelectorAll('.box');

  boffy.forEach((box) => {

    // and for each one we add a 'click' listener
    box.addEventListener('click', () => {
      box.classList.toggle('yup');
      console.log('yup');
    });
  });
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}