<template>
  <div>
    <head-nav></head-nav>
    <head-show></head-show>
    <sub-stance></sub-stance>
  </div>
</template>

<script>
  import headNav from './components/headNav'
  import headShow from './components/headShow'
  import subStance from './components/subStance'
  export default {
    name: "Home",
    components: {
      headNav,
      headShow,
      subStance
    },
    data: () => ({
    })
  }
</script>

<style lang="stylus">
</style>
