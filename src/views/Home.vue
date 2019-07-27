<template>
  <div class="home">
    <router-view class="home_box" />
    <div id="footer">
      <ul>
        <li>
          <span class="iconfont icon-ai-book"></span>
          <p class="fons">
            <router-link to="/Home/index">首页</router-link>
          </p>
        </li>
        <li>
          <span class="iconfont icon-iconset0499"></span>

          <p class="fons">
            <router-link to="/Home/shoppingcar">9块9包邮</router-link>
          </p>
        </li>
        <li>
          <span class="iconfont icon-zhangxuyangcansaitubiao-"></span>
          <p class="fons">
            <router-link to="/Home/taste">今日优选</router-link>
          </p>
        </li>

        <li>
          <span class="iconfont icon-lanzi"></span>
          <p class="fons">
            <router-link to="/Home/sort">分类</router-link>
          </p>
        </li>
        <li>
          <span class="iconfont icon-tuanduicankaoxian-"></span>
          <p class="fons">
            <router-link to="/Home/my">我的</router-link>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #ccc;
  z-index: 999;
}
#footer > ul {
  width: 100%;
  height: 100%;
  display: flex;
}
#footer > ul > li {
  width: 100%;
}
#footer > ul > li {
  display: block;

  height: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-size: 0.24rem;
}

#footer > ul > li > .active {
  color: #c33;
}
#footer > ul > li > span {
  font-size: 0.3rem;
}
</style>

