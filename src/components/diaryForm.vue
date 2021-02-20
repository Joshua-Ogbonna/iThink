<template>
    <div class="container mb-4 mt-5 ">
        
        <div>
            <form>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" name="title" class="form-control" placeholder="note title" v-model="title">
                </div>
                <div class="form-group">
                    <textarea name="thoughts" cols="30" rows="10" class="form-control" placeholder="note" v-model="thoughts"></textarea>
                </div>
                <button class="btn mt-4" @click.prevent="postMyDiaries()">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
// import Editor from '@tinymce/tinymce-vue'
import Swal from 'sweetalert2'
import axios from 'axios'

    export default {
        components: {
            // editor: Editor,
        },
        // Vue Data
        data() {
            return {
                thoughts: "",
                title: "",
                user: []
            }
        },
        // Vue Methods
        methods: {
            postMyDiaries() {
                let user = {
                    content: this.thoughts,
                    title: this.title
                }
                axios.post(`http://localhost:34000/api/user/${this.user._id}`, user)
                .then((res) => {
                    if(res.data.success) {
                        Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500,
                        })
                    }
                    this.$router.push('profile')
                }).catch((error) => {
                    console.log(error)
                })
            }
        },

        created() {
            axios.get('http://localhost:34000/api/user').then(response => {
                this.user = response.data.user
            })
        }
    }
</script>

<style scoped>
    button {
    margin-right: 2em;
    background:#ffc75f;
    color: #fff;
    font-size: 1.4em;
    
   
  }
  button:hover {
    background:#ffc75f;
    color: #fff;
  }
</style>