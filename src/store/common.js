import { defineStore } from 'pinia'

export const useCommon = defineStore('common', {
  state: () => {
    return {
      menuList: [
        { title: '首页', path: '/index' },
        { title: '公司介绍', path: '/introduce' },
        { title: '解决方案', path: '/solution' },
        {
          title: '成功案例',
          path: '/example',
          child: [
            { title: '智能家居', path: '/example/smartHome' },
            { title: '指挥系统', path: '/example/smartSystem' },
            { title: '智慧旅游', path: '/example/smartTravel' },
            { title: '智慧校园', path: '/example/smartSchool' },
            { title: '智慧医院', path: '/example/smartHospital' },
            { title: '智慧园区', path: '/example/smartCampus' },
            { title: '智慧小区', path: '/example/smartCommunity' },
            { title: '智慧建筑', path: '/example/smartBuild' },
          ],
        },
        { title: '联系我们', path: '/relation' },
        // { title: '加入我们', path: '/join' },
      ],
    }
  },
  getters: {},
  actions: {
    handleCollapse() {
      this.collapse = !this.collapse
    },
  },
})
