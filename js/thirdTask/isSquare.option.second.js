const digit1 = 25;
const digit2 = 26;

try {
  isSquare(digit1);
  isSquare(digit2);
}
catch (err) {
  console.log(err);
}

function sqrt(digit) {
  let x = digit;
  let y = (x + 1) / 2;

  while (y < x) {
    x = y;
    y = (x + digit / x) / 2;
  }

  return x;
}

function isSquare(digit) {
  if (typeof digit !== 'number' || digit < 0 || digit % 1 !== 0) {
    throw new Error(`Value ${digit} must be a positive integer`);
  }

  const root = sqrt(digit);
  if (root % 1 === 0 && root * root === digit) {
    console.log(`Число ${digit} является квадратом`);
  }
  else {
    console.log(`Число ${digit} не является квадратом`);
  }
}
