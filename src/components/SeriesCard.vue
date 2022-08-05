<template>
<!--<router-link :to="{ name: 'readSerie', params: {id: id} }" class="link_movie">
<div class="movie_poster">
  <img :src="'https://www.themoviedb.org/t/p/w220_and_h330_bestv2/' + poster_path" alt="">
</div>
<div class="movie_title">
  <h1>{{ name }}</h1>
</div>

</router-link>-->
  <div class="serie_poster">
    <img :src="'https://www.themoviedb.org/t/p/w220_and_h330_bestv2/' + poster_path" alt="">
  </div>
  <div class="serie_title">
    <h1>{{ name }}</h1>
    <p>{{ first_air_date }}</p>
  </div>
  <div class="percent">
    <p>{{ vote_average }}</p>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'SerieCard',
  data () {
    return {
      data: null,
      id: this.$route.params.id
    }
  },
  created () {
    this.SerieCard(this.id)
  },
  methods: {
    async SerieCard (id) {
      const res = await apiService.getSerie(id)
      const series = await res.json()
      this.data = series
    },
    formatDate (value) {
      const date = new Date(value)
      return date.toLocaleDateString('fr')
    }
  }
}
</script>
<style scoped>
.link_serie {
  position: relative;
  text-decoration: none;
  width: 200px;
  height: 450px;
  border: solid 1px #e3e3e3;
  border-radius: 10px;
  margin: 20px;
}

.serie_poster {
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
}

.serie_poster>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.serie_title {
  position: absolute;
  top: 70%;
  text-align: left;
}

.serie_title h1 {
  font-size: 16px;
  margin: 10px;
  color: black;
}

.serie_title p {
  margin: 0 0 0 10px;
  color: rgba(92, 84, 84, 0.719);
  font-size: 14px;
}

.percent {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: black;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 10px;
}

.percent>p {
  color: whitesmoke;
  font-weight: bold;
}
</style>
