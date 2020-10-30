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

        <diaryForm v-if="showForm"/>

        <div v-if="reverseDiaries.length > 0">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4" v-for="diary of reverseDiaries" :key="diary._id">
                    <div>
                        <div class="card mb-2" >
                            <div class="card-body">
                                <h3 class="card-title"> {{diary.title}} </h3>
                                <h6 class="card-subtitle mb-2 text-muted"> {{user.name}} </h6>
                                <p class="card-text"> {{diary.thoughts}} </p>
                                <a class="card-subtitle"> {{diary.createdAt}} </a>
                            </div>
                        </div>
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
    export default {
        // Vue Data
        data() {
            return {
                showForm: false,
            }
        },
        components: {
            diaryForm
        },
        computed: {
            ...mapGetters(['user', 'diaries']),
            getUserDiary() {
                return this.diaries.find(diary => {
                    return diary._id == this.user._id
                })
            },
            reverseDiaries() {
                return this.getUserDiary.thoughts.slice().reverse()
            }
        },
        methods: {
            ...mapActions(['getUser', 'getDiaries']),
            toggleForm() {
                this.showForm = !this.showForm
            },
        },
        created () {
            this.getUser();
            this.getDiaries()
            this.getUserDiary()
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