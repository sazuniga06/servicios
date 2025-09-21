<template>
<div class="list-post"> 
<h1>Lista de Posts</h1>
<button class ="btn btn-primary" >  Estilizado con Bootstrap</button>
<ul class="list-group">
  <li v-for="post in posts" :key="post.id">{{ post.title }}</li>

</ul>
 </div>
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService'
import { onMounted } from 'vue'

const service = new PostService()
const posts = service.getPosts()

onMounted(async() => {
  await service.fetchAll()
})


</script>

<style scoped lang="scss">
.list-group {
  list-style-type: none;
  padding: 0;
  width: 400px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: $blue;
  
}
.list-group li {
  background: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  border: #ccc 1px solid;
  border-radius: 4px;
}
.list-group li:nth-child(odd) {
  background: #e9e9e9;
}
.list-group li:hover {
  background: #d3d3d3;
  cursor: pointer;
  color: $red;
}


</style>