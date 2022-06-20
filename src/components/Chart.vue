<template>
  <v-row 
    no-gutters
    fill-height
  >
    <v-col
      cols="12"
      sm="12"
    >
      <div class="text-center text-h3  mb-5">{{ $store.state.coinMain }} chart!</div>
      <template>
        <div class="text-center">
          <VueTradingView :options="{
            symbol: `${this.$store.state.chart}`,
            width: `${ this.$vuetify.breakpoint.name }`,
            theme: 'light',
            allow_symbol_change: true,
          }" />
        </div>
      </template>
      <div
        class="text-center mt-10 text-h3"
      >Make your own <span class="orange--text">analysis</span>!
      </div>
    </v-col>
  </v-row>
</template>

<script>
 import VueTradingView from 'vue-trading-view/src/vue-trading-view';

export default {
  data:() => ({
    
  }),
  components: {
    VueTradingView,
  },
  
}
</script>

<style scoped>
</style>