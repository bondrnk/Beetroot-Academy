const successSwal = (text) => swal({ text, icon: 'success' });
const errorSwal = (text) => swal({ text, icon: 'error' });
const warningSwal = (text) => swal({ text, icon: 'warning' });

// Button clicks
for (let i = 1; i <= 2; i++) {
  const button = document.getElementById('js-button' + i);

  button.addEventListener('click', this['task' + i]);
}

// Task 1
async function task1() {
  const inputCarBrand = await swal({
    text: 'Введіть бренд авто:',
    content: {
      element: 'input',
      attributes: {
        placeholder: 'BMW',
        type: 'text'
      }
    }
  });

  const inputCarModel = await swal({
    text: 'Введіть модель авто:',
    content: {
      element: 'input',
      attributes: {
        placeholder: 'X6',
        type: 'text'
      }
    }
  });

  const inputCarYear = await swal({
    text: 'Введіть рік випуску авто:',
    content: {
      element: 'input',
      attributes: {
        placeholder: '2021',
        type: 'number'
      }
    }
  });

  const inputCarAverageSpeed = await swal({
    text: 'Введіть середню швидкість авто:',
    content: {
      element: 'input',
      attributes: {
        placeholder: '180',
        type: 'number'
      }
    }
  });

  const userCar = {
    brand: inputCarBrand || 'BMW',
    model: inputCarModel || 'X6',
    year: inputCarYear || '2021',
    averageSpeed: inputCarAverageSpeed || '180'
  };

  const getCarInfo = (car) => `
    Бренд: ${car.brand}
    Модель: ${car.model}
    Рік: ${car.year}
    Середня швидкість: ${car.averageSpeed} км/год
  `;

  const value = await swal({
    buttons: {
      info: {
        text: 'Інформація про введену машину',
        value: 'info'
      },
      countTime: {
        text: 'Розрахувати необхідий час на введену відстань',
        value: 'countTime'
      }
    }
  });

  switch (value) {
    case 'info': {
      successSwal(`Інформація про введену машину: ${getCarInfo(userCar)}`);
      break;
    }
    case 'countTime': {
      const inputDistance = await swal({
        text: 'Введіть відстань (км):',
        content: {
          element: 'input',
          attributes: {
            placeholder: '1000',
            type: 'number'
          }
        }
      }) || '1000';

      if (inputDistance <= 0) {
        errorSwal('Введіть значення більше 0!');
        break;
      }

      const countTime = (car, distance) => {
        let time = distance / car.averageSpeed;
        time += Math.trunc(time / 4);
        return time;
      };

      successSwal(`Даній машині необхідно ${countTime(userCar, inputDistance).toFixed(2)} годин(и) для подолання відстані ${inputDistance} км при середній швидкості ${userCar.averageSpeed} км/год`);
      break;
    }
  }
}


// Task 2
async function task2() {
  const numerator1 = +await swal({
    text: 'Введіть чисельник першого числа',
    content: {
      element: 'input',
      attributes: {
        placeholder: '1',
        type: 'number'
      }
    }
  }) || 1;

  const denominator1 = +await swal({
    text: 'Введіть знаменник першого числа',
    content: {
      element: 'input',
      attributes: {
        placeholder: '2',
        type: 'number'
      }
    }
  }) || 2;

  const numerator2 = +await swal({
    text: 'Введіть чисельник другого числа',
    content: {
      element: 'input',
      attributes: {
        placeholder: '3',
        type: 'number'
      }
    }
  }) || 3;

  const denominator2 = +await swal({
    text: 'Введіть знаменник другого числа',
    content: {
      element: 'input',
      attributes: {
        placeholder: '4',
        type: 'number'
      }
    }
  }) || 4;

  const number1 = {
    numerator: numerator1,
    denominator: denominator1
  };

  const number2 = {
    numerator: numerator2,
    denominator: denominator2
  };

  const NSD = (n1, n2) => {
    if (!n2) return Math.abs(n1);
    return NSD(n2, n1 % n2);
  }

  const NSK = (n1, n2) => {
    return n1 * n2 / NSD(n1, n2);
  }

  const nsk = NSK(number1.denominator, number2.denominator);

  const multiplier1 = nsk / number2.denominator;
  const multiplier2 = nsk / number1.denominator;

  const simplify = (n) => {
    let divider = 1;
    for (let i = 2; i < Math.min(Math.abs(n.numerator), Math.abs(n.denominator)); i++) {
      if (n.numerator % i === 0 && n.denominator % i === 0) {
        divider = i;
      }
    }
    n.numerator /= divider;
    n.denominator /= divider;
    return `${n.numerator}/${n.denominator}`
  }

  const operations = {
    sum: (n1, n2) => `${n1.numerator * multiplier1 + n2.numerator * multiplier2}/${nsk}`,
    subtract: (n1, n2) => `${n1.numerator * multiplier1 - n2.numerator * multiplier2}/${nsk}`,
    multiply: (n1, n2) => `${n1.numerator * n2.numerator}/${n1.denominator * n2.denominator}`,
    divide: (n1, n2) => `${n1.numerator * n2.denominator}/${n1.denominator * n2.numerator}`,
    simplify: (n1, n2) => `${simplify(n1)}, ${simplify(n2)}`
  };

  const symbol = {
    sum: ' + ',
    subtract: ' - ',
    multiply: ' * ',
    divide: ' ÷ ',
    simplify: ', '
  };

  const value = await swal({
    buttons: {
      sum: {
        text: 'Додати',
        value: 'sum'
      },
      subtract: {
        text: 'Відняти',
        value: 'subtract'
      },
      multiply: {
        text: 'Помножити',
        value: 'multiply'
      },
      divide: {
        text: 'Поділити',
        value: 'divide'
      },
      simplify: {
        text: 'Спростити',
        value: 'simplify'
      }
    }
  });

  successSwal(number1.numerator + '/' + number1.denominator + symbol[value] + number2.numerator + '/' + number2.denominator + ' = ' + operations[value](number1, number2));
}