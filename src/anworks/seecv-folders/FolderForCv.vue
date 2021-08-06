<template>
  <div class="card p-2 mt-2">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h4>Кандидаты</h4>
      <b-dropdown
        variant="link"
        toggle-class="text-decoration-none"
        no-caret
        right
      >
        <template v-slot:button-content>
          <feather-icon
            icon="MoreVerticalIcon"
            size="21"
            class="text-body align-middle mr-25"
          />
        </template>

        <b-dropdown-item>Редактировать</b-dropdown-item>
        <b-dropdown-item>Архивировать</b-dropdown-item>
        <b-dropdown-item>Удалить</b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="d-md-flex justify-content-md-between flex-wrap mb-2">
      <p
        class="mr-1 pointer text-primary"
        @click="$router.push('/see-cv-users')"
      >Новые: <span class="text-secondary"> {{ '3' }} </span></p>
      <p class="mr-1">
        В работе: <span> {{ '0' }} </span></p>
      <p class="mr-1">
        Собеседование: <span> {{ '0' }} </span></p>
      <p class="mr-1">
        Предложение: <span> {{ '0' }} </span></p>
      <p class="mr-1">
        Нанято: <span> {{ '0' }} </span></p>
      <p class="mr-1">
        Отказано: <span> {{ '0' }} </span></p>
    </div>

    <p>3 кандидатов</p>
    <p>Последнее обновление: <span>26.07.2021</span></p>
  </div>
</template>

<script>
import {
  BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
}
</script>

<style lang="scss">
  .pointer {
    cursor: pointer;
  }
</style>
