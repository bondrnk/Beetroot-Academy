const successSwal = (text) => swal({ text, icon: 'success' });
const errorSwal = (text) => swal({ text, icon: 'error' });
const warningSwal = (text) => swal({ text, icon: 'warning' });

const BASE_URL = "https://beetroot-solodkui.herokuapp.com";

// INPUT USER

function getInputValue(id) {
  return document.getElementById(`js-input-${id}`).value;
}

document.getElementById('js-form').addEventListener('submit', registration);

function registration(e) {
  e.preventDefault();

  const password = getInputValue('password');
  const passwordConfirm = getInputValue('password-confirm');

  if (password === passwordConfirm) {
    const user = {
      role: 2,
      firstName: getInputValue('first-name'),
      lastName: getInputValue('last-name'),
      email: getInputValue('email'),
      username: getInputValue('username'),
      password,
      active: true
    }
    registrationRequest(user);
  } else {
    errorSwal('Confirm your password again!')
  }
}

// REQUEST

function registrationRequest(user) {
  fetch(`${BASE_URL}/beetroot-solodkui/users/registration`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    mode: "cors",
    body: JSON.stringify(user),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      // ? Генерація своєї помилки
      // return response.json().then(error => {
      //   const err = new Error('Oh no, something went wrong!!!');
      //   err.data = error;
      //   throw err;
      // })

      return response.json().then(error => {
        throw { ...error, status: response.status };
      })
    })
    .then(response => {
      successSwal(response?.message.ua);
    })
    .catch(error => {
      console.log('ERROR!!!', error.status);

      errorSwal(error.message.ua);
    })
}