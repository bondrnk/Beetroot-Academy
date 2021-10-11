const log = console.log;
const successSwal = (text) => swal({ text, icon: 'success' });
const errorSwal = (text) => swal({ text, icon: 'error' });
const warningSwal = (text) => swal({ text, icon: 'warning' });

// Button clicks
for (let i = 1; i <= 5; i++) {
  const button = document.querySelector('.js-button' + i);
  button.onclick = this['task' + i];
}

// Task 1
async function task1() {
  const numberFrom = +await swal({
    text: 'Введіть ціле число від якого рахувати:',
    content: {
      element: 'input',
      attributes: {
        placeholder: '1',
        type: "number"
      }
    }
  });
  const numberTo = +await swal({
    text: 'І число до якого рахувати (включно):',
    content: {
      element: 'input',
      attributes: {
        placeholder: '99',
        type: "number"
      }
    }
  });
  let sum = null;

  // Перевірка чи ввели числа і чи вони цілі
  if (Number.isInteger(numberFrom) && Number.isInteger(numberTo) && numberFrom.toString && numberTo.toString) {
    // Перевірка чи коректний діапазон ввели
    if (numberFrom <= numberTo) {
      for (let i = numberFrom; i <= numberTo; i++) {
        sum += i;
      }
      successSwal('Сума всіх чисел в діапазоні (' + numberFrom + ', ' + numberTo + ') = ' + sum + '!');
    } else {
      errorSwal('Діапазон введено неправильно!');
    }
  } else {
    errorSwal('Введіть цілі числа!');
  }
}

// Task 2
async function task2() {
  const number1 = +await swal({
    text: 'Введіть число №1:',
    content: {
      element: 'input',
      attributes: {
        placeholder: '1',
        type: "number"
      }
    }
  });
  const number2 = +await swal({
    text: 'Введіть число №2:',
    content: {
      element: 'input',
      attributes: {
        placeholder: '2',
        type: "number"
      }
    }
  });

  function NOD(x, y) {
    // Коли y = 0, то повертаємо х (тобто це найбільший дільник який залишився)
    if (!y) return Math.abs(x);
    return NOD(y, x % y);
  }

  // Перевірка чи ввели числа і чи вони цілі
  if (Number.isInteger(number1) && Number.isInteger(number2) && number1.toString && number2.toString) {
    if (number1 && number2) {
      successSwal('Найбільший дільник чисел ' + number1 + ' і ' + number2 + ' = ' + NOD(number1, number2) + '!');
    } else {
      // Якщо 0 - то дільник тільки 1
      successSwal('Найбільший дільник чисел ' + number1 + ' і ' + number2 + ' = 1!');
    }
  } else {
    errorSwal('Введіть цілі числа!');
  }
}

// Task 3
async function task3() {
  const number = +await swal({
    text: 'Введіть число:',
    content: {
      element: 'input',
      attributes: {
        placeholder: '1',
        type: "number"
      }
    }
  });
  // Задаємо пустий рядок (бо інакше в рядок виводиться null, undefined, NaN і т.д.)
  let dividers = '';

  // Перевірка чи ввели число і чи воно ціле
  if (Number.isInteger(number) && number.toString) {
    // Якщо 0 - то дільник тільки 1
    if (!number) {
      dividers = 1;
    } else {
      for (var i = 1; i <= Math.abs(number); i++) {
        // Додаємо саме число (без коми)
        if (i === Math.abs(number)) {
          dividers += i.toString();
          break;
        }
        // Якщо це дільник то додаємо число з комою
        if (!(number % i)) {
          dividers += (i.toString() + ', ');
        }
      }
    }
    successSwal('Дільники числа ' + number + ': (' + dividers + ')!');
  } else {
    errorSwal('Введіть ціле число!');
  }
}

// Task 4
async function task4() {
  const number = await swal({
    text: 'Введіть число:',
    content: {
      element: 'input',
      attributes: {
        placeholder: '1',
        type: "number"
      }
    }
  });

  successSwal('В числі ' + number + ' - ' + number.split('').length + ' цифр(и)!');
}

// Task 5
async function task5() {
  let numberCount = 0;
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let nullNumbers = 0;
  let evenNumbers = 0;
  let oddNumbers = 0;
  let numberList = '';

  while (numberCount < 10) {
    numberCount++;
    const number = +await swal({
      text: 'Введіть число №' + numberCount + ':',
      content: {
        element: 'input',
        attributes: {
          placeholder: '0',
          type: "number"
        }
      }
    });

    numberList += (number.toString() + ((numberCount !== 10) ? ', ' : ''));
    log(numberList);

    if (number > 0) {
      positiveNumbers++;
    } else if (number < 0) {
      negativeNumbers++;
    } else {
      nullNumbers++;
    }

    (number % 2) ? oddNumbers++ : evenNumbers++;
  }

  successSwal('Було введено: ' + numberList + '\n\n- додатніх чисел: ' + positiveNumbers + '\n- від\'ємних чисел: ' + negativeNumbers + '\n- нулів або пустих чисел: ' + nullNumbers + '\n\n- парних чисел: ' + evenNumbers + '\n- непарних чисел: ' + oddNumbers);
}