<template>
  <div id="nav" class="nav">
    <router-link to="/" class="btn mr-10 mb-10">Weather for today</router-link>
    <router-link to="/week" class="btn mb-10">Weather for a week</router-link>
  </div>
</template>

<script>

export default {
  name: 'NavBar'
}
</script>

<style scoped lang='scss'>
  .mr-10{
    margin-right: 10px;
  }
  .mb-10 {
    margin-bottom: 10px;
  }
  @media (max-width: 600px) {
    .mr-10 {
      margin-right: 0;
    }
  }

</style>



