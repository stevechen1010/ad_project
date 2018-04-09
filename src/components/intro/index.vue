<template lang="pug">
  div.intro
    ul
      li.picture
        div.sentence
          h3 關於凱拉斯克廣告網
          p Mus sed interdum nunc dictum rutrum scelerisque
            | erat a parturient condimentum potenti dapibus vestibulum
            | condimentum per tristique porta. Torquent a ut consectetur
            | a vel ullamcorper a commodo a mattis ipsum class quam sed eros
            | vestibulum quisque a eu nulla scelerisque a elementum vestibulum.
          p Aliquet dolor ultricies sem rhoncus dolor ullamcorper pharetra
            | dis condimentum ullamcorper rutrum vehicula id nisi vel aptent orci
            | litora hendrerit penatibus erat ad sit. In a semper velit eleifend
            | a viverra adipiscing a phasellus urna praesent parturient integer ultrices
            | montes parturient suscipit posuere quis aenean. Parturient euismod ultricies
            | commodo arcu elementum suspendisse id dictumst at ut vestibulum conubia quisque
          
      li.list
        div.box(v-for="(val, index) in imageList" :key="index" )
          card(:src="val")

</template>
<script>
import card from './card.vue'
let files = {
  '1':require('@/assets/images/list/id1.jpg'),
  '2':require('@/assets/images/list/id2.jpg'),
  '3':require('@/assets/images/list/id3.jpg'),
  '4':require('@/assets/images/list/id4.jpg'),
};
export default {
  components: {
    card
  },
  data: function(){
    return {
      imageList: files,
    }; 
  },
  methods: {
  },
  mounted(){
  },
  watch: {
  }
}
</script>

<style lang="sass" scoped> 
  div.intro
    width: 100%
    height: 560px
    margin-top: 50px
    ul
      height: 300px
      padding: 0px
      li
        vertical-align: top
        display: inline-block
        list-style: none
        width: 50%
        height: 100%
        &.picture 
          div.sentence
            font-family: Microsoft JhengHei
            width: 400px
            margin: 0 auto
            h3
              text-align: left
              margin-top: 50px
            p
              text-align: left
              margin-top: 30px
        &.list
          .box
            position: relative
            width: 45%
            height: 250px
            line-height: 250px
            border-radius: 10px
            margin: 10px 5px
            display: inline-block
            vertical-align: top
            background-color: white
</style>

