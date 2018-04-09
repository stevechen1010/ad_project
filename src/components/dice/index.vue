<template lang="pug">
  div.diceBox
    ul
      li.one.picture
        img(src="1.png"  height="30" width="30")
      //- li.two.picture
      //-   img(:src="img"  height="30" width="30")
      //- li.three.picture
      //-   img(:src="img"  height="30" width="30")
    //- button.btn.btn-primary(@click="playOpen()") 開始遊戲
    //- button.btn.btn-primary(@click="actionReset()") 確認下注
</template>
<script>
let files = {
  '1': require('./1.png'),
  '2': require('./2.png'),
  '3': require('./3.png'),
  '4': require('./4.png'),
  '5': require('./5.png'),
  '6': require('./6.png'),
};
module.exports =  {
  model: {
    prop: 'number',
    event: 'change'
  },
  data: function(){
    return {
      img: files[1],
      diceNumber: 1,
      random: null //存放清除setInterval
    }; 
  },
  methods: {
    playOpen(){
      // debugger;
      let that = this;
      clearInterval(this.random);
      this.random = setInterval(function(){
        if(that.diceNumber == 6) that.diceNumber = 1
        that.diceNumber++;  
      },100);

    }
  },
  mounted(){
    // debugger;
    console.log(this.number);
  },
  watch: {
    number(newVal, oldVal){
      // debugger;
      this.$emit('change', newVal);
      console.log(newVal);
    },
    diceNumber(val){
      // debugger;
      this.number = this.diceNumber;
      this.img = files[this.diceNumber];
    }
  }
}
</script>

<style lang="sass" scoped>
  .diceBox
    width: 300px
    margin: 0 auto
    z-index: 50
    padding: 50px
    ul
      li.picture
        display: inline-block
        margin: 40px 5px
        width: 30px
        height: 30px
      .btn
        display: inline-block
        margin: 0 5px
</style>

