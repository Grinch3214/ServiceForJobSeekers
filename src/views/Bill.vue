<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-5">
      <div class="card p-1 p-md-3 flex-row justify-content-between">
        <div>
          <h4>Статус</h4>
          <p class="h5">
            Не оплачено
          </p>
          <p>Действует до: <span>26.07.2021</span></p>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            v-b-modal.modal-lg
            variant="warning"
          >
            Пополнить счёт
          </b-button>
          <b-modal
            id="modal-lg"
            ok-only
            ok-title="Accept"
            centered
            size="lg"
            title="Large Modal"
            hide-footer
            hide-header
          >
            <div class="text-center my-3">
              <h4>Пополнить счёт</h4>
              <p class="font-weight-bold">
                Ваш текущий тариф: {{ 14 }}$ / мес</p>
            </div>
            <div class="row flex-wrap justify-content-center align-items-center">
              <div class="col-5 mb-2">
                <p class="text-center">
                  1 неделя</p>
                <label class="card-block">
                  <input
                    class="card-radio"
                    name="plan"
                    type="radio"
                    value="week"
                  ><div class="card-plan ml-auto d-flex flex-column justify-content-center align-items-center">
                    <p class="h1 m-0">6,65$</p>
                  </div>
                </label>
              </div>
              <div class="col-5 mb-2">
                <p>1 месяц</p>
                <label class="card-block">
                  <input
                    class="card-radio"
                    name="plan"
                    type="radio"
                    value="month-1"
                  ><div class="card-plan d-flex flex-column justify-content-center align-items-center">
                    <p class="h1 m-0">14$</p>
                  </div>
                </label>
              </div>
              <div class="col-5 mb-2">
                <p class="text-center">
                  3 месяца</p>
                <label class="card-block">
                  <input
                    class="card-radio"
                    name="plan"
                    type="radio"
                    value="month-3"
                  ><div class="card-plan ml-auto d-flex flex-column justify-content-center align-items-center">
                    <p class="h1 m-0">54$</p>
                    <p>+ Неделя <br> в подарок</p>
                  </div>
                </label>
              </div>
              <div class="col-5 mb-2">
                <p>6 месяцев</p>
                <label class="card-block">
                  <input
                    class="card-radio"
                    name="plan"
                    type="radio"
                    value="month-6"
                  ><div class="card-plan d-flex flex-column justify-content-center align-items-center">
                    <p class="h1 m-0">114$</p>
                    <p>+2 недели <br> в подарок</p>
                  </div>
                </label>
              </div>
            </div>
            <div class="m-2 m-md-5 text-center">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="warning"
              >
                Продолжить
              </b-button>
            </div>
          </b-modal>
        </div>
        <div>
          <h4>Тариф</h4>
          <p class="h4">
            <span>{{ 19 }}$ </span> / мес</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 p-2 p-md-1">
      <h4>Создать команду</h4>
      <p>Создайте свою команду, чтобы управлять подписками и доступом участников</p>
      <div>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-modal.modal-team
          variant="success"
          class="my-2"
        >
          Создать команду
        </b-button>
        <b-modal
          id="modal-team"
          ok-only
          ok-title="Accept"
          centered
          size="md"
          title=""
          hide-footer
          hide-header
          body-class="px-md-2 mx-md-5"
        >
          <h3 class="my-2 my-md-5">
            Добавьте участников команды</h3>
          <div class="row align-items-end">
            <div class="col-7 col-md-8">
              <b-form-group
                label="Email коллеги"
                label-for="teamMail"
                label-class="pb-0 font-weight-bold h5"
              >
                <b-form-input
                  id="teamMail"
                  placeholder="Email"
                />
              </b-form-group>
            </div>
            <div class="col-4 pl-0 pl-md-1">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="secondary"
                class="mb-1"
              >
                Добавить
              </b-button>
            </div>
            <p class="text-muted pl-1 mb-2 mb-md-4 small">
              Добавить можно только зарегистрированого пользователя</p>
            <div class="d-flex m-auto flex-wrap justify-content-center">
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                variant="outline-secondary"
                class="ml-2 mb-50 order-2 order-xs-1"
              >
                Отменить
              </b-button>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="success"
                class="ml-2 mb-50 order-1 order-xs-2"
              >
                Создать команду
              </b-button>
            </div>
            <p class="text-muted text-center small">
              Позже вы сможете добавить других участников или удалить их</p>
          </div>
        </b-modal>
      </div>
      <div class="h5">
        <p class="mb-2">
          Больше команда - больше скидка!</p>
        <p class="mb-0">
          3-4 пользователя: -10%</p>
        <p class="mb-0">
          5-9 пользователей: -15%</p>
        <p class="mb-0">
          от 10 пользователей : -20%</p>
      </div>
      <h4 class="my-2">
        Промокод
      </h4>
      <div class="row">
        <b-form-group
          label=""
          label-for="codeInput"
          class="col-6"
        >
          <b-form-input
            id="codeInput"
            placeholder="Код"
          />
        </b-form-group>
        <div class="col-5">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="success"
          >
            Добавить
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BButton, BModal, VBModal, BFormInput, BFormGroup,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BModal,
    BFormInput,
    BFormGroup,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
}
</script>

<style lang="scss">
  .card-block {
    position: relative;
    display: block;
      input {
        position: absolute;
        opacity: 0;
        z-index: -1;
        &:checked ~ .card-plan {
          border-color: #528BE6;
          background-color: #528BE6;
          transition: all .5s ease;
            h1, h2, h3, p {
              color: #fff;
            }
        }
    }
  }
    .card-plan {
        border: 1px solid #528BE6;
        border-radius: 15px;
        max-width: 180px;
        width: 100%;
        min-height: 130px;
        cursor: pointer;
        &:hover {
            background-color: rgba(82,139,230,0.1);
        }
    }
</style>
