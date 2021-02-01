<template>
 <nav class="w-full bg-gradient-to-r from-red-400 to-gray-400 px-4 py-2 text-black">
   <router-link v-for="item in lists" :key="item.url" :to="item.url" class="mx-2">{{item.title}}</router-link>
   
   <button class="mx-2" @click="$emit('open-login-modal')">Login</button>
   <button class="mx-2" @click="logout">Logout</button>
 </nav>
</template>

<script>
import firebase from "../utilities/firebase"
export default {
data(){

   return {
      lists: [
         { title:"Home", url:"/"},
         { title:"DC Heros", url: "/dc-heros"},
         { title:"Calender", url: "/calender"},
         { title:"Markdown App", url: "/markdown"},
         { title:"Slider carousel App", url: "/slider"},
      ]
   }
},
methods:{
   logout(){
      firebase.auth().signOut()
      // .then(res=>{

      // }).catch(e=>{
      //    console.log(e)
      // })
   }
   
}
}
</script>

<style>

</style>