<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle Editing Post</span
        ><input type="checkbox" v-model="editPost" name="" id="" />
      </div>
      <BlogCard
        v-for="(post, index) in sampleBlogCards"
        :post="post"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from "../blogs/BlogCard.vue";
export default {
  components: {
    BlogCard,
  },
  methods: {},
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
      },
    },
  },
};
</script>

<style scoped>
.blog-cards {
  position: relative;
}
.blog-cards .toggle-edit {
  display: flex;
  align-items: center;
  position: absolute;
  top: -70px;
  right: 0;
}
.blog-cards span {
  margin-right: 16px;
}

.blog-cards input[type="checkbox"] {
  position: relative;
  border: none;
  -webkit-appearance: none;
  background: #fff;
  outline: none;
  width: 80px;
  height: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.blog-cards input[type="checkbox"]:before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  top: 0;
  left: 0;
  background: #303030;
  transform: scale(1.1);
  transition: 750ms ease all;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.blog-cards input:checked[type="checkbox"]:before {
  background: #fff;
  left: 52px;
}
</style>
