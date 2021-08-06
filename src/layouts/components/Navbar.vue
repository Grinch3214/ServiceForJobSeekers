<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
      <!-- <dark-Toggler class="d-none d-lg-block" /> -->
      <notification-dropdown />
      <search-bar />
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <b-nav-item-dropdown
        right
        toggle-class="d-flex align-items-center dropdown-user-link"
        class="dropdown-user"
      >
        <template #button-content>
          <div class="d-sm-flex d-none user-nav">
            <p class="user-name font-weight-bolder mb-0">
              Бенедикт Камбэрбетч
            </p>
            <span class="user-status">Соискатель</span>
          </div>
          <b-avatar
            size="40"
            variant="light-primary"
            badge
            class="badge-minimal"
            badge-variant="success"
          />
          <!-- :src="require('@/assets/images/avatars/13-small.png')" в аватар -->
        </template>

        <b-dropdown-item
          link-class="d-flex align-items-center"
          @click="$router.push('/see-cv')"
        >
          <span>Мои  папки</span>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <span>Уведомления</span>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <span>Безопасность</span>
        </b-dropdown-item>

        <b-dropdown-item
          link-class="d-flex align-items-center"
          @click="$router.push('/faq')"
        ><span>FAQ</span>
        </b-dropdown-item>

        <b-dropdown-divider />

        <b-dropdown-item link-class="d-flex align-items-center">
          <span>Выйти</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'
// import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'
import NotificationDropdown from '@/anworks/NotificationDropdown.vue'
import SearchBar from '@core/layouts/components/app-navbar/components/SearchBar.vue'

export default {
  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
    NotificationDropdown,
    SearchBar,

    // Navbar Components
    // DarkToggler,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
