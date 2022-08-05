<template>
    <!-- @ dans une balise de templating = appel à une function -->
    <input class="section_search input"  placeholder="Recherchez votre film" @input="search = $event.target.value" />
    <div class="movies" v-if="data != null">
      <AllMovies v-for="item in data" :key="item.id" :title="item.title" :overwiew="item.overview" :poster_path="item.poster_path" :id="item.id" :vote_average="item.vote_average" :backdrop_path="item.backdrop_path"></AllMovies>
    </div>
    <div v-else class="section_search">
      <h1>Votre film n'as pas été trouver dans notre base de données 😔 ...</h1>
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
.input{
    height: 20px;
    border-radius: 6px;
    background: #BFCBD9;
    box-shadow: inset 0 0 1px #BFCBD9;
}
.input::placeholder{
    color: #4D4D4D;
}
.section_search{
  width: 100%;
  margin: 0 auto;
}
.movies{
  display: flex;
  flex-wrap: wrap;
}
</style>
