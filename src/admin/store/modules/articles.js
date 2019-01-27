const articles = {
  namespaced: true,
  state: {
    articlesData: [],
    active: {
      activeClass: false
    },
    editmode: false,
    editedArticle: {}
  },
  getters: {

  },
  mutations: {
    updateArticlesData(state, data){
      data.forEach(function(item){
        let articleData = {};
        articleData.id = item.id;
        articleData.title = item.title;
        //Конвертируем дату
        let parseDate = new Date(item.date*1000);
        let year = parseDate.getFullYear();
        let month = parseDate.getMonth()+1;
        let day = parseDate.getDate();
        month = month<10 ? `0${month}` : month;
        articleData.date = `${month}/${day}/${year}`;

        articleData.content = item.content;
        state.articlesData.push(articleData);
      })
    },
    addArticle(state, data){
      let articleData = {};
      articleData.id = data.id;
      articleData.title = data.title;
      //Конвертируем дату
      let parseDate = new Date(data.date*1000);
      let year = parseDate.getFullYear();
      let month = parseDate.getMonth()+1;
      let day = parseDate.getDate();
      month = month<10 ? `0${month}` : month;
      articleData.date = `${month}/${day}/${year}`;

      articleData.content = data.content;
      state.articlesData.push(articleData);
    },
    deleteArticle(state, id){
      state.articlesData.forEach(function(item, index, items){
        if(item.id===id){
          items.splice(index, 1);
        }
      })
    },
    editArticle(state, article){
      state.editmode = true;
      for (var key in article) {
        state.editedArticle[key] = article[key];
      }
    },
    changeArticle(state, article){
      state.articlesData.forEach(function(item){
        if(item.id===state.editedArticle.id){
          item.title = article.title;
          //Конвертируем дату
          let parseDate = new Date(article.date*1000);
          let year = parseDate.getFullYear();
          let month = parseDate.getMonth()+1;
          let day = parseDate.getDate();
          month = month<10 ? `0${month}` : month;
          item.date = `${month}/${day}/${year}`;
          
          item.content = article.content;
        }
      })
      state.editmode = false;
    }
  },
  actions: {
    getArticlesData(context, userId){
      receiveDataAjax(`https://webdev-api.loftschool.com/posts/${userId}`)
      .then(function(response){
        context.commit('updateArticlesData', response);
      })
    },
    addArticle(context, article){
      let formData = new FormData();
      formData.append("title", article.title);
      formData.append("date", article.date);
      formData.append("content", article.content);


      let token = localStorage.getItem('token');
      sendAjax('https://webdev-api.loftschool.com/posts', formData, token)
      .then(function(response){
        context.commit('addArticle', response);
      })
    },
    deleteArticle(context, id){
      let token = localStorage.getItem('token');
      deleteDataAjax(`https://webdev-api.loftschool.com/posts/${id}`, token)
      .then(function(){
        context.commit('deleteArticle', id);
      })
    },
    changeArticle(context, article){
      let formData = new FormData();
      formData.append("title", article.title);
      formData.append("date", article.date);
      formData.append("content", article.content);

      let token = localStorage.getItem('token');
      updateDataAjax(`https://webdev-api.loftschool.com/posts/${article.id}`, formData, token)
      .then(function(response){
        context.commit('changeArticle', response.post);
      })
    }
  }
}

let sendAjax = function(url, data, token){
  return new Promise(function(resolve){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.responseType = 'json';
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("Authorization", 'Bearer ' + token);
    xhr.addEventListener('load', ()=>{
        resolve(xhr.response);
    })
    xhr.send(data);
  })
}
let deleteDataAjax = function(url, token){
  return new Promise(function(resolve){
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', url);
    xhr.responseType = 'json';
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("Authorization", 'Bearer ' + token);
    xhr.addEventListener('load', ()=>{
        resolve(xhr.response);
    })
    xhr.send();
  })
}
let updateDataAjax = function(url, data, token){
  return new Promise(function(resolve){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.responseType = 'json';
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("Authorization", 'Bearer ' + token);
    xhr.addEventListener('load', ()=>{
        resolve(xhr.response);
    })
    xhr.send(data);
  })
}
let receiveDataAjax = function(url){
  return new Promise(function(resolve){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.addEventListener('load', ()=>{
        resolve(xhr.response);
    })
    xhr.send();
  })
}
export default articles;