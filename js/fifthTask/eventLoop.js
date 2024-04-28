const arr = [44, 0, 5, 73, 32, 1, 2, 66, 3];

func(arr, (res, message = "Все прошло успешно") => {
  console.log(
    `

    Задание 5:
      Result array: ${res}
      Message: ${message}
    `
  );
});

function func(arr, call_back) {
  if (!Array.isArray(arr) || arr.some(it => parseInt(it) != it || it < 0))
    call_back(null, "Неверный формат входящих данных, должен быть массив положительных чисел");

  let res = [];
  const f = (val) => {
    res.push(val);
    if (res.length == arr.length)
      call_back(res);
  }

  for (let i = 0; i < arr.length; i++) {
    setTimeout(f, arr[i], arr[i]);
  }
}
