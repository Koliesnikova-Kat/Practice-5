// При кліку на кнопку "Подвоїти" збільшувати значення в кожному елементі списку в два рази.

const buttonEl = document.querySelector('#double');
const listEl = document.querySelectorAll('.listItem');

const onButtonClick = event => {
  event.preventDefault();
  listEl.forEach(listElement => listElement.textContent *= 2);
}

buttonEl.addEventListener('click', onButtonClick);