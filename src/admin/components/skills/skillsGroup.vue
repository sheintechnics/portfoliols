<template lang="pug">
  .skills-group
    h3.subtitle.subtitle_skills {{skillData.category}}
    .skills-group__content
      .skill-wrap
        skill(:key="skill.id" :category="skillData.category" :skill="skill" v-for="skill in skillData.skills")
      form(@submit="addNewSkill").form
        label.form__label
          input(placeholder="Название" name="name").form__input
        button(type="submit").button.form__submit Добавить
</template>

<script>
import skill from './skill.vue';
import {mapActions} from 'vuex';
export default {
  components: {
    skill
  },
  props: {
    skillData: {
      type: Object,
      default: ()=>{}
    }
  },
  methods: {
    ...mapActions({addSkill: 'skills/addSkill'}),
    addNewSkill(e){
      e.preventDefault();
      let form = e.target;
      let name = form.elements.name.value;
      let data = {};
      data.name = name;
      data.category = this.skillData.category;
      this.addSkill(data);
      form.elements.name.value = '';
    }
  }
}
</script>
<style lang="scss">
  .skills-group{
    margin-left: 120px;
    margin-top: 35px;
  }
  .subtitle_skills{
    margin-bottom: 20px;
  }
  .skills-group__content{
    display: flex;
    flex-direction: column;
    padding-left: 20px;
  }
  .skill-wrap{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .form__label{
    margin-right: 12px;
  }
  .form__input{
    background-color: #fff;
    padding: 14px 20px;
    border-radius: 5px;
    width: 188px;
  }
</style>

