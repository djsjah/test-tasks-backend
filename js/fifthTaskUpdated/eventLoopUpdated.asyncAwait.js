const arrUpd = [44, 0, 5, 73, 32, 1, 2, 66, 3];

asyncfuncUpd(arrUpd).then(res => {
  if (res) {
    console.log(`Задание 5 (Обновленное - async/await):\nResult array: ${res}\nMessage: Все прошло успешно`);
  }
}).catch((error) => {
  console.log(`Задание 5 (Обновленное - async/await):\nОшибка: ${error}`);
});

async function asyncfuncUpd(arr) {
  if (!Array.isArray(arr) || arr.some(it => parseInt(it) != it || it < 0))
    throw new Error("Неверный формат входящих данных, должен быть массив положительных чисел");

  // Создаем промисы для каждого элемента массива
  const promises = arr.map(item => new Promise((resolve) => {
    setTimeout(() => {
      resolve(item); // Решаем промис с текущим элементом массива
    }, item);
  }));

  // Ожидаем выполнения всех промисов
  const results = await Promise.all(promises);

  // Возвращаем результаты
  return results;
}
