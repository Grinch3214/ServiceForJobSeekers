<template>
  <div>
    <div class="d-flex align-items-center">
      <b-avatar
        size="70px"
        variant="primary"
      />
      <p class="h4 ml-2">
        Epam <br>
        <span class="h6 text-muted">Работодатель</span>
      </p>
    </div>

    <div class="row">
      <div class="col-md-7 card mt-0 mt-md-2 py-1 mx-1 mx-md-0 d-flex order-2 order-md-1">
        <div>
          <div class="d-flex align-items-center justify-content-between">
            <p class="h4">Информация о компании
            </p>
            <div>
              <b-button
                v-ripple.400="'rgba(110, 107, 123, 0.15)'"
                variant="flat-secondary"
                class="btn-icon rounded-circle"
              >
                <feather-icon
                  icon="Edit2Icon"
                  size="20"
                />
              </b-button>
            </div>
          </div>
          <p class="text-dark mt-n1">
            Основная информация</p>
        </div>
        <div class="mb-1">Название компании
          <p class="h5">EPAM
          </p>
        </div>
        <div class="mb-1">Email
          <p class="h5">EpamCompany@gmail.com
          </p>
        </div>
        <div class="mb-1">Количество сотрудников
          <p class="h5">100-500
          </p>
        </div>
        <div class="mb-2 h5">Количество сотрудников
          <p class="font-weight-normal">Телефон
          </p>
          <p>+38 (063) 834 32 56
          </p>
          <p>+38 (095) 384 58 23
          </p>
        </div>

        <div class="mb-2 text-dark">
          Социальные сети
        </div>
        <div class="row">
          <p class="col-4 col-md-3">
            Linkedin</p>
          <p class="col-8 col-md-9 h5">
            https://www.linkedin.com/in/Epam_company-a5aa0b145/</p>
        </div>
        <div class="row">
          <p class="col-4 col-md-3">
            Facebook</p>
          <p class="col-8 col-md-9 h5">
            https://www.facebook.com/Epam_company/</p>
        </div>
        <div class="row">
          <p class="col-4 col-md-3">
            Skype</p>
          <p class="col-8 col-md-9 h5">
            Epam_company</p>
        </div>
        <div class="row">
          <p class="col-4 col-md-3">
            Telegram</p>
          <p class="col-8 col-md-9 h5">
            @Epam_company</p>
        </div>
        <div class="row">
          <p class="col-4 col-md-3">
            Instagram</p>
          <p class="col-8 col-md-9 h5">
            @Epam_company</p>
        </div>

        <div class="mt-2 text-dark">
          Бонусы компании</div>
        <div class="mt-1">
          <b-badge
            variant="primary"
            class="px-2 py-75 mr-1 mb-1"
          >Гибкий график
          </b-badge>
          <b-badge
            variant="primary"
            class="px-2 py-75 mr-1 mb-1"
          >Офис в центре
          </b-badge>
          <b-badge
            variant="primary"
            class="px-2 py-75 mr-1 mb-1"
          >Спортзал
          </b-badge>
        </div>
      </div>
      <div class="col-md-5 mt-2 h4 d-flex flex-column order-1 order-md-2">Заполнение профиля
        <div class="card mt-2">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <b-button
                v-ripple.400="'rgba(110, 107, 123, 0.15)'"
                variant="flat-secondary"
                class="btn-icon rounded-circle ml-50"
              >
                <feather-icon
                  icon="Edit2Icon"
                  size="20"
                />
              </b-button>
            </div>
            <h5 class="mb-0 flex-grow-1">
              Информация о компании</h5>
            <div id="chart">
              <vue-apex-charts
                type="radialBar"
                width="90"
                height="95"
                :options="chartOptions"
                :series="series"
              />
            </div>
          </div>
        </div>

        <div class="card">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <b-button
                v-ripple.400="'rgba(110, 107, 123, 0.15)'"
                variant="flat-secondary"
                class="btn-icon rounded-circle ml-50"
              >
                <feather-icon
                  icon="Edit2Icon"
                  size="20"
                />
              </b-button>
            </div>
            <h5 class="mb-0 flex-grow-1">
              Условия работы</h5>
            <div id="chart">
              <vue-apex-charts
                type="radialBar"
                width="90"
                height="95"
                :options="chartOptions"
                :series="series1"
              />
            </div>
          </div>
        </div>

        <div class="card">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <b-button
                v-ripple.400="'rgba(110, 107, 123, 0.15)'"
                variant="flat-secondary"
                class="btn-icon rounded-circle ml-50"
              >
                <feather-icon
                  icon="Edit2Icon"
                  size="20"
                />
              </b-button>
            </div>
            <h5 class="mb-0 flex-grow-1">
              Контакты</h5>
            <div id="chart">
              <vue-apex-charts
                type="radialBar"
                width="90"
                height="95"
                :options="chartOptions"
                :series="series2"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { BAvatar, BButton, BBadge } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    BAvatar,
    BButton,
    BBadge,
    VueApexCharts,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      series: [75],
      series1: [45],
      series2: [25],
      chartOptions: {
        chart: {
          height: 100,
          type: 'radialBar',
        },
        colors: ['#28C76F'],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '40%',
            },
          },
        },
        labels: [''],
      },

    }
  },
}
</script>

<style>

</style>
