import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => ({
    count: 0 as number
  }),
  getters: {
    getCount: (state: any) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
