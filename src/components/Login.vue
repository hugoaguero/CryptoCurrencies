<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <p>
      For a definition of cryptocurrency,<br>
      check out the
      <a href="https://es.wikipedia.org/wiki/Criptomoneda" target="_blank" rel="noopener"> wikipedia</a> documentation (in spanish).
    </p>
  </div>
  <button @Click="viewLogin()">Login</button>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String,
  },
  methods: {
    viewLogin() {
      alert('Login page');
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  padding:8px 12px;
  margin:50px 0 0;
  font-family: "JetBrains Mono Light",sans-serif;
  font-size: 25px;
  border:2px solid #78788c;
  background: rgba(67, 187, 133, 0.36);
  color:#5a5a6e;
  cursor:pointer;
  transition:all .3s
}

button:hover {
  background:#78788c;
  color:#fff
}
</style>
