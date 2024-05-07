const arrUpdPr = [44, 0, 5, 73, 32, 1, 2, 66, 3];

promisefuncUpd(arrUpdPr)
  .then(res => {
    if (res) {
      console.log(`Задание 5 (Обновленное - promise):\nResult array: ${res}\nMessage: Все прошло успешно`);
    }
  })
  .catch((error) => {
    console.log(`Задание 5 (Обновленное - promise):\nОшибка: ${error}`);
  });

function promisefuncUpd(arr) {
  if (!Array.isArray(arr) || arr.some(it => parseInt(it) != it || it < 0))
    return Promise.reject(new Error("Неверный формат входящих данных, должен быть массив положительных чисел"));

  // Создаем промисы для каждого элемента массива
  const promises = arr.map(item => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item); // Решаем промис с текущим элементом массива
    }, item);
  }));

  // Используем Promise.all для ожидания выполнения всех промисов
  return Promise.all(promises)
    .then(results => {
      // Возвращаем результаты
      return results;
    })
    .catch(error => {
      // Обрабатываем ошибки, возникающие при выполнении Promise.all
      return Promise.reject(error);
    });
}
