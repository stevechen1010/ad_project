<template lang="pug">
  div.home-container
    div.content(:style="{backgroundImage:`url(${contentImg})`}")
      div.banner
        slider(:slides="slides" :inv="inv" :style="styleObject" :name="transitionName1" :target="target")
      intro
      transition(name="slide-fade-right")
        div.instruction(v-if="pageTop > 650")
          h4 會員八大權益
          ul
            li 不得隨意辭退孕期女職工
            li 不得隨意給孕期女職工降薪
            li 不得安排孕期女職工從事高勞動強度工作
            li 不得哺乳期女職工加班
          ul
            li 關於產假
            li 孕期男方不得提出離婚
            li 小產半年內男方不得提出離婚 
            li 女方在懷孕期間、分娩後一年內
      transition(name="slide-fade-left") 
        div.contact(v-if="pageTop > 1000" :style="{backgroundImage:`url(${contactImg})`}")
          h2 customer
          p 歡迎各行業的朋友前往加盟 , 此網站僅供曝光平台, 不提供任何金流相關服務. 
          div.button 
            h5 廣告清單一覽
      div.copyright © Calask Advertising, Inc.
</template>
<script>
  // only import the icons you use to reduce bundle size
  import 'vue-awesome/icons/flag'
  // or import all icons if you don't care about bundle size
  import 'vue-awesome/icons'
  import Icon from 'vue-awesome/components/Icon.vue'
  import slider from '@/components/slide/slide.vue'
  import intro from '@/components/intro/index.vue'
  export default {
    components: {
      slider,
      Icon,
      intro
    },
    data () {
      return {
        pageTop: null,
        contentImg: require('../assets/images/circles-light.png'),
        contactImg: require('../assets/images/footer/customer-bg.jpg'),
        slides: [
          {
            src: require('@/assets/images/banner/slide01.jpg'),
            href: ''
          },
          {
            src: require('@/assets/images/banner/slide02.jpg'),
            href: ''
          },
          {
            src: require('@/assets/images/banner/slide03.jpg'),
            href: ''
          },
          {
            src: require('@/assets/images/banner/slide04.jpg'),
            href: ''
          },
          {
            src: require('@/assets/images/banner/slide05.jpg'),
            href: ''
          }
        ],
        inv: 3000,
        styleObject: {
          width: '100%',
          height: '460px'
        },
        transitionName1: 'move',
        transitionName2: 'fade',
        target: '_blank'
      }
    },
    methods: {
      scrollHandler(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop);
        this.pageTop = scrollTop;
      }
    },
    mounted(){
      window.addEventListener('scroll',this.scrollHandler)
    }
  }
</script>

<style lang="sass">
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-right-enter-active
  transition: all .3s ease
.slide-fade-right-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-fade-right-enter, .slide-fade-right-leave-to
  transform: translateX(50px)
  opacity: 0
.slide-fade-left-enter-active
  transition: all .3s ease
.slide-fade-left-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-fade-left-enter, .slide-fade-left-leave-to
  transform: translateX(-50px)
  opacity: 0
.line
  border-right: 0.5px solid #666
.fix-top
  position: fixed !important
  top: 0px !important
  z-index: 50
.home-container
  .content
    position: relative
    width: 100%
    height: 1800px
    .banner
      width: 100%
      height: 460px
    .instruction
      width: 95%
      margin: 0 auto
      margin-top: 20px
      height: 250px
      background-color: white
      h4
        padding: 40px 0 20px 30px
        font-family: Microsoft JhengHei
        text-align: left
      ul
        width: 40%
        display: inline-block
        li
         text-align: left
    .contact
      position: absolute
      bottom: 40px
      width: 100%
      height: 300px
      h2
        width: 80%
        font-family: Impact
        font-weight: 500
        font-size: 50px
        margin: 30px auto
        text-align: left
        color: white
      p
        width: 80%
        color: white
        font-family: Microsoft JhengHei
        margin: 0 auto
        text-align: left
      div.button
        width: 400px
        height: 45px
        line-height: 45px
        color: #fff
        background: #000
        margin: 40px 0 0 130px
        cursor: pointer
        &:hover
          color: #000
          background: #fff
        h5
          padding-top: 10px
          font-family: Microsoft JhengHei

    .copyright
      position: absolute
      bottom: 0px
      width: 100%
      height: 40px
      line-height: 40px
      font-size: 12px
      color: white
      background: linear-gradient(to right, #0098ba, #153c78, #0098ba)


    

.home-page-cover
  width: 100px
  height: auto
</style>

