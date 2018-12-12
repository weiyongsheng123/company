<template>
  <div>
    <head-nav></head-nav>
    <sub-stance></sub-stance>
  </div>
</template>

<script>
  import headNav from './components/headNav'
  import subStance from './components/subStance'
  export default {
    name: "Openclass",
    components: {
      headNav,
      subStance
    },
    data: () => ({
    })
  }
</script>

<style lang="stylus">
</style>
