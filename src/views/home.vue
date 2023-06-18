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
.main-container {
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  justify-content: center;
}
</style>
