<template>
  <div class="footer">
    <!-- 折叠按钮 -->
    <div class="footer-classify-content">
      <div class="left">
        <div class="classify-block">
          <div class="block" v-for="(i, index) in classList" :key="index">
            <div class="classify-title">{{ i.title }}</div>
            <div class="classify-item" v-for="(j, tag) in i.child" :key="tag">
              <div>{{ j.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="code-block">
          <div class="block">
            <img src="/src/assets/img/qr-code-1.jpg" alt="" />
            <div class="text">移动网站</div>
          </div>
          <div class="block">
            <img src="/src/assets/img/qr-code-1.jpg" alt="" />
            <div class="text">微信公众号</div>
          </div>
        </div>
        <div class="relation-block">
          <div>电话：1484894</div>
          <div>邮箱：marketing@skieer.com</div>
        </div>
      </div>
    </div>

    <div class="footer-cert-content">
      <div>Copyright © 2009 - 2014 Cldzz , All Rights Reserved 广东大简科技有限公司 版权所有 粤ICP备20015789号</div>
      <div class="cert-list">
        <img src="/src/assets/img/cert-1.png" alt="" />
        <img src="/src/assets/img/cert-1.png" alt="" />
        <img src="/src/assets/img/cert-1.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
const classList = [
  {
    title: '成功案例',
    child: [{ title: '智慧建筑' }, { title: '智慧建筑' }, { title: '智慧建筑' }],
  },
  {
    title: '成功案例',
    child: [{ title: '指挥中心建设' }, { title: '指挥中心建设' }, { title: '指挥中心建设' }, { title: '指挥中心建设' }],
  },
  { title: '关于我们', child: [{ title: '联系我们' }, { title: '指挥中心建设' }] },
]
</script>
<style lang="scss" scoped>
.footer {
  color: #fff;
  background-color: #434343;

  padding-top: 20px;
}
.footer-classify-content {
  width: 800px;
  margin: auto;
  display: flex;
  .classify-block {
    display: flex;
    width: 700px;
    margin: auto;

    .block {
      display: flex;
      flex-direction: column;
      margin-right: 30px;
      .classify-title {
        font-size: 16px;
        margin-bottom: 16px;
      }
      .classify-item {
        font-size: 14px;
        opacity: 0.5;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .right {
    // display: flex;
    width: 400px;
    font-size: 14px;

    .code-block {
      display: flex;
      align-items: center;
      .block {
        width: 100px;
        margin-right: 20px;
        text-align: center;
      }
      img {
        height: 100px;
        width: 100px;
      }
    }
    .relation-block {
      margin: 20px 0;
      width: 400px;
    }
  }
}
.footer-cert-content {
  padding: 20px 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .classify-item{
    cursor: potr;
  }
  .cert-list {
    margin-top: 20px;
    img {
      margin-right: 20px;
      width: 120px;
      height: 40px;
    }
  }
}
</style>
