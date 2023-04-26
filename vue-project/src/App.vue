


<template>
<!-- <div class="out">
  <div class="box1">box1</div>
  <div class="box3">box3</div>
  <div class="box2">box2</div>
</div> -->

  <!-- <h1>我是一级标题</h1>

    <p>这是一个段落文本。在文本中有一个 <span>span element</span>
并且还有一个 <a href="http://example.com">链接</a>.</p>

    <p>这是第二段。包含了一个 <em>强调</em> 元素。</p>

    <ul>
        <li class="special">项目 1</li>
        <li>项目 2</li>
        <li>项目 <em>三</em></li>
    </ul> -->
    <div class="box" >
      <div class="box11">one</div>
      <div class="box12">two</div>
      <div class="box13">three</div>
      <!-- <div class="box14">four</div> -->
      <!-- <div class="box15">five</div> -->
      <!-- <div class="box16">six</div> -->
      
    </div>

</template>

<script >

import DemoDemo from './components/demo.vue'

export default {
  components: {
    DemoDemo
  },

  data() {
    return {
      title: "h"
      // { id: 1, title: 'My journey with Vue' },


    }
  }
}
</script>
<style scoped>
/**弹性布局 */
/* .box{
  display: flex;
}
.box>div{
  flex:1;
  border-radius:10px;
  background-color: rgb(237, 136, 12);
  padding: 1em;
} */

/** grid布局 */

.box{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}
.box>div{
  border-radius:5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
.box11{
  grid-column: 2 / 4;
  grid-row: 1;
}
.box12 {
    grid-column: 1;
    grid-row: 1 / 3;
}

.box13 {
    grid-row: 2;
    grid-column: 3;
}
/* body { */
  /* background-color: pink; */
/* } */

/* .box{
  margin: 30px; width: 100px;height:100px;background-color:rebeccapurple; transform:rotate(0.8turn)
} */
.out {
  /* padding: 1px; */
  border: 1px solid;
  height: 200px;
  width: 100%;
  background-color: antiquewhite;
  display: grid;
  grid-template-columns: repeat(10,1fr);
}
.box1{
  width: 100px;
  height: 100px;
  border: 1px solid;
  background-color: red;
  /* margin-left:30% ; */
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start:1 ;
}
.box3{
  width: 100px;
  height: 100px;
  border: 1px solid;
  background-color: red;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start:1 ;
  /* margin-left:30% ; */
}
.box2{
  width: 100px;
  height: 100px;
  border: 1px solid;
  background-color: red;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start:1 ;

  /* margin-left:30% ; */
}
li em {
  color: rgb(237, 136, 12);
}
h1{
  color: red;
}
/* p,li {
  color: green;
} */
li{
  /* list-style-type:none ; *消除自带的无序列表符号 */
  list-style-type: '\1F44D';

}
li.special,span.special {
  color: orange;
  font-weight: bold; 
}
a:link{
  color: black;
  font-weight: bold;
}
a:visited{
  color:green;
}
a:hover{
  /* text-decoration: none; */
}
</style>
