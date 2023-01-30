<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <!-- /.login-logo -->
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Register</p>

                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Fullname" v-model="form.name">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>
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
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Confirm Password" v-model="form.password_confirmation">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="is_admin" v-model="form.is_admin">
                                <label for="is_admin">
                                    Administrator
                                </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button @click="saveForm" type="submit" class="btn btn-primary btn-block">Register</button>
                        </div>
                        <!-- /.col -->
                    </div>
                    <div class="social-auth-links text-center mt-2 mb-3"
                        v-if="errors && errors.error && errors.error.length > 0">
                        <button class="btn btn-block btn-danger">
                            {{ errors.error[0] }}
                        </button>
                    </div>
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
                name: '',
                username: '',
                password: '',
                password_confirmation: '',
                is_admin: 0
            },
            errors: []
        }
    },
    methods: {
        saveForm() {
            axios.post('/api/register', this.form).then(() => {
                console.log('saved');
                this.$router.push({ name: "Login" });
            }).catch((error) => {
                this.errors = error.response.data.errors;
            })
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: "Login" });
        }
    }
}
</script>