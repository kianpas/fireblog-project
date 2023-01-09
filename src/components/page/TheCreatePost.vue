<template>
  <div class="create-post">
    <div class="container">
      <div class="blog-info">
        <input type="text" placeholder="Enter Blog Title" v-model="blogTitle" />
      </div>
      <div class="editor">
        <vue-editor v-model="blogHTML" />
      </div>
      <div class="blog-actions">
        <button @click="uploadBlog">Publish Blog</button>
        <router-link class="router-button" to="/preview"
          >Post Preview</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    uploadBlog() {
      return;
    },
  },
  computed: {
    profileId() {
      return this.$store.state.profileId;
    },
    blogCoverPhotoName() {
      return this.$store.state.blogPhotoName;
    },
    blogTitle: {
      get() {
        return this.$store.state.blogTitle;
      },
      set(payload) {
        this.$store.commit("updateBlogTitle", payload);
      },
    },
    blogHTML: {
      get() {
        return this.$store.state.blogHTML;
      },
      set(payload) {
        this.$store.commit("newBlogPost", payload);
      },
    },
  },
};
</script>

<style scope>
.create-post {
  position: relative;
  height: 100%;
}
.create-post button {
  margin-top: 0;
}

.create-post .router-button {
  text-decoration: none;
  color: #fff;
}

.create-post label,
.create-post button,
.create-post .router-button {
  transition: 0.5s ease-in-out all;
  align-self: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  padding: 12px 24px;
  color: #fff;
  background-color: #303030;
  text-decoration: none;
}

.create-post label:hover,
.create-post button:hover,
.create-post .router-button:hover {
  background-color: rgba(48, 48, 48, 0.7);
}

.container {
  position: relative;
  height: 100%;
  padding: 10px 25px 60px;
}

.blog-info {
  display: flex;
  margin-bottom: 32px;
}

.blog-info input:nth-child(1) {
  min-width: 300px;
}

.blog-info input {
  transition: 0.5s ease-in-out all;
  padding: 10px 4px;
  border: none;
  border-bottom: 1px solid #303030;
}

.blog-info input:focus {
  outline: none;
  box-shadow: 0 1px 0 0 #303030;
}

.editor {
  height: 60vh;
  display: flex;
  flex-direction: column;
}

.blog-actions {
  margin-top: 32px;
}

.blog-actions button {
  margin-right: 16px;
}
.quillWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.ql-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
}

.ql-editor {
  padding: 20px 16px 30px;
}
</style>
