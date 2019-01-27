<template lang="pug">
  .last
    h3.subtitle.subtitle_last Последние записи
    table.table
      thead.table__thead
        tr.table__tr
          th.table__th Название
          th.table__th Технологии
          th.table__th Ссылка
          th.table__th Превью
          th.table__th
      tbody.table__tbody
        tr(v-for="work in worksData").table__tr
          td.table__td {{work.title}}
          td.table__td {{work.techs}}
          td.table__td {{work.link}}
          td.table__td 
            img(width="100", height="100" alt="" :src="`https://webdev-api.loftschool.com/${work.photo}`")
          td.table__td
            button(type="button" @click="editExistedWork(work)").last__button.last__button_margin-bottom
              span.last__change
                img(src="../../assets/images/pencil.png").last__pencil
            button(type="button" @click="deleteCurrentWork(work.id)").last__button
              span.last__delete
                img(src="../../assets/images/cancel.png").last__cancel
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState({
      worksData: state => state.works.worksData
    })
  },
  methods: {
    ...mapActions({deleteWork: "works/deleteWork"}),
    ...mapMutations({
      editWork: "works/editWork"
    }),
    deleteCurrentWork(id){
      this.deleteWork(id);
    },
    editExistedWork(work){
      this.editWork(work);
    }
  }
}
</script>

<style lang="scss">
.subtitle_last{
  margin-bottom: 15px;
}
.table{
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 5px;
  width: 530px;
}
.table__thead{
  text-align: left;

}
.table__th{
  border-bottom: 1px solid $light-green;
  padding: 20px 0 20px 30px;
  font-weight: 500;
  font-size: 14px;
}
.table__td{
  padding: 20px 0 20px 30px;
  font-size: 14px;
  &:last-child{
    padding-right: 40px;
  }
}
.last__button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
}
.last__button_margin-bottom{
  margin-bottom: 10px;
}
.last__change{
  width: 17px;
  height: 17px;
}
.last__delete{
  width: 15px;
  height: 15px;
}
</style>