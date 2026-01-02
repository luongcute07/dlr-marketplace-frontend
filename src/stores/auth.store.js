import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    role: null,
    user: null,
  }),
  getters: {
    isAdmin: (state) => state.role === 'admin',
  },
  actions: {
    setRole(role) {
      this.role = role
    },
    setUser(user) {
      this.user = user
    },
    logout() {
      this.role = null
      this.user = null
    },
  },
})
