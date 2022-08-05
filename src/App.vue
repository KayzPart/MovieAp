<template>
  <!-- -->
  <img alt="Vue logo" src="./assets/filmstrip.png" id="logo">
  <h1 class="title">THE MOVIES</h1>
  <nav>
    <router-link to="/">HOME</router-link>
    <router-link to="/serieView/">SÉRIE</router-link>
    <!--<router-link to="/search/">SEARCH</router-link>-->
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
body{
background: #FFEFBA;
background: linear-gradient(to right, #ce75429f, #FFEFBA);
/*background: #005AA7;
background: -webkit-linear-gradient(to right, #FFFDE4, #005AA7);
background: linear-gradient(to right, #FFFDE4, #005AA7); */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo{
  width: 250px;
  height: 150px;
  object-fit: contain;
}

.title{
  font-size: clamp(1rem, -9.4688rem + 33.5vw, 9.375rem);
  font-weight: 900;
  background-clip: text;
  background-image: url(./assets/ticket.jpg);
  color: transparent;
  background-attachment: fixed;
  background-size: contain;
  margin: 0;
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
