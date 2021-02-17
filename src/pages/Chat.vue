<template>
  <section class="flex w-full">
      <div class="m-auto">
          <h1 class="text-center text-2xl">Real Time Chat</h1>
          <div class="border rounded w-80">
              <div class="h-64 p-2">
                <div v-for="chat in state.chats" :key="chat.message" class="w-full" :class="chat.userId === userId ? 'text-right text-green-600' : 'text-red-600' " >
                        {{chat.message}}
                </div>
              </div>
               <div class="h-8 flex  w-80">
                     <input class="m-auto p-3 w-60 border rounded shadow" 
                     placeholder="Start typing .."
                     v-model="state.message" type="text"
                     @keydown.enter="addMessage">
                </div>
          </div>
      </div>
  </section>
</template>

<script>
import { computed, onMounted,reactive } from 'vue'
import {chatsRef} from '../utilities/firebase'
import {useStore} from  'vuex'

export default {

    setup(){

    const state = reactive({
        chats:[],
        message :"",
        collection:null,
        // userId: null
    })

    const store = useStore()
    const userId = computed(()=>store.state.authUser.uid)

    onMounted(async()=>{
        chatsRef.on('child_added',(snapshot)=>{

        state.chats.push({key:snapshot.key, ...snapshot.val()})
        })
        
    })

    function addMessage(){
        const newChat = chatsRef.push() 
        newChat.set({ userId:state.userId,message: state.message})
        state.message = ""

    }

    return {state,addMessage,userId}

}

}
</script>

<style>

</style>