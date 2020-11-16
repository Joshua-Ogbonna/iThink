<template>
    <div class="container mt-4">
        
        <div class="row">
            <div>
                <h3 class="">Diaries</h3>
            </div>
            <div>
                <router-link class="btn ml-5 mb-4" id="button" to="/add-thought">add thoughts</router-link>
            </div>
        </div>

        <div class="row mt-5" v-if="getUserDiary.thoughts.length > 0">
            <div class="col-sm-12 col-md-6 col-lg-4" v-for="diary in getUserDiary.thoughts" :key="diary._id">
                
                <div class="card mb-4" style="width: 23rem;">
                    <div class="card-body">
                        <router-link :to="'diary/'+ diary._id"><h5 class="card-title" id="title"> {{diary.title}} </h5></router-link>
                        <h6 class="card-subtitle mb-2 text-muted">{{user.name}}</h6>
                        <p class="card-text">{{diary.thoughts.slice(0, 50)}}</p>
                        <a class="card-subtitle mb-2 text-muted">{{diary.createdAt}}</a> <br>
                        <button class="btn" id="edit" data-toggle="modal" @click="diaryEdit(diary)" data-target="#exampleModal">Edit</button>
                        <button class="btn ml-4" id="delete" @click="deleteDiary(diary)">Delete</button>
                        
                    </div>
                
                
                </div>
            </div>
        </div>


        <div v-else>
            <h4>Hello {{user.name}}, you have posted no thoughts yet! Start posting right away </h4>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Diary</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" name="title" class="form-control" v-model="editDiary.title">
                            </div>
                            <div class="form-group">
                                <label for="thoughts">Thoughts</label>
                                <textarea name="thoughts" cols="30" rows="10" class="form-control" v-model="editDiary.thoughts"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="updateDiary()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

                        <!-- End of modal -->
        <router-link to="/add-thought"><i class="fas fa-plus" id="fas"></i></router-link>
    </div>
</template>

<script>
/* eslint-disable */
import diaryForm from '@/components/diaryForm'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

    export default {
        // Vue Data
        data() {
            return {
                showForm: false,
                diary: [],
                editDiary: {
                    title: "",
                    thoughts: ""
                },
                activeDiary: null
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

            // Get diaries
            getDiary() {
                axios.get('http://localhost:3200/api/thoughts').then((response) => {
                    this.diary = response.data.diary
                    // console.log(this.diary)
                })
            },

            // Delete Diary
            deleteDiary(diary) {
                Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete('http://localhost:3200/api/thoughts/' + diary._id).then(() => { 
                            Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                            )
                        this.getDiary()
                        })
                    }
                })
                
                // console.log(diary._id)
            },

            // Edit diary
            diaryEdit(diary) {
                this.editDiary.title = diary.title
                this.editDiary.thoughts = diary.thoughts
                // console.log(diary._id)
                this.activeDiary = diary._id
            },

            // Update diary
            updateDiary() {
                Swal.fire({
                        title: 'Do you want to save the changes?',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: `Save`,
                        denyButtonText: `Don't save`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            Swal.fire('Saved!', '', 'success')
                             axios.put(`http://localhost:3200/api/thoughts/${this.activeDiary}`, this.editDiary).then(() => {
                                console.log('Diary updated successfully')
                                this.getDiary()
                            })
                        } else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info')
                        }
                }).catch(error => {
                    console.log(error)
                })
            }
        },

        // Vue created
        created () {
            this.getUser()
            this.getDiary()
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
  .card {
      border: none;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    
  }
  .card h3 {
      font-family: 'Kanit', sans-serif;
      text-decoration: none;
  }

  #title {
      color: black;
      text-decoration: none;
  }

  #edit {
      background:#000;
      color: white;
  }

  #delete {
      background: rgb(241, 87, 87);
      color: black;
  }
</style>