<template>
 <nav class="w-full bg-gradient-to-r from-red-600 to-red-400 px-4 py-2 text-white">
   <router-link v-for="item in lists" :key="item.url" :to="item.url" class="mx-2">{{item.title}}</router-link>
 </nav>
</template>

<script>
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
}
}
</script>

<style>

</style>