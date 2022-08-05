<template>
  <div id="genre">
    <h1>{{ dataGenre }}</h1>
    <div class="movies">
      <AllMovies v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :name="item.name" :overview="item.overview" :poster_path="item.poster_path" :release_date="item.release_date" :vote_average="item.vote_average" :backdrop_path="item.backdrop_path">
      </AllMovies>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AllMovies from '@/components/AllMovies.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'GenreView',
  el: '#genre',
  components: {
    AllMovies
  },
  data () {
    return {
      data: [],
      page: 1,
      dataGenre: null,
      genreid: this.$route.params.id
    }
  },
  mounted () {
    this.AllGenres()
    if (this.$route.params.movorser === 'movie') {
      this.AllGenresMovies(this.page, this.genreid)
    } else {
      this.AllGenresSerie(this.page, this.genreid)
    }
  },
  methods: {
    async AllGenres () {
      const res = await apiService.getGenres()
      const genres = await res.json()
      for (const item of genres.genres) {
        if (item.id.toString() === this.genreid) {
          this.dataGenre = item.name
        }
      }
    },
    async AllGenresMovies (page, genre) {
      const res = await apiService.getGenresMovies(page, genre)
      const moviesG = await res.json()
      this.data = moviesG.results
    },
    async AllGenresSerie (page, genre) {
      const res = await apiService.getGenresSeries(page, genre)
      const serieG = await res.json()
      this.data = serieG.results
    }
  }
}
</script>
<style scoped>
#genre{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}
.movies{
  display: flex;
  flex-wrap: wrap;
}
</style>
