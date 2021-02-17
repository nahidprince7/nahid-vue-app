<template>
<section class="flex w-full">
  <div class="m-auto">
    <div>
      <table>
        <thead>
          <tr>
            <th class="border px-4 py-2">ID</th>
            <th class="border px-4 py-2">Picture</th>
            <th class="border px-4 py-2">Name</th>
            <th class="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in state.users.data" :key="user.id">
            <td class="border px-4 py-2">{{user.id}}</td>
            <td class="border px-4 py-2"><img class="rounded-full w-20" :src="user.avatar" :alt ="user.first_name" ></td>
            <td class="border px-4 py-2">{{user.first_name + ' ' +user.last_name}}</td>
            <td class="border px-4 py-2">{{user.email}}</td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-between">
        <button class="px-3 py-2 border rounded " @click="previous" :disabled="state.users.page ===1" :class="state.users.page === 1 ? 'bg-gray-100' :'hover:shadow'">Previous</button>
        <button class="px-3 py-2 border rounded " @click="next" :disabled="state.users.page ===state.users.total_pages" :class="state.users.page === state.users.total_pages ? 'bg-gray-100' :'hover:shadow'" >Next</button>
        </div>
    </div>
  </div>
</section>
  
</template>

<script>
import { onMounted, reactive } from 'vue'
import axios from '../plugins/axios'
export default {
  setup(){
    const state = reactive({
      users:[]
    })

    onMounted(async ()=>{
        const {data} = await axios.get(`/users`)
        state.users = data
    })
    async function next(){
       const {data} = await axios.get(`/users?page=2`)
       state.users = data
    }
    async function previous(){
       const {data} = await axios.get(`/users?page=1`)
       state.users = data
    }

    return {state,next,previous}

  }

}
</script>

<style>

</style>