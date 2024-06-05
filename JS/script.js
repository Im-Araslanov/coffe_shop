const burger = document.getElementById('burger');
const navigation = document.getElementById('nav');

burger.addEventListener('click', function() {
  burger.classList.toggle('header__burger_active');
  navigation.classList.toggle('navigation__active');
})

const submit = document.getElementById('submit');
const success = document.getElementById('success');
const error = document.getElementById('error');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

submit.addEventListener('click', function(event){
  event.preventDefault();

  const user = name.value;
  const mail = email.value;
  const mes = message.value;

  if (!user || !mail || !mes) {
    error.classList.add('form__fields-error_active');
    return;
  } else {
    error.classList.remove('form__fields-error_active');
  }

  // if (!isValid(user, mail, mes)) {
  //   error.classList.add('form__fields-error_active');
  //   return;
  // }


  success.classList.add('wrapper-success_active');

  name.value = '';
  email.value = '';
  message.value = '';

  setTimeout(function() {
    success.classList.remove('wrapper-success_active');
}, 3000);
})


// function isValidLogin(user, mail, mes) {
//   // Проверка значений полей на соответствие регулярному выражению
//   const pattern = /^[a-zA-Z0-9@.]+$/;

//   const isValidUser = pattern.test(user);
//   const isValidMail = pattern.test(mail);
//   const isValidMes = pattern.test(mes);

//   return isValidUser && isValidMail && isValidMes;
// }