<template>
  <div class="sub-genre">
    <router-link :to="{ name: 'genre', params: {movorser: type, id: id } } " class="link_genre">
      <p>{{ name }}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'AllGenres',
  props: ['id', 'name', 'type']
}
</script>
 <style scoped>
 .link_genre{
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
 }
 .link_genre > p {
  padding: 0 10px;
  color: brown;
 }
 </style>
