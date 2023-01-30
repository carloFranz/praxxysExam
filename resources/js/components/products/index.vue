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
                            <a href="#"  @click="goToProduct" class="nav-link active">
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
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Products</h3>

                                    <div class="card-tools">
                                        <div class="input-group input-group-sm" style="width: 400px;">
                                            <input type="text" name="table_search" class="form-control float-right"
                                                placeholder="Search for Name, Category or Description" v-model="search">

                                            <div class="input-group-append">
                                                <button type="submit" class="btn btn-default">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                                <router-link :to="{ name: 'ProductCreate' }" class="btn btn-primary">Add
                                                    Product</router-link>
                                            </div>
                                            <!-- /.card-body -->
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body table-responsive p-0">
                                    <table class="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th>Description</th>
                                                <th>Actions</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(product, index) in productList" :key="product.id">
                                                <td>{{ index+ 1 }}</td>
                                                <td>{{ product.name }}</td>
                                                <td>{{ product.category_name }}</td>
                                                <td>{{ product.description }}</td>
                                                <td>
                                                    <router-link class="btn btn-success btn-sm"
                                                        :to="{ name: 'ProductEdit', params: { productId: product.id } }">Edit</router-link>
                                                    <button class="btn btn-danger btn-sm"
                                                        @click="deleteProduct(product.id)">Delete</button>
                                                </td>
                                                <td>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
            products: {},
            search: ''
        }
    },
    created() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            this.axios.get('http://127.0.0.1:8000/api/products').then(response => {
                this.products = response.data;
                console.log(response.data);
            }).catch(error => {
                console.log(error)
            })
        },
        deleteProduct(productId) {
            this.axios
                .delete(`http://127.0.0.1:8000/api/products/${productId}`)
                .then(response => {
                    let i = this.products.map(data => data.id).indexOf(productId);
                    this.products.splice(i, 1)
                });
        },
        logOut() {
            localStorage.clear();
            this.$router.push({ name: "Login" });
        },
        goToProduct(){
            this.$router.push({ name: "ProductIndex" });
        }
    },
    computed: {
        productList() {
            if (this.search.trim().length > 0) {
                return this.products.filter((product) =>
                    product.name.toLowerCase().includes(this.search.trim().toLowerCase()) ||
                    product.description.toLowerCase().includes(this.search.trim().toLowerCase()) ||
                    product.category_name.toLowerCase().includes(this.search.trim().toLowerCase())
                )
            }


            return this.products;

        }
    }
}
</script>