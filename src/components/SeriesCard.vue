<template>
  <div class="readSerie" :style="{ backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path})`, backgroundPosition: 'right -30px top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
    <div class="color_poster">
      <div class="poster">
        <img :src="'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + data.poster_path" alt="">
      </div>
      <section id="block">
        <div class="descript">
          <h2>{{ data.name }}</h2>
          <div class="info">
            <p>{{currentDate(data.release_date)}}</p>
            <ul v-for="item in data.genres" :key="item.id">
              <li>{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="synopsis">
          <p>
            <span>Synopsis</span>
            {{ data.overview }}
          </p>
        </div>
      </section>
    </div>
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
    this.ReadSerie(this.id)
  },
  methods: {
    async ReadSerie (id) {
      const res = await apiService.getReadSerie(id)
      const series = await res.json()
      this.data = series
    },
    currentDate () {
      const current = new Date()
      const date = current.getFullYear()
      return date
    }
  }
}
</script>
<style scoped>
.color_poster {
  background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(2, 0, 36, 0.6783088235294117) 47%, rgba(92, 92, 92, 0.7259278711484594) 100%);
  display: flex;
}

h2 {
  filter: invert(1);
  margin: 0;
  padding: 20px;
}

.info {
  display: flex;
  color: white;
}
ul li {
  list-style:  none;
}

.info p:nth-child(1) {
  margin: 0 10px;
}

.synopsis p {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
  width: 90%;
  color: white;
  font-size: 16px;
}

.synopsis span {
  margin-bottom: 10px;
  font-size: 18px;
}

@media screen and (max-width: 700px) {
  .color_poster {
    flex-direction: column;
  }
}
</style>
