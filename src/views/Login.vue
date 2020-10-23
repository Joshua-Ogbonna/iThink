<template>
    <div class="container">
        <form>
            <h4 class="text-center mt-5">welcome back, login to your profile</h4>
            
            <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" name="email" class="form-control" placeholder="johndoe@email.com">
            </div>
            <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" name="password" class="form-control" placeholder="**************">
            </div>
            
            <button class="btn mr-5">Login</button>
            <router-link to="/register" class="para mr-5">Don't have an account? Register</router-link>
        </form>
    </div>
</template>

<script>
    export default {
        
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
        color:  rgb(212, 163, 27);
        font-size: 0.9em;
        border-radius: 40px;
        padding: 1em 3em;
        margin-top: 1em;
    }
    .btn:hover {
        color:  rgb(212, 163, 27);
    }
    .para {
        color: #000;
        text-decoration: none;
    }
</style>