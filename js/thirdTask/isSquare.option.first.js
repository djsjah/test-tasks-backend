const digit1 = 25;
const digit2 = 26;

console.log('Задание 3 - Первый вариант: \n');

try {
  isSquare(digit1);
  isSquare(digit2);
}
catch (err) {
  console.log(err);
}

function isSquare(digit) {
  if (typeof digit !== 'number') {
    throw new Error(` Value ${digit} is not a number`);
  }

  if (isSquareConfirm(digit)) {
    console.log(` Число ${digit} является квадратом`);
  }
  else {
    console.log(` Число ${digit} не является квадратом`);
  }
}

function isSquareConfirm(digit) {
  if (digit < 0 || digit % 1 !== 0) {
    return false;
  }

  if ((digit ** (1 / 2)) % 1 === 0) {
    return true;
  }

  return false;
}
