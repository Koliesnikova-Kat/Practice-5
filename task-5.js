// При кліку на кнопку "Filter" потрібно видалити зі списку позначені елементи.

const formEl = document.querySelector('.checkboxForm');
const checkboxBlock = document.querySelectorAll('.checkboxWrapper');

const onFormSubmit = event => {
  event.preventDefault();
  const filteredList = [...checkboxBlock].filter(checkboxEl => checkboxEl.lastElementChild.checked);
  filteredList.forEach(listEl => listEl.remove());
}

formEl.addEventListener('submit', onFormSubmit);