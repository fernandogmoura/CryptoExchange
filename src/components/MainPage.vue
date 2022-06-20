<template >
  <v-container class="pt-0">
    
      <calculator />

    <div class="separator ma-10"></div>
      
      <chart />
      
    <div class="separator ma-10"></div>
    
      <start-trade />

    <div class="separator ma-10"></div>

      <about-us />

    <div class="separator ma-10"></div>

      <contact />
  </v-container>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
import axios from 'axios'

  export default {
    components: {
      'chart': require('@/components/Chart.vue').default,
      'calculator': require('@/components/Calculator.vue').default,
      'start-trade': require('@/components/StartTrade.vue').default,
      'about-us': require('@/components/AboutUs.vue').default,
      'contact': require('@/components/Contact.vue').default
    },
    created() {
      let url = this.$store.state.urlsApi[0]
      axios.get(url).then((response) => {
        this.$store.state.priceMain = response.data.price
      })
    }
}
</script>

<style scoped>
.separator {
  border: solid rgba(255, 165, 0, .7) 3px;
}
</style>