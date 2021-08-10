<template>
  <div class="card px-1 py-2 p-md-2 my-2">
    <div class="row">

      <div class="col-4 col-sm-3 col-md-2 w-auto d-flex flex-column order-1 align-items-md-center">
        <b-avatar
          size="7em"
          variant="light-secondary"
          text="A"
        />
        <div class="mt-1 d-block d-md-none">
          <b-badge variant="warning text-wrap">
            В поиске работы
          </b-badge>
        </div>
      </div>

      <div class="col-6 col-md-4 d-flex flex-column order-2">
        <div class="mb-1 d-none d-md-block">
          <b-badge variant="warning">
            В поиске работы
          </b-badge>
        </div>
        <h5>Юрий Ивашин</h5>
        <p class="mb-25">
          Front-end Developer.
        </p>
        <p>HTML/CSS coder</p>
        <div class="d-flex align-items-center">
          <feather-icon icon="MapPinIcon" />
          <span class="pl-50">Киев, Украина</span>
        </div>
      </div>

      <div class="col-9 col-md-4 ml-auto d-flex flex-column order-4 order-md-3 mt-1 mt-md-0">
        <b-form-group>
          <v-select
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="title"
            :options="option"
          />
        </b-form-group>
      </div>

      <div class="mw-100 col-2 col-md-1 d-flex flex-column ml-n1 ml-md-0 order-3 order-md-4">
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          variant="flat-secondary"
          class="btn-icon rounded-circle"
        >
          <feather-icon
            icon="TrashIcon"
            size="20"
          />
        </b-button>
      </div>

    </div>
    <div class="row mt-2">
      <div class=" col-4 col-sm-2">
        <p class="text-muted">
          Опыт работы:
        </p>
        <p class="text-muted">
          5 лет
        </p>
      </div>
      <div class="col-8 col-sm-10">
        Customer Support Specialist 5CA Full-time Full-time Jun 2018 – Nov 2020 (2 рiк 5 months) Project Manager Computools Full-time Full-time Mar 2018 – Apr 2019 (1 рiк 1 міс.) Gaming Support Agent Aventador Full-time Full-time Sep 2016 – Feb 2018 (1 рiк 5 months)
      </div>
    </div>

    <div class="row mt-2">
      <div class=" col-4 col-sm-2">
        <p class="text-muted">
          Резюме:
        </p>
      </div>
      <div class="col-8 col-sm-10">
        <p class="mb-25">
          Working with cross-functional teams;
        </p>
        <p class="mb-25">
          Working under pressure;
        </p>
        <p class="mb-25">
          Customer Support Specialist
        </p>
        <p class="mb-25">
          Working with cross-functional teams;
        </p>
        <p class="mb-25">
          Working under pressure;
        </p>
        <p class="mb-25">
          Customer Support Specialist
        </p>
      </div>
    </div>

    <div class="row mt-2">
      <div class=" col-4 col-sm-2">
        <p class="text-muted">
          Контакты:
        </p>
      </div>
      <div class="col-8 col-sm-10">
        <p><span class="text-muted">Email:</span> ivashyn.yurii@gmail.com</p>
        <p><span class="text-muted">Телефон:</span> +380668201573</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BAvatar, BBadge, BFormGroup, BButton,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BAvatar,
    BBadge,
    BFormGroup,
    vSelect,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      selected: { title: 'Новые' },
      option: [{ title: 'Новые' }, { title: 'В работе' }, { title: 'Собеседование' }, { title: 'Предложение' }, { title: 'Отказано' }],
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
