<template>
  <div class="blog-header">
    <div class="blog-header-container">
      <div class="avatar">
        <router-link to="/home">
          <img src="../assets/avatar.jpg" alt="avatar" />
          <span class="blog-name">石上三年</span>
        </router-link>
      </div>
      <ul class="blog-header-nav">
        <li v-for="menu in menuList" :key="menu.id">
          <router-link :to="menu.url">{{ menu.name }}</router-link>
        </li>
      </ul>
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
          name: "前端",
          url: "/fontend",
        },
        {
          id: 2,
          name: "后端",
          url: "/backend",
        },
        {
          id: 3,
          name: "随笔",
          url: "/essay",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.blog-header {
  height: 60px;
}
.blog-header-container {
  width: 1200px;
  height: 60px;
  background: skyblue;
  margin: 0 auto;
}
.avatar a {
  display: flex;
  align-items: center;
}
.avatar img {
  border-radius: 50%;
  margin: 0 10px;
}
.blog-name {
  // font-family: "KaiTi", "Microsoft YaHei";
  font-size: 20px;
}
.blog-header-container {
  display: flex;
  justify-content: space-between;
}
.blog-header-nav {
  font-size: 16px;
  width: 200px;;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: space-evenly;
}
</style>