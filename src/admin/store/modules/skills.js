const skills = {
  namespaced: true,
  state: { //состояние приложения, данные, которые внутри приложения используются
    skillsData: [],
    active: {
      activeClass: false
    }
  },
  getters: {//нужны для того чтобы вынимать какие то данные из общих данных приложения, из state, например если будет сложный объект с данными, чтобы не вытягивать каждый раз весь объект, мы можем здесь создать метод, который будет вытаскивать нам только нужные данные

  },
  mutations: {//нужны для того, чтобы описывать методы, которые будут изменять данные нашего приложения
    updateSkillsData(state, data){
      let skillPrepareDataFrontend = {};
      skillPrepareDataFrontend.category = 'Frontend';
      skillPrepareDataFrontend.key = 1;
      skillPrepareDataFrontend.skills = [];
      let skillPrepareDataBackend = {};
      skillPrepareDataBackend.category = 'Backend';
      skillPrepareDataBackend.key = 2;
      skillPrepareDataBackend.skills = [];
      let skillPrepareDataWorkflow = {};
      skillPrepareDataWorkflow.category = 'Workflow';
      skillPrepareDataWorkflow.key = 3;
      skillPrepareDataWorkflow.skills = [];

      data.forEach(function(item){
        switch (item.category){
          case 1:
          let skillsGroupsFrontend = {}
          skillsGroupsFrontend.id = item.id;
          skillsGroupsFrontend.title = item.title;
          skillsGroupsFrontend.percents = item.percents;
          skillPrepareDataFrontend.skills.push(skillsGroupsFrontend)
          break;
          case 2:
          let skillsGroupsBackend = {}
          skillsGroupsBackend.id = item.id;
          skillsGroupsBackend.title = item.title;
          skillsGroupsBackend.percents = item.percents;
          skillPrepareDataBackend.skills.push(skillsGroupsBackend)
          break;
          case 3:
          let skillsGroupsWorkflow = {}
          skillsGroupsWorkflow.id = item.id;
          skillsGroupsWorkflow.title = item.title;
          skillsGroupsWorkflow.percents = item.percents;
          skillPrepareDataWorkflow.skills.push(skillsGroupsWorkflow)
          break;
        }
      })
      
      state.skillsData.push(skillPrepareDataFrontend);
      state.skillsData.push(skillPrepareDataBackend);
      state.skillsData.push(skillPrepareDataWorkflow);
    },
    addSkill(state, data){
      let category = '';
      switch (data.category){
        case 1:
        category = 'Frontend';
        break;
        case 2:
        category = 'Backend';
        break;
        case 3:
        category = 'Workflow';
        break;
      }
      state.skillsData.forEach(function(item){

        if (category === item.category){
          let skillData = {};
          skillData.id = data.id;
          skillData.title = data.title;
          skillData.percents = data.percents;
          item.skills.push(skillData);
        }
      })
    },
    deleteSkill(state, id){
      state.skillsData.forEach(function(item){
        item.skills.forEach(function(skill, index, item){
          if(skill.id === id){
            item.splice(index, 1);
          }
        })
      })
    },
    updateSkill(state, data){
      state.skillsData.forEach(function(item){
        item.skills.forEach(function(skill, index, item){
          if(skill.id === data.id){
            skill.percents = data.percents;
          }
        })
      })
    }
  },
  actions: {//это методы которые описывают то, что с данными происходит, здесь мы их можем запросить или как то обработать
    getSkillsData(context, userId){
      receiveDataAjax(`https://webdev-api.loftschool.com/skills/${userId}`)
      .then(function(response){
        context.commit('updateSkillsData', response); // Осуществляем манипуляции с данными
      })
    },
    addSkill(context, data){
      let formData = new FormData();
      formData.append("title", data.name);
      formData.append("percents", 0);
      switch (data.category){
        case 'Frontend':
        formData.append("category", 1);
        break;
        case 'Backend':
        formData.append("category", 2);
        break;
        case 'Workflow':
        formData.append("category", 3);
        break;
      }

      let token = localStorage.getItem('token');
      sendAjax('https://webdev-api.loftschool.com/skills', formData, token)
      .then(function(response){
        context.commit('addSkill', response);
      })
    },
    deleteSkill(context, id){
      let token = localStorage.getItem('token');
      deleteDataAjax(`https://webdev-api.loftschool.com/skills/${id}`, token)
      .then(function(){
        context.commit('deleteSkill', id); // Осуществляем манипуляции с данными
      })
    },
    updateSkill(context, data){
      let formData = new FormData();
      formData.append("title", data.title);
      formData.append("percents", data.percents);
      switch (data.category){
        case 'Frontend':
        formData.append("category", 1);
        break;
        case 'Backend':
        formData.append("category", 2);
        break;
        case 'Workflow':
        formData.append("category", 3);
        break;
      }
      let token = localStorage.getItem('token');
      updateDataAjax(`https://webdev-api.loftschool.com/skills/${data.id}`, formData, token)
      .then(function(response){
        context.commit('updateSkill', response.skill); // Осуществляем манипуляции с данными
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
export default skills;