const digit5 = 9;
const digit6 = 15;

console.log('\n\nЗадание 3 - Третий вариант: \n');

try {
  isSquare(digit5);
  isSquare(digit6);
}
catch (err) {
  console.log(err);
}

function squareRootBinarySearch(digit) {
  let start = 0;
  let end = digit;

  while (start <= end) {
    let mid = (start + end) / 2;
    let remainder = mid % 1;

    if (remainder > 0) {
      mid = (start + end) / 2 - remainder;
    }

    if (mid * mid === digit) {
      return mid;
    }
    else if (mid * mid > digit) {
      end = mid - 1;
    }
    else if (mid * mid < digit) {
      start = mid + 1;
    }
  }

  return false;
}

function isSquare(digit) {
  if (typeof digit !== 'number' || digit < 0 || digit % 1 !== 0) {
    throw new Error(` Value ${digit} must be a positive integer`);
  }

  if (squareRootBinarySearch(digit)) {
    console.log(` Число ${digit} является квадратом`);
  }
  else {
    console.log(` Число ${digit} не является квадратом`);
  }
}
