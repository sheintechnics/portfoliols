<template lang="pug">
  .wrapper
    app-header
    app-menu
    router-view
</template>

<script>
import {mapActions} from 'vuex';
import {mapState} from 'vuex';
import header from "./components/common/header.vue";
import menu from "./components/common/menu.vue";
export default {
  components: {
    appHeader: header,
    appMenu: menu,
  },
  computed: {
    ...mapState({
      userId: state => state.user.userId
    })
  },
  watch: {
    userId(){
      this.getNewData();
    }
  },
  methods: {
    ...mapActions(
    { getSkillsData: "skills/getSkillsData",
      getArticlesData: "articles/getArticlesData",
      getWorksData: "works/getWorksData"
    }),
    getNewData(){
      this.getSkillsData(this.userId);
      this.getArticlesData(this.userId);
      this.getWorksData(this.userId);
    }
  }
};
</script>
<style lang="scss">
@import 'normalize.css';
@import './assets/styles/fonts.scss';
@import './assets/styles/mixins.scss';

body, html {
  height: 100%;
}

body {
  font-family: 'Roboto', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.42;
  color: $text-color-admin;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  overflow: hidden;
  min-height: 100%;
  position: relative;
  background: url('./assets/images/welcome-bg.jpg') center center / cover no-repeat;
  &:before{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(#fff, 0.85);
  }
}
.content{
  position: relative;
}
.content__title{
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 30px;
}
.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 50px 30px;
}
.container_header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 30px;
}
.container_menu{
  padding: 0;
}
.container_skills{

}
.container_blog{

}
.container_works{

}
svg{
  display: block;
}

a{
  text-decoration: none;
}

input{
  border: none;
}

button {
  cursor: pointer;
  padding: 0;
  background-color: initial;
  border: none;
  outline: none;
  font-family: 'Roboto', Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
}

.button{
  background-color: #00bfa5;
  padding: 14px 20px;
  border-radius: 5px;
  color: #fff;
  &:hover{
    background-color: #268b8a;
  }
}

* {
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
  li{
    list-style: none;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  margin: 0;
}

p {
  margin: 0;
  padding: 0;
}

.subtitle{
  font-size: 16px;
  font-weight: 500;
}
.content-wrap{
  display: flex;
}
</style>
