<template lang="pug">
  div.picture-show(@mouseenter="enter" @mouseleave="leave")
    img(:src= 'src' width= '250px' height="250px" :class="{hoverImg: mouseHover == 1}")
    transition(name="fade")
      div.align-center(v-show="mouseHover == 1")
        a.button.alt(href='#') Look More...
</template>
<script>
export default {
  props: [
    "src"
  ],
  data: function(){
    return {
      name: '凱拉斯克廣告網',
      mouseHover: 0
    }; 
  },
  methods: {
    enter(){
      this.mouseHover = 1;
    },
    leave(){
      this.mouseHover = 0;
    }
  }
}
</script>

<style lang="sass" scoped> 
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-enter, .fade-leave-to
    opacity: 0
  .hoverImg
    opacity: 0.5
  div.picture-show
    position: relative
    width: 100%
    height: 250px
    border-radius: 10px
    background-color: #093b59
    img
      width: 100%
      height: 254px
      border-radius: 10px
    .align-center
      margin: 0 auto
      border: 0px
      width: 100%
      height: 40px
      line-height: 40px
      position: absolute
      top: 120px
      z-index: 2
      a.button
        text-decoration: none
        color: white
        font-size: 15px
        font-weight: bold

        

</style>

