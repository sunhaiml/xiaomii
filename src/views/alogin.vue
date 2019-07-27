<template>
    <div class="alogin">
        <div class="hand">
            <div class="jiantou"><</div>
            <div class="denglu">登录</div>
        </div>
   <div class="inputt">
        <input type="text" id="username" placeholder="用户名\手机号\邮箱" v-model="username">
   </div>
<div class="inpumm">
        <input type="password" id="password" placeholder="密码" v-model="password">
   </div>
     <div class="buttonn">
          <input type="submit" id="regbtn" @click="dj" value="登录">
         </div>   
         <div class="zimen">还没有账号？ 立即<span @click="tz">注册</span></div >
    </div>
</template>
<script>
export default {
    name:"alogin",
    computed:{

    },
    data(){
         return{
           username:"",
           password:"",
    }
    },
   methods:{
       dj(){
          this.$axios.get("/sz/users/login",{
              pargrams:{
                  username:this.username,
                  password:this.password

              }
          })
          .then((res)=>{
              if(res.data.status===0){
                    this.$router.push({path:`/home/index`})
                    
                    this.$router.push(this.$route.query.redirect)
                  }
                
              else{
                  console.log(eoor)
              }
          })
       },
           tz(){
               this.$router.push({path:`/findwd`})
           }
   }

}
</script>
<style scoped>
.hand{
    width: 100%;
    height: 2rem;
   
}
.jiantou{
    width: 0.9rem;
    height: 0.9rem;
   
    display: inline-block;
    margin-left: 20px;
    padding-top:10px;
    float: left;

}
.denglu{
     width: 0.9rem;
    height: 0.9rem;
  margin-left: 180px;
 padding-top:10px;
}
.inputt{
   
    height: 50px;
    margin: 0.2rem;
    background: teal;
}
#username{
 width: 100%;
height: 48px;
}
.inpumm{
    height: 50px;
    margin: 0.2rem;
    background: teal;
}
#password{
   width: 100%;
   height: 48px;
}
.buttonn{
    height: 50px;
    margin: 0.2rem;
    background: teal;
}
#regbtn{
 width: 100%;
   height: 48px;
}
.zimen{
   float: left;
   font-size: 12px;
   margin-left: 0.2rem;
}
.zimen span{
    color:  #1991EB
}
</style>

