<template>
  
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
  <section class="flex m-auto w-10/12 h-screen">
    <article class="w-1/2">
    <textarea class=" border h-full w-full" v-model="text"></textarea>
    </article>
    <article class="w-1/2 border bg-gray-200">{{text}}</article>
  </section>
  </div>
  
</template>

<script>
export default {
  data(){
    return{
      text:"",
    }
  }
  };
</script>

<style>

</style>
