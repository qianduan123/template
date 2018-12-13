<template>
  <div id="app">
    <Header></Header>
    <Slider></Slider>
    <div class="content-box" :class="{'content-collapse':collapse}">
        <!-- <v-tags></v-tags> -->
        <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Slider from '@/components/slider'
import middle from '@/components/middleware';

export default {
  name: 'App',
  components: {
    Header,
    Slider,
  },
  data () {
    return {
      collapse: false,
      tagsList: []
    }
  },
  created(){
      middle.$on('collapse', msg => {
          this.collapse = msg;
      })
      // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
      middle.$on('tags', msg => {
          let arr = [];
          for(let i = 0, len = msg.length; i < len; i ++){
              msg[i].name && arr.push(msg[i].name);
          }
          this.tagsList = arr;
      })
  }
}
</script>

<style lang="scss" scoped>
  
</style>
