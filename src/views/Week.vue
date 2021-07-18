<template>
  <div class="about">
    <Loader v-if="loading" />

    <div v-if="forecastList.cod === '404'">
      <h1 >Oops... No such city. </h1>
      <p>Pleace enter new City name</p>
    </div>

    <div v-if="forecastList.cod === '200'">
    <h1 class="title">Weather forecast for 5 day's in {{ forecastList.city.name }}</h1>

    <transition name="fade">

      <table 
        width="100%" 
        cellspacing="0" 
        class="centered table" 
        v-if="forecastList.cod === '200'"
      >
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Temp C°</th>
            <th class="max-width-800">Humidity</th>
            <th class="max-width-600">Description</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in forecastList.list" :key="item.dt_txt">
            <td>{{ item.dt_txt }}</td>
            <td>{{ (item.main.temp - 273.15).toFixed() }}</td>
            <td class="max-width-800">{{ item.main.humidity }}%</td>
            <td class="max-width-600">{{ item.weather[0].description }}</td>
            <td><img :src="'http://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png'" alt="" ></td>
          </tr>
        </tbody>
      </table>
    </transition>
    </div>
  </div>
</template>

<script >
import Loader from '@/components/Loader'
import store from '@/store'
// import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      loading: true,
      forecast: this.forecastList || null,
      iconLink: null,
      list: null
    }
  },
  async beforeMount() {
    if (store.getters.weatherList) {
      this.loading = false
    }
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

<style lang="scss" scoped>
.table {
  background-color: rgba(255, 255, 255, 0.205);
  border-radius: 20px;
  padding: 20px;
}


</style>