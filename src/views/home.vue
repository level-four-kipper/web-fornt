<template>
  <Header></Header> 
  <div class="main-container">
    <router-view />
  </div>
  <Footer></Footer>
</template>
<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
</script>

<style lang="scss" scoped>
.content {
  background: #fff;
  padding: 0;
}
</style>
