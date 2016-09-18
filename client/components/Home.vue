<style>
  .container-main {
    .logo-vue, .brief {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      .text {
        text-align: center;
      }
    }
    .features {
      margin-top: 20px;
      display: flex;
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
  }
</style>

<template lang="html">
  <div class="container-main">
    <section class="logo-vue">
      <div class="center">
        <img src="../assets/img/logo.png" alt="logo-vue"/>
      </div>
    </section>
    <section class="brief">
      <div class="text">
        <strong>Vue</strong> server-side rendering in real life. ٩(๑´3‘๑)۶
        <br>
        <br>
        which uses Vue2, Vuex, Vue-router for view and Koa2 for server and Webpack 2 for building.
      </div>
    </section>
    <section class="features">
      <div class="left">
      </div>
      <div class="center">
        <h2>Features</h2>
        <ul>
          <li>Vue 2 + ES6 + Webpack</li>
          <li>Koa 2 + ES6 + Webpack</li>
          <li>Nodemon</li>
          <li><strong>Hot Reloading</strong></li>
          <li>Optimized for production use</li>
        </ul>
      </div>
      <div class="right">
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>
