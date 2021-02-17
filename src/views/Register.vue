<template>
    <div class="container">
        <form>
            <h4 class="text-center mt-5">hi! welcome, register an account</h4>
            <div class="form-group mt-4">
                <label for="Name">Name</label>
                <input type="text" name="name" class="form-control" placeholder="John Doe" v-model="register.name" required>
            </div>
            <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" name="email" class="form-control" placeholder="johndoe@email.com" v-model="register.email" required>
            </div>
            <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" name="password" class="form-control" placeholder="**************" v-model="register.password" required>
            </div>
            <div class="form-group">
                <label for="Confirm_Password">Confirm Password</label>
                <input type="password" name="confirm_password" class="form-control" placeholder="**************" v-model="register.confirm_password" required>
            </div>
            <button class="btn mr-5" @click.prevent="registerUser">Register</button>
            <router-link to="/login" class="para " id="para">Have an account? Login</router-link>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                register: {
                    email: "",
                    name: "",
                    password: "",
                    confirm_password: ""
                }
            }
        },

        // Methods
        methods: {
            ...mapActions(['signup']),
            registerUser() {
                this.signup(this.register).then(res => {
                    console.log(res)
                    if(res.data) {
                        this.$router.push('/login')
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style scoped>
    form {
        font-family: 'Rubik', sans-serif;
        font-weight: bolder;
        margin: 0 auto;
        width: 60%;
    }
    button {
        background: #000;
        outline: none;
        color: rgb(241, 87, 87);
        font-size: 0.9em;
        border-radius: 40px;
        padding: 1em 3em;
        margin-top: 1em;
    }
    .btn:hover {
        color: rgb(241, 87, 87);
    }
    .para {
        color: #000;
        text-decoration: none;
    }

    @media screen and (max-width: 667px) {
        form {
            width: 100%;
        }
        h4 {
            font-size: 1.2rem;
        }
        #para {
            font-size: 1rem;
            margin-left: -1rem;
        }
         button {
            background: #000;
            outline: none;
            color: rgb(241, 87, 87);
            font-size: 0.9em;
            border-radius: 40px;
            padding: 1em 2em;
            margin-top: 1em;
        }
    }
</style>