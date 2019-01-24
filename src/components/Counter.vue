<template>
  <div>
    <div v-if="show">plase wite</div>
    <div id="apd">
      <p>vuex1 -- {{count}}</p>
    </div>
    <button @click="asyncIncrement">+1</button>
    <button @click="decrement">-1</button>
    <button @click="changeTogle">{{ show == true ? 'hidden' : 'show'}}</button>
    <router-link to="/top">to TOP</router-link>
    <router-link to="/foo">to FOO</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
  import {mapActions, mapState} from 'vuex' // 对Actions进行引入 对state进行引入

  export default ({
    data(){
      return {
        aaa:1,
      }
    },
    //每次值改变
    computed:{
      ...mapState([
        'show',
        'count'
      ]),
      count(){
        //this.$store对Vuex内容进行引用
        return this.$store.state.count
      }
    },
    methods:{
      ...mapActions([
        'showTogle',
        'hiddenTogle'
      ]),
      changeTogle() { // 这是一个BUG我不知道为什么不能使用箭头函数，报错找不到showTogle' ---------1-18-2019
        this.show == true ? this.hiddenTogle() : this.showTogle()
      },
      /*
      ...mapActions([// 貌似不可以传递参数？ 未解决疑问- 1-18-2019
        "asnycIncrement"
      ]),
      */
      increment:() =>{
        this.$store.commit('increment', 2)
      },
      decrement(){
        this.$store.commit('decrement', 2)
      },
      asyncIncrement(){
        this.$store.dispatch('asyncIncrement', 2)
      }
      //此处可以对store函数进行引入，可以使用扩展运算符进行快速引入
      /*
      ...mapActions([
      'increment'
      ])
       */
      /*


      increment(){
        //this.$store对Vuex内容进行引用 // store + payload模式
        this.$store.commit('increment',2)
        console.log(this.$store.state.count);

      },
      decrement(){
        //this.$store对Vuex内容进行引用 // store + payload模式
        this.$store.commit('decrement',2)
      },
      asyncIncrement(){
        this.$store.dispatch("asyncIncrement", 2);
      }
      */

    },
    created(){
      console.log(this.$store.state)
    }
  })
</script>
