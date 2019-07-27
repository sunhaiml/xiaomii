<template>
 <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="https://img.alicdn.com/imgextra/i1/797391738/O1CN01zz90jw1Oi2uFnxUMc_!!797391738.png_430x430q90.jpg"/>
        </div>
        <div class="swiper-slide">
             <img src="https://img.alicdn.com/imgextra/i3/797391738/O1CN01bxPkiE1Oi2uJCdplk_!!797391738.png_430x430q90.jpg"/>
        </div>
        <div class="swiper-slide">
            <img src="https://img.alicdn.com/imgextra/i3/797391738/O1CN01LwlLqC1Oi2uCt3exZ_!!797391738.png_430x430q90.jpg"/>
        </div>
        <div class="swiper-slide">
            <img src="https://img.alicdn.com/imgextra/i2/797391738/O1CN01VYpDHs1Oi2u3ndCo1_!!797391738.png_430x430q90.jpg"/>
        </div>
         <div class="swiper-slide">
            <img src="https://img.alicdn.com/imgextra/i2/797391738/O1CN01WN2Ade1Oi2tTs3QYI_!!797391738.png_430x430q90.jpg"/>
        </div>
         <div class="swiper-slide">
            <img src="https://img.alicdn.com/imgextra/i3/797391738/O1CN01LwlLqC1Oi2uCt3exZ_!!797391738.png_430x430q90.jpg"/>
        </div>
         <div class="swiper-slide">
            <img src="https://img.alicdn.com/imgextra/i2/797391738/O1CN01VYpDHs1Oi2u3ndCo1_!!797391738.png_430x430q90.jpg"/>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
   
    
    <!-- 如果需要滚动条 -->
   
</div>

</template>
<script>
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
export default {
  


    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
    
    loop: true, // 循环模式选项
    autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    
  })        
    }
}
</script>
<style>
.swiper-container{
    width: 100%;
    height: 100%;
}
</style>

