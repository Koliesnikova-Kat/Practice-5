// При натисканні на кнопку "Приховати" потрібно введені користувачем символи в інпут відображати у вигляді крапок замість звичайного тексту,
// а також змінити назву кнопки на "Показати", при повторному натисканні знову будемо відображати символи,
// а назва кнопки зміниться на "Приховати".

const buttonEl = document.querySelector('#passwordButton');
const inputEl = document.querySelector('#passwordInput');

const onButtonClick = event => {
  event.preventDefault();
  if (buttonEl.textContent === 'Приховати') {
    buttonEl.textContent = 'Показати';
    inputEl.type = 'password';
  } else {
    buttonEl.textContent = 'Приховати';
    inputEl.type = 'text';
  };
};

buttonEl.addEventListener('click', onButtonClick);