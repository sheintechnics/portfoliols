const form = document.querySelector('.login__form');
const formButton = document.querySelector('.btn__form');
form.onsubmit = function(e){
  e.preventDefault();
}
formButton.addEventListener('click', function(){
  validation().init(form);
})

function validation(){
  function showError(container, errorMessage) {
    container.classList.add('error');
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
  }

  function resetError(container) {
    container.classList.remove('error');
    if (container.lastChild.className == "error-message") {
      container.removeChild(container.lastChild);
    }
  }

  function initValidation(form){
    var elems = form.elements;
    if(elems.name){
      resetError(elems.name.parentNode);
      if (!elems.name.value) {
        showError(elems.name.parentNode, 'Введите ваше имя!');
      }
    }

    if(elems.login){
      resetError(elems.login.parentNode);
      if (!elems.login.value) {
        showError(elems.login.parentNode, 'Введите ваш логин!');
      }
    }

    if(elems.human){
      resetError(elems.human.parentNode);
      if (!elems.human.checked) {
        showError(elems.human.parentNode, 'А кто ты?');
      }
    }

    if (elems.password){
      resetError(elems.password.parentNode);
      if (!elems.password.value) {
        showError(elems.password.parentNode, 'Вы забыли ввести пароль!');
      }
    }

    if(elems.email){
      resetError(elems.email.parentNode);
      if (!elems.email.value) {
        showError(elems.email.parentNode, 'Вы не ввели ваш почтовый ящик!');
      }else{
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(elems.email.value) == false) {
          showError(elems.email.parentNode, 'Введите корректный e-mail!');
       }
      }
    }

    if(elems.message){
      resetError(elems.message.parentNode);
      if (!elems.message.value) {
        showError(elems.message.parentNode, 'Напишите сообщение!');
      }
    }

  }

  return {
    init: initValidation
  }
}