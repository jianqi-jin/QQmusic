<template>
  <div id="search">
    <div id="searchInput">
      <div>
        <img src="./search.svg" alt="">
        <input type="text" placeholder="搜索歌曲，歌单，专辑">
      </div>

    </div>
    <div id="box">
      <h3>热门搜索</h3>
      <ul>
        <li v-for="(item, index) in list" :key="index"><div>{{item.title}}</div></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "search",
      data(){
          return {
            list:[{
              title:'Gai见面吧电台'
            },{
              title:'MOVE TOUR BODY'
            },{
              title:'NEVER BE ALONE'
            },{
              title:'爱情有时很残忍'
            }]
          }
      }
    }
</script>

<style scoped lang="stylus">
@import '../../commoncss/config.styl'
  #searchInput
    width 100%
    padding 10px 10px 10px 10px
    div
      border-radius 5px
      background-color #fff
      position relative
      height 40px
      overflow hidden
      padding 5px 0px 5px 35px
      img
        width 30px
        display inline-block
        position absolute

        margin-left -20px
    input
      position absolute
      height 30px
      margin-left 13px
      width 100%
  #box
    background-color #fff
    width 100%
    padding 22px 10px 0px 13px
    height 670px
  li
    float left
    border-radius 20px
    height 35px
    border 1px solid #5a5a5a
    overflow hidden
    font-size 16px
    margin 8px 7px 5px 7px
    padding 5px 10px 5px 10px

</style>
