<template>
  <div class="blog-list">
    <el-card v-for="blog in blogList" :key="blog.id">
      <!-- <img class="blog-img" src="@/assets/img/peko.jpg" alt="" /> -->
      <div>
        <div class="blog-title">
          {{ blog.title }}
        </div>
        <div class="blog-excerpt">{{ blog.excerpt }}...</div>
        <div class="blog-footer">
          <div>发布时间：{{ blog.publishDate }} 浏览量：{{ blog.views }}</div>
          <div>
            <span v-for="(label, index) in blog.labels" :key="index">
              {{ label }}
            </span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList: [
        {
          id: 1,
          title: "初识CSS",
          excerpt:
            "这是一段文字，测试到底能放的下多少这是一段文字，测试到底能放的下多少这是一段文字，这是一段文字，测试到底能放的下多少这是一段文字，测试到底能放的下多少这是一段文字，测试到底能放的下多少这是一段文字，测试到底能放的下多少这是一段文字，测试到底能放的下多少测试到底能放的下多少这是一段文字，测试到底能放的下多少",
          publishDate: "2024-05-09",
          views: 100,
          labels: ["CSS"],
        },
        {
          id: 2,
          title: "初识CSS二",
          excerpt:
            "这是一段文字，测试到底能放的下多少这是一段文字，测试到底能放的下多少这是一段文字，这是一段文字，测试到底能放的下多少这是一段文字，测试到底能放的下多少这是一段文字，测试到底能放的下多少这是一段文字，测试到底能放的下多少这是一段文字，测试到底能放的下多少测试到底能放的下多少这是一段文字，测试到底能放的下多少",
          publishDate: "2024-05-08",
          views: 99,
          labels: ["CSS"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.blog-list {
  width: 900px;
}
.blog-list .el-card {
  height: 143px;
  margin: 10px 10px;
}
.blog-title {
  font-family: "PingFang SC, Hiragino Sans GB, Arial, Microsoft YaHei, Verdana, Roboto, Noto, Helvetica Neue, sans-serif";
  font-size: 18px;
  font-weight: 500;
  color: #222226;
  margin-bottom: 6px;
}
.blog-footer {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555666;
}
.blog-excerpt {
  font-size: 14px;
  color: #555666;
  line-height: 19px;
}
.blog-img {
  height: 100px;
}

</style>