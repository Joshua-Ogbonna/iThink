<template>
    <div class="container mt-4">
        
        <div class="row">
            <div>
                <h3 class="">Diaries</h3>
            </div>
            <div>
                <button class="btn ml-5 mb-4" @click="toggleForm()">add thoughts</button>
            </div>
        </div>

        <div class="row mt-5" v-if="getUserDiary.thoughts.length > 0">
            <div class="col-sm-12 col-md-6 col-lg-4" v-for="diary in getUserDiary.thoughts" :key="diary._id">
                <div class="card mb-4" style="width: 23rem;">
                    <div class="card-body">
                        <h5 class="card-title"> {{diary.title}} </h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{user.name}}</h6>
                        <p class="card-text">{{diary.thoughts}}</p>
                        <a class="card-subtitle mb-2 text-muted">{{diary.createdAt}}</a>
                        
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <h4>Hello {{user.name}}, you have posted no thoughts yet! Start posting right away </h4>
        </div>
        <i class="fas fa-plus" id="fas" @click="toggleForm()"></i>
    </div>
</template>

<script>
/* eslint-disable */
import diaryForm from '@/components/diaryForm'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

    export default {
        // Vue Data
        data() {
            return {
                showForm: false,
                diary: []
            }
        },
        components: {
            diaryForm
        },
        computed: {
            ...mapGetters(['user']),
            getUserDiary() {
                return this.diary.find(diary => {
                    return diary._id === this.user._id
                })
            },
            
        },
        methods: {
            ...mapActions(['getUser']),
            toggleForm() {
                this.showForm = !this.showForm
            },
        },
        created () {
            this.getUser()
            
            axios.get('http://localhost:3200/api/thoughts').then((response) => {
                this.diary = response.data.diary
                // console.log(this.diary)
            })
            
        },
    }
</script>

<style scoped>
    #fas {
        color: white;
        background-color: black;
        height: 60px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* padding: 1em 1em 0 1em; */
        cursor: pointer;
        border-radius: 40px;
        position: fixed;
        right: 20px;
        bottom: 20px;
        text-decoration: none;
        font-size: 1.2em;
        color:  white;
    }
    #fas:hover {
        color: rgb(241, 87, 87);
    }
    button {
    margin-right: 2em;
    background:#000;
    color: rgb(241, 87, 87);
    font-size: 1.4em;
    
   
  }
  button:hover {
    background:#000;
    color: rgb(241, 87, 87);
  }
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
</style>