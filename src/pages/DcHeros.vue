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
  <input class="border rounded" v-model="newHero"  />
    <button class="border rounded bg-gray" type="submit">Save</button>
  </form>
  <small>total heros in this list : {{herosCount}}</small>

</div>
</div>
</template>

<script>
export default {

  data(){
    return {
      newHero:"Aquaman",
      dcHeros:["SuperGirl","Flash","Batman"]
          }
  },
  computed:{
    herosCount(){
        return this.dcHeros.length;
    }
  },
  methods:{
    addHero(){
      if(this.newHero !== '' ){
      this.dcHeros.unshift(this.newHero);
      this.newHero=''
      }
    },
    remove(index){
        console.log( this.dcHeros.filter((hero,i)=>i!==index))
       this.dcHeros = this.dcHeros.filter((hero,i)=>i!==index);
    }
  }
}
</script>

<style>

</style>