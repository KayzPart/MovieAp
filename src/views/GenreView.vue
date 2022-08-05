<template>
  <div id="genre-search">
    <h1>{{ dataGenre }}</h1>
    <div class="allmovies">
      <AllMovies v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :poster="item.poster_path" :name="item.name">
      </AllMovies>
      coucou
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
  el: '#genre-search',
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
    }
  }

}
</script>
