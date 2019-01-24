<template>
  <div id="loading">
    <div v-show="loadFlag" id="loadingBg">
      <div id="loadingBox">
        <img src="./loading.gif" alt="">
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
    export default {
      name: "loading",
      data(){
        return {
          loadFlag:0
        }
    },
      mounted:function(){
        this.loading(()=>{
          setTimeout(this.finish,2000)
        })

      },
      methods:{
        loading(callback){
          this.loadFlag = 1
          callback()
        },
        finish(){
          this.loadFlag = 0
        }
      }
    }
</script>

<style scoped lang="stylus">
  #loadingBg
    position absolute
    margin-top -8px
    z-index 999
    height 1000px
    width 100%
    background-color #fff
  #loadingBox
    position relative
    top 150px
    left 45%
    width 20px
</style>
