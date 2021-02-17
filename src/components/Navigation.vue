<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <router-link class="navbar-brand" to="/">notes</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profile" v-if="isLoggedIn">Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register" v-if="!isLoggedIn">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login" v-if="!isLoggedIn">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link" v-if="isLoggedIn">Welcome {{user.name}} </button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link" @click.prevent="logout" v-if="isLoggedIn">Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['isLoggedIn', 'user']),
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
    .navbar-brand {
        padding-left: 7.7em;
    }
    .navbar-brand {
        color: rgb(241, 87, 87);
        font-family: 'Rubik', sans-serif;
        font-size: 1.5em;
    }
    ul {
        padding-right: 7em;
    }
    .nav-link {
        margin-right: 1.7em;
        color: rgb(255, 254, 254);
        font-family: 'Rubik', sans-serif;
        font-size: 1.2em;
    }
    .nav-link:hover {
        color: rgb(241, 87, 87);
    }
    .navbar {
        background-color:  rgb(15, 15, 15);
        color: rgb(12, 12, 12);
    }
    button {
        background-color: rgb(15, 15, 15);
        outline: none;
        border: none;
    }

    /* Media query for mobiles */
    @media only screen and (max-width: 736px) {
        .navbar-brand {
            padding-left: 0;
        }
    }

    /* Media query for iPad */
    @media only screen and (min-width: 768px) {
        .navbar-brand {
            padding-left: 2rem;
        }
    }
</style>