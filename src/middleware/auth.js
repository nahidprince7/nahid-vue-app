export default function(next,store){
    if(!store.state.isLoggedIn){
        store.commit("setLoginModal",true)
        next("/");
      }
      else{
        next()
      }
}