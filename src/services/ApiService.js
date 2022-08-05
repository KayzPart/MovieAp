// Par défaut j'exporte toute la class
export default class ApiService {
  myInit = {
    method: 'GET',
    headers: new Headers({
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTg3NmJiZjJkZjZhYjMxYWM2YzhkNThmMTE4ODQ1MiIsInN1YiI6IjYyOTRjZTNjNTUwN2U5MDA5YWYzMmVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8isbXZypjr-nRms5gLUFbVSf8rUm-FDe2ZOS30SQi-8'
    })
  }

  getMovies (page) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=${page}`, this.myInit)
  }

  getSearch (search) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=39876bbf2df6ab31ac6c8d58f1188452&language=fr-FR&query=${search}&include_adult=false`, this.myInit)
  }

  getRead (id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=39876bbf2df6ab31ac6c8d58f1188452&language=fr-FR`, this.myInit)
  }

  getSerie (page) {
    return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=39876bbf2df6ab31ac6c8d58f1188452&language=fr-FR=${page}`, this.myInit)
  }

  getGenres () {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?language=fr-FR', this.myInit)
  }
}
