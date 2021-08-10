<template>
  <div>
    <div class="row align-items-center">
      <b-form-group
        label=""
        label-for="location"
        class="col-9 col-md-4 order-3 order-md-1"
      >
        <b-form-input
          id="location"
          placeholder="Локация"
        />
      </b-form-group>
      <b-form-group
        label=""
        label-for="searchCandidate"
        class="col-9 col-md-4 col-lg-5 order-1 order-md-2"
      >
        <b-form-input
          id="searchCandidate"
          placeholder="Например JS Javascript"
        />
      </b-form-group>
      <div class="col-12 col-md-2 order-4 order-md-3 mb-3 mb-md-0 text-right">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="warning"
          class="mb-1"
        >
          Найти
        </b-button>
      </div>
      <div class="col-2 col-md-1 order-2 order-md-4 d-flex align-items-center">
        <div>
          <b-button
            v-b-modal.modal-filters
            v-ripple.400="'rgba(40, 199, 111, 0.15)'"
            variant="flat-secondary"
            class="btn-icon rounded-circle mb-1"
          >
            <feather-icon
              icon="FilterIcon"
              size="20"
            />
          </b-button>
        </div>
        <div class="d-md-none mb-1">
          <b-button
            v-ripple.400="'rgba(40, 199, 111, 0.15)'"
            variant="flat-secondary"
            class="p-0"
          >
            <feather-icon
              icon="FilePlusIcon"
              size="20"
              class="mr-50"
            />
          </b-button>
        </div>
      </div>
    </div>
    <h3 class="mb-2">
      Найдено: {{ '2 345' }} кандидатов</h3>
    <div class="row align-items-center mb-3">
      <div class="col-12 col-md-3">
        <b-form-checkbox
          v-model="selected"
          value="A"
        >
          Скрыть рекрутёров
        </b-form-checkbox>
      </div>
      <div class="col-12 col-md-6">
        <b-form-checkbox
          v-model="selected"
          value="B"
        >
          Скрыть просмотренных за последние <span class="text-primary">7 дней</span>
        </b-form-checkbox>
      </div>
      <div class="col-3 d-none d-md-block">
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          variant="flat-secondary"
          class="p-0"
        >
          <feather-icon
            icon="FilePlusIcon"
            size="20"
            class="mr-50"
          />
        </b-button>
        <span class="align-middle ml-50">Сохранить поиск</span>
      </div>
    </div>

    <candidate-folder />
    <b-modal
      id="modal-filters"
      ok-only
      ok-title="Accept"
      centered
      size="lg"
      hide-footer
      class="pr-0"
    >
      <div class="row mt-3">
        <div class="col-12 col-md-4 order-1">
          <b-form-group
            label-for="positionInput"
          >
            <b-form-input
              id="positionInput"
              placeholder="Должность"
            />
          </b-form-group>
        </div>

        <div class="col-12 col-md-4 order-2">
          <b-form-group
            label-for="skillInput"
          >
            <b-form-input
              id="skillInput"
              placeholder="Навыки"
            />
          </b-form-group>
        </div>

        <div class="col-12 col-md-4 order-3">
          <b-form-group
            label-for="workLabel"
          >
            <b-form-input
              id="workLabel"
              placeholder="Места работы"
            />
          </b-form-group>
        </div>

        <div class="offset-md-4 col-12 col-md-4 order-4">
          <b-form-checkbox
            v-model="selectedFilters"
            value="topSkills"
            class="mb-1 mb-md-3"
          >
            Только ТОП навыки
          </b-form-checkbox>
        </div>

        <div class="col-12 col-md-4 order-5">
          <b-form-checkbox
            v-model="selectedFilters"
            value="nowWork"
            class="mb-1 mb-md-3"
          >
            Только текущее место работы
          </b-form-checkbox>
        </div>

        <div class="col-12 col-md-6 order-6">
          <h5 class="mb-2">
            Опыт работы, лет</h5>
          <p>От {{ skill[0] }} до {{ skill[1] }}</p>
          <vue-slider
            v-model="skill"
            :min="min"
            :max="max"
            :direction="direction"
            class="mb-2"
          />
        </div>

        <div class="col-12 col-md-6 order-7">
          <h5 class="mb-2">
            На последнем месте работы</h5>
          <p>От {{ lastWork[0] }} до {{ lastWork[1] }}</p>
          <vue-slider
            v-model="lastWork"
            :min="min"
            :max="max"
            :direction="direction"
            class="mb-2"
          />
        </div>

        <div class="col-12 col-md-6 order-8">
          <b-form-group
            label="Endorsements:"
            label-for="globalSearchInput"
            label-class="h5"
          >
            <b-form-input
              id="globalSearchInput"
              v-model="searchCheckBox"
              placeholder="Поиск"
            />
          </b-form-group>
        </div>

        <div class="col-12 col-md-6 order-10 order-md-9">
          <h5 class="mb-1">
            Дополнительно:</h5>
          <b-form-checkbox
            v-model="contact"
            value="contact"
            class="mb-1"
          >
            С контактами
          </b-form-checkbox>
          <b-form-checkbox
            v-model="contact"
            value="language"
            class="mb-1"
          >
            Хороший уровень английского
          </b-form-checkbox>
        </div>

        <div class="col-12 col-md-6 order-9 order-md-10">
          <b-form-checkbox-group
            v-model="endorsements"
            :options="endorsementsOptions"
            value-field="item"
            text-field="name"
            stacked
            class="mb-1 child-mb-1"
          />
        </div>

        <div class="col-12 d-md-none order-11">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="mr-1 mb-1"
          >
            Применить
          </b-button>
          <b-button
            v-ripple.400="'rgba(255, 159, 67, 0.15)'"
            variant="outline-warning"
            class="mr-1 mb-1"
          >
            Отмена
          </b-button>
        </div>

      </div>
    </b-modal>
  </div>
</template>

<script>
import {
  BFormInput, BFormGroup, BButton, BFormCheckbox, BModal, VBModal, BFormCheckboxGroup,
} from 'bootstrap-vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'
import Ripple from 'vue-ripple-directive'
import CandidateFolder from '@/anworks/candidates/Candidate-folder.vue'

export default {
  components: {
    BFormInput,
    BFormGroup,
    BButton,
    BFormCheckbox,
    CandidateFolder,
    BModal,
    VueSlider,
    BFormCheckboxGroup,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      searchCheckBox: '',
      selected: ['B'],
      selectedFilters: ['nowWork'],
      lastWork: [0, 1],
      skill: [0, 1],
      min: 0,
      max: 10,
      dir: 'ltr',
      endorsements: [],
      endorsementsOptions: [
        { item: 'net', name: '.NET (3072)' },
        { item: 'activeDirectory', name: 'Active Directory (204)' },
        { item: 'adoNet', name: 'ADO.NET (312)' },
        { item: 'agile', name: 'Agile (7289)' },
        { item: 'amazon', name: 'Amazon Web Services (519)' },
        { item: 'android', name: 'Android (4817)' },
        { item: 'arp', name: 'ARP (2)' },
        { item: 'angularJs', name: 'AngularJS (1094)' },
        { item: 'vue', name: 'VueJS (231)' },
      ],
      contact: ['language'],
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-slider.scss';
    .child-mb-1 {
      .custom-control {
        margin-bottom: 1rem;
      }
    }
</style>
