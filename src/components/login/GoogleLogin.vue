<template>

  <section class="my-2 text-center">
          <button class="h-12 w-12 border rounded-full px-1 bg-gradient-to-r from-yellow-300 to-green-400" style="color:#DB4437" @click="loginWithGoogle"> <i class="fab fa-google text-2xl"></i></button>
        </section>

</template>

<script>
import firebase from "../../utilities/firebase"
export default {
methods:{
    loginWithGoogle(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
  .signInWithPopup(provider)
  .then(() => {
   this.$emit('close-login-from-google')
  })
}
}}
</script>

<style>

</style>