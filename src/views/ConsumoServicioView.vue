<template>
<div class="list-post"> 
<h1>Lista de Posts</h1>
<ul class="list-group">
  <li v-for="post in posts" :key="post.id">
    <router-link :to="{name: 'PostDetail', params: {id: post.id}}">
        {{ post.title }}
    </router-link>   
  </li>
    
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
  list-style: none;
  padding: 0;
  margin: 40px auto;
  width: 400px;

  font-family: Arial, sans-serif;
  font-size: 16px;
  color: $color-blue;

  li {
    background: $list-bg;
    margin: 6px 0;
    padding: 12px 16px;
    border: 1px solid $list-border;
    border-radius: 6px;
    transition: background 0.2s ease, color 0.2s ease;

    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      display: block;
      width: 100%;
    }

    &:nth-child(odd) {
      background: lighten($list-bg, 3%);
    }

    &:hover {
      background: $list-hover;
      color: $color-red;
    }
  }
}

h1 {
  margin: 40px;
  font-weight: bold;
  font-size: 24px;
}
</style>
