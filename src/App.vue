<template>
  <nav>
    <router-link to="/">Vue3 Project</router-link> |
    <router-link to="/about">about</router-link> |
    <router-link to="/axiosTest">axiosTest</router-link>
    <router-link to="/crud">CRUD</router-link>
    <router-link to="/qrPayment">qrPayment</router-link>
    <h1>Pongsatorn Tassaro</h1>
    <h1>Nae and Nut </h1>
    <h1>OHAYOOOO</h1>
    <h1>Nathawadee Hnaknan</h1>

    <h1>cogratulation!!!</h1>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
