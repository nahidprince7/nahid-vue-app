<template>
  <div class="w-full flex">
<div class="m-auto">
 <h1 class="text-2xl text-center">DC heros</h1>
  <ul>
    <li class="flex justify-between" :key="index" v-for="(hero,index) in dcHeros">
     <p>
      {{hero}} 
     </p>
      
      <button @click="remove(index)">
        x
      </button>


    </li>
  </ul>
  <form class="mt-10" @submit.prevent="addHero">
  <input class="border rounded" v-model="newHero" ref="newHeroRef" />
    <button class="border rounded bg-gray" type="submit">Save</button>
  </form>
  <small>total heros in this list : {{herosCount}}</small>

</div>
</div>
</template>

<script>
import {computed, onMounted, ref} from "vue";
export default {
  setup(){

    const newHeroRef = ref("")

    const newHero=ref("Aquaman")

    const dcHeros = ref([
      'SuperGirl',
      'Flash',
      'Batman'
      ])

    function remove(index){
        console.log( this.dcHeros.filter((hero,i)=>i!==index))
       dcHeros.value = dcHeros.value.filter((hero,i)=>i!==index);
    }
    onMounted(()=>{
      newHeroRef.value.focus()
    })
    function addHero(){
      if(newHero.value !== '' ){
      dcHeros.value.unshift(newHero.value);
      newHero.value=''
      }
    }
    const herosCount = computed({
        get:()=> dcHeros.value.length,
    })
    return {dcHeros,newHero,remove,addHero,newHeroRef,herosCount}
  }
}
</script>

<style>

</style>