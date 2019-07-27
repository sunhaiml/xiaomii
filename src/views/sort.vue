<template>
  <div class="sort">
    <div class="header">
      <a class="left"><</a>
      <div class="mysrc"></div>
    </div>
    <div class="contend">
      <div class="leftli">
        <ul>
          <li v-for="(item,index) in list" @click="qiehuan(index)">{{item.name}}</li>
        </ul>
      </div>

      <div class="rightcont">
        <div class="kong"></div>
        <ul v-for="(item,index) in list" v-show="index === curIndex">
          <li class="liimg" v-for="items in item.sub_class">
            <p class="tuq">
              <img :src="items.icon" />
            </p>
            <span>123</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sort",
  components: {},

  data() {
    return {
      list: [],
      list1: [],
      curIndex: 0
    };
  },
  created() {
    this.keft();
  },
  methods: {
    keft() {
      this.$axios
        .get("/cs", {
          params: {
            m: "ajax",
            a: "type",
            type: 1
          }
        })
        .then(res => {
          this.list = res.data.data;
          this.list1 = res.data.data[0].sub_class;
          console.log(this.list);
        });
    },
    qiehuan(index) {
      this.curIndex = index;
    }
  }
};
</script>

<style scoped>
.header {
  height: 0.88rem;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
.header .left {
  width: 0.56rem;
  height: 0.56rem;
  margin-left: 0.3rem;
  display: block;
  margin-top: 0.13rem;
  float: left;
  color: #fff;
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
}
.contend {
  width: 100%;
  overflow: hidden;
  height: 100%;

  margin-top: 0.88rem;
}
.contend .leftli {
  float: left;
  width: 1.6rem;
  height: 100%;
}
.contend .leftli > ul {
  height: 100%;
  overflow-y: scroll;
  background: #f4f4f4;
}
.contend .leftli > ul > li {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 13px;
  height: 0.9rem;
  width: 100%;
}
.contend .rightcont {
  width: 5.89rem;
  height: 100%;
  float: right;
}
.rightcont .kong {
  width: 100%;
  height: 0.4rem;
}
.rightcont .liimg {
  width: 1.96rem;

  float: left;
}
.liimg .tuq {
  width: 1.96rem;
  height: 1.7rem;
  background: forestgreen;
  border-radius: 50%;
  display: block;
}
.tuq img {
  width: 100%;
  height: 100%;
}
.liimg span {
  font-size: 14px;
  text-align: center;
  margin-left: 36px;
}
</style>



