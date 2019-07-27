<template>
    <div class="findwd">
          <div class="hand">
            <div class="jiantou" @click="tza"><</div>
            <div class="denglu">注册</div>
        </div>
   <div class="inputt">
        <input type="text" id="username" placeholder="注册的账号" v-model="username">
   </div>
<div class="inpumm">
        <input type="password" id="password" placeholder="注册的密码" v-model="password">
   </div>
     <div class="buttonn">
          <input type="submit" id="regbtn" @click="zc" value="提交">
         </div>   
         

    </div>
</template>
<script>
export default {
    name:"findwd",
    conputed:{

    },
    data(){
        return{
            username:"",
            password:""
 

        }
        },
        methods:{
            zc(){
               this.$axios.get("/sz/users/reg",{
                 params:{
                     'username':this.username,
                     'password':this.password
                 }


               }).then((res)=>{
                   if(res.status===200){
                       this.$router.push({path:'/alogin'})
                   }else{
                       console.log("错误的")
                   }
               })


            },
            tza(){
                this.$router.push({path:'/alogin'})
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
    float: left;
    display: inline-block;
    margin-left: 20px;
    padding-top:10px;

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
</style>

