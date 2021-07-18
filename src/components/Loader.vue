<template>
  <div class="loader">
    <div class="lds-ring pa"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>

export default {
  computed: {
    color () {
      const colors = ['spinner-red-only', 'spinner-blue-only', 'spinner-green-only']
      return colors[Math.floor(Math.random()*3)]
    }
  }
}
</script>

<style lang='scss'>
  .loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .pa{
      position: absolute;
      top: 100px;
    }
  }

</style>
