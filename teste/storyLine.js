/// Historia
const pageLeftContent = [
  'Array 1',
  'Array 2',
  'Indice 3',
  'Indice 4',
  'Oitenta',
];
const pageRightContent = [
  'Hello',
  'world',
  'jinx',
  'jayjay',
  'noventa',
];
const lastLeftPage = parseInt(localStorage.getItem('pageLeftNumber')) || 0;
const lastRightPage = parseInt(localStorage.getItem('pageRightNumber')) || 0;
function loadPage() {
  const leftContent = pageLeftContent[lastLeftPage];
  const rightContent = pageRightContent[lastRightPage] ;
  pageLeft.textContent = leftContent;
  pageRight.textContent = rightContent;
}

window.onload = () => {
  loadPage();
}