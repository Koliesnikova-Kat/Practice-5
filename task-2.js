// Якщо імейл і пароль користувача збігаються, при сабміті зберігай дані з форми у локальне сховище і змінюй кнопку 'login' на 'logout'
// і роби поля введення недоступними для зміни.
// При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку та недоступні для зміни поля з даними користувача.
// Клік по кнопці 'logout' повертає все в початковий вигляд і видаляє дані користувача з локального сховища.
// Якщо введені дані не збігаються з потрібними даними, викликати 'alert' і повідомляти про помилку.

const given = {
  email: 'faynadivka@i.ua',
  password: '123456',
}

const form = document.querySelector('#login-form');
const email = document.querySelector('[type="email"]');
// *or* const email = form.elements.email;
const password = document.querySelector('[type="password"]');
// *or* const password = form.elements.password;
const button = document.querySelector('[type="submit"]');
// *or* const button = form.elements.button;

const fillFormFields = () => {
  const savedDataLS = JSON.parse(localStorage.getItem('formData'));

  if (savedDataLS) {
    button.textContent = 'Logout';
    email.disabled = true;
    password.disabled = true;
    email.value = savedDataLS.email;
    password.value = savedDataLS.password;
  }  
};

fillFormFields();

const onFormSubmit = (event) => {
  event.preventDefault();

  if (button.textContent === 'Login') {
    if (email.value === given.email || password.value === given.password) {
      const formData = {
        email: email.value,
        password: password.value,
      };
      localStorage.setItem('formData', JSON.stringify(formData));
      
      button.textContent = 'Logout';
      email.disabled = true;
      password.disabled = true;
    } else {
      alert('User data is invalid!')
    };
  } else {
    localStorage.removeItem('formData');
    button.textContent = 'Login';
    form.reset();
    email.disabled = false;
    password.disabled = false;
  };
};

form.addEventListener('submit', onFormSubmit);