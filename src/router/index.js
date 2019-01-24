import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index/index'
import RankList from '../components/rank-list/rank-list'
import Search from '../components/search/search'
import SongList from '../components/song-list/song-list'
import Top from '../components/Top'

Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    component: Index
  },
  {
    path:'/rankList',
    component:RankList,
    children:[
      {
      path:'songList',
      component:SongList
      }
    ]
  },{
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/',
    component:SongList
  }
]



export default new VueRouter({
  routes
})
