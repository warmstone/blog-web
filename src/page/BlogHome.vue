<!-- 博客主页 -->
<template>
  <div>
    <blog-header></blog-header>
    <div class="header-img"></div>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader.vue'
export default {
  components: { BlogHeader },
}
</script>

<style lang="less" scoped>
.header-img {
  height: 320px;
  background-image: url('@/assets/img/peko.jpg');
  background-size: cover;
  background-position-y: -250px;
  background-repeat: no-repeat;
}
</style>