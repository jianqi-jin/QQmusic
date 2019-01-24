<template>
  <div id="index">
    <div id="lunboBox">
      <img src="./lunbo1.jpg" alt="">
    </div>
    <div id="box">
      <h2>电台</h2>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <a id="list_info">
            <img src="./list2.jpg" alt="">
            <div id="title">{{item.title}}</div>
          </a>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            list:[{
              title: '热歌',
              img: './list2.jpg'
            },{
              title: '一人一首招牌歌',
              img: ''
            }]
          }
      }
    }
</script>

<style scoped lang="stylus">
@import '../../commoncss/config.styl';
  #lunboBox
    width 100%
  #box
    padding 0
    margin-left 10px
    margin-right 10px
    margin-top 14px
    display block
    ul
      overflow hidden
      margin-right  -8px
      li
        float: left
        width 50%
        padding-right 10px
        a
          background-color #fff
          display block
          img
            margin-bottom 5px
          #title
            margin-left 5px
            font-size 14px
            height 41px
            line-height 18px
            display block
  h2
    display block
    font-size 16px
    color: black
    margin-bottom 11px
    font-weight normal
</style>
