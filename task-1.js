// Додай функціонал зміни теми при натисканні (подія 'change') на чекбокс #theme-switch-toggle у тулбарі. За замовчуванням тема світла.
// При зміні теми необхідно додавати на елемент 'body' клас 'light-theme' або 'dark-theme'.
// Вибрана тема повинна зберігатись між перезавантаженнями сторінки. Для зберігання теми використовуй LocalStorage.
// Якщо при завантаженні сторінки тема темна, не забудь поставити	властивість 'checked' у чекбоксу 'theme-switch-toggle' у 'true',
// щоб повзунок зрушив у правильне положення.
// Для зручності зберігання списку використовуй такий перелік.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitch = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

const onSwitch = event => {
  event.preventDefault();

  if (themeSwitch.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('browser-theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('browser-theme', Theme.LIGHT);
  }
};

themeSwitch.addEventListener('change', onSwitch);

const savedTheme = localStorage.getItem('browser-theme');
if (savedTheme) {
  body.classList.add(savedTheme);
} else {
  body.classList.add(Theme.LIGHT);
};

if (savedTheme === Theme.DARK) {
  themeSwitch.checked = true;
};