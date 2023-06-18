<template>
  <div class="content">
    <div class="relation-msg-container">
      <h4 class="container-title">我们期待您的来电</h4>
      <div class="card-list">
        <div class="card">
          <div class="card-left">
            <img src="" alt="" />
          </div>
          <div class="card-right">
            <div class="card-title">电话</div>
            <div class="card-content">18494903003</div>
          </div>
        </div>
        <div class="card">
          <div class="card-left">
            <img src="" alt="" />
          </div>
          <div class="card-right">
            <div class="card-title">电话</div>
            <div class="card-content">dggd@udu.com</div>
          </div>
        </div>
        <div class="card">
          <div class="card-left">
            <img src="" alt="" />
          </div>
          <div class="card-right">
            <div class="card-title">地址</div>
            <div class="card-content">丽街道松坪山社区科苑北路</div>
          </div>
        </div>
      </div>
    </div>

    <div class="map-container">
      <h4 class="container-title">地图地址</h4>
      <iframe src=" https://map.baidu.com/@12760485,2601323,8z" frameborder="0"> </iframe>
    </div>
  </div>
</template>
<script setup>
import Footer from '../components/footer.vue'
</script>
<style lang="scss" scoped>
.content {
  width: 1200px;
  .container-title {
    width: 100%;
    text-align: center;
    font-weight: 400;
    color: #191919;
    margin-top: 0.3rem;
    font-size: 26px;
    padding: 20px 0;
  }

  .card-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .card {
      width: 30%;
      height: 100px;
      padding: 0.54rem 0 0.58rem 0.54rem;
      box-shadow: 0px 0px 27px 0px rgb(144 144 144 / 18%);
      border-radius: 10px;
      margin-bottom: 0.28rem;
      background: #fff;
      .card-right {
        .card-title {
          width: 300px;
          font-size: 18px;
          font-weight: 400;
          color: #666666;
          margin-top: 0.28rem;
        }
        .card-content {
          font-weight: 400;
          color: #191919;
          display: block;
          margin-top: 0.13rem;
        }
      }
    }
  }
  .map-container {
    margin: 40px 0;
    iframe {
      width: 100%;
      height: 400px;
    }
  }
}
</style>
