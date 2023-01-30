<template>
    <div class="flex flex-wrap w-full justify-center items-center pt-56">
       <div class="flex flex-wrap max-w-xl">
           <div class="p-2 text-2xl text-gray-800 font-semibold"><h1>Login to your account</h1></div>
           <div class="p-2 w-full">
               <label for="username">Username</label>
               <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Username" type="text" v-model="form.username">
           </div>
           <div class="p-2 w-full">
               <label for="password">Password</label>
               <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Password" type="password" v-model="form.password" name="password">
           </div>
           <div class="p-2 w-full mt-4">
               <button @click="loginUser" type="submit" class="btn btn-primary">Login</button>
           </div>
       </div> 
   </div>
</template>
<script>
export default {
   data(){
       return{
           form:{
               username: '',
               password: ''
           },
           errors: []
       }
   },
   methods:{
        loginUser(){
            axios.post('/api/login', this.form).then(() =>{
                this.$router.push({ name: "ProductIndex"}); 
            }).catch((error) =>{
        this.errors = error.response.data.errors;
           })
        }
   }
}
</script>