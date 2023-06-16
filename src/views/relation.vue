<template>
  <div class="block album">
    <div class="menu-title">公司相册</div>
    <div class="menu-content">
      <img src="/src/assets/img/company-1.jpg" alt="" />
      <img src="/src/assets/img/company-1.jpg" alt="" />
      <img src="/src/assets/img/company-1.jpg" alt="" />
    </div>
  </div>
  <div class="block">
    <div class="menu-title">公司介绍</div>
    <div class="menu-content">
      <p>
        广东大简科技有限公司成立在珠海经济特区，是一家专业从事建筑智能化系统、计算机网络系统、安全防范系统的高科技企业。多年来基于对智能化基础系统的深刻理解，以专业的眼光融入物联网、人工智能、等领域的成熟技术，提供智能建筑、智慧城市的全景化一站式整体解决方案，涵括咨询、规划、设计、监理、施工、维护等智能化工程全生命周期的各个阶段。
        公司具有公安局颁发的广东省安全技术防范工程设计、施工、维修证书、并通过ISO9001国际质量体系认证，被珠海市科委评为高新技术企业，加入珠海横琴自贸区。公司核心管理团队及技术团队，具有十几年的智能化工程规划、设计、实施能力，深度参与了广州地铁、珠海机场、澳门新濠影汇娱乐场等智能化项目。
        公司主要从事计算机网络通讯、楼宇自动化控制系统、综合布线系统、数字会议系统、办公自动化系统、出入口管理系统、闭路电视监控系统、泛光照明系统、智能家居系统、停车场管理系统、楼宇对讲及可视对讲系统、小区周界防范报警系统、电子巡更系统、小区物业管理系统、公共广播系统、有线电视系统、三表计费系统、一卡通管理系统、程控交换机系统等；公司提供包括：技术咨询、系统设计、工程管理、组织施工、系统集成、用户培训及售后服务在内的建筑智能化系统整体解决方案。
      </p>
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </div>

    <div></div>
  </div>

  <div class="block">
    <div class="menu-title">公司架构</div>
    <div class="menu-content">
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </div>

    <div></div>
  </div>
  <div class="block">
    <div class="menu-title">公司介绍</div>
    <div class="menu-content">
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </div>

    <div></div>
  </div>
</template>
<script setup>
import Footer from '../components/footer.vue'
</script>
<style lang="scss" scoped>
.header {
}

.block {
  &.album {
    .menu-content {
      display: flex;
    }
    img {
      width: 327px;
      height: 180px;
      margin-right: 20px;
    }
  }
}
</style>
