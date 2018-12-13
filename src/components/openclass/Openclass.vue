<template>
  <div>
    <head-nav :select="componentName"></head-nav>
    <sub-stance></sub-stance>
  </div>
</template>

<script>
  import headNav from '../public-components/headNav'
  import subStance from './components/subStance'
  export default {
    name: "Openclass",
    components: {
      headNav,
      subStance
    },
    data: () => ({
      componentName: 'openclass'
    })
  }
</script>

<style lang="stylus">
</style>
