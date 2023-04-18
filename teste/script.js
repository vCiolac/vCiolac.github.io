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
  const rightNumber = JSON.parse(localStorage.getItem('pageRightNumber'));
  if (leftNumber <= 0 || rightNumber <= 0) {
    return alert('Você já está no inicio do livro');
  }
  pageLeft.textContent = pageLeftContent[lastLeftPage-1];
  localStorage.setItem('pageLeftNumber', leftNumber-1);
  pageRight.textContent = pageRightContent[lastRightPage-1];
  localStorage.setItem('pageRightNumber', rightNumber-1);
  location.reload()
};  

const nextPage = () => {
  const leftNumber = JSON.parse(localStorage.getItem('pageLeftNumber'));
  const rightNumber = JSON.parse(localStorage.getItem('pageRightNumber'));
  if (leftNumber > pageLeftContent.length-2 || rightNumber > pageRightContent.length-2) {
    return alert('Em construção! Você chegou à ultima pagina atual.');
  }
  pageLeft.textContent = pageLeftContent[lastLeftPage+1];
  localStorage.setItem('pageLeftNumber', leftNumber+1);
  pageRight.textContent = pageRightContent[lastRightPage+1];
  localStorage.setItem('pageRightNumber', rightNumber+1);
  location.reload()
};  

// const nextPage = () => {
//   pageRightContent[+1] ;
// };
const pageC = document.getElementsByClassName('pageControls')[0];
const buttons = pageC.children;
for (let i = 0; i < buttons.length; i += 1) {
  if (i === 0) {
    buttons[i].addEventListener('click', prevPage);
  } else {
    buttons[i].addEventListener('click', nextPage);
  }
}