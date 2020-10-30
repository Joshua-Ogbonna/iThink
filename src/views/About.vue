<template>
  <div class="home">
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="first_row">
            <p class="tagline">about us</p>
            
            <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae laboriosam animi ut dignissimos minus cupiditate voluptatum aliquam esse perspiciatis. Voluptatibus vel incidunt odio labore voluptatem cum, impedit a! Deserunt aliquid eveniet beatae dolores ea laudantium molestias perferendis, nisi voluptatum doloribus, soluta alias voluptatem quia praesentium atque, dolore cupiditate quam harum maxime sed. Iusto voluptas facere dignissimos totam nam. Quaerat itaque perferendis earum quibusdam aliquid ad accusantium laboriosam, doloribus quidem nostrum numquam sequi. Doloremque eligendi optio facilis adipisci corporis repellat aperiam sed sunt nisi sapiente. Quos animi voluptate ut doloremque, eum eos deleniti qui odit, facilis provident officia perferendis inventore.</p>
            <router-link class="btn register" to="/register">Register</router-link>
            <router-link class="btn login" to="/login">Login</router-link>
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
    color: white;
    font-family: 'Zilla Slab', serif;
    font-size: 3.5em;
  }
  .paragraph {
    line-height: 1.5em;
    color: rgb(165, 161, 161);
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
