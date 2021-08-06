<template>
  <div>
    <b-button
      v-b-modal.modal-center
      variant="warning"
    >
      Создать папку
    </b-button>

    <b-modal
      id="modal-center"
      centered
      title="Создать папку"
      hide-footer
    >

      <b-form-group
        label="Название папки"
        label-for="basicInput"
        label-class="h5"
        class="my-2"
      >
        <b-form-input
          id="basicInput"
          placeholder="Название"
        />
      </b-form-group>

      <template>
        <h5>Описание</h5>
        <b-form-textarea
          id="textarea-rows"
          placeholder="Описание папки"
          rows="5"
          class="mb-2"
        />
      </template>

      <div>
        <h5 class="pb-50">
          Видимость</h5>
        <b-form-radio
          v-model="Selected"
          name="some-radios"
          value="onlyMe"
          class="mb-50 mr-1"
        >
          Только мне
        </b-form-radio>
        <b-form-radio
          v-model="Selected"
          name="some-radios"
          value="allVisible"
        >
          Всей команде
        </b-form-radio>
      </div>

      <div class="row">
        <h5 class="col-12 mt-2 mb-0">
          Этапы</h5>
        <b-form-checkbox
          v-model="stage"
          value="new"
          class="col-12 col-sm-4 mt-1 ml-1"
        >
          Новые
        </b-form-checkbox>
        <b-form-checkbox
          v-model="stage"
          value="inWork"
          class="col-12 col-sm-4 mt-1 ml-1"
        >
          В работе
        </b-form-checkbox>
        <b-form-checkbox
          v-model="stage"
          value="offer"
          class="col-12 col-sm-4 mt-1 ml-1"
        >
          Предложение
        </b-form-checkbox>
        <b-form-checkbox
          v-model="stage"
          value="interview"
          class="col-12 col-sm-4 mt-1 ml-1"
        >
          Собеседование
        </b-form-checkbox>
        <b-form-checkbox
          v-model="stage"
          value="hired"
          class="col-12 col-sm-4 mt-1 ml-1"
        >
          Нанято
        </b-form-checkbox>
        <b-form-checkbox
          v-model="stage"
          value="fail"
          class="col-12 col-sm-4 mt-1 ml-1"
        >
          Отказано
        </b-form-checkbox>
      </div>

      <div class="h5 mt-2">
        Если нет необходимого этапа, <a href="#">напишите нам</a>.</div>

      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="warning"
        class="my-5 d-block mx-auto"
      >
        Создать папку
      </b-button>
    </b-modal>
  </div>
</template>

<script>
import {
  BButton, BFormInput, BFormGroup, BFormTextarea, BFormRadio, BFormCheckbox,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BFormInput,
    BFormGroup,
    BFormTextarea,
    BFormRadio,
    BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      Selected: 'allVisible',
      stage: [''],
    }
  },
}
</script>

<style lang="scss">

</style>
