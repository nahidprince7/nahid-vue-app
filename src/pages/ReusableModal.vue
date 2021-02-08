<template>
  <section class="w-full flex">
      <div class="m-auto">
            <h1 class="text-2xl my-5 text-center">Re-Usable Modal<small class="">(using slot)</small></h1> 
           
            <Modal v-if="isRedModalOpen" @close-login="isRedModalOpen=false">
            <h1>Red Modal</h1>
            </Modal>
            
            <Modal v-if="isBlueModalOpen" @close-login="isBlueModalOpen=false">
            <h1>Blue Modal</h1>
            </Modal>
            <div class="m-auto grid grid-cols-2 gap-1">
            <button class="text-white text-2xl p-2 bg-red-400 rounded" @click="isRedModalOpen=true">Open Modal</button>
            <button class="text-white text-2xl p-2 bg-blue-400 rounded" @click="isBlueModalOpen=true">Open Modal</button>
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

</style>