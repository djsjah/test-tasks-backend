const arrPromise = [44, 0, 5, 73, 32, 1, 2, 66, 3];

promiseFunc(arrPromise).then((res) => {
  console.log(
    `
    Задание 5 (Promise):
      Result array: ${res}
      Message: Все прошло успешно
    `
  );
}).catch((message) => {
  console.log(
    `
    Задание 5 (Promise):
      Result array: null
      Message: ${message}
    `
  );
});

function promiseFunc(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr) || arr.some(it => parseInt(it) != it || it < 0)) {
      reject("Неверный формат входящих данных, должен быть массив положительных чисел");
    }

    let res = [];
    const promises = arr.map(val => new Promise(resolve => {
      setTimeout(() => {
        res.push(val);
        resolve();
      }, val);
    }));

    Promise.all(promises).then(() => {
      resolve(res);
    });
  });
}
