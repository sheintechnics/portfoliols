<template lang="pug"> 
  form(@submit="updateCurrentSkill").skill
    label.skill__label
      .skill__title {{skill.title}}
      input(:value="skill.percents" name="percents" :class="{skill__percent_readonly:!readonly}" :readonly="readonly").skill__percent
      span.skill__text %
    button(type="button" @click="readonly=!readonly").skill__button.skill__button_margin-right
      span.skill__change
        img(src="../../assets/images/pencil.png").skill__pencil
    button(type="button" @click="deleteCurrentSkill").skill__button
      span.skill__delete
        img(src="../../assets/images/cancel.png").skill__cancel
        //- svg(class=`pencil-icon`)
        //-   use(xlink:href=`../../assets/icons/sprite.svg#pencil`)
</template>
<script>
import {mapActions} from 'vuex';
export default {
  props: {
    skill: {
      type: Object,
      default: ()=>{}
    },
    category: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      readonly: true
    }
  },
  methods: {
    ...mapActions({deleteSkill: "skills/deleteSkill", updateSkill: "skills/updateSkill"}),
    deleteCurrentSkill(){
      this.deleteSkill(this.skill.id);
    },
    updateCurrentSkill(e){
      e.preventDefault();
      let form = e.target;
      let value = form.elements.percents.value;
      let data = {};
      data.id = this.skill.id;
      data.title = this.skill.title;
      data.percents = value;
      data.category = this.category;
      this.updateSkill(data);
      form.elements.percents.value = '';
      this.readonly = true;
    }
  }
}
</script>
<style lang="scss" scoped>
.skill{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:last-child{
    margin-bottom: 0;
  }
}
.skill__label{
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.skill__title{
  width: 105px;
}
.skill__percent{
  width: 46px;
  text-align: center;
  padding: 8px 0;
  margin-right: 10px;
  border-radius: 5px;
  opacity: 0.5;
}
.skill__percent_readonly{
  opacity: 1;
}
.skill__button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
}
.skill__button_margin-right{
  margin-right: 10px;
}
.skill__change{
  width: 17px;
  height: 17px;
}
.skill__delete{
  width: 15px;
  height: 15px;
}
</style>
