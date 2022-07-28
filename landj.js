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

var bof = document.querySelectorAll('.box');

function myFunc() {
  this.classList.add('yup');
  console.log('yup');
}

let mousedown = 0;
window.onmousedown = () => {
  ++mousedown;
  if(mousedown) {
    bof.forEach((box) => {
      box.addEventListener('mousedown', () => {
        box.classList.add('yup');
      });
      box.addEventListener('mouseover', myFunc);
    });
    console.log('mouse is down')
  }
}

window.onmouseup = () => {  
  --mousedown;
  bof.forEach((box) => {
    box.removeEventListener('mouseover', myFunc);
  });
  console.log('mouse is up');
}
  /*  
    bof.forEach((box) => {
      box.addEventListener('mouseover', () => {
        box.classList.add('yup');
        console.log('yup');
      });
    });
   */


const bChoose = document.querySelector('.rest');

bChoose.addEventListener('click', () => {
  let choiceX = prompt("What x dimension would you like?");
  let choiceY = prompt("What y dimension would you like?");

  if(choiceX !== choiceY)
  {
    alert("not valid");
    return;
  }

  removeAllChildNodes(bodi);

  bodi.style.gridTemplateColumns = `repeat(${choiceY}, auto)`;
  bodi.style.gridTemplateRows = `repeat(${choiceX}, auto)`;

  let num = choiceX * choiceY;

  for(let i = 0; i < num; i++)
  {
     var boxy = document.createElement("div");
     boxy.classList.add('box');
     bodi.appendChild(boxy);
  } 

  bof = document.querySelectorAll('.box');

  let mousedown = 0;
  window.onmousedown = () => {
  ++mousedown;
  if(mousedown) {
    bof.forEach((box) => {
      box.addEventListener('mousedown', () => {
        box.classList.add('yup');
      });
      box.addEventListener('mouseover', myFunc);
      });
      console.log('mouse is down')
    }
  }

  window.onmouseup = () => {  
    --mousedown;
    bof.forEach((box) => {
     box.removeEventListener('mouseover', myFunc);
    });
    console.log('mouse is up');
  }
});

const erB = document.querySelector('.eraseB');

  erB.addEventListener('click', () => {
   bof.forEach((box) => {
      box.classList.remove('yup');
      console.log('yup');
   });
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}