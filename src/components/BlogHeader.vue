<template>
  <div class="blog-header-container">
    <div class="blog-header">
      <ul class="blog-header-nav">
        <li  v-for="menu in menuList" :key="menu.id">
          <router-link :class=menu.class :to=menu.url>{{ menu.name }}</router-link>
          <ul class="subMenu">
            <li v-for="subMenu in menu.children" :key="subMenu.id">
              <router-link :to="subMenu.url">{{ subMenu.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <div class="github">
        <a class="iconfont icon-github" href="https://github.com/warmstone/blog-web"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: 1,
          name: "首页",
          url: "/home",
          class: 'iconfont icon-shouye-01'
        },
        {
          id: 2,
          name: "文章",
          url: "/article",
          class: 'iconfont icon-16',
          children: [
            {
              id: 1,
              name: "前端",
              url: "/frontend"
            },
            {
              id: 2,
              name: "后端",
              url: '/backend'
            }
          ]
        },
        {
          id: 3,
          name: "专栏",
          url: "/special-column",
          class: 'iconfont icon-sanwen'
        },
        {
          id: 4,
          name: "随笔",
          url: "/essay",
          class: 'iconfont icon-sanwen'
        },
        {
          id: 5,
          name: "时间轴",
          url: "/time-axis",
          class: 'iconfont icon-shijianzhou'
        }
      ],
    };
  },
};
</script>

<style lang="less" scoped>

@import "@/assets/css/iconfont.css";

.blog-header-container {
  position: fixed;
  width: 100%;
  height: 41px;
  background-color: rgba(40, 42, 44, 0.6);
  font-size: 17px;
  font-family: -apple-system, BlinkMacSystemFont, opensans, Optima,
    "Microsoft Yahei", sans-serif;
  
}
.blog-header {
  display: flex;
  height: 41px;
  width: 1170px;
  margin: 0 auto;
  justify-content: space-between;
}
.blog-header a {
  color: #fff;
}
.blog-header-nav {
  display: flex;
}
.blog-header-nav a {
  display: block;
  width: 80px;
  height: 41px;
  margin: 0 20px;
  line-height: 41px;
  text-align: center;
}
.blog-header-nav li:hover {
  background-color: rgba(120, 120, 120, 0.6);
}
.blog-header-nav li:hover .subMenu{
  display: block;
}
.github a {
  display: block;
  height: 41px;
  width: 41px;
  line-height: 41px;
  text-align: center;
}
.subMenu {
  background-color: rgba(40, 42, 44, 0.6);
  position: absolute;
  display: none;
}
</style>