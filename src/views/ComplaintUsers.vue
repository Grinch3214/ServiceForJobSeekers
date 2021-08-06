<template>
  <div>
    <b-tabs>
      <b-tab active>
        <template #title>
          <span>Новые: <span>{{ 1 }}</span></span>
        </template>
        <complaint-user />
      </b-tab>
      <b-tab>
        <template #title>
          <span>В работе: <span>{{ 2 }}</span></span>
        </template>
        <complaint-user />
        <complaint-user />
      </b-tab>
      <b-tab>
        <template #title>
          <span>Собеседование: <span>{{ 0 }}</span></span>
        </template>
        <p class="p-2">
          Для работы с кандидатами найдите их в поиске и добавте к этой папке.</p>
      </b-tab>
      <b-tab>
        <template #title>
          <span>Предложение: <span>{{ 0 }}</span></span>
        </template>
        <p class="p-2">
          Для работы с кандидатами найдите их в поиске и добавте к этой папке.</p>
      </b-tab>
      <b-tab>
        <template #title>
          <span>Отказано: <span>{{ 0 }}</span></span>
        </template>
        <p class="p-2">
          Для работы с кандидатами найдите их в поиске и добавте к этой папке.</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue'
import ComplaintUser from '@/anworks/seecv-folders/ComplaintUser.vue'

export default {
  components: {
    ComplaintUser,
    BTabs,
    BTab,
  },
}
</script>
