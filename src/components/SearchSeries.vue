<template>
    <!-- @ dans une balise de templating = appel à une function -->
    <input class="section_search input" placeholder="Recherchez votre série" @input="search = $event.target.value" />
    <div class="series" v-if="data != null">
      <AllSeries v-for="item in data" :key="item.id" :id="item.id" :name="item.name" :poster_path="item.poster_path" :vote_average="item.vote_average" :overview="item.overview" :first_air_date="item.first_air_date"></AllSeries>
    </div>
    <div v-else class="section_search">
      <h1>Votre série n'as pas été trouver dans notre base de données 😔 ...</h1>
    </div>
</template>

<script>
import AllSeries from '@/components/AllSeries.vue'
import ApiService from '@/services/ApiService.js'
const apiService = new ApiService()
export default {
  name: 'SearchView',
  components: {
    AllSeries
  },
  data () {
    return {
      data: null,
      search: 'code'
    }
  },
  BeforeMount () {
    this.searchSeries(this.search)
  },
  // Regarde ce que l'utilisateur tape à l'instant précis
  watch: {
    search () {
      this.searchSeries(this.search)
    }
  },
  methods: {
    async searchSeries (search) {
      const res = await apiService.getSearchSeries(search)
      const series = await res.json()
      this.data = series.results
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
.series{
  display: flex;
  flex-wrap: wrap;
}
</style>
