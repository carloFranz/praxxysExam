<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <!-- /.login-logo -->
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Sign in to start your session</p>


                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username" v-model="form.username">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password" v-model="form.password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="remember" v-model="form.remember_me">
                                <label for="remember">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button @click="loginUser" type="submit" class="btn btn-primary btn-block">Sign In</button>
                        </div>
                        <!-- /.col -->
                    </div>
                    <div class="social-auth-links text-center mt-2 mb-3" v-if="errors && errors.error && errors.error.length >0 ">
                        <button class="btn btn-block btn-danger">
                            {{ errors.error[0] }}
                        </button>
                    </div>
                    <p class="mb-0">
                        <router-link :to="{ name: 'Register' }"  class="text-center">Register an account</router-link>
                    </p>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
                remember_me: 0
            },
            errors: []
        }
    },
    methods: {
        loginUser() {
            axios.post('/api/login', this.form).then((result) => {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({ name: "ProductIndex" });
            }).catch((error) => {
                this.errors = error.response.data.errors;
                console.log(error.response.data.errors);
            })
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: "Home" });
        }
    }
}
</script>