<template>
  <div class="content">
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
    <div class="block firm-org">
      <div class="menu-title">公司架构</div>
      <div class="menu-content">
        <img src="/src/assets/img/firm-org.png" alt="" />
      </div>

      <div></div>
    </div>
    <div class="block">
      <div class="menu-title">人才理念</div>
      <div class="menu-content">
        能以科学规范的管理为员工提供良好的工作环境和发展平台，坚持“以文化凝聚人才，以薪酬激励人才，以机制留住人才，以事业造就人才”的人才理念，实现员工与企业的共同发展和进步。
        我们热忱欢迎具有创业精神和进取精神的有志之士加入科大智能，用您的智慧与能力、激情与勤奋与全体科大智能人一起，把企业打造成为智能产品解决方案的引领者和未来智慧生活的倡导者。智能科技，智慧未来！
        科大智能将成为您尽显魅力、施展才华的大舞台。
      </div>

      <div></div>
    </div>
  </div>
</template>
<script setup>
import Footer from '../components/footer.vue'
</script>
<style lang="scss" scoped>
.content {
  width: 1200px;
  &:last-child{
    .block{
      margin-bottom: 40px;
    }
  }
  .block {
    .menu-title {
      width: 100%;
      text-align: center;
      font-weight: 400;
      color: #191919;
      margin-top: 0.3rem;
      font-size: 26px;
      padding: 20px 0;
    }
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
    &.firm-org {
      .menu-content {
        text-align: center;
        img {
          height: 600px;
          width: 1000px;
        }
      }
    }
  }
}
</style>
