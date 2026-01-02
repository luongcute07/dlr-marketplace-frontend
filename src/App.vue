<template>
  <UserHeader />
  <router-view />
  <UserFooter />
</template>

<script setup>
import UserHeader from '@/components/user/UserHeader.vue'
import UserFooter from '@/components/user/UserFooter.vue'
</script>

<style>
/* CSS global (nếu có) */
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Ensure routed content spans full width when #app uses grid */
.app-content {
  grid-column: 1 / -1;
  width: 100%;
}
</style>
