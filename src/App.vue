<template>
  <v-app>
    <v-app-bar
      app
    >
      <router-link to="/">Home</router-link> |
      <router-link to="/calendar">Calendar</router-link>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
      beforeCreate: function(){

        console.log(this.getWeekNumber(this.$store.getters['datetime/getCurrentDate']))
    }
};
</script>
