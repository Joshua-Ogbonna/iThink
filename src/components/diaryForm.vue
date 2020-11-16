<template>
    <div class="container mb-4 mt-5 ">
        
        <div>
            <form>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" name="title" class="form-control" placeholder="thought title" v-model="title">
                </div>
                <div class="form-group">
                    <textarea name="thoughts" cols="30" rows="10" class="form-control" v-model="thoughts"></textarea>
                </div>
                <button class="btn mt-4" @click.prevent="postMyDiaries()">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
// import Editor from '@tinymce/tinymce-vue'
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'
    export default {
        components: {
            // editor: Editor,
        },
        // Vue Data
        data() {
            return {
                thoughts: "",
                title: ""
            }
        },
        // Vue Methods
        methods: {
            ...mapActions(['postDiaries']),
            postMyDiaries() {
                let user = {
                    thoughts: this.thoughts,
                    title: this.title
                }
                this.postDiaries(user).then((res) => {
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
    }
</script>

<style scoped>
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
</style>