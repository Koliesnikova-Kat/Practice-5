// За допомогою 'prompt' запропонуйте користувачу ввести значення.
// Створіть функцію 'checkValue(value)', всередині якої буде 'promise'.
// Якщо введене користувачем значення не є числом, потрібно відхилити проміс і логувати 'error'.
// Якщо введене користувачем значення є числом і воно парне, розв'язуй проміс і повертай 'even' через 1 секунду.
// Якщо введене користувачем значення є числом і воно непарне, розв'язуй проміс і повертай 'odd' через 2 секунди.

const value = prompt('Please input a value!');
console.log(value);

function checkValue(value) {
  const promise = new Promise((resolve, reject) => {
    if (!isNaN(value)) {
      if (value % 2 === 0) {
        setTimeout(() => {
          resolve('even');
        }, 1000);
      } else {
        setTimeout(() => {
          resolve('odd');
        }, 2000);
      }
    } else {
      reject('error');
    }
  });

  promise
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    });

  return promise;
}

checkValue(value);