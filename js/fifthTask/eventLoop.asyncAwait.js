const arrAsyncAwait = [44, 0, 5, 73, 32, 1, 2, 66, 3];

asyncFunc(arrAsyncAwait).then(([res, message = "Все прошло успешно"]) => {
  console.log(
    `
    Задание 5 (async/await):
      Result array: ${res}
      Message: ${message}
    `
  );
});

async function asyncFunc(arr) {
  if (!Array.isArray(arr) || arr.some(it => parseInt(it) != it || it < 0))
    return Promise.reject(["Неверный формат входящих данных, должен быть массив положительных чисел"]);

  let res = [];
  const promises = arr.map(val => new Promise(resolve => {
    setTimeout(() => {
      res.push(val);
      resolve();
    }, val);
  }));

  await Promise.all(promises);
  return [res, "Все прошло успешно"];
}
