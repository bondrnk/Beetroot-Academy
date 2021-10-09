const log = console.log;
const successSwal = (text) => swal({ text, icon: 'success' });
const errorSwal = (text) => swal({ text, icon: 'error' });
const warningSwal = (text) => swal({ text, icon: 'warning' });

// Button clicks
for (let i = 1; i <= 10; i++) {
  const button = document.querySelector('.js-button' + i);
  button.onclick = this['task' + i];
}

// Task 1
async function task1() {
  const age = await swal({
    text: 'Введіть ваш вік',
    content: {
      element: 'input',
      attributes: {
        placeholder: '99',
        type: "number"
      }
    }
  });

  if (age > 0 && age <= 2) {
    successSwal('Ви дитина!');
  } else if (age > 2 && age <= 12) {
    successSwal('Ви велика дитина!');
  } else if (age > 12 && age <= 18) {
    successSwal('Ви тінейджер!');
  } else if (age > 18 && age <= 60) {
    successSwal('Ви дорослий!');
  } else if (age > 60 && age <= 120) {
    successSwal('Ви пенсіонер!');
  } else {
    warningSwal('Ви прибулець?!');
  }
}

// Task 2
async function task2() {
  const VARIANTS = ')!@#$%^&*(';
  const number = await swal({
    text: 'Введіть число від 0 до 9:',
    content: {
      element: 'input',
      attributes: {
        placeholder: '(0 - 9)',
        type: 'number'
      }
    }
  });

  if (number >= 0 && number < 10) {
    swal('Shift+' + number + ' = ' + VARIANTS[number]);
  } else {
    errorSwal('Не введене число від 0 до 9!');
  }
}

// Task 3
async function task3() {
  const number = await swal({
    text: 'Введіть тризначне число',
    content: {
      element: 'input',
      attributes: {
        placeholder: '111',
        type: 'number'
      }
    }
  });
  let n = number.toString();

  if (n.length == 3) {
    hasSameDigits(n);
  } else {
    errorSwal('Це не тризначне число :C');
  }

  function hasSameDigits(n) {
    for (let i = 0; i < n.length; i++) {
      for (let j = 0; j < n.length; j++) {
        if (i === j) continue;
        if (n[i] === n[j]) {
          successSwal('У вашому числі є однакові цифри!');
          return;
        }
      }
    }
    warningSwal('У вашому числі немає однакових цифр!');
  }
}

// Task 4
async function task4() {
  const yearOfBirth = await swal({
    text: 'Введіть будь-який рік:',
    content: {
      element: 'input',
      attributes: {
        placeholder: '1999',
        type: 'number'
      }
    }
  });

  if ((yearOfBirth % 400 === 0 || yearOfBirth % 4 === 0) && yearOfBirth % 100 !== 0) {
    successSwal('Цей рік - високосний!');
  } else {
    successSwal('Цей рік - не високосний!');
  }

}

// Task 5
async function task5() {
  const number = await swal({
    text: 'Введіть п\'ятизначне число:',
    content: {
      element: 'input',
      attributes: {
        placeholder: '12345',
        type: 'number'
      }
    }
  });
  let n = number.toString();

  if (n.length == 5) {
    palindrom(n);
  } else {
    errorSwal('Це не п\'ятизначне число!');
  }

  function palindrom(n) {
    for (let i = 0; i < n.length; i++) {
      if (n[i] === n[n.length - 1 - i]) {
        continue;
      } else {
        return successSwal('Це число не паліндром!');
      }
    }
    successSwal('Це число паліндром!');
  }
}

// Task 6
async function task6() {
  const sum = await swal({
    text: 'Введіть суму USD:',
    content: {
      element: 'input',
      attributes: {
        type: 'number'
      }
    }
  });
  const value = await swal({
    text: 'Виберіть валюту для конвертування:',
    buttons: {
      eur: {
        text: "EUR",
        value: "eur",
      },
      uah: {
        text: "UAH",
        value: "uah",
      },
      azn: {
        text: "AZN",
        value: "azn",
      }
    }
  });

  switch (value) {

    case "eur":
      successSwal(sum + ' USD = ' + sum * 0.86 + ' EUR');
      break;

    case "uah":
      successSwal(sum + ' USD = ' + sum * 26.33 + ' UAH');
      break;

    case "azn":
      successSwal(sum + ' USD = ' + sum * 1.70 + ' AZN');
      break;

    default:
      errorSwal('Input number :C');
  }
}

// Task 7
async function task7() {
  const sum = await swal({
    text: 'Введіть суму покупки:',
    content: {
      element: 'input',
      attributes: {
        type: 'number'
      }
    }
  });

  if (sum >= 0 && sum < 200) {
    successSwal('Сума до оплати (зі знижкою 0%): ' + sum + ' UAH');
  } else if (sum >= 200 && sum < 300) {
    successSwal('Сума до оплати (зі знижкою 3%): ' + sum * 0.97 + ' UAH');
  } else if (sum >= 300 && sum < 500) {
    successSwal('Сума до оплати (зі знижкою 5%): ' + sum * 0.95 + ' UAH');
  } else if (sum >= 500) {
    successSwal('Сума до оплати (зі знижкою 7%): ' + sum * 0.93 + ' UAH');
  } else {
    errorSwal('Ви боржник, для вас знижки немає! :С');
  }
}

// Task 8
async function task8() {
  const PI = 3.14159265359;
  const circleLength = await swal({
    text: 'Введіть довжину окружності:',
    content: {
      element: 'input',
      attributes: {
        type: 'number'
      }
    }
  });
  const squarePerimeter = await swal({
    text: 'Введіть периметр квадрата:',
    content: {
      element: 'input',
      attributes: {
        type: 'number'
      }
    }
  });

  if (2 * Math.sqrt(circleLength / PI) === Math.sqrt(2) * Math.sqrt(squarePerimeter)) {
    successSwal('Окружність вписується в даний квадрат!');
  } else {
    errorSwal('Окружність не вписується в даний квадрат!');
  }
}

// Task 9
async function task9() {
  const answer1 = await swal({
    text: 'У індіанців з нечисленного північноамериканського племені квакіутль є традиція: беручи гроші в борг, вони залишають в заставу ...',
    buttons: {
      1: {
        text: "Душу",
        value: 0,
      },
      2: {
        text: "Ім'я",
        value: 2,
      },
      3: {
        text: "Скальп тещі",
        value: 0,
      }
    }
  });
  const answer2 = await swal({
    text: 'Туристи, які приїжджають на Майорку, зобов\'язані заплатити податок за ...',
    buttons: {
      1: {
        text: "Плавки",
        value: 0,
      },
      2: {
        text: "Пальми",
        value: 0,
      },
      3: {
        text: "Сонце",
        value: 2,
      }
    }
  });
  const answer3 = await swal({
    text: 'Чому калани ( «морські видри») тримаються за руки?',
    buttons: {
      1: {
        text: "Тому що вони люблять один одного",
        value: 0,
      },
      2: {
        text: "Щоб показати, що вони в одній родині",
        value: 0,
      },
      3: {
        text: "Щоб вони не відпливали, коли сплять",
        value: 2,
      }
    }
  });

  successSwal('Ви набрали ' + (answer1 + answer2 + answer3) + ' балів із 6!');
}

// Task 10
async function task10() {
  let date = await swal({
    text: 'Введіть дату:',
    content: {
      element: 'input',
      attributes: {
        type: 'date'
      }
    }
  });

  date = new Date(date);
  date.setDate(date.getDate() + 1);
  successSwal('Наступна дата: ' + date.toISOString().split('T')[0]);
}