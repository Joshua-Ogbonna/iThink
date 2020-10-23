<template>
    <div class="container">
        <form>
            <h4 class="text-center mt-5">hi! welcome, register an account</h4>
            <div class="form-group mt-4">
                <label for="Name">Name</label>
                <input type="text" name="name" class="form-control" placeholder="John Doe">
            </div>
            <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" name="email" class="form-control" placeholder="johndoe@email.com">
            </div>
            <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" name="password" class="form-control" placeholder="**************">
            </div>
            <div class="form-group">
                <label for="Confirm_Password">Confirm Password</label>
                <input type="password" name="confirm_password" class="form-control" placeholder="**************">
            </div>
            <button class="btn mr-5">Register</button>
            <router-link to="/login" class="para mr-5">Have an account? Login</router-link>
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