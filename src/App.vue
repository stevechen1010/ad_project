<template lang="pug">
  div#app
    //- app-nav
    app-loading(v-if="loading")
    transition(name="fade")
      div.contact-info(v-if="pageTop < 100")
        div.fl_left
          ul
            icon(name='phone')
            li.line +00 (123) 456 7890
            icon(name='facebook-square')
            li info@domain.com
        div.fl_right
          ul
            li.line
              router-link(to="/") 首頁
            li.line
              a(href='#') 登入
            li.line
              a(href='#') 使用說明
            li
              router-link(to="/Provider") 廠商資料
    transition(name="fade")
      div.contact-info.fix-top(v-if="pageTop > 100")
        div.fl_left
          ul
            icon(name='phone')
            li.line +00 (123) 456 7890
            icon(name='facebook-square')
            li info@domain.com
        div.fl_right
          ul
            li.line
              router-link(to="/") 首頁
            li.line
              a(href='#') 登入
            li.line
              a(href='#') 使用說明
            li
              router-link(to="/Provider") 廠商資料
    transition(name="fade")
      router-view
</template>

<script>
import { mapGetters } from 'vuex'
// import appNav from './components/Nav.vue'
import appLoading from './components/Loading.vue'
// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/flag'
// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
export default {
  name: 'app',
  components: {
    // 'app-nav' : appNav,
    'app-loading' : appLoading,
    Icon
  },
  data: function(){
    return {
      pageTop: null
    }
  },
  computed: mapGetters({
    // 取得 loading state
    loading: 'getLoading',
  }),
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
@import "assets/sass/form.sass"
@import "assets/sass/loading.sass"
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  // margin-top: 60px
  .contact-info
    z-index: 3
    position: absolute  
    top: 0px
    width: 100%
    height: 50px
    font-size: 10px
    color: #fff
    background-color: black
    .fl_left
      width: 350px
      ul
        height: 50px
        line-height: 20px
        .fa-icon
          margin-top: 16px

        li
          display: inline-block
          list-style: none
          margin-left: 5px
          margin-right: 20px
          padding-right: 10px
    .fl_right
      position: relative
      top: -50px
      float: right
      width: 350px
      ul
        height: 50px
        line-height: 20px
        .fa-icon
          margin-top: 16px

        li
          display: inline-block
          list-style: none
          margin-left: 5px
          margin-right: 20px
          padding-right: 22px
          a
            color: #fff
            &:hover
              color: #3778b9
              text-decoration: none
</style>
