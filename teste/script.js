const pageLeft = document.getElementsByClassName('pageLeft')[0];
const pageRight = document.getElementsByClassName('pageRight')[0];
const pageControls = document.getElementsByClassName('pageControls')[0];
const actionControls = document.getElementsByClassName('actionControls')[0];
const pageButton = document.getElementsByClassName('pageButton');
const actionButton = document.getElementsByClassName('actionButton');

const generatePageButtons = () => {
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  button1.id = 'prevPage';
  button1.classList.add('pageButton');
  button1.innerHTML = 'Voltar';
  button2.id = 'nextPage';
  button2.classList.add('pageButton');
  button2.innerHTML = 'Avançar';
  pageControls.appendChild(button1);
  pageControls.appendChild(button2);
};

const generateActButtons = (inner1, inner2) => {
  const button3 = document.createElement('button');
  const button4 = document.createElement('button');
  button3.id = 'firstAction';
  button3.classList.add('actionButton');
  button3.innerHTML = inner1;
  button4.id = 'secondAction';
  button4.classList.add('actionButton');
  button4.innerHTML = inner2;
  actionControls.appendChild(button3);
  actionControls.appendChild(button4);
};
generatePageButtons();
// generateActButtons('Bater', 'Defender');
const prevPage = () => {
  const leftNumber = JSON.parse(localStorage.getItem('pageLeftNumber'));
  pageLeft.textContent = pageLeftContent[lastLeftPage-1];
  localStorage.setItem('pageLeftNumber', leftNumber);
  const rightNumber = JSON.parse(localStorage.getItem('pageRightNumber'));
  pageRight.textContent = pageRightContent[lastRightPage-1];
  localStorage.setItem('pageRightNumber', rightNumber);
};  

const nextPage = () => {
  const leftNumber = JSON.parse(localStorage.getItem('pageLeftNumber'));
  pageLeft.textContent = pageLeftContent[lastLeftPage+1];
  localStorage.setItem('pageLeftNumber', leftNumber);
  const rightNumber = JSON.parse(localStorage.getItem('pageRightNumber'));
  pageRight.textContent = pageRightContent[lastRightPage+1];
  localStorage.setItem('pageRightNumber', rightNumber);
};  

// const nextPage = () => {
//   pageRightContent[+1] ;
// };

const pageC = document.getElementsByClassName('pageControls');
for (const button of pageC) {
  if (button === 0) {
    button.addEventListener('click', prevPage);
  } else {
    button.addEventListener('click', nextPage);
  }
};