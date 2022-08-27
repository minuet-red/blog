<template>
  <div class="loading">
    <div class="title">
      <div align="center" style="font-size: 30px">RunSilver的小站</div>
      <br>
      <div align="center" style="font-size: 20px">欢迎来到我的小站，精彩内容马上呈现</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading'
}
</script>
<style scoped>
.title{
  font-family: 'Microsoft Sans Serif';
  font-weight: 500;
  width: 500px;
  height: 300px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%,0);
}


.loading {
  position: fixed;
  left: 0;
  top: 0;
  background: url('./img/audio.svg') center center no-repeat rgb(234, 198, 69);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}

/*布局方式position必须设置为fixed，下载好对应的Loading图标，放置于相应的路径位置，配置好背景颜色以及透明度*/
</style>