<template>
<AppHeader :isLoggedInProp="isLoggedIn"  @open-login-modal="isLoginOpen=true"></AppHeader>
<router-view></router-view>
<LoginModal v-if="isLoginOpen" @close-login-modal="isLoginOpen=false"> </LoginModal>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./pages/LoginModal";
import firebase from "./utilities/firebase"
export default {

  data(){
    return{
      isLoginOpen:false,
      isLoggedIn: false,
      authUser:{}

    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user)=>  {
  if (user) {
    this.isLoggedIn = true
    this.authUser = user
  } else {
    this.isLoggedIn = false
    this.authUser = {}
  }
});
  },

  components:{AppHeader,LoginModal},
}
</script>
