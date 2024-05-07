let firstArray = [2, 4, 1, 2, 3, 5, 3];
let secondArray = [3, 5, -4, 8, 11, 1, -1, 6];
let thirdArray = [5, 5];

const firstArrayUpdated = findPairForSum(firstArray, 4);
const secondArrayUpdated = findPairForSum(secondArray, 10);
const thirdArrayUpdated = findPairForSum(thirdArray, 10);

console.log(
  `

  Задание 4:
    Array: ${firstArray}
    Sum: ${4}
    Result: ${firstArrayUpdated}

    Array: ${secondArray}
    Sum: ${10}
    Result: ${secondArrayUpdated}

    Array: ${thirdArray}
    Sum: ${10}
    Result: ${thirdArrayUpdated}
  `
);

// Основная функция, которая принимает два аргумента:
// массив из уникальных целых чисел arr и сумму sum в виде целого числа.
// Функция ищет массиве arr любые два элемента, которые в сумме дают число sum

function findPairForSum(arr, sum) {
  try {
    arr = findPairForSumValidator(arr, sum); // Пытаемся провести валидацию массива и суммы
  }
  catch (err) {
    // Если валидация прошла неуспешно, то выводим ошибку и возвращаем пустой массив
    console.log(err);
    return [];
  }

  // Ищем в массиве arr любые два элемента, которые в сумме дают число sum,
  // не забывая, что два элемента - это не одно число, и возвращаем массив с ними, если получилось найти
  const arrMemory = {};
  for (let i = 0; i < arr.length; i++) {
    const diff = sum - arr[i];
    if (arrMemory.hasOwnProperty(diff)) {
      return [arr[i], diff];
    }

    arrMemory[arr[i]] = true;
  }

  // Если не смогли найти нужные элементы, то возвращаем пустой массив
  return [];
}

// Функция-валидатор для массива и суммы, которые были переданы в функцию findPairForSum.
// Внутри функции выполняются проверки на определенные условия и бросаются ошибки, если проверки выполнились

function findPairForSumValidator(arr, sum) {
  // Проверка: значение arr - не массив
  if (!Array.isArray(arr)) {
    throw new Error(`Value ${arr} must be an array`);
  }

  // Проверка: значение sum - не целое число
  if (typeof sum !== 'number' || sum % 1 !== 0) {
    throw new Error(`Value ${sum} must be an integer`);
  }

  // Проверка: массив arr содержит не только числа
  arr.forEach(value => {
    if (typeof value !== 'number' || value % 1 !== 0) {
      throw new Error(`Array must contain only integers`);
    }
  });

  // Если валидация прошла успешно, то удаляем из массива все дубликаты
  return removeDuplicates(arr);
}

// Функция, которая удаляет дубликаты из массива с помощью метода reduce

function removeDuplicates(arr) {
  return arr.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
}
