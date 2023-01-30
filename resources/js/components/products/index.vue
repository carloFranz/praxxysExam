<template>
    <div class="container">
        <h2 class="text-center">Products List</h2>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'ProductCreate' }" class="btn btn-primary btn-sm float-right mb-2">Add Product</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="text" class="form-control" placeholder="Search for Name, Category or Description" v-model="search"/>
            </div>
            <div class="col-md-12">
                <table class="table">
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
                            <td>{{ index+1 }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.category_name }}</td>
                            <td>{{ product.description }}</td>
                            <td>
                                <router-link class="btn btn-success btn-sm" :to="{ name: 'ProductEdit', params: { productId: product.id }}">Edit</router-link>
                                <button class="btn btn-danger btn-sm" @click="deleteProduct(product.id)">Delete</button>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
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
            }).catch(error=>{
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
            }
        },
        computed: {
            productList(){
               if(this.search.trim().length >0){
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