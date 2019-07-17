<template>
  <div class="home">
    <router-view class="home_box"/>
   <ul class="footer">
      <li>
           <span class="iconfont icon-ai-book"></span>
           <router-link to="/Home/index">首页</router-link>
      </li>
        <li>
         
           <span class="iconfont icon-iconset0499"></span>
           
             <router-link to="/Home/sort">分类</router-link>
      </li>
        <li>
          
           <span class="iconfont icon-zhangxuyangcansaitubiao-"></span>
            <router-link to="/Home/taste">品味</router-link>
          
      </li>

        <li>
         
           <span class="iconfont icon-lanzi"></span>
            <router-link to="/Home/shoppingcar">购物车</router-link>
      </li>
        <li>
           
           <span class="iconfont icon-tuanduicankaoxian-"></span>
           <router-link to="/Home/my">我的</router-link>
      </li>



   </ul>
   
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
 
  }
}
</script>
<style scoped>
.footer{
   position: fixed;
   bottom:0;
   width:100%;
   display: flex;
   background:#fff;
   z-index: 100;
   height: 0.98rem;
   color: #845f3f
   
} 

.footer li{
		flex:1;
    height: 0.98rem;
    flex-direction: column;
      text-align: center;
      display: flex;
      color: #845f3f
	}
.footer .iconfont{
    display: block;
font-size:0.42rem;
margin-top:0.08rem;
}
	.home_box{
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0.98rem;
  }
  .footer a{
    color: #845f3f
  }
	.footer .router-link-exact-active{
		color:#ff5f16;
	}

</style>

