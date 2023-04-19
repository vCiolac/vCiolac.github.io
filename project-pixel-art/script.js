// Desafio 2 e 3
const sec = document.querySelector('#color-palette');
const palette = () => {
  for (let i = 0; i < 4; i += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const box = document.createElement('button');
    if (i === 0) {
      box.innerHTML = '#000000';
      box.style.backgroundColor = 'black';
      box.classList.add('selected');
    } else {
      box.innerHTML = `#${randomColor}`;
      box.style.backgroundColor = `#${randomColor}`;
    } box.classList.add('color');
    sec.appendChild(box);
  }
};

palette();

// Desafio 4
const buttonTradeColor = () => {
  const buttonRandom = document.createElement('button');
  buttonRandom.innerHTML = 'Cores aleatórias';
  buttonRandom.id = 'button-random-color';
  setInterval(1000);
  sec.appendChild(buttonRandom);
};

buttonTradeColor();

// Peguei o exemplo do codigo 'Google Hack' do Noel -->
const rdColor = () => Math.floor(Math.random() * 255);
const buttonRandom = document.querySelector('#button-random-color');

setInterval(() => {
  buttonRandom.style.backgroundColor = `rgb(${rdColor()}, ${rdColor()}, ${rdColor()})`;
  buttonRandom.style.transition = '1s linear all';
}, 1000);

const randomButton = () => {
  const colorClass = document.getElementsByClassName('color');
  for (let i = 0; i < 4; i += 1) {
    if (i === 0) {
      colorClass[0].innerHTML = '#000000';
      colorClass[0].style.backgroundColor = 'black';
    } else {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      colorClass[i].style.backgroundColor = `#${randomColor}`;
      colorClass[i].innerHTML = `#${randomColor}`;
    }
  }
};

buttonRandom.addEventListener('click', randomButton);
// Desafio 5
const save = () => {
  const colorClass = document.getElementsByClassName('color');
  const local = [];
  for (let i = 0; i < colorClass.length; i += 1) {
    const indice = colorClass[i];
    local.push({
      innerHTML: indice.innerHTML,
      backgroundColor: indice.style.backgroundColor,
    });
  } localStorage.setItem('colorPalette', JSON.stringify(local));
};

const load = () => {
  const localSave = JSON.parse(localStorage.getItem('colorPalette'));
  const colorClass = document.getElementsByClassName('color');
  for (let i = 0; i < colorClass.length; i += 1) {
    const indice = colorClass[i];
    indice.innerHTML = localSave[i].innerHTML;
    indice.style.backgroundColor = localSave[i].backgroundColor;
  }
};
buttonRandom.addEventListener('click', save);

// Desafio 6

const boxes = (param) => {
  const secP = document.querySelector('#pixel-board');
  secP.style.display = 'grid';
  secP.style.gridTemplateColumns = `repeat(${Math.sqrt(param)}, 1fr)`;
  for (let i = 0; i < param; i += 1) {
    const box = document.createElement('div');
    box.classList.add('pixel');
    box.style.backgroundColor = 'white';
    secP.appendChild(box);
  }
};
boxes(25);

// Desafio 8

const buttonSelect = (event) => {
  const selected = document.getElementsByClassName('color');
  for (const el of selected) {
    el.classList.remove('selected');
  }
  event.target.classList.add('selected');
};

const buttonSelec = document.getElementsByTagName('button');
for (const div of buttonSelec) {
  div.addEventListener('click', buttonSelect);
}

// Desafio 13
const secD = document.querySelector('#color-palette').nextElementSibling;
const inputSize = () => {
  const inputBox = document.createElement('input');
  inputBox.placeholder = 'Tamanho dos pixels';
  inputBox.id = 'board-size';
  inputBox.style.width = `${135}px`;
  inputBox.type = 'number';
  inputBox.min = 1;
  secD.appendChild(inputBox);
};
inputSize();

