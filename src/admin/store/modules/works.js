const works = {
  namespaced: true,
  state: {
    worksData: [],
    active: {
      activeClass: false
    },
    preview: {
      previewPic: ""
    },
    editmode: false,
    editedWork: {}
  },
  getters: {

  },
  mutations: {
    updateWorksData(state, data){
      state.worksData = data;
    },
    addWork(state, work){
      state.worksData.push(work)
    },
    deleteWork(state, id){
      state.worksData.forEach(function(item, index, items){
        if(item.id===id){
          items.splice(index, 1);
        }
      })
    },
    editWork(state, work){
      state.editmode = true;

      state.editedWork.id = work.id;
      state.editedWork.title = work.title;
      state.editedWork.link = work.link;
      state.editedWork.techs = work.techs;
      
      state.preview.previewPic = `url(https://webdev-api.loftschool.com/${work.photo}`;
    },
    changeWork(state, work){
      state.worksData.forEach(function(item){
        if(item.id===state.editedWork.id){
          item.title = work.title;
          item.link = work.link;
          item.techs = work.techs;
          item.photo = work.photo;
        }
      })
      state.editmode = false;
    }
  },
  actions: {
    getWorksData(context, userId){
      receiveDataAjax(`https://webdev-api.loftschool.com/works/${userId}`)
      .then(function(response){
        context.commit('updateWorksData', response); // Осуществляем манипуляции с данными
      })
    },
    addWork({commit}, work){
      const formData = new FormData();

      Object.keys(work).forEach(key => {
        const value = work[key];
        formData.append(key, value);
      });

      let token = localStorage.getItem('token');
      sendAjax('https://webdev-api.loftschool.com/works', formData, token)
      .then(function(response){
        commit('addWork', response);
      })
    },
    deleteWork(context, id){
      let token = localStorage.getItem('token');
      deleteDataAjax(`https://webdev-api.loftschool.com/works/${id}`, token)
      .then(function(){
        context.commit('deleteWork', id);
      })
    },
    changeWork(context, work){
      let formData = new FormData();
      Object.keys(work).forEach(key => {
        const value = work[key];
        formData.append(key, value);
      });

      let token = localStorage.getItem('token');
      updateDataAjax(`https://webdev-api.loftschool.com/works/${work.id}`, formData, token)
      .then(function(response){
        context.commit('changeWork', response.work);
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
export default works;