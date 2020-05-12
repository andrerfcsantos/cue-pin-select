<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
html {
  background-color: #222831;
  font-size: 1em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #efbb35;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #efbb35;
}

a.router-link-exact-active {
  color: #dc8503;
}
</style>
