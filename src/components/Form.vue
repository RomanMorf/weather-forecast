<template>
  <div class="container">
    <form action="submit" @submit.prevent="submitHandler">
      <input 
      class="din"
        type="text" 
        placeholder="Enter city name"
        v-model="cityName"
        @keyup.enter="emitCityName"
      >
      <button class="btn " type="submit">Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Form',
  data() {
    return {
      cityName: ''
    }
  },
  methods: {
    submitHandler() {
      this.emitCityName()
    },
    emitCityName () {
      if (this.cityName.trim()) {
        this.$emit('emitCityName', this.cityName)
        this.cityName = ''
      }
    }, 
  }
}
</script>

<style scoped lang='scss'>
  form {
    display: flex;
    align-items: center;
  }
</style> 