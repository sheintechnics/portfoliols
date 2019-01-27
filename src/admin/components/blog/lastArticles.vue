<template lang="pug">
  .last
    h3.subtitle.subtitle_last Последние записи
    table.table
      thead.table__thead
        tr.table__tr
          th.table__th Название
          th.table__th Дата
          th.table__th Содержание
          th.table__th
      tbody.table__tbody
        tr(v-for="article in articlesData").table__tr
          td.table__td {{article.title}}
          td.table__td {{article.date}}
          td.table__td {{article.content}}
          td.table__td
            button(type="button" @click="editExistedArticle(article)").last__button.last__button_margin-bottom
              span.last__change
                img(src="../../assets/images/pencil.png").last__pencil
            button(type="button" @click="deleteCurrentArticle(article.id)").last__button
              span.last__delete
                img(src="../../assets/images/cancel.png").last__cancel
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState({
      articlesData: state => state.articles.articlesData
    })
  },
  methods: {
    ...mapActions({deleteArticle: "articles/deleteArticle"}),
    ...mapMutations({
      editArticle: "articles/editArticle"
    }),
    deleteCurrentArticle(id){
      this.deleteArticle(id);
    },
    editExistedArticle(article){
      this.editArticle(article);
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
