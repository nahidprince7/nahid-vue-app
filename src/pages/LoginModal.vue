<template>

  <section @click="close"
   class="z-20 h-screen w-screen bg-gray-700 fixed top-0 opacity-50" ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3" >
<div class="p-2 border">
        <h1 class="text-2xl text-center">Login</h1>
        <h5 class="text-center text-gray-600">Using Firebase</h5>
        <p class="my-5 text-center">Or</p>
        <GoogleLogin @close-login-from-google = "close" />
        <form class="p-2 my-2" @submit.prevent="">
          <div class="my-4">
            <label for="">
            Email or Username
          </label>
          <input ref="email" v-model="email" type="text" class="rounded shadow p-2 w-full" placeholder="Enter Email or Username"/>
          </div>
           <div class="my-4">
          <label for="">
            Password
          </label>
          <input v-model="password" type="password" class="rounded shadow p-2 w-full" placeholder="Enter Password"/>
          </div>

          <div class="my-4 text-center">
          <button type="submit" @click="submit" class="text-white justify-center w-1/3 h-10 rounded shadow bg-gradient-to-t from-red-500 to-yellow-400">
          <span v-if="!isLoading">Login</span>
          
          <span v-else>Authenticating..</span> 
          
          </button>
          </div>
        </form>
        
</div>
      </div>
    </div>

  </div>

</template>

<script>

import firebase from '../utilities/firebase'
import GoogleLogin from'../components/login/GoogleLogin'
export default {
  components:{GoogleLogin},
  data(){
    return{
        email:'nahidprince7@gmail.com',
        password:'123456',
        isLoading:false
    }
  },
  mounted(){
    this.$refs.email.focus()
  },
  methods:{
    submit(){
      this.isLoading=true
      firebase.auth().signInWithEmailAndPassword(this.email,this.password)
      .then(()=>{
        this.email=""
        this.password=""
        this.isLoading=false
        alert("Logged In Successfully")
        this.close()
        
      })
      .catch((e)=>{
        this.isLoading=false
        console.log(e)
      })
    },
    close(){
      this.$emit('close-login-modal')
    }
  }
}
</script>

<style>

</style>