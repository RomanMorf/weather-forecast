<template>
  <div>
    <Loader v-if="loading" />

    <div v-if="forecastList.cod === '404'">
      <h1 >Oops... No such city. </h1>
      <p>Pleace enter new City name</p>
    </div>
    <transition name="slide-fade">
      <div v-if="forecastList.cod === '200'">
        <div v-if="!loading">
        <h1 class="title">Weather forecast in <span class="fl_capitalize">{{forecastList.city.name || '--'}}</span></h1>
        <div class="temp-main">{{ (forecastList.temp - 273.15).toFixed() }} C°</div>
        <p>Feels like {{ (forecastList.feels_like - 273.15).toFixed() }} C°</p>
        <p>Temp MAX {{ (forecastList.temp_max - 273.15).toFixed() }} C°</p>
        <p>Temp MIN {{ (forecastList.temp_min - 273.15).toFixed() }} C°</p>
        <img :src="'http://openweathermap.org/img/wn/' + forecastList.icon + '@2x.png'" alt="weather icon">
        <p>{{ forecastList.main }}</p>
        <p>{{ forecastList.humidity }}% - humidity</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import store from '@/store'


export default {
  name: 'Home',
  data() {
    return {
      loading: true,
      forecast: null,
      iconLink: null,
      show: false,
    }
  },
  methods: {
    fillData() {
      if (this.forecastList) {
        this.loading = true
        this.forecast = this.forecastList
        this.iconLink = `http://openweathermap.org/img/wn/${this.forecastList.icon}@2x.png`
        this.loading = false
      }
      if (!this.forecastList) {
        setTimeout(() => {
          this.fillData()
        }, 1000)
      }
    }
  },
  async beforeMount() {
    await this.fillData()
  },
  computed: {
    forecastList() {
      return store.getters.weatherList
    },
  },
  components: {
    Loader,
  },
}
</script>

<style scoped lang='scss'>
  .fl_capitalize,
  p:first-letter {
    text-transform:capitalize;
  }
  .temp{
    &-main {
      display: inline-block;
      padding: 30px 50px;
      font-size: 50px;
      text-shadow: rgba(0, 0, 0, 0.486) 1px 0 10px;
      font-weight: 900;
      color: #fff;
      background-color: rgba(255, 255, 255, 0.541);
      border: 1px solid #ccc;
      border-radius: 20px;
    }
  }


</style>