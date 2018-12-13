<template>
  <div>
    <head-nav :select="componentName"></head-nav>
    <head-show></head-show>
    <sub-stance></sub-stance>
  </div>
</template>

<script>
  import headNav from '../public-components/headNav'
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
      componentName: 'home'
    })
  }
</script>

<style lang="stylus">
</style>
