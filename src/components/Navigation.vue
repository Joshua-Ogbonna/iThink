<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <router-link class="navbar-brand" to="/"><i class="fas fa-book-reader"></i> Evnote</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" id="link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" id="link" to="/profile" v-if="isLoggedIn">Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" id="link" to="/register" v-if="!isLoggedIn">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" id="link" to="/login" v-if="!isLoggedIn">Login</router-link>
                    </li>
                    
                    <li class="nav-item">
                        <button class="nav-link" id="logout" @click.prevent="logout" v-if="isLoggedIn">Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'Navigation',
        computed: {
            ...mapGetters(['isLoggedIn']),
        },

        methods: {
            ...mapActions(['signout']),
            logout() {
                this.signout()
            }
        },
        
    }
</script>

<style scoped>
    i {
        color: #ffc75f;
    }
    .navbar-brand {
        padding-left: 12rem;
    }
    .navbar-brand {
        color: #000;
        font-family: 'Rubik', sans-serif;
        font-size: 1.5em;
    }
    .navbar-brand:hover {
        color: #000;
    }
    ul {
        padding-right: 7em;
    }
    #link {
        margin-right: 1.7em;
        color: #000;
        font-family: 'Rubik', sans-serif;
        font-size: 1.1rem;
    }
    .navbar {
        background-color:  #fff;
    }
    #logout {
        background-color: #ffc75f;
        outline: none;
        border: none;
        padding: .6rem 2rem;
        border-radius: 40px;
        color: #fff;
    }

    /* Media query for mobiles */
    @media only screen and (max-width: 736px) {
        .navbar-brand {
            padding-left: 0;
        }
    }

    /* Media query for iPad */
    @media only screen and (min-width: 768px) and (max-width: 1166px) {
        .navbar-brand {
            padding-left: 2rem;
        }
    }
</style>