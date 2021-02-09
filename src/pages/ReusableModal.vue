<template>
  <section class="w-full flex">
      <div class="m-auto">
            <h1 class="text-2xl my-5 text-center">Re-Usable Modal<small class="">(using slot and named slot)</small></h1> 
           
            <Modal v-if="isRedModalOpen" @close-login="isRedModalOpen=false">
            <template v-slot:title>
                <h1>This is Modal 1</h1>
            </template>
            <template v-slot:body>
                <p>This is body slot 1</p>
            </template>
            </Modal>
            
            <Modal v-if="isBlueModalOpen" @close-login="isBlueModalOpen=false">
            <template #title>
                <h1>This is Modal 2</h1>
            </template>
            <template #body>
                <p>This is body slot 2</p>
            </template>
            </Modal>
            <div class="m-auto grid grid-cols-2 gap-1">
            <button class="button fusion" @click="isRedModalOpen=true">Open Modal 1</button>
            <button class="button violet" @click="isBlueModalOpen=true">Open Modal 2</button>
            </div>

            
      </div>
  </section>
</template>

<script>
import Modal from '../components/Modal'
import {ref} from 'vue'

export default {
    components:{Modal},

    setup(){

        const isRedModalOpen = ref(false)
        const isBlueModalOpen = ref(false)

    return {isRedModalOpen,isBlueModalOpen}
}


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.button:before {
  content:'';
width: 100%;
  height:700%;
  position: absolute;
  top:0;
  left:0;
  z-index:-1;
  transition:1s;
}
.button.violet:before {
  background: linear-gradient(0deg, rgba(215,17,17,1) 14.5%, rgba(255,94,0,1) 14.5%, rgba(255,94,0,1) 28.5%, rgba(254,255,0,1) 28.5%, rgba(254,255,0,1) 42%, rgba(44,255,0,1) 42%, rgba(44,255,0,1) 56%, rgba(18,139,189,1) 56%, rgba(18,139,189,1) 70%, rgba(38,17,158,1) 70%, rgba(38,17,158,1) 84%, rgba(203,1,242,1) 84%);
}
.button.fusion:before {
  background: linear-gradient(225deg, rgba(215,17,17,1) 14.5%, rgba(255,94,0,1) 14.5%, rgba(255,94,0,1) 28.5%, rgba(254,255,0,1) 28.5%, rgba(254,255,0,1) 42%, rgba(44,255,0,1) 42%, rgba(44,255,0,1) 56%, rgba(18,139,189,1) 56%, rgba(18,139,189,1) 70%, rgba(38,17,158,1) 70%, rgba(38,17,158,1) 84%, rgba(203,1,242,1) 84%);
}
.button {
  overflow: hidden;
  position: relative;
  padding: .6em 2em;
  color: white;
  text-decoration: none;
  border-radius:8px;
  transition:.6s;
  margin-right:1em;
  text-shadow: 1px 1px 1px black;
}
.button:hover {
   transform: scale(1.1);
}

.button:hover:before {
  top:-600%;
}
</style>