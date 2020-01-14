<template>
  <div id="app">
    <div id="nav">
      <router-link exact-active-class="active" :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'blog' }" v-slot="{ isActive, fullPath, navigate }">
        <span @click="navigate" :class="{ active: isActive}">
          <a :href="fullPath">Posts</a>
        </span>
      </router-link>
    </div>
    <router-view/>
    <router-view name="sidebar"/>
  </div>
</template>

<script>
import Vue from 'vue'
import BaseLayout from './components/BaseLayout'

Vue.component('BaseLayout', BaseLayout)
export default {
  
}
</script>
<style>
.active {
  border: 1px solid blue;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
