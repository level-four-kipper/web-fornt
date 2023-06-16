<template>
  <div class="content">
    <div class="example-list" v-if="route.path === '/example'">
      <div class="example-item" v-for="(i, index) in exampleList" key="index">
        <router-link :to="i.path">
          <img :src="i.img" alt="" />
        </router-link>
        <div>{{ i.title }}</div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { computed, watch } from 'vue-demi'
import { useRoute } from 'vue-router'
import { useCommon } from '@/store/common.js'

const common = useCommon()
const route = useRoute()
const menuList = common.menuList
const exampleList = ref([])
const imgist = [
  'src/assets/img/example-1.jpg',
  'src/assets/img/example-1.jpg',
  'src/assets/img/example-1.jpg',
  'src/assets/img/example-1.jpg',
  'src/assets/img/example-1.jpg',
  'src/assets/img/example-1.jpg',
]
onMounted(() => {
  let list = menuList.find(i => i.path === route.path)?.child || []
  exampleList.value = JSON.parse(JSON.stringify(list))
  exampleList.value.map((i, index) => (i.img = imgist[index]))
})
</script>
<style lang="scss" scoped>
.content {
  .example-item {
    border-radius: 0.08rem;
    width: 200px;

    img {
      width: 200px;
      height: 300px;
    }
    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
}
</style>
