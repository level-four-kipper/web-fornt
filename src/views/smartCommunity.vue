<template>
  <div class="content">
    <div class="article-list" v-if="!route.query.article_id">
      <div class="article-item" v-for="(i, index) in articleList" :key="index">
        <div class="card">
          <div class="img-show" @click="jumpPage(i, index)">
            <img :src="i.img" alt="" />
          </div>
          <div class="text">{{ i.title }}</div>
        </div>
      </div>
    </div>
    <Article v-else></Article>
  </div>
</template>
<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCommon } from '@/store/common.js'
import Article from '@/components/article.vue'

const common = useCommon()
const route = useRoute()
const router = useRouter()

const articleList = [
  {
    title: '潮州饶平盛发山庄智慧社区管理平台（IBMS）',
    img: '/src/assets/img/example-1.jpg',
    path: '/example/smartCommunity',
    article_id: '1',
  },
  {
    title: '盛发山庄智能水电表项目建设',
    img: '/src/assets/img/example-1.jpg',
    path: '/example/smartCommunity',
    article_id: '2',
  },
  {
    title: '潮州饶平盛发山庄智能化安装工程建设',
    img: '/src/assets/img/example-1.jpg',
    path: '/example/smartCommunity ',
    article_id: '3',
  },
]

const jumpPage = (i, index) => {
  router.push({ path: i.path, query: { article_id: index } })
}

onMounted(() => {})
</script>
<style lang="scss" scoped>
.content {
  width: 1200px;
  margin-top: 20px;
  img {
    width: 20px;
    height: 20px;
  }

  .article-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    // justify-content: space-between;
  }
  .article-item {
    border-radius: 0.08rem;
    width: 200px;
    overflow: hidden;
    width: 25%;
    margin-bottom: 30px;
    .card {
      width: 200px;
      height: 300px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 8px 0 rgb(144, 144, 144, 0.2);
      .img-show {
        overflow: hidden;
        width: 200px;
        height: 200px;
        img {
          width: 100%;
          height: 100%;
          width: 200px;
          height: 200px;
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
