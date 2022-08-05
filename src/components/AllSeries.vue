<template>
  <router-link :to="{ name: 'serie', params: {id: id} }" class="link_serie">
    <div class="serie_poster">
      <img :src="'https://www.themoviedb.org/t/p/w220_and_h330_bestv2/' + poster_path" :alt="name">
    </div>
    <div class="serie_title">
      <h1>{{ name }}</h1>
      <p>{{ first_air_date }}</p>
    </div>
    <div class="percent">
      <p>{{ vote_average }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'AllSeries',
  props: ['id', 'first_air_date', 'name', 'poster_path', 'vote_average']
}
</script>

<style scoped>
.link_serie{
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
