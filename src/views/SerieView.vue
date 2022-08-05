<template>
  <div class="home">
    <SearchSeries />
    <div class="box-section">
      <div class="genres">
        <AllGenres v-for="item in dataGenre" :key="item.id" :id="item.id" :name="item.name" :type="type"></AllGenres>
      </div>
    </div>
    <AllSeries v-for="item in data" :key="item.id" :id="item.id" :name="item.name" :poster_path="item.poster_path"
      :vote_average="item.vote_average" :overview="item.overview" :first_air_date="item.first_air_date"></AllSeries>
  </div>
</template>

<script>
import AllSeries from '@/components/AllSeries.vue'
import AllGenres from '@/components/AllGenres.vue'
import ApiService from '@/services/ApiService.js'
import SearchSeries from '@/components/SearchSeries.vue'

const apiService = new ApiService()

export default {
  name: 'SerieView',
  components: {
    AllSeries, SearchSeries, AllGenres
  },
  data () {
    return {
      data: null,
      dataGenre: null,
      page: 1,
      type: 'serie'
    }
  },
  mounted () {
    this.AllSeries(this.page)
    this.GenresOfSeries()
  },
  methods: {
    async AllSeries (page) {
      const res = await apiService.getSerie(page)
      const series = await res.json()
      this.data = series.results
    },
    async AllGenres () {
      const res = await apiService.getGenres()
      const genres = await res.json()
      this.dataGenre = genres.genres
    },
    async GenresOfSeries () {
      const res = await apiService.getGenresOfSeries()
      const seriesG = await res.json()
      this.dataGenre = seriesG.genres
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}
.box-section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.genres{
  display: flex;
  justify-content: space-between;
}
</style>
