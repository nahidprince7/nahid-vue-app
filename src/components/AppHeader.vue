<template>
 <nav class="w-full px-4 py-2 text-black" style="background-color:#E98973;">
   <router-link v-for="item in lists" :key="item.url" :to="item.url" class="mx-2">{{item.title}}</router-link>
   
   
   <button v-if="isLoggedIn" class="mx-2 float-right" @click="logout">Logout</button>
   <button v-else class="mx-2 float-right" @click="openLogin">Login</button>
 </nav>
</template>

<script>
import firebase from "../utilities/firebase"
export default {
   props:{"isLoggedInProp":{type:Boolean,required: true}},
data(){

   return {  
      lists: [
         { title:"Profile |", url:"/"},
         { title:"DC Heros |", url: "/dc-heros"},
         { title:"Calender |", url: "/calender"},
         { title:"Markdown App |", url: "/markdown"},
         { title:"Slider |", url: "/slider"},
         { title:"Calculator |", url: "/calculator"},
         { title:"Reusable Modal |", url: "/reusable-modal"},
         { title:"Chat |", url: "/chat"},
         { title:"User Crud |", url: "/user-crud"},
         
      ],
      
   }
},
methods:{
   logout(){
      firebase.auth().signOut()
      alert("You are logged out successfully")
   },
   openLogin(){
      this.$store.commit('setLoginModal',true)
   }
   
},
computed:{
   isLoggedIn(){
      return this.$store.state.isLoggedIn
   }
}
}
</script>

<style>

</style>