<template lang="pug">
  .header
    .container.container_header
      h1.header__title Панель администрирования
      //- a(href="/portfolio").header__link Вернуться на сайт
      a(href="/").header__link Вернуться на сайт
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .header{
    position: relative;
    background: $light-green;
  }
  .header__title{
    font-size: 28px;
    font-weight: 500;
    line-height: 1;
    color: #fff;
  }
  .header__link{
    color: #fff;
    text-decoration: underline;
    line-height: 1;
    opacity: 0.7;
    &:hover{
      text-decoration: none;
    }
    &:active{
      opacity: 1;
    }
  }
</style>

