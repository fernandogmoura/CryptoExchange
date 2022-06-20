<template>
  <v-app>
    
      <navbar />

    <v-main>
      
      <router-view/>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({  
    
  }),
  components: {
    'navbar': require('@/components/Navbar.vue').default
  }
};
</script>

<style>

main {
  background-image: url("@/assets/background.png");
  background-size: cover;
}

</style>
