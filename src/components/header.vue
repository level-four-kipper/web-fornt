<template>
  <div class="header">
    <slot name="logo">
      <router-link to="/home" class="logo">
        <!-- <img src="@/assets/img/index/logo.png" /> -->
      </router-link>
    </slot>

    <div class="content-menu">
      <div class="menu-list">
        <div class="menu-item-container" v-for="(item, index) in menuList" :key="index" @mouseenter="handleHover(index)">
          <span class="menu-item" :class="{ active: activeIndex === index }" @click="jumpPage(item, index)">
            {{ item.title }}
          </span>
        </div>
      </div>
    </div>
    <div class="menu-child-list" v-if="hoverIndex !== -1 && menuList[hoverIndex].child" @mouseleave="handleHover(-1)">
      <!-- <span
        class="menu-item"
        :class="{ active: i.path === route.path }"
        v-for="(i, key) in menuList[hoverIndex].child"
        :key="key"
        @click="jumpPage(i)">
        {{ i.title }}
      </span> -->
      <el-tabs v-model="childTabIndex" @tab-click="handleTabClick">
        <el-tab-pane :label="i.title" :name="key" v-for="(i, key) in menuList[hoverIndex].child" :key="key"> </el-tab-pane>
      </el-tabs>
    </div>
  </div>

  <!-- 轮播 -->
  <div header="header-container">
    <div class="header-banner" @mouseenter="handleHover(-1)">
      <el-carousel height="400px" indicator-position="none" interval="5000">
        <el-carousel-item v-for="item in bannerList" :key="item">
          <img class="banner-img" :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
  <!-- 导航 -->
  <div v-if="route.path !== '/index'" class="nav-bread-container">
    <div class="nav-bread">
      <div class="left">
        <template v-for="i in navList" :key="i">
          <span class="nav-text" @click="jumpPage(i)">{{ i.title }}</span>
        </template>
      </div>
      <!-- <div class="right" v-if="menuList[curPathIndex].child">
        <span
          class="nav-menu-item"
          :class="{ active: index === activeChildIndex }"
          v-for="(i, key) in menuList[curPathIndex].child"
          :key="key"
          @click="jumpPage(i)">
          {{ i.title }}
        </span>
      </div> -->
    </div>
  </div>
</template>

<script setup name="header">
import { computed, watch } from 'vue-demi'
import { useRoute } from 'vue-router'
import { useCommon } from '@/store/common.js'

const common = useCommon()
const route = useRoute()
const router = useRouter()

const curPathIndex = ref(0) //当前一级菜单下标
const hoverIndex = ref(-1)
const childTabIndex = ref(-1)
const activeChildIndex = ref(0)
const bannerList = ['/src/assets/img/banner-1.jpg', '/src/assets/img/banner-1.jpg', '/src/assets/img/banner-1.jpg']
const menuList = common.menuList

const activeIndex = computed(() => {
  return hoverIndex.value === -1 ? curPathIndex.value : hoverIndex.value
})

const navList = ref([menuList[0]])

const handleHover = index => {
  hoverIndex.value = index
}
// tab点击
const handleTabClick = val => {
  let item = menuList[hoverIndex.value].child[val.index]
  router.push(item.path)
}

watch(
  route,
  (val, old) => {
    menuList.map((i, index) => {
      if (i.path === route.path) curPathIndex.value = index
    })
    if (route.path !== '/index') {
      let arr = route.matched.slice(1).map(i => {
        return { title: i.meta.title, path: i.path }
      })
      navList.value = [navList.value[0], ...arr]
    }
    //点击一级菜单，二级菜单高亮清空
    if (route.matched.length < 3) {
      childTabIndex.value = -1
    }
  },
  { immediate: true },
)

watch(hoverIndex, (val, old) => {
  if (val !== -1 && old !== 1) {
  }
})
const jumpPage = (item, index) => {
  console.log('juml', item)
  if (index !== undefined) {
    curPathIndex.value = index
    // childTabIndex.value = -1 //点击一级菜单，二级菜单高亮清空
  }
  router.push(item.path)
}
</script>

<style scoped lang="scss">
.header-container {
  padding: 0;
}

.header {
  width: 100%;
  // position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
  color: #000;
  box-shadow: 0 2px 10px 0 rgba(156, 172, 209, 0.3);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border-bottom: 1px solid rgba(156, 172, 209, 0.3);

  .logo {
    height: 100%;
    display: flex;
    width: 202px;
    align-items: center;

    &:hover {
      background-color: white;
    }
  }

  .content-menu {
    // width: 700px;
    margin-right: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    .menu-list {
      display: flex;
      height: 64px;
      align-items: center;
      justify-content: space-between;
      .menu-item-container {
        height: 100%;
        display: flex;
        padding: 0 10px;
        align-items: center;
      }
      .menu-item {
        font-weight: 600;
        // height: 100%;
        padding: 5px 10px;
        &:hover,
        &.active {
          background-color: #4070f4;
          border-radius: 4px;
          cursor: pointer;
          color: #fff;
        }
      }
    }
  }
}

.menu-child-list {
  height: 60px;
  font-weight: 400;
  line-height: 60px;
  padding-right: 100px;
  text-align: right;
  position: absolute;
  transition: height 1s;
  width: 100%;
  background-color: #fff;
  top: 64px;
  box-shadow: 0 2px 10px 0 rgba(156, 172, 209, 0.3);
  z-index: 20;
  .menu-item {
    margin-right: 20px;
    &:hover {
      color: #4070f4;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}

.banner-img {
  width: 100%;
  height: 100%;
}
.nav-bread-container {
  // background-color: #ccc;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin: auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(156, 172, 209, 0.3);
  .nav-bread {
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      // margin-left: 40px;
      .nav-text {
        margin-right: 40px;
        // color: #8c8c8c;
        position: relative;
          color: #8c8c8c;
        cursor: pointer;
        &.active,
        &:hover {
          color: #4070f4;
        }
        &:not(:last-child)::after {
         
          content: '';
          width: 1px;
          height: 14px;
          background: #d8d8d8;
          position: absolute;
          top: 50%;
          right: -20px;
          transform: translateY(-50%) rotate(30deg);
        }
        &:last-child{
        color: #4070f4;

        }
      }
    }
    .right {
      display: flex;

      .nav-menu-item {
        margin-right: 20px;
      }
    }
  }
}
</style>
