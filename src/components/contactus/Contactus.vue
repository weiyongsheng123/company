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
    name: "Contactus",
    components: {
      headNav,
      subStance
    },
    data: () => ({
      componentName: 'contactus'
    })
  }
</script>

<style lang="stylus">
</style>
