// Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.

const inputEl = document.querySelector('.contactsFilter');
const contactsList = document.querySelector('.contacts');
const contactEl = document.querySelectorAll('.contact');
//* або
// const contactEl = [...contactsList.children];

//! Спосіб 1
// const onFieldInput = event => {
//   event.preventDefault();
//   const inputValue = inputEl.value;
//   [...contactEl].forEach(contact => {
//   //* або
//   // contactEl.forEach(contact => {
//     if (!contact.textContent.includes(inputValue)) {
//       contact.remove();
//     };
//   });
// }

//! Спосіб 2
const onFieldInput = event => {
  event.preventDefault();
  const inputValue = event.target.value;
  const inputEl = [...contactEl].filter(contact => contact.textContent.includes(inputValue));
  //* або
  // const inputEl = contactEl.filter(contact => contact.textContent.includes(inputValue));
  contactsList.innerHTML = '';
  contactsList.append(...inputEl);
}

inputEl.addEventListener('input', onFieldInput);