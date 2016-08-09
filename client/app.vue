<template>

  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>

</template>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    components: {
      Navbar,
    }
  }
</script>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont,
    'avenir next', avenir,
    helvetica, 'helvetica neue',
    Ubuntu,
    'segoe ui', arial,
    sans-serif;
    margin: 0;
  }

  .count {
    margin: 0 auto;
    background-color: #f0f0f0;
    width: 200px;
    height: 200px;
    line-height: 200px;
    font-size: 40px;
    margin-top: 150px;
    border: 1px solid #e2e2e2;
    cursor: pointer;
    text-align: center;
    -webkit-user-select: none;
  }
</style>
