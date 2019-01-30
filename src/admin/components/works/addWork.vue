<template lang="pug">
  .work
    h3.subtitle.subtitle_work Добавить запись
    form.work-form
      label.work-form__label
        input(placeholder="Название проекта" type="text" v-model="work.title").work-form__input
      label.work-form__label
        input(placeholder="Технологии" type="text" v-model="work.techs").work-form__input
      label.work-form__label.work-form__label_last
        input(placeholder="Ссылка" type="text" v-model="work.link").work-form__input
      label.work-form__label.work-form__label_last
        input(type="file" @change="renederPicAndAddToData").work-form__input.work-form__input_file
        a.work-form__link
          img(src="../../assets/images/load-image.png").work-form__icon
          span.work-form__text Загрузить картинку
          span.preview(:style="{backgroundImage: preview.previewPic}")
      button(type="button" @click="editmode ? editCurrentWork(work) : addNewWork(work)").button {{editmode ? 'Изменить' : "Добавить"}}
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    computed: {
    ...mapState({
      editedWork: state=>state.works.editedWork,
      editmode: state=>state.works.editmode,
      work: state=>state.works.editmode ? state.works.editedWork : {id:0, title: "", techs: "", link: "", photo: ""},
      preview: state=>state.works.preview
    })
  },
  methods: {
    ...mapActions({
      addWork: "works/addWork",
      changeWork: "works/changeWork"
    }),
    addNewWork(work){
      this.addWork(work);
    },
    editCurrentWork(work){
      this.changeWork(work);
    },
    renederPicAndAddToData(e) {
      const file = e.target.files[0];
      const renderer = new FileReader();
      renderer.readAsDataURL(file);

      renderer.onloadend = () => {
          this.preview.previewPic = `url(${renderer.result})`;
      };

      this.work.photo = file;
  }
  }
}
</script>
<style lang="scss" scoped>
  .work{
    width: 40%;
  }
  .subtitle_work{
    margin-bottom: 15px;
  }
  .work-form{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .work-form__label{
    margin-bottom: 20px;
  }
  .work-form__label_last{
    margin-bottom: 43px;
  }
  .work-form__input{
    width: 300px;
    padding: 14px 20px;
    border-radius: 5px;

  }
  .work-form__link{
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .work-form__icon{
    display: block;
    margin: 0 10px;
  }
  .work-form__text{
    color: #268b8a;
    margin-right: 10px;
  }
  .work-form__input_file{
    display: none;
  }
  .preview{
    display: block;
    height: 100px;
    width: 100px;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

