<template>
  <div class="home">
    <!-- @ dans une balise de templating = appel à une function -->
    <input placeholder="Recherchez votre film" @input="search = $event.target.value" />
    <div class="movies" v-if="data != null">
      <AllMovies v-for="item in data" :key="item.id" :title="item.title" :overwiew="item.overview" :poster_path="item.poster_path" :id="item.id" :vote_average="item.vote_average" :backdrop_path="item.backdrop_path"></AllMovies>
    </div>
    <div class="series" v-if="data != null">
      <AllSeries v-for="item in data" :key="item.id" :id="item.id" :name="item.name" :poster_path="item.poster_path" :vote_average="item.vote_average" :overview="item.overview" :first_air_date="item.first_air_date"></AllSeries>
    </div>
    <div v-else>
      <h1>Votre film n'as pas été trouver dans notre base de données 😔 ...</h1>
    </div>
  </div>
</template>

<script>
import AllMovies from '@/components/AllMovies.vue'
import AllSeries from '@/components/AllSeries.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'SearchView',
  components: {
    AllMovies, AllSeries
  },
  data () {
    return {
      data: null,
      search: 'code'
    }
  },
  BeforeMount () {
    this.searchMovies(this.search)
    this.searchSeries(this.search)
  },
  // Regarde ce que l'utilisateur tape à l'instant précis
  watch: {
    search () {
      this.searchMovies(this.search)
      this.searchSeries(this.search)
    }
  },
  methods: {
    async searchMovies (search) {
      const res = await apiService.getSearch(search)
      const movies = await res.json()
      this.data = movies.results
    },
    async searchSeries (search) {
      const res = await apiService.getSearchSeries(search)
      const series = await res.json()
      this.data = series.results
    }
  }
}
</script>
<style scoped>
.home{
  flex-direction: column;
}
.movies, .series{
  display: flex;
  flex-wrap: wrap;
}
</style>
