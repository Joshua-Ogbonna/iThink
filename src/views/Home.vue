<template>
  <div>
    <Navigation />
    <div class="home">
      <div class="main">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 first_row">
              <p class="tagline">Scared of ever losing your thoughts?</p>
              <p class="head">Put them in a secure place.</p>
              
              <router-link to="/register" v-if="!isLoggedIn" class="btn register">Register</router-link>
              <router-link to="/login" v-if="!isLoggedIn" class="btn login">Login</router-link>
              <router-link to="/profile" v-if="isLoggedIn" class="btn login">Dashboard</router-link>
            </div>
            <div class="col-lg-5 second_row">
              <img src="@/svgs/diary.svg" class="img-fluid" alt="POST SVG">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navigation
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
}
</script>

<style lang="css" scoped>
  
  .first_row {
    margin: 10em 0;
    line-height: 2.7em;
  }
  .second_row {
    margin-top: 8rem;
  }
  .tagline {
    color: #000;
    font-family: 'Open Sans', sans-serif;
    font-size: 3.5em;
    line-height: 4rem;
    font-weight: 700;
  }
  .head {
    font-family: 'Poppins', sans-serif;
    font-size: 2em;
    color: #000;
  }
  .register {
    margin-right: 2em;
    background: #1a508b;
    color: #fff;
    font-size: 1.4em;
    border-radius: 40px;
    padding: 1em 3em;
    margin-top: 1em;
  }
  .login {
    background: #1a508b;
    outline: none;
    color: #fff;
    font-size: 1.4em;
    border-radius: 40px;
    padding: 1em 3em;
    margin-top: 1em;
  }

  /* Media query for iPhone 5/SE */
  @media only screen and (min-width: 320px) and (max-width: 812px) {
    .first_row {
      margin: 5rem 0;
      text-align: center;
    }
    .tagline {
      font-size: 1.7rem;
      text-align: center;
      line-height: 2rem;
    }
    .head {
      font-size: 1.4rem;
      line-height: 1.4rem;
    }
    .login, 
    .register {
      padding: 1rem 2rem;
      font-size: 1rem;
    }
    .second_row {
      margin-top: 0rem;
      text-align: center;
    }
    .second_row img {
      width: 17rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1268px) {
    .first_row {
        margin: 15em 0;
    }
    .register {
      margin-right: 2em;
      
      color: #000;
      font-size: 1.2rem;
      border-radius: 40px;
      padding: 1em 3em;
      margin-top: 1em;
    }
    .login {
      background: #000;
      outline: none;
      
      font-size: 1.3rem;
      border-radius: 40px;
      padding: 1em 3em;
      margin-top: 1em;
    }
    .tagline {
      font-size: 2.5rem;
    }
    .head {
      font-size: 3em;
    }
    .paragraph {
      font-size: 1.2rem;
    }
  }

  /* Media query for mobiles *

  /* Media query laptop and above */
  @media screen and (min-width: 1366px) {
    
    .first_row {
        margin: 10rem 0;
        line-height: 2.7em;
    }
  }
</style>
