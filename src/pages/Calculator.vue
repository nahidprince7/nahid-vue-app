<template>
  <section class="flex w-full">
      <div class="m-auto">
          <p class="text-3xl text-right mt-10 mb-3 w-34 overflow-x-scroll" style="height:60px;direction:rtl">{{currentNumber}}</p>
          <div class="h-10">
          <small class="h-10" v-if="selectedOperation">{{previousNumber}}{{selectedOperation}}{{currentNumber}}</small>

          </div>
          <div class=" grid grid-cols-4 gap-1">
              <button  @click="pressed('1')" class="p-2 w-10 border rounded shadow">1</button>
              <button  @click="pressed('2')" class="p-2 w-10 border rounded shadow">2</button>
              <button  @click="pressed('3')" class="p-2 w-10 border rounded shadow">3</button>
              <button  @click="pressed('+')" class="p-2 w-10 border rounded shadow">+</button>

              <button    @click="pressed('4')" class="p-2 w-10 border rounded shadow">4</button>
              <button   @click="pressed('5')" class="p-2 w-10 border rounded shadow">5</button>
              <button   @click="pressed('6')"  class="p-2 w-10 border rounded shadow">6</button>
              <button    @click="pressed('-')"  class="p-2 w-10 border rounded shadow">-</button>

              <button @click="pressed('7')"  class="p-2 w-10 border rounded shadow">7</button>
              <button @click="pressed('8')"  class="p-2 w-10 border rounded shadow">8</button>
              <button @click="pressed('9')"  class="p-2 w-10 border rounded shadow">9</button>
              <button @click="pressed('*')"  class="p-2 w-10 border rounded shadow">*</button>

              <button @click="pressed('c')"  class="p-2  border rounded shadow">Clr</button>
              <button @click="pressed('0')"  class="p-2  border rounded shadow">0</button>
              
              <button  @click="pressed('=')" class="p-2 w-10 border rounded shadow">=</button>
              <button  @click="pressed('/')" class="p-2 w-10 border rounded shadow">/</button>
           
          </div>
      </div>

  </section>
</template>

<script>
import {ref} from 'vue'
import useWindowEvent from '../utilities/composition/useWindowEvent'
export default {
setup(){

    const operations = ["+","-","*","/"]
    const numbers = ["1","2","3","4","5","6","7","8","9","0"]
    const currentNumber = ref("");
    const previousNumber = ref("");
    const selectedOperation = ref("");

    

    function pressed(value){
        if(value === '=' || value === 'Enter') calculate()
        else if(value === 'c') clear()
        else if(operations.includes(value)) applyOperation(value)
        else if(numbers.includes(value)) appendNumber(value)
       
    }

    function calculate(){
        if(selectedOperation.value === '+') sum()
        if(selectedOperation.value === '-') subtract()
        if(selectedOperation.value === '*') multiply()
        if(selectedOperation.value === '/') divide()

        previousNumber.value = ""
        selectedOperation.value = ""
        
    }

    function sum(){
        currentNumber.value = +previousNumber.value+  +currentNumber.value
    } 
    function subtract(){
        currentNumber.value = previousNumber.value - currentNumber.value
    }
     function multiply(){
        currentNumber.value = previousNumber.value * currentNumber.value
    }
     function divide(){
        currentNumber.value = previousNumber.value / currentNumber.value
    }

    function applyOperation(value){

        calculate();
        previousNumber.value = currentNumber.value;
        currentNumber.value = "";
        selectedOperation.value = value;

    }

    function appendNumber(value){
        // alert(value);
        currentNumber.value = currentNumber.value + value;
    }

    const handleKeydown = (e) => pressed(e.key)

    useWindowEvent('keydown',handleKeydown)

     
    const clear= () => (currentNumber.value="")


    return{currentNumber,previousNumber,pressed,selectedOperation};
}
}
</script>

<style>

</style>