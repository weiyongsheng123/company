<template>
  <div class="text-xs-center">
    <v-menu transition="slide-x-reverse-transition">
      <v-btn slot="activator" dark color="secondary">Slide X Reverse Transition</v-btn>
      <v-list>
        <v-list-tile v-for="n in 5" :key="n">
          <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'subStance',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    width: 100%
    height: 1000px
</style>