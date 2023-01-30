<template>
    <div class="flex flex-wrap w-full justify-center items-center pt-56">
      <div class="flex flex-wrap max-w-xl">
          <div class="p-2 text-2xl text-gray-800 font-semibold"><h1>Register an account</h1></div>
          <div class="p-2 w-full">
              <label class="w-full" for="name">Name</label>
              <span class="w-full text-red-500" v-if="errors.name">{{errors.name[0]}}</span>
              <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text" v-model="form.name" >
          </div>
          <div class="p-2 w-full">
              <label for="username">Username</label>
              <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Username" type="text" v-model="form.username">
          </div>
          <div class="p-2 w-full">
              <label for="password">Password</label>
              <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Password" type="password" v-model="form.password" name="password">
          </div>
          <div class="p-2 w-full">
              <label for="confirm_password">Confirm Password</label>
              <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Confirm Password" type="password" v-model="form.password_confirmation" name="password_confirmation">
          </div>
          <div class="p-2 w-full mt-4">
              <button @click="saveForm" type="submit" class="btn btn-primary">Register</button>
          </div>
      </div> 
  </div>
</template>
<script>
export default {
  data(){
      return{
          form:{
              name: '',
              username: '',
              password:'',
              password_confirmation:'',
              is_admin: 1
          },
          errors:[]
      }
  },
  methods:{
      saveForm(){
          axios.post('/api/register', this.form).then(() =>{
              console.log('saved');
              this.$router.push({ name: "Login"}); 
          }).catch((error) =>{
              this.errors = error.response.data.errors;
          })
      }
  }
}
</script>