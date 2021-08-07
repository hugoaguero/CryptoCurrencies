<template>
  <form class="contact-form">
    <h2>CONTACT ME</h2>
    <p>Name:
      <input type="text" required placeholder="Write your name here...">
    </p>
    <p>Phone:
      <input type="tel" placeholder="Write your phone here...">
    </p>
    <p>E-mail:
      <input type="email" required placeholder="Let me know how to contact you...">
    </p>
    <p>Message:
      <input type="text" required placeholder="What would you like to tell me...">
    </p>
    <button>Send Message</button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
};
</script>

<style scoped>
body {
  background:#59ABE3;
}

.contact-form {
  width:350px;
  height:500px;
  background: rgba(66, 185, 131, 0.36);
  margin: auto;
  border-radius:8px;
  box-shadow:0 0 40px -10px #000;
  padding:20px 30px;
  box-sizing:border-box;
  font-family: "JetBrains Mono ExtraBold",sans-serif;
  font-size: 14px;
  position:relative;
  text-align: left
}

h2 {
  margin:10px 0;
  padding-bottom:10px;
  width:180px;
  color:#78788c;
  border-bottom:3px solid #78788c
}

input {
  width:100%;
  padding:10px;
  box-sizing:border-box;
  background:none;
  outline:none;
  resize:none;
  border:0;
  font-family: "JetBrains Mono Light",sans-serif;
  transition:all .3s;
  font-size: 12px;
  border-bottom:2px solid #bebed2
}

input:focus {
  border-bottom:2px solid #78788c
}

p:before {
  content:attr(type);
  display:block;
  margin:28px 0 0;
  font-size:14px;
  color:#5a5a5a
}

button {
  float:right;
  padding:8px 12px;
  margin:8px 0 0;
  font-family: "JetBrains Mono ExtraBold",sans-serif;
  border:2px solid #78788c;
  background: rgba(255, 255, 255, 0.6);
  color:#5a5a6e;
  cursor:pointer;
  transition:all .3s
}

button:hover {
  background:#78788c;
  color:#fff
}

</style>
