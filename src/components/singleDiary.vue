<template>
    <div>
        <div class="container mt-5">
            
            
            <div class="card">
                <div class="card-body">
                    <h4>{{diary.title}}</h4>
                    
                    <p> {{diary.thoughts}} </p>
                </div>
            </div>

            <router-link class="btn mt-4" id="button" to="/profile">Your Profile</router-link>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
    export default {

        // Data lists
        data() {
            return {
                id: this.$route.params.id,
                diary: []
            }
        },

        created () {
            axios.get('http://localhost:3200/api/thoughts/' + this.id).then(response => {
                this.diary = response.data
            }).catch(error => {
                console.log(error)
            })
        },
    }
</script>

<style scoped>
    .card {
      border: none;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
  }
  .card h3 {
      font-family: 'Kanit', sans-serif;
  }

  #button {
    margin-right: 2em;
    background:#000;
    color: rgb(241, 87, 87);
    font-size: 1.4em;
    
   
  }
  #button:hover {
    background:#000;
    color: rgb(241, 87, 87);
  }
</style>