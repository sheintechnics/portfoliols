import "./modules/parallaxMouse.js";
import "./modules/preloader.js";
import "./modules/validation.js";
import "./modules/flip.js";




const form = document.querySelector('.login__form');
const formButton = document.querySelector('.btn__form');


form.onsubmit = function(e){
  e.preventDefault();
  let form = e.target;
  let formData = new FormData();
  formData.append("name", form.elements.login.value);
  formData.append("password", form.elements.password.value);
  
  let sendAjax = function(url, data){
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.responseType = 'json';
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.addEventListener('load', ()=>{
          resolve(xhr.response);
      })
      xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState === 4){
          if(xhr.status >= 400){
            if(xhr.status === 401){
              reject(xhr.response.error);
            }else{
              reject('Вы заполнили не все поля!');
            }
          }
        }
      })
      xhr.send(data);
    })
  }

  sendAjax('https://webdev-api.loftschool.com/login', formData)
  .then(function(response){
    localStorage.setItem('token', response.token);
    if(1==1){
      document.location.replace("localhost:8080/");
    }else{
      let content = document.createElement('div');
      content.innerHTML = 'Вы не правильно ввели капчу!';
      console.log(content);

    }
  }, function(response){
  })

}