<template>
  <div class="home">
    <!-- @ dans une balise de templating = appel à une function -->
    <input placeholder="Recherchez votre film" @input="search = $event.target.value" />
    <div class="allmovies" v-if="data != null">
      <AllMovies v-for="item in data" :key="item.id" :title="item.title" :overwiew="item.overview" :poster_path="item.poster_path" :id="item.id" :vote_average="item.vote_average" :backdrop_path="item.backdrop_path"></AllMovies>
    </div>
    <div v-else>
      <h1>Votre film n'as pas été trouver dans notre base de données 😔 ...</h1>
    </div>
  </div>
</template>

<script>
import AllMovies from '@/components/AllMovies.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'SearchView',
  components: {
    AllMovies
  },
  data () {
    return {
      data: null,
      search: 'code'
    }
  },
  BeforeMount () {
    this.searchMovies(this.search)
  },
  // Regarde ce que l'utilisateur tape à l'instant précis
  watch: {
    search () {
      this.searchMovies(this.search)
    }
  },
  methods: {
    async searchMovies (search) {
      const res = await apiService.getSearch(search)
      const movies = await res.json()
      this.data = movies.results
    }
  }
}
</script>
<style scoped>
.home{
  flex-direction: column;
}
.allmovies{
  display: flex;
  flex-wrap: wrap;
}
</style>
