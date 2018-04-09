<template lang="pug">
  div.provider
    waterfall(
      :line-gap="screenW"
      :min-line-gap="100"
      :max-line-gap="300"
      :watch="items"
      
    )
      waterfall-slot(
        v-for="(item, index) in getItems(5)"
        :width="screenW"
        :height="item.height"
        :order="index"
        :key="index"
      )
</template>
<script>
import { Waterfall, WaterfallSlot } from 'vue-waterfall'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Waterfall,
    WaterfallSlot
  },
  data(){
    return {
      screenW: window.screen.width * 0.2,
      items: []
    }
  },
  computed: {
    ...mapGetters({
      getCompanyData: 'getCompanyData'
    }),
  },
  methods: {
    getItems( count ){
      let lastIndex = 0;
      let items =[];
      for(let i = 0; i <= count; i++ ){
        items[i] = {
          index: lastIndex++,
          width: 100 + Math.random()*50,
          height: 100 + Math.random()*50
        }
      }
      return items;
    },
    ...mapActions([
      'actionGetCompanyData'
    ])
  },
  mounted(){
    this.actionGetCompanyData();
    console.log(this.getCompanyData);
    debugger;
  }
}
</script>

<style lang="sass">
  div.provider
    width: 100%
    margin-top: 50px
    height: 1000px
</style>

