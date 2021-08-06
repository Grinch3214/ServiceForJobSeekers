<template>
  <div class="card px-1 py-2 p-md-2 my-2">
    <div class="row">

      <div class="col-4 col-sm-3 col-md-2 w-auto d-flex flex-column order-1 align-items-md-center">
        <div>
          <b-avatar
            size="7em"
            variant="light-secondary"
            text="A"
          />
        </div>
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
        <h5
          v-b-toggle.sidebar-right
          class="pointer"
        >{{ 'Name SecondName' }}</h5>
        <p class="mb-25">
          Front-end Developer.
        </p>
        <p>HTML/CSS coder</p>
        <div class="d-flex align-items-center">
          <feather-icon icon="MapPinIcon" />
          <span class="pl-50">Киев, Украина</span>
        </div>
      </div>

      <div class="mw-100 d-none col-md-2 d-md-flex flex-column ml-md-0 order-4 order-md-3">
        <div class="text-right">
          <b-button
            v-ripple.400="'rgba(40, 199, 111, 0.15)'"
            variant="flat-secondary"
            class="btn-icon rounded-circle"
          >
            <feather-icon
              icon="ThumbsDownIcon"
              size="20"
            />
          </b-button>
        </div>
      </div>

      <div class="d-none d-md-flex col-md-4 ml-auto flex-column order-3 order-md-4 mt-0">
        <div>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="info"
          >
            Добавить в папку
          </b-button>
        </div>
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
        <p
          v-b-toggle.sidebar-right
          class="text-primary mb-25"
        >Подробнее</p>
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
    <div class="d-flex d-md-none align-items-center justify-content-center">
      <div class="mr-5">
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          variant="flat-secondary"
          class="btn-icon rounded-circle"
        >
          <feather-icon
            icon="ThumbsDownIcon"
            size="20"
          />
        </b-button>
      </div>
      <div>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="info"
        >
          Добавить в папку
        </b-button>
      </div>
    </div>
    <b-sidebar
      id="sidebar-right"
      bg-variant="white"
      right
      backdrop
      shadow
      width="750px"
      body-class="px-1 px-md-5"
    >
      <user-more-information />
    </b-sidebar>
  </div>
</template>

<script>
import {
  BAvatar, BBadge, BButton, BSidebar, VBToggle,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import UserMoreInformation from './UserMoreInformation.vue'

export default {
  components: {
    BAvatar,
    BBadge,
    BButton,
    BSidebar,
    UserMoreInformation,
  },
  directives: {
    'b-toggle': VBToggle,
    Ripple,
  },
}
</script>

<style lang="scss">
  .pointer {
      cursor: pointer;
  }
  .b-sidebar > .b-sidebar-header .close {
    font-size: 2.5rem;
}
</style>
