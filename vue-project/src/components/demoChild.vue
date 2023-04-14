<template>
   <button @click="increment">i am demo child ,you click me {{ count }} times</button>
   <h2>{{ title }}</h2>
</template>

<script>
export default {
   name: "demoChild",
   props: [
      "title"
   ],
   data() {
      return {
         count: 1
      }
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