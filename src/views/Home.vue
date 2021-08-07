<template>
  <div class="home">
    <img alt="Cryptocurrency logo" src="../assets/logo.png">
    <Login msg="Welcome to CryptoCurrency Today App!"/>
  </div>
</template>

<script>

import Login from '@/components/Login.vue';

export default {
  name: 'Home',
  components: {
    Login,
  },
};
</script>
