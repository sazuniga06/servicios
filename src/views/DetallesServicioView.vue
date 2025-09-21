<template>
  <div>Post Detail</div>
  <div class="Post-container" v-if="post">
    <div class="Post-Card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <router-link :to="{ name: 'PostList' }">Volver</router-link>
  </div>
  <div v-else>
    <p>Cargando post...</p>
  </div>
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const service = new PostService()
const postRef = service.getPost()

const post = computed(() => postRef.value)

onMounted(async () => {
  const route = useRoute()
  const elm = route.params.id
  await service.fetchById(elm)
})
</script>

<style scoped lang="scss">
.Post-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.Post-Card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  width: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }
}

a {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
}

p {
  text-align: center;
  font-size: 1rem;
  color: #666;
}

</style>
