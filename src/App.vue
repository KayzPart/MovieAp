<template>
  <!-- -->
  <img alt="Vue logo" src="./assets/logo.png">
  <h1 class="title">THE MOVIEAP</h1>
  <nav>
    <router-link to="/">HOME</router-link>
    <router-link to="/search/">SEARCH</router-link>
    <!--<div class="box">
      <div :class="{'active': active}" class="toggle_container">
         <ToggleButton id="label_example" labelEnableText="Séries" labelDisableText="Films" />
      </div>
    </div>-->
  </nav>
  <router-view />
</template>

<script>
// import ToggleButton from '@/components/ToggleButton.vue'
// export default {
//   name: 'App',
//   components: {
//     ToggleButton
//   },
//   data () {
//     return {
//       active: false
//     }
//   },
//   methods: {
//     triggerEvent (value) {
//       this.active = value
//     }
//   }
// }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 20px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@media screen and (max-width: 620px) {
  .home {
    width: 100%;
  }

  .link_movie {
    left: 25%;
  }
}
</style>
