<template>
  
  <div class="head-nav">
      <v-toolbar dark color="primary">
      <v-menu transition="slide-x-reverse-transition">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="n in 5" :key="n">
            <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <router-link to="/">
      <v-toolbar-title class="white--text">menu</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/practise">
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      </router-link>

      <router-link to="/openclass">
      <v-btn icon>
        <v-icon>all_out</v-icon>
      </v-btn>
      </router-link>

      <router-link to="/information">
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      </router-link>

      <router-link to="/recruit">
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      </router-link>

      <router-link to="/contactus">
      <v-btn icon>
        <v-icon>supervisor_account</v-icon>
      </v-btn>
      </router-link>
    </v-toolbar>
  </div>

</template>

<script>
export default {
  name: 'headNav',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-menu__content
    top: 56px !important
  .primary
    background-color: red !important
</style>
