<template>
<router-link :to="{ name: 'serie', params: {id: id} }" class="link_serie">
  <div class="serie_poster">
    <img :src="'https://www.themoviedb.org/t/p/w220_and_h330_bestv2/' + poster_path" :alt="name">
  </div>

</router-link>
</template>

<script>
export default {
  name: 'AllSeries',
  props: ['id', 'first_air_date', 'name', 'poster_path', 'vote_average']
}
</script>
