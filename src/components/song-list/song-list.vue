<template>
  <div>
    <div id="songList">
      <div id="header">
        <img id="img_bg" src="./song-list.jpg" alt="">
        <div id="box_dg"></div>

        <div id="info_box">

          <div id="box_left">
            <img id="box_img" src="./song-list.jpg" alt="">
          </div>
          <div id="box_right">
            <h1>巅峰榜-流行指数</h1>
            <p>第23天</p>
            <p>2019-01-23 更新</p>
          </div>
        </div>
        <div id="box_bottom">
          <div id="btn_play">播放全部</div>
        </div>
        <div id="audio_play">
          <audio @timeupdate="updataTime" ref="audio" src="http://dl.stream.qqmusic.qq.com/C400004ZViWz1XYo0y.m4a?guid=6304516336&vkey=2C5836D96AFFA030BA06951A4EE1D38A8DA798D8C805ABD715E6915CC271452AAD4F5DC6B768E2653034B2FD4D9147396204FEF1F0B64F82&uin=0&fromtag=38"
                 controls="controls">
          </audio>
          <div :class="icTogglePly" @click="togglePlay()">
            <img :src="playFlag ? pauseimgsrc :  playimgsrc" alt="">
          </div>
        </div>
      </div>
      <div style="width: 100%; background: #dfdfdf; height: 5px"><div :style="'width:'+playProgress+'%'" id="progress"></div></div>

      <div id="list_box">
        排行榜 共100首
        <ul>
          <li v-for="(item, index) in songList" :key="index">
            <div>
              <div :class="index <= 2 ? 'red' : null" id="left">{{index + 1}}</div>
              <div id="right">
                <span>{{item.title}}</span><br>
                {{item.singer}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  //http://dl.stream.qqmusic.qq.com/C400004ZViWz1XYo0y.m4a?guid=6304516336&vkey=56A3051E2D79D7EED6C1EE97F4D6EBCDFF012CA98B9E398E4C0E7C0D3B9C63E67EB2BFB9A932ECE81CC1554C3DFFBAE9ABF89F8D62355BEC&uin=0&fromtag=38
  //http://dl.stream.qqmusic.qq.com/C400004ZViWz1XYo0y.m4a?guid=6304516336&vkey=2C5836D96AFFA030BA06951A4EE1D38A8DA798D8C805ABD715E6915CC271452AAD4F5DC6B768E2653034B2FD4D9147396204FEF1F0B64F82&uin=0&fromtag=38
  const icPlay = require('./play.svg')
  const icPause = require('./pause.svg')
  export default {
        name: "song-list",
      methods:{
        updataTime(e){
          this.playProgress = e.target.currentTime * 100 / this.$refs.audio.duration
          console.log(this.playProgress)
        },
        play(){
          console.log('play')
          this.playFlag = true
          this.$refs.audio.play()
        },
        pause(){
          console.log('pause')
          this.playFlag = false
          this.$refs.audio.pause()
        },
        togglePlay(){
          console.log(this.playFlag)
          this.playFlag ?  this.pause() : this.play()
        }
      },
      data(){
          return {
            playProgress:0,
            playimgsrc:icPlay,
            pauseimgsrc:icPause,
            icTogglePly:'play',
            playFlag:false,
            songList:[{
              title:'我们 (Live)',
              singer:'吴青峰'
            },{
              title:'你的爱情 (Live)',
              singer:'逃跑计划'
            },{
              title:'要死就一定要死在你手里 (Live)',
              singer:'杨坤'
            },{
              title:'我们 (Live)',
              singer:'吴青峰'
            },{
              title:'你的爱情 (Live)',
              singer:'逃跑计划'
            },{
              title:'要死就一定要死在你手里 (Live)',
              singer:'杨坤'
            },{
              title:'我们 (Live)',
              singer:'吴青峰'
            },{
              title:'你的爱情 (Live)',
              singer:'逃跑计划'
            },{
              title:'要死就一定要死在你手里 (Live)',
              singer:'杨坤'
            },{
              title:'我们 (Live)',
              singer:'吴青峰'
            },{
              title:'你的爱情 (Live)',
              singer:'逃跑计划'
            },{
              title:'要死就一定要死在你手里 (Live)',
              singer:'杨坤'
            },{
              title:'我们 (Live)',
              singer:'吴青峰'
            },{
              title:'你的爱情 (Live)',
              singer:'逃跑计划'
            },{
              title:'要死就一定要死在你手里 (Live)',
              singer:'杨坤'
            }]
          }
      }
    }
</script>

<style scoped lang="stylus">
.red
  color red
#songList
  background-color #fff
  width 100%
  #header
    width 100%
    height 274px
    overflow hidden
    #img_bg
      width 100%
      height 274px
      object-fit cover
      -webkit-filter blur(36px)
      transform scale(1.1)
    #box_dg
      background rgba(0, 0, 0, .5)
      position absolute
      width 100%
      height 274px
      z-index 4
      top 0px
    #info_box
      position absolute
      height 274px
      width 100%
      top 0px
      z-index 5
      padding-left 140px
      overflow hidden
      div
        float left
      #box_left
        width 125px
        margin-top 60px
        margin-left -125px
      #box_right
        height 125px
        width 100%
        margin 60px 0 30px 10px
#box_bottom
  position absolute
  width 100%
  top 200px
  height 70px
  z-index 6
  #btn_play
    background #31c27c
    color #fff
    height 40px
    overflow hidden
    border-radius 20px
    width 170px
    margin auto
    text-align center
    line-height 40px
    font-size 17px



#audio_play
  //border 1px solid #ccc
  padding 0 0 0 20px
  width 100%
  height 70px
  position absolute
  top 200px
  z-index 7
  audio
    width 0
    height 0
    display none
  div
    width 50px
    overflow hidden
    img
      width 100%
#list_box
  background #fff
  padding 20px 0 0px 10px
  li
    margin 20px 0px 20px 10px
    div
      overflow hidden
      div
        float left
      #left
        padding 10px 13px 10px 0px
        font-size 17px
      #right
        span
          margin 0 0 1px 0
h1
  margin-top 20px
p
  color #fff
  margin 10px 0 10px 0
#progress
  height 5px
  background #31c27c
</style>
