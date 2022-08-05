import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SerieView from '../views/SerieView.vue'
import SearchView from '../views/SearchView.vue'
import GenreView from '../views/GenreView.vue'
import MovieCard from '../components/MovieCard.vue'
import SerieCard from '../components/SeriesCard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/serieView/',
    name: 'serieView',
    component: SerieView
  },
  {
    path: '/search/',
    name: 'search',
    component: SearchView
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: MovieCard
  },
  {
    path: '/serie/:id',
    name: 'serie',
    component: SerieCard
  },
  {
    path: '/genre/:movorser/:id',
    name: 'genre',
    component: GenreView
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
