<template>
    <div class="my">
            <div class="hander">
                 <div class="cente">
                     <div class="imgk">
                         <img src="https://m.huanle800.com/static/wap/images/user_info_tx.png" />
                     </div>
                 </div>
            </div>
    <div class="cent_top">
          <div class="top">
            <div class="imgkk">
                <img src="https://m.huanle800.com/static/wap/images/yaoqing.svg"/>
            </div>
            <p>邀请好友</p>
            <div class="rightcon">></div>
          </div>

             <div class="top">
            <div class="imgkk">
                <img src="https://m.huanle800.com/static/wap/images/wode_icon_like.svg"/>
            </div>
            <p>我的收藏</p>
            <div class="rightcon">></div>
          </div>
          <div class="top">
            <div class="imgkk">
                <img src="https://m.huanle800.com/static/wap/images/wode_icon_history.svg"/>
            </div>
            <p>浏览记录</p>
            <div class="rightcon">></div>
          </div>

    </div>
    <div class="cent_top">
          <div class="top">
            <div class="imgkk">
                <img src="https://m.huanle800.com/static/wap/images/help-s.svg"/>
            </div>
            <p>常见问题</p>
            <div class="rightcon">></div>
          </div>

             <div class="top">
            <div class="imgkk">
                <img src="https://m.huanle800.com/static/wap/images/wode_icon_like.svg"/>
            </div>
            <p>返利帮助</p>
            <div class="rightcon">></div>
          </div>
          <div class="top">
            <div class="imgkk">
                <img src="https://m.huanle800.com/static/wap/images/wode_icon_history.svg"/>
            </div>
            <p>领券帮助</p>
            <div class="rightcon">></div>
          </div>

    </div>
    <div class="cent_top">
          <div class="top">
            <div class="imgkk">
                <img src="https://m.huanle800.com/static/wap/images/wode_icon_servicer.svg"/>
            </div>
            <p>邀请好友</p>
            <div class="rightcon">></div>
          </div>

             <div class="top">
            <div class="imgkk">
                <img src="https://m.huanle800.com/static/wap/images/wode_setting_download.svg"/>
            </div>
            <p>我的收藏</p>
            <div class="rightcon">></div>
          </div>
         

    </div>



    </div>
    
</template>

<script>
export default {
    name:"my",
    computed:{

    }
}
</script>
<style scoped>
.hander{
    height: 4rem;
    background: linear-gradient(-90deg,#fa4dbe,#fbaa58);
    display: flex

}
.cente{
 padding: 1.06rem 0;
 height: 2rem;
 margin: 0px 14px;


}
.cente .imgk{
    float: left;
    width: 1.4rem;
    height: 1.4rem;
}
.cente .imgk img{
    width: 100%;
    height: 100%;
}
.cent_top{
    height:3.2rem;
    width: 100%;
}
.top{
    width: 100%;
    height: 1.0rem;
  
}

.top .imgkk{
   float: left;
   margin-top: 10px;
     margin-left: 10px;
}
.top p{
    float: left;
      margin-top: 16px;
      margin-left: 20px;
      font-size: 12px;
}
.rightcon{
    float: right;
     margin-top: 16px;
      margin-right: 20px;

}
</style>


