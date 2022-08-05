<template>
  <div id="homepage">
    <div class="box-section">
      <div class="box">
        <div :class="{'active': active}" class="toggle_container">
          <ToggleButton id="label_example" labelEnableText="Séries" labelDisableText="Films" />
        </div>
      </div>
      <div class="allgenres">
        <AllGenres v-for="item in dataGenre" :key="item.id" :id="item.id" :name="item.name" :type="type"></AllGenres>
      </div>
    </div>
    <!-- Nous allons lister tous les films-->
    <!-- Quand on boucle on doit avoir une ouvrante et une fermante mais pas quand on envoie une seule valeur -->
    <!-- props = : , v-for = boucle -->
    <AllMovies v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :name="item.name" :overview="item.overview" :poster_path="item.poster_path" :release_date="item.release_date" :vote_average="item.vote_average" :backdrop_path="item.backdrop_path"></AllMovies>
  </div>
</template>
<script>
// @ is an alias to /src
import AllMovies from '@/components/AllMovies.vue'
import ToggleButton from '@/components/ToggleButton.vue'
import AllGenres from '@/components/AllGenres.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()
export default {
  name: 'HomeView',
  el: '#homepage',
  components: {
    AllMovies, AllGenres, ToggleButton
  },
  // pour remplir une vue nous avons besoin de data
  data () {
    return {
      active: false,
      data: [],
      dataGenre: null,
      page: 1,
      type: 'movie'
    }
  },
  // Pour utiliser notre methode nous allons appeler un hook (quand la composant doit etre monter mounted = montage)
  mounted () {
    if (this.$el.querySelector('.checked').checked === true) {
      this.AllSeries(this.page)
      this.type = 'serie'
    } else {
      this.AllGenres()
      this.AllMovies(this.page)
      this.type = 'movie'
    }
    this.AllGenres()
    this.AllMovies(this.page)
  },
  // Pour remplir les composants je vais creer une méthode (quand je creer des methode je mets des epaces mais pas quand je les appel)
  methods: {
    triggerEvent (value) {
      this.active = value
    },
    // je travail en asynchrone donc je precede await de async
    async AllMovies (page) {
      const res = await apiService.getMovies(page)
      const movies = await res.json()
      this.data = movies.results
      // je rempli data (les donnée qu'on va renvoyer) avec les résultats de la promesse effectuer
      // this.data = movies.results
    },
    async AllSeries (page) {
      const res = await apiService.getSerie(page)
      const series = await res.json()
      // this.data = series.results
      this.data = series.results
    },
    async AllGenres () {
      const res = await apiService.getGenres()
      const genres = await res.json()
      this.dataGenre = genres.genres
    },
    switch: function (value) {
      this.active = value
      this.data = []
      this.page = 1
      this.dataGenre = null
    }
  }
}
</script>

<style scoped>
.box-section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.allgenres{
  display: flex;
  justify-content: space-between;
}
.box{
  text-align: center;
  margin-top: 30px;
}
#homepage {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}

/* Button switch Films / Séries */
.toggle_container{
  margin: 0 auto;
  background-color: #efefef;
  width: 120px;
  padding: 10px 0;
  border-radius: 30px;
  transition: all .25s;
}
.toggle_container.active{
  background-color: #e9ffef;
}

.search_sec {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
</style>
