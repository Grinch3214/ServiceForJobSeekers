<template>
  <div>
    <div class="text-right mt-n1 mb-1">

      <modal-for-cv />

    </div>
    <b-tabs pills>
      <b-tab
        title="Активные"
        active
      >
        <div class="h4 p-4 d-none">
          <p>У вас нет ни одной папки.</p>
          <p>Чтобы отобрать кандидатов, создайте папку.</p>
        </div>

        <folder-for-cv />
        <folder-for-cv />
      </b-tab>
      <b-tab title="Архивные">
        <div class="h4 p-2 d-none">
          <p>У вас нет ни одной архивной папки.</p>
        </div>
        <folder-for-cv />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import {
  BTab, BTabs,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import FolderForCv from '@/anworks/seecv-folders/FolderForCv.vue'
import ModalForCv from '@/anworks/modal/ModalForCv.vue'

export default {
  components: {
    BTab,
    BTabs,
    FolderForCv,
    ModalForCv,
  },
  directives: {
    Ripple,
  },
}
</script>
