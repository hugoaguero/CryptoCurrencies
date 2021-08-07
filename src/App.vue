<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/CryptoView">Crypto View</router-link> |
    <router-link to="/Contact">Contact</router-link> |
    <router-link to="/About">About</router-link>
  </div>
  <router-view/>
  <div>
  <footer>
    <p>Laboratorio III - Aguero Arrieta Hugo<br>
      <strong>© Copyright 2021 | Todos los derechos reservados</strong></p>
  </footer>
  </div>
</template>

<style>
#app {
  font-family: "Fira Code Retina", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #78788c;
}

#nav {
  padding: 25px;
  text-align: left;
}

#nav a {
  font-weight: normal;
  color: #2c3e50;
  text-decoration-line: blink;
}

#nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bolder;
  text-decoration-line: underline;
  text-align: center;
}

footer {
  position:relative;
  top:50px;
  margin: 5px 10px;
  font-weight: lighter;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
