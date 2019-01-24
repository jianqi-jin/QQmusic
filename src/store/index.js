//index.js     这是vuex的store.js文件
import Vue from 'vue' //引入Vue
import Vuex from 'vuex'//引入Vuex

Vue.use(Vuex)//use Vuex 必须步骤

//设置store对象 并暴露store入口

export default new Vuex.Store({
  //变量
  state:{
    count:0,
    show:false
  },
  //getters 仅仅是获取和计算变量，不可以改变
  getters:{
    getCount(state){
      return state.state.count
    }
  },
  //改变状态，永远是同步的
  mutations:{
    //aaa(state, num)  // 第一个参数固定为state 第二个参数是payload(负载) //Vue建议我们使用常量所以这里我们尽量使用大写
    increment: (state, num) => {//箭头函数，这里说明increment是一个函数
      state.count+=num
    },
    decrement: (state, num) => {
      state.count += -num
    },
    SHOW:(state)=>{
      state.show=true
    },
    HIDDEN:(state)=>{
      state.show = false
    }
  },
  //提交mutation，这是异步的
  actions:{
    //aaa({commit},num) // 第一个参数为一个commit提交(函数)，第二个参数为payload(负载)(对象)
    asyncDecrement:({commit}, asyncNum) => {
      setTimeout(()=>{
        commit('decrement', asyncNum.num)
      }, asyncNum.duration)
    },
    asyncIncrement:({commit},num)=>{// 对参数对象的解析赋值可以直接获取该方法
      commit('increment', num)
    },
    showTogle({commit}){ // 普通函数写法
      commit('SHOW')
    },
    hiddenTogle:({commit}) => {//箭头函数写法
      commit('HIDDEN')
    }
  }
})



/*
export const store = new Vuex.Store({
  state:{
    count:0
  }
})
*/
