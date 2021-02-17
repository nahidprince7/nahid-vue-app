<template>
<AppHeader></AppHeader>
<router-view></router-view>
<teleport to="body">
<LoginModal  > </LoginModal>
</teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./pages/LoginModal";
import firebase from "./utilities/firebase"


export default {

  mounted(){
    firebase.auth().onAuthStateChanged((user)=>  {
  if (user) {
    this.$store.commit('setIsLoggedIn',true)
    this.$store.commit('setAuthUser',user)
   
  } else {
    this.$store.commit('setIsLoggedIn',false)
    this.$store.commit('setAuthUser',{})
  }
});
  },

  components:{AppHeader,LoginModal},
}
</script>
