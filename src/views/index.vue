<template>
  <div class="index">
    <div class="header" ref="bfn">
      <div class="mysrc"></div>
    </div>

    <div class="dakuang">
      <div class="twoNav" ref="bwn">
        <div class="jingxuan">精选</div>
        <ul class="gund">
          <li>女装</li>
          <li>男装</li>
          <li>美食</li>
          <li>美妆</li>
          <li>居家</li>
          <li>鞋品</li>
          <li>数码</li>
          <li>文娱</li>
          <li>内衣</li>
          <li>母婴</li>
          <li>鞋包</li>
          <li>配饰</li>
          <li>家装</li>
          <li>户外</li>
        </ul>
        <v-touch class="twoNav_bottom" @tap="vuetouch" tag="div">
          <a href="##">箭头</a>
        </v-touch>
      </div>
    </div>
    <!--    中间滚动 -->

    <div class="yincang" v-show="flag">
      <ul class="non_ul">
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i3/2053469401/TB2LX03HKuSBuNjy1XcXXcYjFXa-2053469401.png"
          />
          <p class="jxx">精选</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i1/2053469401/TB2oX82HL9TBuNjy0FcXXbeiFXa-2053469401.png"
          />
          <p class="jxx">女装</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i1/2053469401/TB2n7WyHN9YBuNjy0FfXXXIsVXa-2053469401.png"
          />
          <p class="jxx">男装</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i4/2053469401/TB2PFV2HL9TBuNjy0FcXXbeiFXa-2053469401.png"
          />
          <p class="jxx">美食</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i1/2053469401/TB2QybZHL1TBuNjy0FjXXajyXXa-2053469401.png"
          />
          <p class="jxx">美妆</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i3/2053469401/TB2FCJnHFGWBuNjy0FbXXb4sXXa-2053469401.png"
          />
          <p class="jxx">居家日用</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i3/2053469401/TB230SXHL9TBuNjy1zbXXXpepXa-2053469401.png"
          />
          <p class="jxx">鞋品</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i4/2053469401/TB21.plHQKWBuNjy1zjXXcOypXa-2053469401.png"
          />
          <p class="jxx">数码家电</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i3/2053469401/TB2cnZWzfiSBuNkSnhJXXbDcpXa-2053469401.png"
          />
          <p class="jxx">文娱车品</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i4/2053469401/TB2QMv0ay6guuRjy1XdXXaAwpXa-2053469401.png"
          />
          <p class="jxx">内衣</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i4/2053469401/TB2QMv0ay6guuRjy1XdXXaAwpXa-2053469401.png"
          />
          <p class="jxx">母婴</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i2/2053469401/TB27Cw.HwaTBuNjSszfXXXgfpXa-2053469401.png"
          />
          <p class="jxx">箱包</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i2/2053469401/TB2i36ZazfguuRjy1zeXXb0KFXa-2053469401.png"
          />
          <p class="jxx">配饰</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i1/2053469401/TB2uI3VzcyYBuNkSnfoXXcWgVXa-2053469401.png"
          />
          <p class="jxx">家装家纺</p>
        </li>
        <li class="li_K">
          <img
            class="img_k"
            src="https://img.alicdn.com/imgextra/i4/2053469401/TB2rrnsHH9YBuNjy0FgXXcxcXXa-2053469401.png"
          />
          <p class="jxx">户外运动</p>
        </li>
      </ul>
    </div>
    <div class="mySwiper">
      <mySwiper />
    </div>
    <ul class="fiveimg">
      <li>
        <a>
          <img src="https://m.huanle800.com/data/upload/waplink/1812/14/5c13a39ee8296.png" />
        </a>
        <p>疯抢榜</p>
      </li>
      <li>
        <a>
          <img src="https://m.huanle800.com/data/upload/waplink/1812/14/5c13a3a8d3461.png" />
        </a>
        <p>大额券</p>
      </li>
      <li>
        <a>
          <img src="https://m.huanle800.com/data/upload/waplink/1812/14/5c13a3c7d16b2.png" />
        </a>
        <p>折上折</p>
      </li>
      <li>
        <a>
          <img src="https://m.huanle800.com/data/upload/waplink/1812/14/5c13a3dee5e68.png" />
        </a>
        <p>品牌券</p>
      </li>
      <li>
        <a>
          <img src="https://m.huanle800.com/data/upload/waplink/1903/10/5c84dd4ed61bd.png" />
        </a>
        <p>拼多多</p>
      </li>
    </ul>
    <div class="lingshi">
      <ul
        id="list"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="20"
      >
        <li v-for="item in list">
          <p class="tu">
            <img :src="item.pic" />
          </p>
          <div class="conten_right">
            <h3 class="tianmao">{{item.d_title}}</h3>
            <div class="num">
              <span>天猫价￥{{item.yuanjia}}</span>
              <span class="ys">已售{{((Number(item.xiaoliang)/1000).toFixed(0))}}万件</span>
            </div>
            <div class="quan">
              <span>券后价￥{{(Number(item.yuanjia-item.quan_jine).toFixed(1))}}</span>
              <span class="quans">{{item.quan_jine}}元券</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <v-touch class="gotop" @tap="gogog" ref="btn" tag="div">↑</v-touch>
  </div>
