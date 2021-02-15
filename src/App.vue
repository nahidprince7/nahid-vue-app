<template>
<AppHeader :isLoggedInProp="isLoggedIn"  @open-login-modal="isLoginOpen=true"></AppHeader>
<router-view></router-view>
<teleport to="body">
<LoginModal v-if="isLoginOpen" @close-login-modal="isLoginOpen=false"> </LoginModal>
</teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./pages/LoginModal";
import firebase from "./utilities/firebase"


export default {

  data(){
    return{
      isLoginOpen:false,
      // isLoggedIn: false,
      // authUser:{}

    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user)=>  {
  if (user) {
    this.$store.commit('setIsLoggedIn')
    this.$store.commit('setAuthUser',user)
    // this.isLoggedIn = true
    // this.authUser = user
  } else {
    this.isLoggedIn = false
    this.authUser = {}
  }
});
  },

  components:{AppHeader,LoginModal},
}
</script>
