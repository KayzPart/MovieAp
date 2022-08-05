<template>
  <router-link :to="{ name: 'movie', params: {id: id} }" class="link_movie">
    <div class="movie_poster">
      <!--<p>{{ overview }}</p>-->
      <img :src="'https://www.themoviedb.org/t/p/w220_and_h330_bestv2/' + poster_path" :alt="title">
    </div>
    <div class="movie_title">
      <h1>{{ title }}</h1>
      <p>{{ release_date }}</p>
    </div>
    <div class="percent">
      <p>{{ vote_average }}</p>
    </div>
  </router-link>
  <router-link :to="{ name: 'serie', params: {id: id} }" class="link_serie">
    <div class="serie_poster">
      <img :src="'https://www.themoviedb.org/t/p/w220_and_h330_bestv2/' + poster_path" :alt="name">
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'AllMovies',
  props: ['id', 'title', 'name', 'poster_path', 'release_date', 'vote_average']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link_movie {
  position: relative;
  text-decoration: none;
  width: 200px;
  height: 450px;
  border: solid 1px #e3e3e3;
  border-radius: 10px;
  margin: 20px;
}

.movie_poster {
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
}

.movie_poster>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.movie_title {
  position: absolute;
  top: 70%;
  text-align: left;
}

.movie_title h1 {
  font-size: 16px;
  margin: 10px;
  color: black;
}

.movie_title p {
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