</template>
<script>
import mySwiper from "../components/MySwiper";
import { InfiniteScroll } from "mint-ui";
export default {
  name: "index",
  components: {
    mySwiper
  },
  data() {
    return {
      flag: false,
      list: [],
      loading: false, //表示可以发请求
      pages: "1",
      flags: false
    };
  },
  created() {
    this.getFIlm();
  },

  mounted() {
    window.addEventListener("scroll", this.needScroll);
  },

  methods: {
    vuetouch: function() {
      this.flag = !this.flag;
    },

    needScroll() {
      var scrollTop =
        window.pageYOffset || document.scrollTop || document.body.scrollTop;

      let bfn = this.$refs.bfn; //需要隐藏的
      let obtn = this.$refs.btn.$el;
      let obwn = this.$refs.bwn; //那个置顶的
      if (scrollTop >= 1200) {
        bfn.style.display = "none";
        obtn.style.display = "block";
        obwn.style.marginTop = 0;
        obwn.style.position = "fixed";
      } else {
        console.log(123);
        bfn.style.display = "block";
        obtn.style.display = "none";
        obwn.style.display = "block";
        obwn.style.position = "relative";
      }
    },

    gogog: function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    getFIlm() {
      this.loading = true;
      this.$axios
        .get("/cs", {
          params: {
            m: "ajax",
            a: "ajaxnew",
            page: this.pages++
          }
        })
        .then(res => {
          this.list = this.list.concat(res.data.data.data);
          this.loading = false;
        });
    },
    loadMore() {
      this.pages++;
      this.getFIlm();
    }
  }
};
</script>
<style scoped>
.header {
  height: 0.88rem;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);

  width: 100%;
  z-index: 999;
  display: block;
}
.gotop {
  width: 0.7rem;
  height: 0.7rem;
  background: black;
  opacity: 0.7;
  position: fixed;
  right: 0.2rem;
  bottom: 1.2rem;
  z-index: 99999;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 0.7rem;
}
.header .mysrc {
  width: 6rem;
  height: 0.56rem;
  background: #fff;
  border-radius: 5px;
  line-height: 28px;
  height: 28px;
  margin-left: 0.3rem;
  float: left;
  margin-top: 0.15rem;
  border-radius: 20%;
  border-radius: 25px;
}
.twoNav {
  height: 0.8rem;
  width: 100%;
  border-bottom: 0.5px solid black;
  margin-top: 0px;
  display: block;
  background: #fff;
  z-index: 999;
}

