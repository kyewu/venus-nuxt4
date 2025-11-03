<template>
  <div class="text-3xl">
    Home Page
    <Icon :name="`carbon:${dark ? 'moon' : 'sun'}`" size="1rem" />
    <button @click="count.increment">{{ count.getCount }}</button>
    <div class="i-ph-anchor-simple-thin" />
    <div class="i-mdi-alarm text-orange-400" />
    <section>
      <div v-for="post in data" :key="post.id" class="mb-4 p-4 border rounded">
        <nuxt-link :to="`/posts/${post.id}`">
          <h2 class="text-xl font-bold mb-2">{{ post.name }}</h2>
        </nuxt-link>
        <p>{{ post.content }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCountStore } from '~/stores/count'
import type { Data } from '#shared/types/types'
const dark = ref(false)
const count = useCountStore()
const { data } = await useFetch<Data[]>('/api/posts/list')
</script>

<style scoped></style>
