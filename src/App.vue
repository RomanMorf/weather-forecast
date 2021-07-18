<template>
  <div id="app">
    <div class="container">

      <NavBar />
      <Form @emitCityName="cathCityName"/>
      <Loader v-if="loading"/>
      <transition name="fade">
        <router-view v-show="!loading"/>
      </transition>
    </div>  
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import store from '@/store'
import Form from '@/components/Form'
import Loader from '@/components/Loader'

export default {
  data() {
    return {
      fullWeather: '',
      weatherForWeek: '',
      loading: true,
    }
  },
  components: {
    NavBar,
    Form,
    Loader
  },
  methods: {
    async cathCityName(cityName) {
      this.loading = true
      await store.dispatch('fetchWeather', cityName)
      this.loading = false
    }
  },
  async mounted () {
    // this.$getLocation() // запрос локации у пользователя
    //   .then(coordinates => {
    // });
    this.loading = true
    await store.dispatch('fetchWeather')
    this.loading = false
  },
}
</script>

<style lang="scss">
@import './assets/index.scss'
</style>
