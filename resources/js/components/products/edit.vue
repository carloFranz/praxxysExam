<template>
    <div class="wrapper">

        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{ name: 'Home' }" class="nav-link"><i class="fas fa-bars"></i></router-link>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <router-link :to="{ name: 'Home' }" class="nav-item nav-link">Home</router-link>
                </li>
            </ul>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="#" @click="logOut" class="nav-link">Logout</a>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="index3.html" class="brand-link">
                <span class="brand-text font-weight-light">Exam</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class
     with font-awesome or any other icon font library -->
                        <li class="nav-item menu-open">
                            <a href="#" @click="goToProduct" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Product
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <!-- /.row -->
                    <!-- Main row -->
                    <div class="row">
                        <div class="container">
                            <h2 class="text-center">Update Product</h2>
                            <div class="row">
                                <div class="col-md-12">
                                    <router-link :to="{ name: 'ProductIndex' }"
                                        class="btn btn-primary btn-sm float-right mb-2">Back</router-link>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <form>
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" class="form-control" v-model="product.name">
                                        </div>
                                        <div class="form-group">
                                            <label>Category</label>
                                            <select class="form-control" v-model="product.category_id">
                                                <option v-for="category in categories" :value="category.id">
                                                    {{ category.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Description</label>
                                            <textarea type="text" rows="5" class="form-control"
                                                v-model="product.description"></textarea>
                                        </div>
                                        <button type="button" class="btn btn-primary" @click="updateProduct()"> Update
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.row (main row) -->
                </div><!-- /.container-fluid -->
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        <footer class="main-footer">
            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
                <b>Version</b> 3.2.0
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product: {},
            categories: {}
        }
    },
    created() {
        this.getCategories();
    },
    mounted() {
        this.editProduct(this.$route.params.productId);
    },
    methods: {
        editProduct(productId) {
            this.axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
                .then((response) => {
                    this.product = response.data;
                    console.log(response.data);
                });
        },
        updateProduct() {
            this.axios
                .patch(`http://127.0.0.1:8000/api/products/${this.$route.params.productId}`, this.product)
                .then((response) => {
                    this.$router.push({ name: 'ProductIndex' });
                });
        },
        getCategories() {
            this.axios.get('http://127.0.0.1:8000/api/categories').then(response => {
                this.categories = response.data;
                console.log(response.data);
            }).catch(error => {
                console.log(error)
            })
        },
        logOut() {
            localStorage.clear();
            this.$router.push({ name: "Login" });
        },
        goToProduct(){
            this.$router.push({ name: "ProductIndex" });
        }
    }
}
</script>