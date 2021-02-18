<template>
    <div class="container">
        <form>
            <h4 class="text-center mt-5">welcome back, login to your profile</h4>
            
            <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" name="email" class="form-control" placeholder="johndoe@email.com" v-model="info.email" required>
            </div>
            <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" name="password" class="form-control" placeholder="**************" v-model="info.password" required>
            </div>
            
            <button class="btn mr-5" @click.prevent="loginUser">Login</button>
            <router-link to="/register" class="para mr-5">Don't have an account? Register</router-link>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
/* eslint-disable */
import router from '../router/index'
    export default {
        data() {
            return {
                info: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            ...mapActions(['login']),
            loginUser() {
                let user = {
                    email: this.info.email,
                    password: this.info.password
                }
                this.login(user).then((res) => {
                    console.log(res)
                    if(res.data.message) {
                        this.$router.push('/profile')
                    }
                }).catch((error) => {
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
        background: #1a508b;
        outline: none;
        color: #fff;
        font-size: 0.9em;
        border-radius: 40px;
        padding: 1em 3em;
        margin-top: 1em;
    }
    .btn:hover {
        color: #fff;
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
            font-size: 0.8rem;
        }
        .para {
            font-size: .7rem;
            margin-left: -2rem;
        }
        button {
            /* background: #000; */
            outline: none;
            /* color: rgb(241, 87, 87); */
            font-size: 0.9em;
            border-radius: 40px;
            padding: 1em 2em;
            margin-top: 1em;
        }
    }
</style>