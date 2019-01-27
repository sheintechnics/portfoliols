import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //Добавляем во Vue методы Vuex

import skills from './modules/skills';
import articles from './modules/articles';
import works from './modules/works';
import user from './modules/user';

export const store = new Vuex.Store({
  modules: {
    skills, articles, works, user
  }
})