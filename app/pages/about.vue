<template>
  <div>
    <ul>
      <li v-for="post in data" :key="post.id">
        <h2>{{ post.name }}</h2>
        <p>{{ post.description }}</p>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Data } from '#shared/types/types'
const data = ref<Data[]>([])

async function getPosts() {
  const res = await fetch('/api/posts/list')
  return res.json()
}

onMounted(async () => {
  data.value = await getPosts()
})
</script>

<style scoped></style>
