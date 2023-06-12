<template>
  <Header></Header>
 
  <div class="content">
    <router-view />
  </div>
  <Footer></Footer>
</template>
<script setup lang="ts">
import { useSidebarStore } from "../store/sidebar";
import { useTagsStore } from "../store/tags";
import Header from "../components/header.vue";
import vSidebar from "../components/sidebar.vue";
import vTags from "../components/tags.vue";
import Footer from "../components/footer.vue";

const sidebar = useSidebarStore();
const tags = useTagsStore();
</script>

<style lang="scss" scoped>
.content {
  background: #fff;
  padding: 0;
}
</style>
