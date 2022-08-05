<template>
  <div class="home">
    <SearchSeries />
    <AllSeries v-for="item in data" :key="item.id" :id="item.id" :name="item.name" :poster_path="item.poster_path"
      :vote_average="item.vote_average" :overview="item.overview" :first_air_date="item.first_air_date"></AllSeries>
  </div>
</template>

<script>
import AllSeries from '@/components/AllSeries.vue'
import ApiService from '@/services/ApiService.js'
import SearchSeries from '@/components/SearchSeries.vue'

const apiService = new ApiService()

export default {
  name: 'SerieView',
  components: {
    AllSeries, SearchSeries
  },
  data () {
    return {
      data: null,
      page: 1,
      type: 'serie'
    }
  },
  mounted () {
    this.AllSeries(this.page)
  },
  methods: {
    async AllSeries (page) {
      const res = await apiService.getSerie(page)
      const series = await res.json()
      this.data = series.results
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
</style>
