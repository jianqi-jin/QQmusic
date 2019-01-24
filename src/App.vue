<template>
    <div id="app">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <m-header></m-header>
      <router-view></router-view>
    </div>
</template>

<script>

import mHeader from './components/common/header/header'


    export default {
        name: "App",
      components:{
        mHeader
      },
      beforeCreate(){
        document.querySelector('body').setAttribute('style', 'background-color:#efeff4;')
      }
    }
</script>

<style scoped>

  @import 'commoncss/common.css';
  @import 'commoncss/icono.min.css';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  select {
    margin: 20px 0;
    background-color: #fff;
    box-shadow: 1px 1px 16px #CAC8C7;
    width: 90%;
    border: 0px;
    padding: 10px 0px;
    border-radius: 5px;
    outline: none;
  }
</style>
