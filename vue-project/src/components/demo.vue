<template>
   <button @click="increment">you click me {{ count }} times</button>
   <demoChild :title=title />
   <!-- <h2>{{ title }}</h2> -->
</template>

<script>
import demoChild from './demoChild.vue'

export default {
   name: "demoDemo",
   props: [
      "title"
   ],
   data() {
      console.log(this.title);
      return {
         count: 1,
         // props: [
         //    "title"
         // ]
         // t: this.title
      }
   },

   components: {
      demoChild
   },
   methods: {
      increment() {
         this.count++
      }
   },
   mounted() {
      console.log(this.count)
      this.count = 2
   }
}
</script>

<style></style>