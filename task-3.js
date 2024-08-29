// Створіть функцію delayedPromise, яка приймає час затримки (у мілісекундах) та повертає проміс.
// Цей проміс має виконатися після вказаної затримки і вивести повідомлення в консоль "Пройшло delay мілісекунд".
// Якщо переданий аргумент не є числом, логуй повідомлення про помилку "Затримка має бути числом".

function delayedPromise(delay) {  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof delay === 'number') {
        resolve(delay);
      } else {
        reject(`Затримка має бути числом!`);
      }
    }, delay);
  });

  promise
    .then((delay) => {
      console.log(`Пройшло ${delay} мілісекунд!`);
    })
    .catch((error) => {
      console.log(error);
    });
  
  return promise;
}

delayedPromise('Hello!');
delayedPromise(1000);
delayedPromise(2000);
delayedPromise(true);
delayedPromise(3000);