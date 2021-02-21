<template>
    <div>
        <Navigation />
        <!-- Profile and Notes -->
        <!-- {{searchNotes}} -->
        <div class="container first">
            <div class="row">

                <div class="col-lg-6">
                    <h1 class="note mb-1">Notes</h1>
                   
                </div>
                <div class="col-lg-6 icon">
                    <i class="fas fa-search text-muted"></i><input type="text" class="form-control float-right" placeholder="Search Notes" v-model="input" >
                </div>
                <div class="col-lg-6">
                    
                    <div class="card mb-3" v-for="note in reversedNote" :key="note._id">
                        
                        <div class="card-body">
                            <span class="float-right "><i class="fas fa-circle spin"></i></span> <br>
                            <h5 class="card-title">{{note.title}}</h5>
                            
                            <p class="card-subtitle mt-3 mb-3 text-muted"> {{note.content}} </p>
                            
                            <!-- <span href="#" class="card-link text-muted card-subtitle link1">Card link</span> -->
                            <span href="#" class="card-link float-right link2"> {{new Date(note.createdAt).toLocaleString()}} </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 second">
                    
                    <img src="@/svgs/task.svg" alt="" class="img-fluid">

                    <div class="second-inner">
                        <h1 class="inner-head">Write down your ideas <i class="far fa-lightbulb"></i></h1>
                        <p class="mt-3 mb-3"><span>#ideas </span> <span>#inspirations </span> <span> #motivations</span></p>

                        <p class="text-muted">"Sometimes, on Mondays, when servers at A16 are announcing the specials, you can almost feel the excitement at the table when the waiters say, 'And of course, since it's Monday...we have meatballs." Says Shelly Lingren</p>
                    </div>
                </div>
            </div>
        </div>

        <div>            <!-- End of modal -->
            <router-link to="/add-thought" :user="user"><i class="fas fa-plus" id="fas"></i></router-link>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Navigation from '@/components/Navigation'
import diaryForm from '@/components/diaryForm'
import axios from 'axios'
import Swal from 'sweetalert2'

    export default {
        // Vue Data
       
        data() {
            return {
                showForm: false,
                notes: [],
                activeDiary: null,
                user: [],
                input: ''
            }
        },
        components: {
            diaryForm,
            Navigation
        },
        methods: {
            // ...mapActions(['getUser']),
        },

        computed: {
            reversedNote() {
                return this.notes.reverse()
            },
            searchNotes() {
                return this.reversedNote.filter(note => {
                    return note.title.toLowerCase().includes(this.input.toLowerCase())
                })
            }
        },

        created() {
            axios.get('https://blooming-hollows-33203.herokuapp.com/api/user').then(response => {
                axios.get(`https://blooming-hollows-33203.herokuapp.com/api/user/${response.data.user._id}`).then(response => {
                    this.notes = response.data.notes
                })
                this.user = response.data.user
            })
        },
        // Vue Mounted
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
        bottom: 4px;
        text-decoration: none;
        font-size: 1.2em;
        color:  white;
    }
    #fas:hover {
        color: #ffc75f;
    }
    .note,
    .inner-head {
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        /* text-align: center; */
        font-size: 2rem;
    }
    .first {
        margin-top: 3rem;
    }
    .card {
        background: #fafafa;
        border: none;
        /* margin-bottom: 1rem; */
        border-radius: 1rem;
    }
    .card-title {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1rem;
    }
    .card-subtitle, .link1, .link2 {
        font-family: 'Poppins', sans-serif;
        font-size: 0.9rem;
    }
    .link2 {
        color: #ffc75f;
        font-weight: bold;
    }
    .spin {
        color: #fff;
        background: #ffc75f;
        border-radius: 50%;
        font-size: .6rem;
        padding: 5px;
    }
    .second {
        padding-top: 5rem;
        
    }
    .second img {
        margin: 0 auto;
        width: 60%;
        display: block;
    }
    .second-inner {
        margin-top:4rem;
    }
    .inner-head i {
        color: #ffc75f;
    }
    .second-inner span {
        color: #ffc75f;
        font-family: 'Poppins', sans-serif;
        margin-right: 2rem;
        font-weight: bold;
    }
    .second-inner p, p {
        font-size: .95rem;
        font-family: 'Poppins', sans-serif;
    }
    input {
        margin-bottom: 2rem;
        border-radius: 4rem;
        padding-left: 2rem;
    }
    .icon i {
        font-size: 1.2rem;
        position: relative;
        top: 2rem;
        left: .6rem;
    }

    @media only screen and (max-width: 736px) {
        #fas {
            height: 40px;
            width: 40px;
            font-size: 1.4rem;
            color:  white;
        }
    }
</style>