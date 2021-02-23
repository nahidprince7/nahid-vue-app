<template>
 <button class="px-2 py-1 border rounded my-4" @click="isModalOpen = true">Add User</button>
  <teleport to="body">
  <Modal v-if="isModalOpen" @close="isModalOpen=false">
    <template #title>
      Add User
    </template>
    <template #body>
      <form @submit.prevent="submit">
        <div class="p-2">
          <label for="">Name</label>
          <input v-model="state.form.name" class="w-full p-2 rounded border" placeholder="User Name" type="text"/>
        </div>
        <div class="p-2">
           <label for="">Email</label>
          <input v-model="state.form.email" class="w-full p-2 rounded border" placeholder="User Email" type="email"/>
        </div>
        <div class="p-2">
           <label for="">Avatar</label>
          <input v-model="state.form.avatar" class="w-full p-2 rounded border" placeholder="Avatar Url" type="text"/>
        </div>
        <div class="p-2">
         <input class="w-full p-2 rounded border hover:bg-gray-200" value="Create" type="submit"/>
        </div>

      </form>

    </template>
  </Modal>
</teleport>
</template>

<script>
import { ref, reactive} from 'vue'
import Modal from '../Modal'
import axios from '../../plugins/axios'

export default {
    components:{Modal},
    setup(_,{ emit }){
        const isModalOpen = ref(false)

    const state = reactive({
    
      form:{
        name : "",
        email : "",
        avatar : ""
      }
    })

    async function submit(){
      const {data} = await axios.post('/users',state.form);
      emit('new-user-added',data)
      // console.log(data);
      
      state.form.name = "";
      state.form.email = "";
      state.form.avatar = "";
      isModalOpen.value = false;

    }

        return {isModalOpen,submit,state}
    }

}
</script>

<style>

</style>