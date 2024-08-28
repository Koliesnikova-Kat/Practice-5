// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів, а кнопка "Збільшити" - збільшувати квадрат на 10 пікселів.

const buttonDecrease = document.querySelector('#decrease');
const buttonIncrease = document.querySelector('#increase');
const boxEl = document.querySelector('#box');


// ! Спосіб 1 //
const onButtonDecreaseClick = event => {
  event.preventDefault();
  boxEl.style.width = `${boxEl.offsetWidth - 10}px`;
  boxEl.style.height = `${boxEl.offsetHeight - 10}px`;
};

const onButtonIncreaseClick = event => {
  event.preventDefault();
  boxEl.style.width = `${boxEl.offsetWidth + 10}px`;
  boxEl.style.height = `${boxEl.offsetHeight + 10}px`;
};

buttonDecrease.addEventListener('click', onButtonDecreaseClick);
buttonIncrease.addEventListener('click', onButtonIncreaseClick);



// ! Спосіб 2 //
const onButtonClick = event => {
  event.preventDefault();
  const id = event.target.id;
  if (id === 'increase') {
    boxEl.style.width = `${boxEl.offsetWidth + 10}px`;
    boxEl.style.height = `${boxEl.offsetHeight + 10}px`;
  } else {
    boxEl.style.width = `${boxEl.offsetWidth - 10}px`;
    boxEl.style.height = `${boxEl.offsetHeight - 10}px`;
  }  
};

buttonDecrease.addEventListener('click', onButtonClick);
buttonIncrease.addEventListener('click', onButtonClick);