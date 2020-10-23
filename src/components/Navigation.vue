<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <router-link class="navbar-brand" to="/">secret.It</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profile">Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .navbar-brand {
        padding-left: 7.7em;
        
    }
    .navbar-brand {
        color: rgb(255, 249, 249);
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
        color: rgb(212, 163, 27);
    }
    .navbar {
        background-color:  rgb(15, 15, 15);
        color: rgb(12, 12, 12);
    }
</style>