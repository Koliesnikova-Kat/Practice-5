// При натисканні на кнопку "SHOW ME", потрібно в консоль вивести значення, яке будемо вводити в інпут.

const buttonEl = document.querySelector('#allertButton');
const inputEl = document.querySelector('#allertInput');

const onButtonClick = event => {
  event.preventDefault();
  console.log(inputEl.value);
};

buttonEl.addEventListener('click', onButtonClick);