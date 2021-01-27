<template>
<transition name="fade"> 
<div class="flex flex-wrap w-full" v-if="isTitleShowing" >
    
    <div v-for="(color,index) in sliders" :key="color" class=" w-full">

    <div v-if="currentSlide == index" 
     style="height:350px"
    :class="color"
    >
    </div>

    </div>
    
<div class="my-10 flex w-full">
<div class="m-auto">

<h1 v-if="isTitleShowing">Slider Carousel</h1>
</div>

</div>

</div>
</transition>
<button @click="isTitleShowing = !isTitleShowing" class="px-2 border rounded">Toggle Text</button>
</template>

<script>
export default {
data(){
    return{
        currentSlide:0,
        sliders :['bg-blue-400','bg-yellow-400','bg-green-400'],
        interval:"",
        isTitleShowing:false,
    }
},
mounted(){
    
    this.interval = setInterval(()=>{

        this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide+1
        this.isTitleShowing = !this.isTitleShowing
        console.log("Slider is running", this.currentSlide)

        // if(this.currentSlide === 3){
        //     this.currentSlide = 1
        // }
        // else{
        //     this.currentSlide ++
        // }

    },1500)
    
},
beforeUnmount(){
     clearInterval(this.interval)
}
}
</script>

<style>
body {
  margin: 30px;
}

.bounce-enter-active {
  animation: bounce-in .5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>