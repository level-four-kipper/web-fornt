<template>
  <div class="content">
    <div class="example-list" v-if="route.path === '/example'">
      <div class="example-item" v-for="(i, index) in exampleList" :key="index">
        <div class="card">
          <router-link :to="i.path">
            <div class="img-show">
              <img :src="i.img" alt="" />
            </div>
          </router-link>
          <div class="text">{{ i.title }}</div>
        </div>
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
const imgList = [
  'src/assets/img/example-1.jpg',
  'src/assets/img/example-1.jpg',
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
  exampleList.value.map((i, index) => (i.img = imgList[index]))
})
</script>
<style lang="scss" scoped>
.content {
  width: 1200px;
  margin-top: 20px;
  .example-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    // justify-content: space-between;
  }
  .example-item {
    border-radius: 0.08rem;
    width: 200px;
    overflow: hidden;
    width: 25%;
    margin-bottom: 30px;
    .card {
      width: 200px;
      height: 360px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 8px 0 rgb(144, 144, 144, 0.2);
      .img-show {
        width: 200px;
        overflow: hidden;
        height: 300px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        height: 60px;
      }
    }
    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
}
</style>
