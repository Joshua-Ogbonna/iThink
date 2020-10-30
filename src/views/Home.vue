<template>
  <div class="home">
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-sm-7 first_row">
            <p class="tagline">scared of your secrets?</p>
            <span class="head">Put them in one Place</span>
            <p class="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi reiciendis distinctio quae tenetur molestias fugit delectus eos voluptates illo culpa.</p>
            <router-link to="/register" class="btn register">Register</router-link>
            <router-link to="/login" class="btn login">Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style lang="css" scoped>
  .main {
    background-color:  rgb(15, 15, 15);
    height: 91.3vh;
    width: 100%;
  }
  .first_row {
    margin: 10em 0;
    line-height: 2.7em;
  }
  .tagline {
    color: rgb(219, 213, 213);
    font-family: 'Zilla Slab', serif;
    font-size: 2.5em;
  }
  .head {
    font-family: 'Zilla Slab', serif;
    font-size: 3.5em;
    color: rgb(241, 87, 87);
    margin-top: 2em;
  }
  .paragraph {
    line-height: 1.5em;
    color: rgb(184, 179, 179);
  }
  .register {
    margin-right: 2em;
    background: rgb(241, 87, 87);
    color: #000;
    font-size: 1.4em;
    border-radius: 40px;
    padding: 1em 3em;
    margin-top: 1em;
  }
  .login {
    background: #000;
    outline: none;
    color: rgb(241, 87, 87);
    font-size: 1.4em;
    border-radius: 40px;
    padding: 1em 3em;
    margin-top: 1em;
  }
</style>
