<template lang="pug">
  .content
    .container.container_works
      h2.content__title Страница «Мои работы»
      .content-wrap
        add-work
        last-works
</template>
<script>
import addWork from './works/addWork.vue';
import lastWorks from './works/lastWorks.vue';
import {mapState} from 'vuex';
export default {
  components: {
    addWork, lastWorks
  },
  computed: {
    ...mapState({
      active: state => state.works.active
    })
  },
  created(){
    this.active.activeClass = true;
  },
  destroyed(){
    this.active.activeClass = false;
  }
}
</script>
<style lang="scss">

</style>
