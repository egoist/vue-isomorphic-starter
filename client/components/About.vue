<style>
  .container {
    display: flex;
    height: 100%;
    .left,
    .right {
      flex: 1;
    }
    .center {
      flex: 2;
    }
    ul {
      margin-left: -0.5em;
      li {
        margin-top: 15px;
        margin-bottom: 15px;
      }
    }
  }
</style>

<template lang="html">
  <div class="container">
    <div class="left">
    </div>
    <div class="center">
      <section class="brief">
        <h2>About Server-Side Rendering</h2>
        <ul>
          <li>With Vue-router and Vuex Inside</li>
          <li>Nodemon for Server Reloading</li>
          <li>Webpack for Client-Side Hot-Module-Reloading</li>
          <li>Both Server and Client written by ES6</li>
          <li><strong>The Generator function in Koa will be Deperacted in V3</strong></li>
        </ul>
      </section>
      <section class="todos">
        <h2>TODOs</h2>
        <ul>
          <li>Lint</li>
          <li>BrowserSync</li>
          <li>Inline-CSS Loading Issue</li>
        </ul>
      </section>
    </div>
    <div class="right">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>
