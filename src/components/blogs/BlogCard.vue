<template>
  <div class="blog-card">
    <div v-if="editPost" class="icons">
      <div class="icon">
        <BaseIcon class="edit" imgSrc="edit-regular.svg" />
      </div>
      <div class="icon">
        <BaseIcon class="delete" imgSrc="trash-regular.svg" />
      </div>
    </div>
    <img
      :src="require(`../../assets/blogCards/${posts.blogCoverPhoto}.jpg`)"
      alt=""
    />
    <div class="info">
      <h4>{{ posts.blogTitle }}</h4>
      <h6>
        Posted on :
        {{ new Date(posts.blogDate).toLocaleString({ dateStyle: "long" }) }}
      </h6>
      <router-link class="link" to="#">View The Post</router-link>
    </div>
  </div>
</template>

<script>
import BaseIcon from "../ui/BaseIcon.vue";
export default {
  props: ["post"],
  components: { BaseIcon },
  data() {
    return {
      posts: this.post,
    };
  },
  computed: {
    editPost() {
      return this.$store.state.editPost;
    },
  },
};
</script>

<style scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;
}
.blog-card:hover {
  transform: rotateZ(-1deg) scale(1.01);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

img {
  display: block;
  border-radius: 8px 8px 0 0;
  z-index: 1;
  width: 100%;
  min-height: 200px;
  object-fit: cover;
}
.info {
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 3;
  padding: 32px 16px;
  color: #000;
}

.info h4 {
  padding-bottom: 8px;
  font-size: 20px;
  font-weight: 300;
}

.info h6 {
  font-weight: 400;
  font-size: 12px;
  padding-bottom: 16px;
}

.info .link {
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  font-weight: 500;
  padding-top: 20px;
  font-size: 12px;
  padding-bottom: 4px;
  transition: 0.5s ease-in all;
}
.info .link:hover {
  color: rgba(48, 48, 48, 0.8);
}

.icons {
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 99;
}

.icons .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.5s ease all;
}

.icons .icon:hover {
  background-color: #303030;
}

.icons:nth-child(1) {
  margin-left: 8px;
}
</style>