.twoNav_bottom {
  width: 10%;
  height: 0.8rem;
  background: red;
  float: right;

  font-size: 12px;
  text-align: center;
  line-height: 0.8rem;
}
.twoNav .jingxuan {
  width: 10%;
  height: 0.8rem;
  background-color: rgb(204, 238, 187);

  float: left;
  font-size: 14px;
  text-align: center;
  line-height: 0.8rem;
}
.twoNav .gund {
  width: 80%;
  height: 0.8rem;
  float: left;
  overflow-x: auto;
  display: flex;
}
.twoNav .gund > li {
  float: left;
  width: 0.8rem;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  font-size: 14px;
  flex-shrink: 0;
}
.yincang {
  width: 100%;
  height: 9rem;
  background: #fff;
  position: fixed;
  top: 30;
  left: 0;
  z-index: 99999;
}
.non_ul {
  margin: 0px 14px;

  height: 9rem;
}
.non_ul .li_K {
  width: 25%;
  height: 25%;

  float: left;
}
.li_K .img_k {
  width: 1rem;
  height: 1rem;

  margin-left: 0.4rem;
}
.li_K .img_k img {
  width: 100%;
  height: 100%;
}
.li_K .jxx {
  font-size: 12px;
  text-align: center;
  margin-top: 0.2rem;
}
.mySwiper {
  height: 3.12rem;
  background: rebeccapurple;
}
.fiveimg {
  width: 100%;
  height: 2rem;
  display: flex;
}
.fiveimg > li {
  display: block;
  width: 25%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  font-size: 14px;
}
.fiveimg > li > a {
  width: 100%;
  height: 1.2rem;
  margin-top: 0.4rem;
}
.fiveimg img {
  width: 100%;
  height: 100%;
}
.lingshi {
  height: 100%;
  overflow: hidden;
}
.lingshi > ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.lingshi > ul > li {
  padding: 0 0 9.8px;
  overflow: hidden;
  height: 2.7rem;
}
.lingshi .tu {
  width: 2.5rem;
  height: 2.5rem;
  float: left;
}
.tu img {
  width: 100%;
  height: 100%;
}
.lingshi .conten_right {
  float: right;
  height: 2.5rem;
  width: 4.4rem;
}
.conten_right .tianmao {
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 0.55rem;
  margin-right: 10px;
  margin-bottom: 0.2rem;
  overflow: hidden;
  margin-left: 15px;
  margin-left: 0.1rem;
  margin-top: 0.3rem;
}
.conten_right .num {
  width: 4.4rem;
  margin-top: 0.8rem;
  height: 0.4rem;
}
.num span:nth-child(1) {
  padding-right: 8px;
  margin-right: 10px;
  font-size: 12px;
  position: relative;
  z-index: 1;
  zoom: 1;
  display: block;
  width: 1.6rem;
  height: 0.4rem;
  float: left;
  color: #aaaaaa;
}
.num .ys {
  padding-right: 2px;
  margin-right: 5px;
  font-size: 14px;
  position: relative;
  z-index: 1;
  zoom: 1;
  display: block;
  width: 1.67rem;
  height: 0.4rem;
  float: right;
  color: #aaaaaa;
}

.conten_right .quan {
  width: 4.4rem;
  height: 0.4rem;
  margin-top: 0.2rem;
}
.quan span:nth-child(1) {
  padding-right: 10px;
  margin-right: 12px;
  font-size: 12px;
  position: relative;
  z-index: 1;
  zoom: 1;
  display: block;
  width: 1.5rem;
  height: 0.4rem;
  float: left;
  color: #fc4d52;
}
.quan .quans {
  padding-right: 10px;
  margin-right: 10px;
  font-size: 12px;
  position: relative;
  z-index: 1;
  zoom: 1;
  display: block;
  width: 1.3rem;
  height: 0.4rem;
  float: right;
  color: #fc4d52;
}
</style> 


