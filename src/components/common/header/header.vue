<template>
    <div id="header">
      <div id="box"></div>
      <router-link to="/index" active-class="select" class="nav">推荐</router-link>
      <router-link to="/rankList" active-class="select" class="nav">排行榜</router-link>
      <router-link to="/search" active-class="select" class="nav">搜索</router-link>


    </div>
</template>

<script>
    export default {
        name: "m-header"
    }
</script>

<style scoped lang="stylus">
@import './header.styl'
@import '../../../commoncss/config.styl'
  #header
    background-color #fff
  #box
    background-color MGREEN
    height 44px
    width 100%
  .nav
    height 38px
    line-height 40px
    text-align center
    font-size 18px
    display inline-block
    width 31%
    color MBLACK


.select
    color MGREEN
    border-bottom  MGREEN 3px solid
</style>
