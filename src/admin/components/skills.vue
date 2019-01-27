<template lang="pug">
  .content
    .container.container_skills
      h2.content__title Страница «Обо мне»
      .skills-groups
        skills-group(:key="skillData.key" v-for="skillData in skillsData" :skillData="skillData")
</template>
<script>
import skillsGroup from './skills/skillsGroup.vue';
import {mapState} from 'vuex';
export default {
  components: {
    skillsGroup
  },
  computed: {
    ...mapState({
      skillsData: state => state.skills.skillsData,
      active: state => state.skills.active
    })
  },
  created(){
    this.active.activeClass = true;
    console.log('skills создан');
  },
  mounted(){
    console.log('skills примонтирован');
  },
  destroyed(){
    this.active.activeClass = false;
  },
  beforeRouteEnter (to, from, next) {
  // вызывается до подтверждения пути, соответствующего этому компоненту.
  // НЕ ИМЕЕТ доступа к контексту экземпляра компонента `this`,
  // так как к моменту вызова экземпляр ещё не создан!
    console.log('Компонент скилл');
    next();
  }
}
</script>
<style lang="scss">
  .skills-groups{
    display: flex;
    flex-wrap: wrap;
    margin-left: -120px;
    margin-top: -35px;
  }
</style>
