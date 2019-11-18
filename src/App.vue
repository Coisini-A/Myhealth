<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/tab-bar';

  export default {
    name: 'App',
    components: {
      "tab-bar": TabBar
    }
  }
</script>

<style lang="less" scoped>
  #app {
    height: 100%;
    overflow: hidden;
  }
</style>
