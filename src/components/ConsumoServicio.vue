<template>
<div>Lista de Posts</div>
<ul class="list-group">
  <li v-for="post in posts" :key="post.id">{{ post.title }}</li>

</ul>
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

<style scoped>
.list-group {
  list-style: none;
  padding: 0;
}

.list-group-item {
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
}

.list-group-item:hover {
  background-color: #f5f5f5;
}
</style>