<template>
  <div class="post-view" v-if="currentBlog">
    <div class="container quillWrapper">
      <h2>{{ this.currentBlog[0].blogTitle }}</h2>
      <h4>
        Posted on:
        {{
          new Date(this.currentBlog[0].blogDate).toLocaleString("en-us", {
            dateStyle: "long",
          })
        }}
      </h4>
      <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
      <div
        class="post-content ql-editor"
        v-html="this.currentBlog[0].blogHTML"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentBlog: null,
    };
  },
  async mounted() {
    this.currentBlog = await this.$store.state.sampleBlogCards.filter(
      (post) => {
        return post.blogId === this.$route.params.blogId;
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.post-view {
  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }
}
.container {
  position: relative;
  height: 100%;
  padding: 10px 25px 60px;
}

.quillWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.ql-editor {
  padding: 20px 16px 30px;
}
</style>
