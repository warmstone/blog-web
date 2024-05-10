<!-- 博客主页 -->
<template>
  <div>
    <blog-header></blog-header>
    <div class="header-img"></div>
    <div class="blog-main">
      <blog-list></blog-list>
      <div class="side-info">
        <div class="blogger-info"></div>
        <div class="last-blog"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from "@/components/BlogHeader";
import BlogList from "@/components/BlogList";
export default {
  components: { BlogHeader, BlogList },
};
</script>

<style lang="less" scoped>
.header-img {
  height: 400px;
  background-image: url("@/assets/img/blog-header.png");
  background-size: cover;
  background-position-y: -100px;
  background-repeat: no-repeat;
  box-shadow: 3px 3px 10px gray;
}
.blog-main {
  width: 1170px;
  margin: 0 auto;
  display: flex;
}
.side-info {
  width: 270px;
  margin-top: 10px;
  margin-left: 10px;
}
.blogger-info, .last-blog {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  color: #303133;
  height: 240px;
  transition: .3s;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  margin-bottom: 3px;
}
</style>