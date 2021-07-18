
export default {
  state: {
    forecast: {}
  },

  mutations: {
    setInfo(state, info) {
      state.forecast = info
    },
    clearInfo (state) {
      state.forecast = {}
    }
  },

  actions: {
    async fetchWeather ({commit}, city) { //получить погоду
      const cityName = city || 'kiev'
      const key = process.env.VUE_APP_KEY
      var fullWeather = {}
      try {
        const daily = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)).json()
        const info = await (await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`)).json()

        if (info.cod === "404" || daily.cod === "404 ") {
          fullWeather = {
            name: "We don't have info about this city",
            cod: "404"
          }
          commit('clearInfo')
          commit('setInfo', {...fullWeather});
        }

        if (daily.cod !== "404" && info.cod !== "404") {
          fullWeather = {
            ...daily.weather[0],
            ...daily.main,
            ...info,
          }  
          commit('setInfo', {...fullWeather});
        }

      } catch (error) {
        commit('setError', error)
        throw error
      }
    },
    updateWeather({commit, getters}, toUpdate) {
      const updateWeather = {...getters.infoWeather, ...toUpdate}
      commit('setInfo', updateWeather);

    },
  },

  getters: {
    info: s => s.forecast,
    weatherList: s => s.forecast
  }
}