const inputButton = () => {
  const inputBox = document.createElement('button');
  inputBox.innerHTML = 'VQV';
  inputBox.id = 'generate-board';
  secD.appendChild(inputBox);
};
inputButton();

// Desafio 15

const saveBoard = () => {
  const pixelDiv = document.getElementsByTagName('div');
  const local = [];
  local.push({
    boardSize: pixelDiv.length,
  });
  localStorage.setItem('boardSize', JSON.stringify(local));
};

const loadBoard = () => {
  const localSave = JSON.parse(localStorage.getItem('boardSize'));
  const boardSize = localSave[0].boardSize;
  addBoxes(boardSize)
  const newBoxes = document.getElementsByClassName('pixel');
  for (let i = 0; i < newBoxes.length; i += 1) {
    newBoxes[i].addEventListener('click', paintColor);
  }
};

// Desafio 13.2

const vqvButton = document.getElementById('generate-board');
const removeBoxes = () => {
  const secP = document.querySelector('#pixel-board');
  const divs = secP.querySelectorAll('div');
  for (let i = 0; i < divs.length; i += 1) {
    secP.removeChild(divs[i]);
  }
};

const addBoxes = (event) => {
  removeBoxes();
  boxes(event);
};

const inputBox = document.getElementById('board-size');
vqvButton.addEventListener('click', () => {
  const text = inputBox.value;
  const parseText = parseInt(text);
  let textMath = 0;
  if (parseText <= '5') {
    textMath = '25';
  } else if (parseText >= '50') {
    textMath = '2500';
  } if (text === '') {
    return alert('Board inválido!');
  } if (parseText > '5' && parseText < '50') {
    textMath = text * text;
  }
  clearAll();
  addBoxes(textMath);
  const newBoxes = document.getElementsByClassName('pixel');
  for (let i = 0; i < newBoxes.length; i += 1) {
    newBoxes[i].addEventListener('click', paintColor);
  }
  saveBoard();
});

// Desafio 9 e 10

const paintColor = (event) => {
  const selectedPalette = document.querySelector('.color.selected');
  if (selectedPalette && selectedPalette.style.backgroundColor) {
    event.target.style.backgroundColor = selectedPalette.style.backgroundColor;
  };
};

const paintOnClick = document.querySelectorAll('.pixel');
paintOnClick.forEach(div => {
  div.addEventListener('click', paintColor,);
});

// Desafio 11

const buttonClear = () => {
  const buttonCler = document.createElement('button');
  buttonCler.innerHTML = 'Limpar';
  buttonCler.id = 'clear-board';
  buttonCler.style.marginLeft = `${55}px`;
  secD.appendChild(buttonCler);
};
buttonClear();

const clearAll = () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    pixel.style.backgroundColor = 'white';
    pixel.classList.remove('selected');
  });
   localStorage.removeItem('pixelBoard');
   localStorage.removeItem('boardSize');
};

const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', clearAll);

// Desafio 12
const saveDraw = () => {
  const pixelClass = document.getElementsByClassName('pixel');
  const local = [];
  for (let i = 0; i < pixelClass.length; i += 1) {
    const indice = pixelClass[i];
    local.push({
      colorDraw: indice.style.backgroundColor,
    });
  }
  localStorage.setItem('pixelBoard', JSON.stringify(local));
};

const loadDraw = () => {
  const localSave = JSON.parse(localStorage.getItem('pixelBoard'));
  const pixelClass = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelClass.length; i += 1) {
    const indice = pixelClass[i];
    indice.style.backgroundColor = localSave[i].colorDraw;
  }
};

window.onload = () => {
  if (localStorage.getItem('pixelBoard')) {
    loadDraw();
  } if (localStorage.getItem('colorPalette')) {
    load();
  } if (localStorage.getItem('boardSize')) {
    loadBoard();
  }
};

paintOnClick.forEach(div => {
  div.addEventListener('click', saveDraw);
});
