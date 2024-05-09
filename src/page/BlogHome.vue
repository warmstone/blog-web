<!-- 博客主页 -->
<template>
  <div>
    <blog-header></blog-header>
    <div class="header-img"></div>
    <div class="blog-main">
      <blog-list></blog-list>
      <div class="side-info">
        <blogger-info></blogger-info>
        <last-article></last-article>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from "@/components/BlogHeader";
import BlogList from "@/components/BlogList";
import BloggerInfo from "@/components/BloggerInfo";
import LastArticle from "@/components/LastArticle";
export default {
  components: { BlogHeader, BlogList, BloggerInfo, LastArticle },
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
  padding: 10px;
  padding-left: 0;
}
</style>