<template>
  <v-app-bar
      color="black"
      flat
      dark
    >
      <v-toolbar
        color="black"
        flat
      >
        <v-toolbar-title>
          <span class="text-h4">Midas</span>
          <span class="orange--text text-h4">Crypto</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style>

v-toolbar, a {
  text-decoration: none;
}

a:hover {
  color: orange !important;
  text-decoration: underline;
}

</style>