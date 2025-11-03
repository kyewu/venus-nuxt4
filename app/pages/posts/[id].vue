<template>
  <div v-if="data">
    <h1>post detail</h1>
    <p>{{ data.id }}</p>
    <p>{{ data.name }}</p>
    <p>{{ data.description }}</p>
    <p>{{ data.content }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Data } from '#shared/types/types'

const route = useRoute()
const id = route.params.id
const { data } = await useFetch<Data>(`/api/posts/${id}`)
</script>

<style scoped></style>
