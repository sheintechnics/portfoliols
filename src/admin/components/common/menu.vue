<template lang="pug">
  .navigation
    .container.container_menu
      nav.menu
        ul.menu__list
          li(:class="{menu__item_active: activeSkills.activeClass}").menu__item
            router-link(to="/admin/").menu__link Обо мне
          li(:class="{menu__item_active: activeArticles.activeClass}").menu__item
            router-link(to="/admin/blog").menu__link Блог
          li(:class="{menu__item_active: activeWorks.activeClass}").menu__item
            router-link(to="/admin/works").menu__link Мои работы
</template>
<script>
import {mapState} from 'vuex';
export default {
  computed: {
    ...mapState({
      activeSkills: state => state.skills.active,
      activeArticles: state => state.articles.active,
      activeWorks: state => state.works.active
    })
  }
}
</script>
<style lang="scss">
  .navigation{
    position: relative;
    background-color: #f0efe9;
  }
  .menu__list{
    display: flex;
  }
  .menu__item{
    min-width: 180px;
    position: relative;
    &:after{
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 2px;
      background-color: #fff;
    }
    &:last-child{
      &:after{
        content: none;
      }
    }
  }
  .menu__item_active{
    background-color: #fff;
    .menu__link{
      color: $light-green;
    }
  }
  .menu__link{
    color: $text-color-admin;
    opacity: 0.8;
    font-weight: 500;
    padding: 25px 0;
    width: 100%;
    display: block;
    text-align: center;
    &:hover{
      color: $light-green;
    }
  }

</style>


