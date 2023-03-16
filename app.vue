<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          sahki
        </nuxt-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="toggleMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{'is-active': menuOpen}">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
          <nuxt-link to="/games" class="navbar-item">Games</nuxt-link>
          <nuxt-link to="/games/newgame" class="navbar-item">New Game</nuxt-link>
        </div>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  watch: {
    $route(to, from) {
      this.menuOpen = false;
    },
  },
};
</script>

<style >
.navbar {
  background-color: #fff;
}

.navbar-burger {
  border-color: #000;
}

.navbar-menu {
  background-color: #fff;
}

.navbar-item {
  color: #000;
}

.is-active .navbar-item {
  background-color: #f5f5f5;
}
</style>
