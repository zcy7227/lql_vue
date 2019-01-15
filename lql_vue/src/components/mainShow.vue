<template>
  <div>
    <main-show-part/>
  </div>

</template>

<script>
  import MainShowPart from '@/components/mainShowPart'

  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    components: {MainShowPart}
  }
</script>

<style scoped>
</style>
