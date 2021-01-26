<template>
<div class=" w-80 m-auto">
        <h1 class="text-2xl my-2 text-center">Vue Calender</h1>
       <section class="mx-2 flex justify-between">
<h2 class="font-bold">{{currentYear}}</h2>
<h2 class="font-bold">{{currentMonthName}}</h2>
        </section>
        
<section class="flex my-2">
    <p class=" text-center " style="width:14.28%" v-for="day in days" :key="day">
    {{day}}
    </p>
</section>
<section class="flex flex-wrap">
    <p v-for="num in startDay()" :key="num" style="width:14.28%" class=" text-center"></p> 
    <p v-for="num in daysInMonth()" :key="num" style="width:14.28%" class=" text-center" :class="currentDateClass(num)">{{num}}</p> 
</section>
<section class="flex justify-between my-4">
    <button class="px-2 border rounded" @click="previous()">Previous</button>
      <button class="px-2 border rounded" @click="next()">Next</button>
</section>
</div>
</template>

<script>
export default {
data(){
    return{
        currentDate: new Date().getDate(),
        currentMonth:new Date().getMonth(),
        currentYear : new Date().getFullYear(),
        days: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    }
},
methods:{
    daysInMonth(){
        return new Date(this.currentYear,this.currentMonth+1,0).getDate(); //get number of dates in a month
    },
    startDay(){
        return new Date(this.currentYear,this.currentMonth,1).getDay();
    },
    next(){
        if(this.currentMonth == 11){
            this.currentMonth=0
            this.currentYear++
        }
        else{
            this.currentMonth++ ;
        }
    },
    previous(){
         if(this.currentMonth == 0){
            this.currentMonth=11
            this.currentYear--
        }
        else{
            this.currentMonth-- ;
        }
    },
    currentDateClass(num){
        const calenderFullDate = new Date(this.currentYear,this.currentMonth,num).toDateString();
        const currentFullDate = new Date().toDateString();
        return calenderFullDate === currentFullDate ? 'text-red-800 font-bold border bg-gray-200': '';   
    }
},
computed:{
    currentMonthName(){
        return new Date(this.currentYear,this.currentMonth).toLocaleString("default",{month:"long"})
    }
}
}
</script>

<style>

</style>