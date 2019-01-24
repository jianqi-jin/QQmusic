<template>
  <div id="rank">
    <loading>
      <div id="box">
        <ul id="rankList">
          <li id="rankChli" @click="test(index)" v-for="(item, index) in rankList" :key="index">
            <div id="img">
              <img src="./rank-list1.jpg" alt="">
              <div><img src="./earphone_e.svg" alt="">{{item.hots}}万</div>
            </div>
            <div id="info">
              <h3>{{item.title}}</h3>
              <ul>
                <li v-for="(sing, n) in item.singsList">
                  {{n+1}}
                  <span>{{sing.singName}}</span>
                  -{{sing.singer}}
                </li>
              </ul>
              <i class="icono-caretRight"></i>
            </div>
          </li>
        </ul>
      </div>
      <router-view id="routerView"></router-view>
    </loading>

  </div>
</template>

<script>
  import loading from '../../components/common/loading/loading'
    export default {
        name: "rank-list",
      components:{
          loading
      },
      created : function (){
        this.loading()
      },
      methods:{
          loading(){
            //alert("asd")
          },
          test(index){
            this.ss += index
            this.$router.push({path:'/rankList/songList'})
          }
      },
      data () {
          return {
            ss:1,
            rankList:[{
              title:'巅峰榜',
              info:'流行指数',
              hots:100,
              singsList:[{
                singName:'我们',
                singer:'吴青峰'
              },{
                singName:'你的爱情',
                singer:'逃跑计划'
              },{
                singName:'要死就一定死在你手里',
                singer:'杨坤'
              }]
            },{
              title:'巅峰榜',
              info:'流行指数',
              hots:231,
              singsList:[{
                singName:'我们',
                singer:'吴青峰'
              },{
                singName:'你的爱情',
                singer:'逃跑计划'
              },{
                singName:'要死就一定死在你手里',
                singer:'杨坤'
              }]
            },{
              title:'巅峰榜',
              info:'流行指数',
              hots:231,
              singsList:[{
                singName:'我们',
                singer:'吴青峰'
              },{
                singName:'你的爱情',
                singer:'逃跑计划'
              },{
                singName:'要死就一定死在你手里',
                singer:'杨坤'
              }]
            },{
              title:'巅峰榜',
              info:'流行指数',
              hots:231,
              singsList:[{
                singName:'我们',
                singer:'吴青峰'
              },{
                singName:'你的爱情',
                singer:'逃跑计划'
              },{
                singName:'要死就一定死在你手里',
                singer:'杨坤'
              }]
            },{
              title:'巅峰榜',
              info:'流行指数',
              hots:231,
              singsList:[{
                singName:'我们',
                singer:'吴青峰'
              },{
                singName:'你的爱情',
                singer:'逃跑计划'
              },{
                singName:'要死就一定死在你手里',
                singer:'杨坤'
              }]
            },{
              title:'巅峰榜',
              info:'流行指数',
              hots:231,
              singsList:[{
                singName:'我们',
                singer:'吴青峰'
              },{
                singName:'你的爱情',
                singer:'逃跑计划'
              },{
                singName:'要死就一定死在你手里',
                singer:'杨坤'
              }]
            }]
          }
      }
    }
</script>

<style scoped lang="stylus">
  @import '../../commoncss/config.styl'
  @import '../../commoncss/icono.min.css'
  span
    font-size 14px
  #rank
    font-size: 14px;
    color: MFONTGRAY;
  #rankList
    overflow hidden
    margin 10px
    #rankChli
      margin-bottom 10px
      overflow hidden
      padding-left 100px
      div
        height 100px
        background-color #fff
      #img
        width 100px
        margin-left -100px
        float left
        position relative
        div
          position absolute
          top 75%
          background-color rgba(0,0,0,0)
          left 10px
          img
            margin-bottom 3px
            width 20px
            display inline-block





  #info
    padding 6px
    padding-left 15px
    width 100%
    position relative
    i
      position absolute
      top 50%
      margin-top -5px
      right 10px
      height 10px
      width 10px
      overflow hidden
#routerView
  position absolute
  top 0px
  z-index 1
  width 100%
</style>
